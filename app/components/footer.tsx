import url from "@/data/web-url"

export default function Footer() {
  return (
    <div className="pt-5 pb-10 relative">
      <div className="container mx-auto flex justify-between">
        <p className="text-sm text-ctp-subtext0">© {new Date().getFullYear()} {url}</p>
      </div>
    </div>
  )
}