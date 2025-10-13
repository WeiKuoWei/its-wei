/**
 * Reusable social links component
 * Used across Hero, Footer, and Contact sections
 */

import { SOCIAL_LINKS } from "@/config/socialLinks";
import { cn } from "@/lib/utils";

export interface SocialLinksProps {
  variant?: "hero" | "footer" | "contact";
  iconSize?: number;
  className?: string;
  showLabels?: boolean;
}

const SocialLinks = ({
  variant = "hero",
  iconSize,
  className,
  showLabels = false
}: SocialLinksProps) => {
  // Default sizes based on variant
  const defaultSize = {
    hero: 28,
    footer: 18,
    contact: 24,
  }[variant];

  const size = iconSize ?? defaultSize;

  // Variant-specific styles
  const variantStyles = {
    hero: "flex gap-6 justify-center",
    footer: "flex items-center gap-4",
    contact: "flex gap-4",
  };

  const linkStyles = {
    hero: "text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125",
    footer: "text-muted-foreground hover:text-primary transition-colors",
    contact: "text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110",
  };

  return (
    <div className={cn(variantStyles[variant], className)}>
      {SOCIAL_LINKS.map(({ id, label, href, Icon, external }) => (
        <a
          key={id}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={linkStyles[variant]}
          aria-label={label}
        >
          <Icon size={size} />
          {showLabels && (
            <span className="ml-2 text-sm">{label}</span>
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
