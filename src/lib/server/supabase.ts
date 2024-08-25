import { Supabase as SupabaseConfig } from "$lib/services/config/index.js"
import { SupabaseError } from "$lib/services/supabase"
import type { SupabaseClient } from "@supabase/supabase-js"
import { createClient } from "@supabase/supabase-js"
import { Effect, Redacted } from "effect"

export const makeWithSession = (session?: {
  accessToken: string
  refreshToken: string
}) =>
  Effect.gen(function* () {
    const cfg = yield* SupabaseConfig
    const client = createClient(cfg.Url, Redacted.value(cfg.Key))

    if (session) {
      client.auth.setSession({
        access_token: session.accessToken,
        refresh_token: session.refreshToken,
      })
    }

    return {
      exec: <A>(f: (a: SupabaseClient, signal: AbortSignal) => A) =>
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
