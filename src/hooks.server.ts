import { runPromise } from "$lib/services/runtime.js"
import type { Handle } from "@sveltejs/kit"
import { Effect } from "effect"
import { Supabase } from "./lib/services/supabase.js"

export const handle: Handle = async ({ event, resolve }) => {
  const test = Effect.gen(function* () {
    const sb = yield* Supabase

    const user = yield* sb.exec((c) => c.auth.getUser())
    console.log(user.error)
  })

  await test.pipe(Effect.provide(Supabase.layerFromEvent(event)), runPromise)
  // makeSbToken(event).pipe(
  //   Effect.z
  // )

  // Effect.gen(function* () {
  //   yield*

  // }).pipe(

  // )

  // console.log(event.cookies.getAll())
  return resolve(event)
}
