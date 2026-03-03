import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SocialLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
  className?: string;
}

export function SocialLink({ icon, className, children, ...props }: SocialLinkProps) {
  return (
    <a
      className={cn(
        "text-ctp-subtext0 hover:text-ctp-red transition-colors duration-300 flex gap-2 items-center",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </a>
  );
}
