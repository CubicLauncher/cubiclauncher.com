/**
 * Lazy loading utilities for better performance
 */

// Cache for loaded components
const componentCache = new Map();

/**
 * Lazy load a component with caching
 * @param {Function} importFn - Dynamic import function
 * @param {string} componentName - Name of the component for caching
 * @returns {Promise<Component>} - Loaded component
 */
export async function lazyLoadComponent(importFn, componentName) {
  // Check if component is already cached
  if (componentCache.has(componentName)) {
    return componentCache.get(componentName);
  }

  try {
    // Load the component
    const module = await importFn();
    const component = module.default;
    
    // Cache the component
    componentCache.set(componentName, component);
    
    return component;
  } catch (error) {
    console.error(`Error loading component ${componentName}:`, error);
    throw error;
  }
}

/**
 * Preload components for better user experience
 * @param {Object} lazyComponents - Object with lazy component functions
 * @param {Array<string>} componentNames - Array of component names to preload
 */
export async function preloadComponents(lazyComponents, componentNames) {
  const preloadPromises = componentNames
    .filter(name => lazyComponents[name] && !componentCache.has(name))
    .map(async (name) => {
      try {
        await lazyLoadComponent(lazyComponents[name], name);
      } catch (error) {
        console.warn(`Failed to preload ${name}:`, error);
      }
    });

  // Preload in parallel but don't wait for completion
  Promise.allSettled(preloadPromises);
}

/**
 * Clear component cache (useful for development or memory management)
 */
export function clearComponentCache() {
  componentCache.clear();
}

/**
 * Get cache statistics
 * @returns {Object} - Cache statistics
 */
export function getCacheStats() {
  return {
    size: componentCache.size,
    keys: Array.from(componentCache.keys())
  };
}
