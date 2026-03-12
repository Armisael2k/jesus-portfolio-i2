import Title from "@/components/ui/title";
import Block from "@/components/project/block";
import Chip from "@/components/ui/chip";
import Image from "@/components/ui/image";
import image0 from "@/assets/images/jidoka-report-0.jpg";
import image1 from "@/assets/images/jidoka-report-1.jpg";
import image2 from "@/assets/images/jidoka-report-2.jpg";
import { PhotoProvider, PhotoView } from 'react-photo-view';

const techStack = ["C#", "ASP.NET", "React", "Oracle", "MUI", "ApexCharts", "XLSX"];
const gallery = [image0, image1, image2];

export default function JidokaReport() {
  return (
    <div className="max-w-5xl mx-auto pt-16 pb-20 relative">
      <Title
        title="Jidoka Report"
        description="A reporting system that improves accuracy of automated defect detection events in manufacturing lines."
        descriptionClassName="font-light"
      />
      <div className="flex flex-col gap-16">
        <Block title="Context & Motivation" image={gallery[0]}>
          <p>In manufacturing environments, Jidoka systems automatically stop production lines when defects are detected, generating events used for quality analysis and audits. The previous reporting system did not properly account for system-level behaviors such as repeated blocking events or multi-board PCB panels, which resulted in inaccurate defect reporting.</p>
          <p>Because the central Jidoka system synchronizes across multiple databases, certain failure scenarios could generate duplicated or overlapping events that inflated defect counts. The new Jidoka Report introduces validation and event-grouping logic to consolidate overlapping blocks and provide a more accurate representation of production line issues.</p>
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
            <li>Automated consolidation of overlapping Jidoka block events.</li>
            <li>Accurate defect counting for multi-board PCB panels.</li>
            <li>Interactive dashboards with station, line, and downtime analytics.</li>
            <li>Pareto analysis for identifying top root causes of line stops.</li>
            <li>Exportable reports with filtering by date, shift, and production line.</li>
          </ul>
        </Block>
        <Block title="Impact">
          <p>
            Improved defect reporting accuracy by 62% with overlap consolidation logic, resulting in more reliable data for production monitoring, internal audits, and external quality assessments.
          </p>
        </Block>
        {gallery.length > 2 &&
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
        }
      </div>
    </div>
  );
}