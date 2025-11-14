/**
 * Main entry point for homepage
 */

import { redirectToConsulting, redirectToAbout } from './navigation';
import { initializeTimer } from './timer';

// Initialize timer on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeTimer('counter', 'Jul 17, 2023 09:00:00');
});

// Export for use in window scope
export { redirectToConsulting, redirectToAbout };
