import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface BlockProps {
  title: string;
  className?: string;
  children: ReactNode;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
}

export default function Block({ title, className, children, image, imageAlt = "", reverse = false }: BlockProps) {
  return (
    <div className={className}>
      <p className="text-ctp-text text-xl font-light mb-4">{title}</p>
      <div className={`flex gap-8 ${reverse ? "flex-row-reverse" : "flex-row"}`}>
        <div className={cn("w-full flex flex-col gap-3 text-ctp-subtext0", image && "w-3/5")}>
          {children}
        </div>
        {image &&
          <div className="w-2/5 aspect-video overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              src={image}
              alt={imageAlt}
            />
          </div>
        }
      </div>
    </div>
  );
}