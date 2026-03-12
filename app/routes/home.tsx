import type { Route } from "./+types/home";
import Presentation from "@/components/home/presentation";
import Actions from "@/components/home/actions";
import SocialLinks from "@/components/home/social-links";
import Career from "@/components/home/career";
import TechStack from "@/components/home/tech-stack";
import Layout from "@/components/layout";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Jesus Leal" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        <div>
          <Presentation />
          <SocialLinks />
          <Actions />
        </div>
        <TechStack />
      </div>
      <Career />
    </Layout>
  );
}
