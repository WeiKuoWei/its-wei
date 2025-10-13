/**
 * Application-wide constants
 * Centralizes all magic numbers and configuration values
 */

// Navigation
export const NAVIGATION = {
  SCROLL_THRESHOLD: 50, // pixels before nav becomes sticky/styled
  TRANSITION_DURATION: 500, // ms
} as const;

// Animation Durations (in seconds)
export const ANIMATION_DURATION = {
  FAST: 0.3,
  DEFAULT: 0.6,
  SLOW: 1.0,
  CAROUSEL: 0.5,
} as const;

// Animation Delays (in seconds)
export const ANIMATION_DELAY = {
  SHORT: 0.1,
  MEDIUM: 0.2,
  LONG: 0.4,
} as const;

// Scroll Animation Configuration
export const SCROLL_ANIMATION = {
  THRESHOLD: 0.1, // Intersection Observer threshold (0-1)
  TRIGGER_ONCE: true, // Whether animation should only trigger once
  INITIAL_Y: 20, // Initial Y offset in pixels
} as const;

// Carousel Configuration
export const CAROUSEL = {
  AUTO_SCROLL_INTERVAL: 6000, // ms between auto-scrolls
  ITEMS_PER_VIEW: 3, // Number of items visible at once
  TRANSITION_DURATION: 0.5, // seconds
} as const;

// Particles Background Configuration
export const PARTICLES = {
  COUNT: 100, // Total number of particles
  COUNT_MOBILE: 50, // Reduced count for mobile devices
  VELOCITY: 0.5, // Base velocity for particle movement
  SIZE_MIN: 1, // Minimum particle size in pixels
  SIZE_MAX: 3, // Maximum particle size in pixels
  MAX_CONNECTION_DISTANCE: 150, // Maximum distance for particle connections
  CONNECTION_OPACITY_BASE: 0.2, // Base opacity for connections
  LINE_WIDTH: 0.5, // Connection line width
  OPACITY: 0.6, // Canvas opacity
} as const;

// Colors
export const COLORS = {
  PRIMARY_RGB: "0, 222, 255",
  PRIMARY_RGBA: (alpha: number) => `rgba(0, 222, 255, ${alpha})`,
  PRIMARY_HEX: "#00DEFF",
} as const;

// Breakpoints (match Tailwind defaults)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
} as const;

// Icon Sizes
export const ICON_SIZES = {
  SMALL: 16,
  MEDIUM: 24,
  LARGE: 32,
  SOCIAL: 28,
} as const;

// Z-Index Layers
export const Z_INDEX = {
  PARTICLES: 0,
  CONTENT: 1,
  NAVIGATION: 50,
  MODAL: 100,
} as const;

// Contact Form
export const CONTACT_FORM = {
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 1000,
} as const;

// Typing Animation (Hero section)
export const TYPING_ANIMATION = {
  TYPE_SPEED: 50, // ms per character
  DELETE_SPEED: 30, // ms per character when deleting
  DELAY_BETWEEN: 2000, // ms between phrases
} as const;
