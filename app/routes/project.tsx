import type { Route } from "./+types/projects";
import Topbar from "@/components/topbar";
import Background from "@/components/background";
import Footer from "@/components/footer";
import Title from "@/components/ui/title";
import Block from "@/components/project/block";
import Chip from "~/components/ui/chip";
import Divider from "~/components/ui/divider";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Jesus Leal" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export default function Project({ params }: Route.ComponentProps) {
  console.log(params);

  return (
    <main className="relative mocha bg-ctp-base min-h-screen h-full">
      <Background />
      <Topbar />
      <div className="max-w-5xl mx-auto pt-16 pb-20 relative">
        <Title title="MES Center" description="A manufacturing execution system for small to medium-sized businesses." descriptionClassName="font-light" />
        <div className="flex flex-col gap-16">
          <Block
            title="Context & Motivation"
            image="https://img.freepik.com/premium-psd/laptop-mockup-displaying-website-interface-with-floating-rocks_176048-1224.jpg?w=2000"
          >
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ratione maiores, sunt laboriosam, quaerat soluta sed aliquid atque excepturi iure tenetur cumque magni odio, qui adipisci enim illo. Quaerat, enim?</p>
            <p>Dolorum incidunt dolor temporibus architecto quod non consequatur ad voluptates. Maxime enim fuga ad fugit ipsam officia repudiandae quos saepe, assumenda repellat sed. Adipisci tempora vitae dolore eligendi molestiae sunt?</p>
          </Block>
          <Block
            title="Technologies Used"
          >
            <div className="flex gap-1">
              <Chip label="React" />
              <Chip label="Next.js" />
              <Chip label="TypeScript" />
              <Chip label="Tailwind CSS" />
              <Chip label="Shadcn UI" />
              <Chip label="Prisma" />
              <Chip label="PostgreSQL" />
              <Chip label="Vercel" />
              <Chip label="GitHub" />
            </div>
          </Block>
          <Block
            title="Key Features"
            image="https://img.freepik.com/premium-psd/laptop-mockup-displaying-website-interface-with-floating-rocks_176048-1224.jpg?w=2000"
            reverse={true}
          >
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ratione maiores, sunt laboriosam, quaerat soluta sed aliquid atque excepturi iure tenetur cumque magni odio, qui adipisci enim illo. Quaerat, enim?</p>
            <p>Dolorum incidunt dolor temporibus architecto quod non consequatur ad voluptates. Maxime enim fuga ad fugit ipsam officia repudiandae quos saepe, assumenda repellat sed. Adipisci tempora vitae dolore eligendi molestiae sunt?</p>
          </Block>
          <Block
            title="Gallery"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-video overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  src="https://img.freepik.com/premium-psd/laptop-mockup-displaying-website-interface-with-floating-rocks_176048-1224.jpg"
                  alt=""
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  src="https://img.freepik.com/premium-psd/laptop-mockup-displaying-website-interface-with-floating-rocks_176048-1224.jpg"
                  alt=""
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  src="https://img.freepik.com/premium-psd/laptop-mockup-displaying-website-interface-with-floating-rocks_176048-1224.jpg"
                  alt=""
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  src="https://img.freepik.com/premium-psd/laptop-mockup-displaying-website-interface-with-floating-rocks_176048-1224.jpg"
                  alt=""
                />
              </div>
            </div>
          </Block>
        </div>
      </div>
      <Footer />
    </main>
  );
}
