import Chip from "@/components/ui/chip";

const techs = [
  "C#", ".NET", "ASP.NET", "WPF", "C++",
  "JavaScript", "React.js", "Tailwind", "Next.js", "Node.js",
  "SQL Server", "Oracle", "MongoDB", "REST APIs",
  "Git", "Linux", "Windows Server",
];

export default function TechStack() {
  return (
    <div className="border rounded-xl border-ctp-surface0 p-6 pt-4 pb-6 w-xs">
      <p className="text-ctp-text font-medium mb-4">Tech Stack</p>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <Chip key={tech} label={tech} />
        ))}
      </div>
    </div>
  );
}
