import { Link } from "@/components/ui/link";

export default function Topbar() {
  return (
    <div className="bg-topbar pt-5 pb-10 sticky top-0 mx-auto w-full z-10">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-stretch gap-1">
          <div className="text-ctp-red-500  text-2xl leading-none">JL</div>
          <div className="w-2.5 my-0.5 bg-ctp-text animate-console-pulse" />
        </div>
        <div className="text-ctp-text flex gap-18">
          <Link href="/">home</Link>
          <Link href="/projects">projects</Link>
          <Link href="mailto:chuylopez755@gmail.com">contact</Link>
        </div>
      </div>
    </div>
  );
}