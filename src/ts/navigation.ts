/**
 * Navigation utilities for the website
 */

export function redirectToConsulting(): void {
  window.location.href = '/consulting/';
}

export function redirectToAbout(): void {
  window.location.href = '/about/';
}

export function redirectToHomepage(): void {
  window.location.href = '/';
}

// Make functions available globally for onclick handlers
declare global {
  interface Window {
    redirectToConsulting: () => void;
    redirectToAbout: () => void;
    redirectToHomepage: () => void;
  }
}

window.redirectToConsulting = redirectToConsulting;
window.redirectToAbout = redirectToAbout;
window.redirectToHomepage = redirectToHomepage;
