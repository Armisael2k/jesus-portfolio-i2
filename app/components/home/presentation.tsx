import profile from "@/data/profile"

export default function Presentation() {
  return (
    <div className="flex flex-col gap-4 text-ctp-text">
      <p className="font-calistoga text-4xl">{profile.title}</p>
      <p className="font-medium text-lg">{profile.shortDesc}</p>
      <p className="w-xl text-lg text-justify text-ctp-subtext0">{profile.description}</p>
    </div>
  )
}
