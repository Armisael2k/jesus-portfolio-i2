export default function Title({ title, description }: { title: string, description?: string }) {
  return (
    <div className="flex flex-col gap-4 text-ctp-text mb-14">
      <p className="text-4xl font-bold">{title}</p>
      {description && <p className="w-xl text-lg text-justify text-ctp-subtext0">{description}</p>}
    </div>
  )
}