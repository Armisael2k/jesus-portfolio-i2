import Button from "@/components/ui/button";
import { HiOutlineSquare3Stack3D, HiOutlineDocumentArrowDown, HiOutlineEnvelope } from "react-icons/hi2";
import contact from "@/data/contact";

export default function Actions() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-7">
      <Button to="/projects" variant="filled" color="red" rightIcon={<HiOutlineSquare3Stack3D className="size-5" />}>
        View Projects
      </Button>
      <a href="/Jesus Leal Resume.pdf">
        <Button variant="filled" color="default" rightIcon={<HiOutlineDocumentArrowDown className="size-5" />}>
          Download CV
        </Button>
      </a>
      <Button to={`mailto:${contact.email}`} variant="filled" color="default" rightIcon={<HiOutlineEnvelope className="size-5" />}>
        Contact Me
      </Button>
    </div>
  );
}
