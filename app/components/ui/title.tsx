import { cn } from "@/utils/cn";

export interface TitleProps {
  title: string;
  description?: string;
  className?: string;
  descriptionClassName?: string;
}

export default function Title({ title, description, className, descriptionClassName }: TitleProps) {
  return (
    <div className={cn("flex flex-col gap-4 text-ctp-text mb-14", className)}>
      <p className="text-4xl font-bold">{title}</p>
      {description && <p className={cn("max-w-xl text-lg text-justify text-ctp-subtext0", descriptionClassName)}>{description}</p>}
    </div>
  )
}