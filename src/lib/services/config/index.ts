import * as env from "$env/static/public"
import { Config, ConfigProvider } from "effect"

export const Supabase = Config.all({
  Url: Config.string(`URL`),
  Key: Config.redacted(`KEY`),
}).pipe(Config.nested(`PUBLIC_SUPABASE`))

export const provider = ConfigProvider.fromMap(new Map(Object.entries(env)), {
  pathDelim: `_`,
  seqDelim: `,`,
})
