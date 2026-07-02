/**
 * Site-wide constants: identity, links, nav
 */

export const EMAIL = "ck3294@nyu.edu";

export const SOCIALS = [
  { id: "github", label: "GitHub", handle: "WeiKuoWei", href: "https://github.com/WeiKuoWei" },
  { id: "linkedin", label: "LinkedIn", handle: "chen-wei-kuo", href: "https://www.linkedin.com/in/chen-wei-kuo" },
  { id: "email", label: "Email", handle: EMAIL, href: `mailto:${EMAIL}` },
] as const;

export const NAV_ITEMS = [
  { id: "work", label: "Work" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
] as const;

export const RESUME_PATH = "certificates/weikuo_resume.pdf";
export const SITE_VERSION = "v2.0";
