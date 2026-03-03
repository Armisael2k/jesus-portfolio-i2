import { cn } from "@/utils/cn";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export default function Divider({ orientation = "horizontal", className }: DividerProps) {
  return (
    <div
      className={cn(
        "bg-ctp-overlay0 shrink-0",
        orientation === "vertical" ? "w-px self-stretch" : "h-px self-stretch",
        className
      )}
    />
  );
}
