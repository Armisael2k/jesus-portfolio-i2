import type { Route } from "./+types/project";
import Layout from "@/components/layout";
import { projects } from "@/data/projects";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Jesus Leal" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export default function Project({ params }: Route.ComponentProps) {
  const project = projects.find((p) => p.url === `/projects/${params.projectName}`);

  if (!project) {
    return (
      <Layout contained={false}>
        <div className="flex-1 flex items-center justify-center min-h-[50vh]">
          <h1 className="text-2xl text-ctp-text font-bold">Project not found</h1>
        </div>
      </Layout>
    );
  }

  const Content = project.content;

  return (
    <Layout contained={false}>
      {Content ? <Content /> : null}
    </Layout>
  );
}

