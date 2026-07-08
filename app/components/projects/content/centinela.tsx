import Title from "@/components/ui/title";
import Block from "@/components/project/block";
import Chip from "@/components/ui/chip";
import Image from "@/components/ui/image";
import image0 from "@/assets/images/centinela-0.jpg";
import image1 from "@/assets/images/centinela-1.jpg";
import image2 from "@/assets/images/centinela-2.jpg";
import { PhotoProvider, PhotoView } from 'react-photo-view';

const techStack = ["C#", ".NET", "ASP.NET", "React", "WPF", "TCP/IP"];
const gallery = [image0, image1, image2];

export default function Centinela() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-20 relative">
      <Title
        title="Centinela"
        description="A monitoring and auto-recovery service for critical applications running across manufacturing networks."
        descriptionClassName="font-light"
      />
      <div className="flex flex-col gap-16">
        <Block title="Context & Motivation" image={gallery[0]}>
          <p>Manufacturing environments depend on internal applications and network services that must stay available during production. When one of these applications stopped responding, support teams had to detect the failure manually, connect to the affected machine, and restart the process.</p>
          <p>Centinela was built to reduce that manual response loop. It monitors critical applications, detects failures, restarts affected services when possible, and notifies the team when human intervention is required.</p>
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
            <li>Continuous monitoring of critical server and production-floor applications.</li>
            <li>Automatic failure detection for stopped or unresponsive processes.</li>
            <li>Self-recovery actions to restart applications without waiting for manual support.</li>
            <li>Notifications when failures require escalation or follow-up.</li>
            <li>Network-aware communication for distributed manufacturing environments.</li>
          </ul>
        </Block>
        <Block title="Impact">
          <p>
            Reduced downtime risk and manual support effort by automatically detecting failures and recovering critical applications before they interrupted production workflows.
          </p>
        </Block>
        <Block
          title="Gallery"
        >
          <PhotoProvider>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gallery.slice(1).map((image) => (
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
