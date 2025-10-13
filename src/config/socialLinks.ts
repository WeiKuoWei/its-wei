/**
 * Social media links configuration
 * Single source of truth for all social media links across the site
 */

import { Github, Linkedin, Mail, LucideIcon } from "lucide-react";

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  Icon: LucideIcon;
  username: string;
  external: boolean;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/WeiKuoWei",
    Icon: Github,
    username: "@WeiKuoWei",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/chen-wei-kuo",
    Icon: Linkedin,
    username: "chen-wei-kuo",
    external: true,
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:ck3294@nyu.edu",
    Icon: Mail,
    username: "ck3294@nyu.edu",
    external: false,
  },
] as const;
