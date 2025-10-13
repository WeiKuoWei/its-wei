/**
 * Navigation configuration
 * Single source of truth for navigation items
 */

export interface NavigationItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavigationItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];
