<script>
  import { onMount } from 'svelte';
  import Header from './components/layout/Header.svelte';
  import Hero from './components/sections/Hero.svelte';
  import Footer from './components/layout/Footer.svelte';
  import LoadingSpinner from './components/ui/LoadingSpinner.svelte';
  import { handleRoute } from './routes.js';
  import { lazyLoadComponent, preloadComponents } from './utils/lazyLoading.js';
  import { lazyConfig, getRouteComponents, getPreloadComponents } from './lib/lazyConfig.js';

  let currentRoute = 'home';
  let currentPath = window.location.pathname;
  let currentComponent = null;
  let isLoading = false;
  
  // Lazy load components based on configuration
  const lazyComponents = {};
  Object.entries(lazyConfig.lazy).forEach(([name, config]) => {
    lazyComponents[name] = () => import(config.path);
  });
  
  // Store loaded components
  let loadedComponents = {};
  
  onMount(() => {
    // Handle initial route
    const path = window.location.pathname;
    currentRoute = handleRoute(path);
    loadRouteComponents(currentRoute);
    
    // Preload components based on configuration
    if (lazyConfig.preload.afterInitialLoad) {
      setTimeout(() => {
        const preloadList = getPreloadComponents();
        preloadComponents(lazyComponents, preloadList);
      }, lazyConfig.preload.delay);
    }
    
    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      const path = window.location.pathname;
      currentRoute = handleRoute(path);
      loadRouteComponents(currentRoute);
    });
  });
  
  // Function to load route components
  async function loadRouteComponents(route) {
    if (route === 'home') {
      // For home route, we need to load multiple components
      currentComponent = 'home';
      await loadHomeComponents();
    } else {
      // For other routes, load the specific component
      isLoading = true;
      try {
        const componentName = getComponentNameForRoute(route);
        if (componentName && lazyComponents[componentName]) {
          const component = await lazyLoadComponent(lazyComponents[componentName], componentName);
          currentComponent = component;
        }
      } catch (error) {
        console.error('Error loading component:', error);
        currentComponent = null;
      } finally {
        isLoading = false;
      }
    }
  }
  
  // Function to load home page components
  async function loadHomeComponents() {
    const homeComponents = getRouteComponents('home');
    for (const componentName of homeComponents) {
      if (!loadedComponents[componentName]) {
        try {
          const component = await lazyLoadComponent(lazyComponents[componentName], componentName);
          loadedComponents[componentName] = component;
        } catch (error) {
          console.error(`Error loading ${componentName}:`, error);
        }
      }
    }
  }
  
  // Function to get component name for a route
  function getComponentNameForRoute(route) {
    const routeToComponent = {
      'license': 'License',
      'cookies': 'Cookies',
      'support': 'SupportSelector'
    };
    return routeToComponent[route];
  }
  
  // Function to navigate to a route
  async function navigateTo(path) {
    window.history.pushState({}, '', path);
    currentRoute = handleRoute(path);
    await loadRouteComponents(currentRoute);
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
    {#if loadedComponents.Features}
      <svelte:component this={loadedComponents.Features} />
    {/if}
    {#if loadedComponents.Contributors}
      <svelte:component this={loadedComponents.Contributors} />
    {/if}
    {#if loadedComponents.About}
      <svelte:component this={loadedComponents.About} />
    {/if}
  {:else if isLoading}
    <LoadingSpinner size="lg" color="blue" />
  {:else if currentComponent}
    <svelte:component this={currentComponent} />
  {/if}
  
  <Footer />
</main>
