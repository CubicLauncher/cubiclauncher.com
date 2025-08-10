/**
 * Lazy loading configuration
 * This file allows you to customize the lazy loading strategy
 */

export const lazyConfig = {
  // Components that should be loaded immediately (critical for initial render)
  critical: ['Header', 'Hero', 'Footer'],
  
  // Components that should be lazy loaded
  lazy: {
    // Home page components
    Features: {
      path: './components/sections/Features.svelte',
      priority: 'high', // high, medium, low
      preload: true // whether to preload this component
    },
    Contributors: {
      path: './components/sections/Contributors.svelte',
      priority: 'medium',
      preload: true
    },
    About: {
      path: './components/sections/About.svelte',
      priority: 'medium',
      preload: true
    },
    
    // Page components
    License: {
      path: './pages/License.svelte',
      priority: 'low',
      preload: false
    },
    Cookies: {
      path: './pages/Cookies.svelte',
      priority: 'low',
      preload: false
    },
    SupportSelector: {
      path: './components/sections/SupportSelector.svelte',
      priority: 'low',
      preload: false
    }
  },
  
  // Preloading strategy
  preload: {
    // Preload components when user hovers over navigation
    onHover: true,
    // Preload components after initial page load
    afterInitialLoad: true,
    // Delay before preloading (in ms)
    delay: 1000
  },
  
  // Performance settings
  performance: {
    // Maximum number of components to preload simultaneously
    maxConcurrentPreloads: 3,
    // Timeout for component loading (in ms)
    timeout: 10000,
    // Enable component caching
    enableCaching: true
  }
};

/**
 * Get lazy components configuration for a specific route
 * @param {string} route - Route name
 * @returns {Array} - Array of component configurations
 */
export function getRouteComponents(route) {
  const routeComponents = {
    home: ['Features', 'Contributors', 'About'],
    license: ['License'],
    cookies: ['Cookies'],
    support: ['SupportSelector']
  };
  
  return routeComponents[route] || [];
}

/**
 * Get components that should be preloaded
 * @returns {Array} - Array of component names to preload
 */
export function getPreloadComponents() {
  return Object.entries(lazyConfig.lazy)
    .filter(([_, config]) => config.preload)
    .sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b[1].priority] - priorityOrder[a[1].priority];
    })
    .map(([name, _]) => name);
}
