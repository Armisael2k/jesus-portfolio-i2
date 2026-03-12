import Chip from "@/components/ui/chip";
import Image from "@/components/ui/image";
import { PhotoProvider, PhotoView } from 'react-photo-view';

interface SimpleProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function SimpleProject({ title, description, image, tags }: SimpleProjectProps) {
  return (
    <div className="rounded-xl bg-ctp-crust/60 p-4 flex flex-col gap-2">
      <PhotoView
        src={image}
      >
        <Image
          containerClassName="aspect-video"
          src={image}
          alt={title}
        />
      </PhotoView>
      <p className="font-medium text-base text-ctp-text mt-1">{title}</p>
      <p className="text-ctp-subtext0 text-sm leading-snug flex-1">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Chip
            key={tag}
            grow={false}
            className="text-xs bg-ctp-mantle! border border-ctp-surface0"
            label={tag}
          />
        ))}
      </div>
    </div>
  );
}
