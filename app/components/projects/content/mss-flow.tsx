import Title from "@/components/ui/title";
import Block from "@/components/project/block";
import Chip from "@/components/ui/chip";
import Image from "@/components/ui/image";
import image0 from "@/assets/images/mss-flow-0.jpg";
import image1 from "@/assets/images/mss-flow-1.jpg";
import image2 from "@/assets/images/mss-flow-2.jpg";
import { PhotoProvider, PhotoView } from 'react-photo-view';

const techStack = ["C#", "ASP.NET", "React", "MongoDB", "Oracle", "Reactflow", "MUI", "Reverse Engineering", "XLSX"];
const gallery = [image0, image1, image2];

export default function MssFlow() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-20 relative">
      <Title
        title="MSS Flow"
        description="A visual tool that automates complex unit movement workflows in MES systems."
        descriptionClassName="font-light"
      />
      <div className="flex flex-col gap-16">
        <Block
          title="Context & Motivation"
          image={gallery[0]}
        >
          <p>In manufacturing environments, Jidoka systems automatically stop production lines when defects are detected, generating events used for quality analysis and audits. The previous reporting system did not properly account for repeated blocking events or multi-board PCB panels, which led to inaccurate defect reporting.</p>
          <p>Because the central Jidoka system synchronizes across multiple databases, certain scenarios could generate duplicated or overlapping events that inflated defect counts. Jidoka Report introduces validation and event-grouping logic to consolidate overlapping blocks and provide more accurate production line metrics.</p>
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
            <li>Visual node-based editor for designing MES unit movement flows.</li>
            <li>Automatic extraction of unit serials from eSign attachments.</li>
            <li>Automated data collection from multiple MES systems.</li>
            <li>Built-in safeguards to prevent invalid or risky unit movements.</li>
            <li>Background processing for large batches via server-side job queue.</li>
            <li>Full traceability of all operations performed on each unit.</li>
          </ul>
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
    </div >
  );
}