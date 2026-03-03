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
      <div className="flex items-center border border-ctp-surface0 p-2 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange?.(tab)}
            className={cn(
              "px-4 py-2 text-ctp-text flex-1 text-center rounded-xl transition-colors duration-200",
              activeTab === tab
                ? "bg-ctp-surface0"
                : "cursor-pointer"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="border border-ctp-surface0 p-2 rounded-xl mt-2">
        {children}
      </div>
    </div>
  );
}
