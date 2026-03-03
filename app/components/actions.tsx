import Button from "./button";
import { DocumentArrowDownIcon, EnvelopeIcon, Square3Stack3DIcon } from "@heroicons/react/24/outline";

export default function Actions() {
  return (
    <div className="flex gap-4 mt-7">
      <Button variant="filled" color="red" rightIcon={<Square3Stack3DIcon className="size-5" />}>
        View Projects
      </Button>
      <Button variant="outlined" color="default" rightIcon={<DocumentArrowDownIcon className="size-5" />}>
        Download CV
      </Button>
      <Button variant="outlined" color="default" rightIcon={<EnvelopeIcon className="size-5" />}>
        Contact Me
      </Button>
    </div>
  );
}