import { Config, Effect, Layer, LogLevel, Logger, ManagedRuntime } from "effect"
import { provider } from "./config/index.js"
import { Supabase } from "./supabase.js"

const logging = Config.logLevel(`PUBLIC_LOG_LEVEL`).pipe(
  Config.withDefault(LogLevel.Error),
  Effect.andThen((level) => Logger.minimumLogLevel(level)),
  Layer.unwrapEffect,
)

const { runPromise } = ManagedRuntime.make(
  Layer.mergeAll(Supabase.layer).pipe(
    Layer.provide(Layer.setConfigProvider(provider)),
    Layer.provide(logging),
  ),
)

export { runPromise }
