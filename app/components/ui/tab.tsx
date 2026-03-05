import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface TabProps extends HTMLAttributes<HTMLDivElement> {
  tabs: string[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  children?: ReactNode;
}

export function Tab({
  tabs,
  activeTab,
  onTabChange,
  children,
  className,
  ...props
}: TabProps) {
  return (
    <div className={cn("mt-14", className)} {...props}>
      <div className="flex items-center border border-ctp-mantle p-2 rounded-xl bg-ctp-base shadow-xl">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange?.(tab)}
            className={cn(
              "px-4 py-2 text-ctp-text flex-1 text-center rounded-xl transition-colors duration-200",
              activeTab === tab
                ? "bg-ctp-mantle"
                : "cursor-pointer"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="border border-ctp-mantle p-2 rounded-xl mt-2 bg-ctp-base shadow-xl">
        {children}
      </div>
    </div>
  );
}
