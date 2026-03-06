import Topbar from "@/components/topbar";
import type { Route } from "./+types/projects";
import Title from "@/components/ui/title";
import Project from "@/components/projects/project";
import Background from "@/components/background";
import Footer from "@/components/footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Jesus Leal - Projects" },
    { name: "description", content: "Projects" },
  ];
}

export default function Projects() {
  return (
    <main className="relative mocha bg-ctp-base min-h-screen h-full">
      <Background />
      <Topbar />
      <div className="max-w-5xl mx-auto pt-16 pb-20 relative">
        <Title title="Projects" />
        <div className="grid grid-cols-2 gap-4">
          <Project
            title="MES Center"
            description="A manufacturing execution system for small to medium-sized businesses."
            image="https://img.freepik.com/premium-psd/laptop-mockup-displaying-website-interface-with-floating-rocks_176048-1224.jpg?w=2000"
            tags={["C#", "ASP.NET", "Oracle", "MongoDB", "React"]}
            url="/projects/dummy"
          />
          <Project
            title="MES Center"
            description="A manufacturing execution system for small to medium-sized businesses."
            image="https://img.freepik.com/premium-psd/laptop-mockup-with-stones_176048-1230.jpg?w=2000"
            tags={["C#", "ASP.NET", "Oracle", "MongoDB", "React"]}
            url="/projects/dummy"
          />
          <Project
            title="MES Center"
            description="A manufacturing execution system for small to medium-sized businesses."
            image="https://img.freepik.com/premium-psd/laptop-mockup-with-website-interface-dark-background_176048-1229.jpg?w=1060"
            tags={["C#", "ASP.NET", "Oracle", "MongoDB", "React"]}
            url="/projects/dummy"
          />
          <Project
            title="MES Center"
            description="A manufacturing execution system for small to medium-sized businesses."
            image="https://img.freepik.com/premium-psd/laptop-mockup-floating-stone_176048-1237.jpg?w=2000"
            tags={["C#", "ASP.NET", "Oracle", "MongoDB", "React"]}
            url="/projects/dummy"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}