import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type ButtonVariant = "outlined" | "filled" | "shimmer";
type ButtonColor = "red" | "default";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  href?: string;
  target?: string;
}

const colorMap: Record<ButtonColor, Record<ButtonVariant, string>> = {
  red: {
    filled: "bg-ctp-red hover:bg-ctp-red/80 text-black",
    outlined:
      "border text-ctp-red border-ctp-red hover:border-ctp-red/70 hover:text-ctp-red/70",
    shimmer:
      "text-ctp-red animate-shimmer bg-[linear-gradient(110deg,var(--catppuccin-color-mantle),45%,var(--catppuccin-color-surface0),55%,var(--catppuccin-color-mantle))] hover:bg-[linear-gradient(110deg,var(--catppuccin-color-surface0),45%,var(--catppuccin-color-surface1),55%,var(--catppuccin-color-surface0))] bg-[length:200%_100%] border border-ctp-red-700",
  },
  default: {
    filled: "bg-ctp-mantle hover:bg-ctp-mantle/80 text-ctp-text border border-ctp-surface2",
    outlined:
      "border text-ctp-subtext0 border-ctp-subtext0 hover:border-ctp-red hover:text-ctp-red",
    shimmer:
      "text-ctp-text animate-shimmer bg-[linear-gradient(110deg,var(--catppuccin-color-mantle),45%,var(--catppuccin-color-surface0),55%,var(--catppuccin-color-mantle))] hover:bg-[linear-gradient(110deg,var(--catppuccin-color-surface0),45%,var(--catppuccin-color-surface1),55%,var(--catppuccin-color-surface0))] bg-[length:200%_100%] border border-ctp-surface2",
  },
};

export default function Button({
  variant = "outlined",
  color = "default",
  className,
  leftIcon,
  rightIcon,
  children,
  href,
  ...props
}: ButtonProps) {
  const commonClasses = cn(
    colorMap[color][variant],
    "inline-flex items-center justify-center gap-2 rounded-xl hover:scale-[102%] transition-all ease-in-out duration-300 cursor-pointer px-4 py-2",
    className
  );

  if (href) {
    return (
      <a href={href} className={commonClasses} {...(props as any)}>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button className={commonClasses} {...props}>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
