import Chip from "@/components/ui/chip";
import techs from "@/data/techs";

export default function TechStack() {
  return (
    <div className="border border-ctp-surface0 bg-ctp-base shadow-xl rounded-xl h-fit p-6 pt-4 w-full md:w-xs">
      <p className="text-ctp-text font-medium mb-4">Tech Stack</p>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <Chip key={tech} label={tech} grow={true} className="bg-ctp-mantle! border border-ctp-surface0" />
        ))}
      </div>
    </div>
  );
}
