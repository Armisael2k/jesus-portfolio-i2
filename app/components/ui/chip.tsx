import type { ReactNode } from "react";

interface ChipProps {
  label: string;
  icon?: ReactNode;
  className?: string;
  grow?: boolean;
}

export default function Chip({ label, icon, className = "", grow = false }: ChipProps) {
  return (
    <div className={`text-sm text-ctp-text h-fit bg-ctp-mantle border border-ctp-surface0 rounded-lg px-2 py-1 ${grow ? "grow" : ""} flex items-center justify-center gap-1.5 ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      {label}
    </div>
  );
}