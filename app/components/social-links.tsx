import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialLink } from "./social-link";
import Divider from "./divider";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 mt-6">
      <SocialLink href="https://github.com/Armisael2k" icon={<FaGithub className="size-5" />}>
        Github
      </SocialLink>
      <Divider orientation="vertical" className="my-1" />
      <SocialLink href="https://linkedin.com/in/" icon={<FaLinkedin className="size-5" />}>
        Linkedin
      </SocialLink>
    </div>
  );
}

