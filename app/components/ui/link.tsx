import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Link as RouterLink, type LinkProps as RouterLinkProps } from "react-router";

interface LinkProps extends RouterLinkProps {
  icon?: ReactNode;
  className?: string;
}

export function Link({ icon, className, children, to, ...props }: LinkProps) {
  return (
    <RouterLink
      to={to}
      className={cn(
        "text-ctp-subtext0 hover:text-ctp-red transition-colors duration-300 flex gap-2 items-center",
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </RouterLink>
  );
}
