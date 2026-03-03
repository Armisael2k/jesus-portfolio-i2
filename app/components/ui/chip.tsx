import type { ReactNode } from "react";

interface ChipProps {
  label: string;
  icon?: ReactNode;
  className?: string;
}

export default function Chip({ label, icon, className = "" }: ChipProps) {
  return (
    <div className={`text-ctp-text bg-ctp-surface0 rounded-lg px-2 py-1 grow flex items-center justify-center gap-1.5 ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      {label}
    </div>
  );
}
