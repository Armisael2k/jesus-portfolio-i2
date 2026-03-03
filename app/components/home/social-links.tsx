import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "@/components/ui/link";
import Divider from "@/components/ui/divider";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 mt-6">
      <Link href="https://github.com/Armisael2k" icon={<FaGithub className="size-5" />} target="_blank" rel="noopener noreferrer">
        Github
      </Link>
      <Divider orientation="vertical" className="my-1" />
      <Link href="https://linkedin.com/in/" icon={<FaLinkedin className="size-5" />} target="_blank" rel="noopener noreferrer">
        Linkedin
      </Link>
    </div>
  );
}
