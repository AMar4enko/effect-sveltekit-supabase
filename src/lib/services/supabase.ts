import type { SupabaseClient } from "@supabase/supabase-js"
import { createClient } from "@supabase/supabase-js"
import type { RequestEvent } from "@sveltejs/kit"
import { Console, Context, Effect, Layer, Redacted } from "effect"
import { TaggedError } from "effect/Data"
import { Supabase as SupabaseConfig } from "./config/index.js"

export class SupabaseError extends TaggedError(`SupabaseError`)<{
  cause: unknown
}> {}

export const makeWithSession = (session?: {
  accessToken: string
  refreshToken: string
}) =>
  Effect.gen(function* () {
    const cfg = yield* SupabaseConfig
    const client = createClient(cfg.Url, Redacted.value(cfg.Key))

    if (session) {
      yield* Console.log(`session: ${session}`)
      client.auth.setSession({
        access_token: session.accessToken,
        refresh_token: session.refreshToken,
      })
    }

    return {
      exec: <A>(f: (a: SupabaseClient, signal: AbortSignal) => Promise<A>) =>
        Effect.tryPromise({
          async try(signal) {
            return f(client, signal)
          },
          catch(cause) {
            return new SupabaseError({ cause })
          },
        }),
    }
  })

export const make = makeWithSession.bind(null, void 0)

export class Supabase extends Context.Tag(`Supabase`)<
  Supabase,
  Effect.Effect.Success<ReturnType<typeof make>>
>() {
  static layer = Layer.effect(this, make())
  static layerFromEvent = (
    event: RequestEvent<Partial<Record<string, string>>, string | null>,
  ) => {
    const accessToken = event.cookies.get(`sb-access-token`)
    const refreshToken = event.cookies.get(`sb-refresh-token`)

    return Layer.effect(
      this,
      accessToken && refreshToken
        ? makeWithSession({ accessToken, refreshToken })
        : make(),
    )
  }
}
