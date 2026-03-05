import Button from "@/components/ui/button";
import { HiOutlineSquare3Stack3D, HiOutlineDocumentArrowDown, HiOutlineEnvelope } from "react-icons/hi2";


export default function Actions() {
  return (
    <div className="flex gap-4 mt-7">
      <Button variant="filled" color="red" rightIcon={<HiOutlineSquare3Stack3D className="size-5" />}>
        View Projects
      </Button>
      <Button variant="filled" color="default" rightIcon={<HiOutlineDocumentArrowDown className="size-5" />}>
        Download CV
      </Button>
      <Button variant="filled" color="default" rightIcon={<HiOutlineEnvelope className="size-5" />}>
        Contact Me
      </Button>
    </div>
  );
}
