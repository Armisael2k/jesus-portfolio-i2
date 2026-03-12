import type { Route } from "./+types/projects";
import Title from "@/components/ui/title";
import Project from "@/components/projects/project";
import SimpleProject from "@/components/projects/simple-project";
import Layout from "@/components/layout";
import { projects } from "@/data/projects";
import { PhotoProvider } from 'react-photo-view';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Jesus Leal - Projects" },
    { name: "description", content: "Projects" },
  ];
}

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <Layout>
      <section className="mb-12">
        <Title title="Featured Projects" />
        <h2 className="text-ctp-text text-2xl font-semibold mb-6"></h2>
        <div className="grid grid-cols-2 gap-4">
          {featuredProjects.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.img}
              tags={project.tags}
              url={project.url}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-ctp-text text-2xl font-semibold mb-6">Other Projects</h2>
        <PhotoProvider>
          <div className="grid grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <SimpleProject
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.img}
                tags={project.tags}
              />
            ))}
          </div>
        </PhotoProvider>
      </section>
    </Layout>
  );
}
