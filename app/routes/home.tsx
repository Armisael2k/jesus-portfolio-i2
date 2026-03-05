import type { Route } from "./+types/home";
import Topbar from "@/components/topbar";
import Presentation from "@/components/home/presentation";
import Actions from "@/components/home/actions";
import SocialLinks from "@/components/home/social-links";
import Career from "@/components/home/career";
import TechStack from "~/components/home/tech-stack";
import Background from "@/components/background";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Jesus Leal" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export default function Home() {
  return (
    <main className="relative mocha bg-ctp-base min-h-screen h-full">
      <Background />
      <Topbar />
      <div className="max-w-5xl mx-auto pt-16 pb-20 relative">
        <div className="flex justify-between">
          <div>
            <Presentation />
            <SocialLinks />
            <Actions />
          </div>
          <TechStack />
        </div>
        <Career />
      </div>
    </main>
  );
}
