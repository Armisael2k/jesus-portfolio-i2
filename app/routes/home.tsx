import type { Route } from "./+types/home";
import Topbar from "@/components/topbar";
import Presentation from "@/components/home/presentation";
import Actions from "@/components/home/actions";
import SocialLinks from "@/components/home/social-links";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Jesus Leal" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export default function Home() {
  return (
    <main className="mocha bg-ctp-base min-h-screen">
      <Topbar />
      <div className="container mx-auto my-20">
        <Presentation />
        <SocialLinks />
        <Actions />
      </div>
    </main>
  );
}

