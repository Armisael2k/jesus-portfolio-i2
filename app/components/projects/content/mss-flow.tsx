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
          <p>MES engineers often need to perform complex unit movements between production processes. Previously this required multiple disconnected tools such as standalone executables, scripts, and database queries, making the workflow highly manual and dependent on individual experience.</p>
          <p>Requests arrived through an eSign system containing lists of unit serial numbers that engineers had to analyze across multiple systems before executing the required movements. MSS Flow centralizes this workflow into a visual platform that automates data collection, validates operations, and executes movements while keeping a complete history of all actions performed.</p>
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