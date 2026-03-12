import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "@/components/ui/link";
import Divider from "@/components/ui/divider";
import contact from "@/data/contact";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 mt-6">
      <Link href={contact.github} icon={<FaGithub className="size-5" />} target="_blank" rel="noopener noreferrer">
        Github
      </Link>
      <Divider orientation="vertical" className="my-1" />
      <Link href={contact.linkedin} icon={<FaLinkedin className="size-5" />} target="_blank" rel="noopener noreferrer">
        Linkedin
      </Link>
    </div>
  );
}
