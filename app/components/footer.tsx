import url from "@/data/web-url"
import { FaGithub } from "react-icons/fa";
import { Link } from "@components/ui/link";

export default function Footer() {
  return (
    <div className="pt-5 pb-10 relative px-6">
      <div className="container mx-auto flex justify-center items-center gap-2">
        <p className="text-sm text-ctp-subtext0">© {new Date().getFullYear()} {url}</p>
        <Link to="https://github.com/Armisael2k/jesus-portfolio-i2" target="_blank">
          <FaGithub />
        </Link>
      </div>
    </div>
  )
}