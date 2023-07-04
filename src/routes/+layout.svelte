<script>
  import { onMount } from 'svelte';
  import { toggleDarkMode, isDarkMode, setDarkMode } from '$lib/utils/theme';
  import { browser } from '$app/environment'
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
      },
    },
  })

  let darkMode = null;

  onMount(async () => {
    darkMode = isDarkMode();
    setDarkMode(darkMode);
  });

  function toggle() {
    darkMode = toggleDarkMode();
  }
</script>

<QueryClientProvider client={queryClient}>
  <header>
    <button
      aria-label="Toggle Dark Mode"
      class="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
      type="button"
      on:click={toggle}
    >
      Dark Mode
    </button>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <h4>Copyright 2023</h4>
  </footer>
</QueryClientProvider>