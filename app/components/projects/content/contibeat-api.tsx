import Title from "@/components/ui/title";
import Block from "@/components/project/block";
import Chip from "@/components/ui/chip";
import Image from "@/components/ui/image";
import image0 from "@/assets/images/conti-beat-0.jpg";
import image1 from "@/assets/images/conti-beat-1.jpg";

const techStack = ["C#", ".NET", "REST API", "SignalR", "Reverse Engineering"];
const gallery = [image0, image1];

export default function ContiBeatAPI() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-20 relative">
      <Title
        title="ContiBeat API"
        description="A custom API that restored real-time production alerts after corporate restrictions blocked Telegram integrations."
        descriptionClassName="font-light"
      />
      <div className="flex flex-col gap-16">
        <Block title="Context & Motivation" image={gallery[0]}>
          <p>Telegram was originally used to deliver automated production alerts. When the company replaced it with an internal messaging platform called ContiBeat, the new system did not provide an API, preventing existing tools from sending notifications.</p>
          <p>To restore automated alerts, a custom ContiBeat API was developed using reverse engineering of the application's network requests. This allowed existing systems to send messages with minimal changes and restored real-time production notifications.</p>
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
            <li>Custom REST API enabling automated messaging through ContiBeat.</li>
            <li>Reverse engineered network requests to replicate message delivery.</li>
            <li>Compatible request structure for easy migration from Telegram integrations.</li>
            <li>Token-based authentication for secure message sending.</li>
            <li>Real-time message delivery using WebSocket connections.</li>
            <li>Integration with MES and production monitoring systems.</li>
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