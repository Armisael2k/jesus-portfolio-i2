import type { Route } from "./+types/home";
import Topbar from "@/components/topbar";
import Presentation from "@/components/presentation";
import Actions from "@/components/actions";
import SocialLinks from "@/components/social-links";

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

