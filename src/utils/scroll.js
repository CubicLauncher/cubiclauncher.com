/**
 * Utility functions for scroll behavior
 */

/**
 * Smooth scroll to a specific element by ID
 * @param {string} elementId - The ID of the element to scroll to
 * @param {Object} options - Scroll options
 */
export function scrollToElement(elementId, options = {}) {
  const element = document.getElementById(elementId);
  if (element) {
    const defaultOptions = {
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    };
    
    element.scrollIntoView({ ...defaultOptions, ...options });
  }
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - The element to check
 * @param {number} threshold - Threshold percentage (0-1)
 * @returns {boolean}
 */
export function isInViewport(element, threshold = 0.1) {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  return (
    rect.top <= windowHeight * (1 - threshold) &&
    rect.bottom >= windowHeight * threshold
  );
}

/**
 * Add scroll event listener with throttling
 * @param {Function} callback - Function to call on scroll
 * @param {number} delay - Throttle delay in milliseconds
 */
export function addScrollListener(callback, delay = 16) {
  let ticking = false;
  
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Return cleanup function
  return () => window.removeEventListener('scroll', handleScroll);
} 