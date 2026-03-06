import Chip from "@/components/ui/chip";
import Button from "@/components/ui/button";
import { PiArrowUpRightBold } from "react-icons/pi";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
}

export default function Project({ title, description, image, tags, url }: ProjectProps) {
  return (
    <div className="rounded-xl bg-ctp-crust p-6">
      <a href={url} className="block overflow-hidden rounded-xl cursor-pointer">
        <img
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          src={image}
          alt={title}
        />
      </a>
      <p className="font-medium text-2xl text-ctp-text mt-3 mb-2">{title}</p>
      <p className="text-ctp-subtext0 mb-3">{description}</p>
      <div className="flex gap-2">
        <div className="flex items-end flex-wrap gap-2 flex-1">
          {tags.map((tag) => (
            <Chip
              key={tag}
              grow={false}
              className="text-sm bg-ctp-mantle! border border-ctp-surface0"
              label={tag}
            />
          ))}
        </div>
        {url && (
          <a href={url}>
            <Button variant="filled" color="red" className="w-16 h-16">
              <PiArrowUpRightBold className="size-5" />
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}