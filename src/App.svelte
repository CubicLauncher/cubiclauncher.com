<script>
  import { onMount } from 'svelte';
  import Header from './components/layout/Header.svelte';
  import Hero from './components/sections/Hero.svelte';
  import Features from './components/sections/Features.svelte';
  import Contributors from './components/sections/Contributors.svelte';
  import About from './components/sections/About.svelte';
  import Footer from './components/layout/Footer.svelte';
  import License from './pages/License.svelte';
  import Cookies from './pages/Cookies.svelte';
  import SupportSelector from './components/sections/SupportSelector.svelte';
  import { handleRoute } from './routes.js';

  let currentRoute = 'home';
  let currentPath = window.location.pathname;
  
  onMount(() => {
    // Handle initial route
    const path = window.location.pathname;
    currentRoute = handleRoute(path);
    
    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      const path = window.location.pathname;
      currentRoute = handleRoute(path);
    });
  });
  
  // Function to navigate to a route
  function navigateTo(path) {
    window.history.pushState({}, '', path);
    currentRoute = handleRoute(path);
  }
  
  // Expose navigation function globally
  if (typeof window !== 'undefined') {
    window.navigateTo = navigateTo;
  }
</script>

<main class="min-h-screen">
  <Header />
  
  {#if currentRoute === 'home'}
    <Hero />
    <Features />
    <Contributors />
    <About />
  {:else if currentRoute === 'license'}
    <License />
  {:else if currentRoute === 'cookies'}
    <Cookies />
  {:else if currentRoute === 'support'}
    <SupportSelector />
  {/if}
  
  <Footer />
</main>