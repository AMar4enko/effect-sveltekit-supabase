<script lang="ts">
import { Button } from "$lib/components/ui/button"
import { onMount } from "svelte"

onMount(() => {
  // Effect.gen(function* () {
  //   const s = yield* Supabase
  //   yield* s.exec((client, signal) =>
  //     client.auth.signInWithOAuth({ provider: `github` }),
  //   )
  // }).pipe(runPromise)
})
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<Button>Hey there</Button>
