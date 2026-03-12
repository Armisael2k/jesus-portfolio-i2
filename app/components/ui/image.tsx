import type { ElementType, ImgHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  as?: ElementType;
  href?: string;
  target?: string;
}

export default function Image({
  className,
  containerClassName,
  as: Component = "div",
  alt = "",
  href,
  target,
  ...props
}: ImageProps) {
  return (
    <Component
      href={href}
      target={target}
      className={cn("overflow-hidden rounded-xl", containerClassName)}
    >
      <img
        {...props}
        className={cn(
          "w-full h-full object-cover hover:scale-110 transition-transform duration-700",
          className
        )}
        alt={alt}
      />
    </Component>
  );
}
