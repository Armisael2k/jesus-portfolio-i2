import { Link } from "@/components/ui/link";
import contact from "@/data/contact";

export default function Topbar() {
  return (
    <div className="bg-topbar pt-5 pb-10 sticky top-0 mx-auto w-full z-10 px-6">
      <div className="container mx-auto flex justify-between">
        <Link to="/">
          <div className="flex items-stretch gap-1">
            <div className="text-ctp-red-500  text-2xl leading-none">JL</div>
            <div className="w-2.5 my-0.5 bg-ctp-text animate-console-pulse" />
          </div>
        </Link>
        <div className="text-ctp-text flex gap-8 md:gap-18">
          <Link to="/">home</Link>
          <Link to="/projects">projects</Link>
          <Link to={`mailto:${contact.email}`}>contact</Link>
        </div>
      </div>
    </div>
  );
}