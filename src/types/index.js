/**
 * Type definitions and interfaces for the application
 */

/**
 * Navigation item structure
 * @typedef {Object} NavItem
 * @property {string} id - Unique identifier
 * @property {string} label - Display label
 * @property {string} icon - SVG path for icon
 */

/**
 * Feature item structure
 * @typedef {Object} Feature
 * @property {string} title - Feature title
 * @property {string} description - Feature description
 * @property {string} icon - Feature icon (emoji or class)
 */

/**
 * Button variant types
 * @typedef {'primary' | 'secondary' | 'accent'} ButtonVariant
 */

/**
 * Button size types
 * @typedef {'sm' | 'md' | 'lg'} ButtonSize
 */

/**
 * Card configuration
 * @typedef {Object} CardConfig
 * @property {boolean} hover - Enable hover effects
 * @property {boolean} glow - Enable glow effects
 * @property {string} padding - Padding classes
 */

// Export types for use in components
export const ButtonVariants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ACCENT: 'accent'
};

export const ButtonSizes = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg'
}; 