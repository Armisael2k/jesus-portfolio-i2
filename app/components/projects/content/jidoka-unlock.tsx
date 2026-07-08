import Title from "@/components/ui/title";
import Block from "@/components/project/block";
import Chip from "@/components/ui/chip";
import Image from "@/components/ui/image";
import image0 from "@/assets/images/jidoka-unlock-0.jpg";
import image1 from "@/assets/images/jidoka-unlock-1.jpg";
import { PhotoProvider, PhotoView } from 'react-photo-view';

const techStack = ["C#", "ASP.NET", "React", "Oracle", "Puppeteer", "MUI"];
const gallery = [image0, image1];

export default function JidokaUnlock() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-20 relative">
      <Title
        title="Jidoka Unlock"
        description="A controlled web application for safely unlocking MES stations blocked by Jidoka events."
        descriptionClassName="font-light"
      />
      <div className="flex flex-col gap-16">
        <Block title="Context & Motivation" image={gallery[0]}>
          <p>When Jidoka events blocked MES stations, production support teams had to perform manual unlock actions that could slow line recovery and make traceability harder to maintain.</p>
          <p>Jidoka Unlock was built as a controlled interface for executing those unlocks safely. It reduces manual intervention, records each action for auditability, and gives support teams a consistent workflow for restoring affected stations.</p>
        </Block>
        <Block
          title="Technologies Used"
        >
          <div className="flex flex-wrap gap-1">
            {techStack.map((tech) => (
              <Chip key={tech} label={tech} />
            ))}
          </div>
        </Block>
        <Block
          title="Key Features"
          image={gallery[1]}
          reverse={true}
        >
          <ul className="list-disc pl-6 space-y-2">
            <li>Controlled unlock workflow for MES stations blocked by Jidoka events.</li>
            <li>Automation of actions that were previously handled manually.</li>
            <li>Audit record for each unlock to support traceability and compliance.</li>
            <li>Validation steps before executing station recovery actions.</li>
            <li>Operator, station, and event context captured for follow-up analysis.</li>
          </ul>
        </Block>
        <Block title="Impact">
          <p>
            Reduced line downtime by making Jidoka station recovery faster, safer, and easier to audit across production support workflows.
          </p>
        </Block>
        <Block
          title="Gallery"
        >
          <PhotoProvider>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gallery.map((image) => (
                <PhotoView
                  key={image}
                  src={image}
                >
                  <Image src={image} containerClassName="aspect-video" />
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        </Block>
      </div>
    </div>
  );
}
