import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
  className?: string;
}

export function Link({ icon, className, children, ...props }: LinkProps) {
  return (
    <a
      className={cn(
        "text-ctp-subtext0 hover:text-ctp-red transition-colors duration-300 flex gap-2 items-center",
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </a>
  );
}
