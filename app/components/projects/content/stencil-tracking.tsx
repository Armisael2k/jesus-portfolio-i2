import Title from "@/components/ui/title";
import Block from "@/components/project/block";
import Chip from "@/components/ui/chip";
import Image from "@/components/ui/image";
import image0 from "@/assets/images/stencil-tracking-0.jpg";
import image1 from "@/assets/images/stencil-tracking-1.jpg";

const techStack = ["C#", "ASP.NET", "React", "SQL Server", "Hero UI", "Typescript", "Tailwindcss", "Apexcharts", "XLSX"];
const gallery = [image0, image1];

export default function StencilTracking() {
  return (
    <div className="max-w-5xl mx-auto pt-16 pb-20 relative">
      <Title
        title="Stencil Tracking"
        description="A tracking system that monitors stencil usage and enforces timely cleaning to prevent soldering defects."
        descriptionClassName="font-light"
      />
      <div className="flex flex-col gap-16">
        <Block title="Context & Motivation" image={gallery[0]}>
          <p>In PCB manufacturing, stencils are used to apply solder paste onto boards before components are placed. After extended use they must be cleaned to remove residue that can cause soldering defects. Before this system, stencil usage was not reliably tracked, making it difficult to ensure proper cleaning cycles.</p>
          <p>The Stencil Tracking System monitors stencil usage in real time and enforces return and cleaning cycles through automated alerts. By tracking checkout times and notifying supervisors when stencils are overdue, the system improves accountability and helps prevent defects that lead to production scrap.</p>
        </Block>
        <Block
          title="Technologies Used"
        >
          <div className="flex gap-1">
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
            <li>Barcode-based stencil checkout and return tracking.</li>
            <li>Real-time usage timer with visual status alerts (ok, warning, expired).</li>
            <li>Automatic escalation to supervisors when stencils are not returned on time.</li>
            <li>Operator and production line tracking for each stencil checkout.</li>
            <li>Daily, weekly, and monthly usage reports.</li>
            <li>Analytics dashboard showing on-time return rate.</li>
          </ul>
        </Block>
        {gallery.length > 2 &&
          <Block
            title="Gallery"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gallery.slice(1).map((image) => (
                <Image key={image} src={image} containerClassName="aspect-video" />
              ))}
            </div>
          </Block>
        }
      </div>
    </div>
  );
}