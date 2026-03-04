import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type ButtonVariant = "outlined" | "filled";
type ButtonColor = "red" | "default";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const colorMap: Record<ButtonColor, Record<ButtonVariant, string>> = {
  red: {
    filled: "bg-ctp-red hover:bg-ctp-red/80 text-black",
    outlined:
      "border text-ctp-red border-ctp-red hover:border-ctp-red/70 hover:text-ctp-red/70",
  },
  default: {
    filled: "bg-ctp-subtext0 hover:bg-ctp-subtext0/80 text-black",
    outlined:
      "border text-ctp-subtext0 border-ctp-subtext0 hover:border-ctp-red hover:text-ctp-red",
  },
};

export default function Button({
  variant = "outlined",
  color = "default",
  className,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        colorMap[color][variant],
        "inline-flex items-center justify-center gap-2 rounded-xl hover:scale-[102%] transition-all ease-in-out duration-300 cursor-pointer px-4 py-2",
        className
      )}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
