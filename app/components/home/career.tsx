import { useState } from "react";
import { Tab } from "@/components/ui/tab";

interface CareerEntry {
  date: string;
  title: string;
  place: string;
  description: string;
}

const EXPERIENCE: CareerEntry[] = [
  {
    date: "2023 – Present",
    title: "Lorem Ipsum Developer",
    place: "Lorem Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "2022 – 2023",
    title: "Dolor Sit Engineer",
    place: "Ipsum Agency",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    date: "2021 – 2022",
    title: "Junior Lorem Specialist",
    place: "Amet Startup",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const STUDIES: CareerEntry[] = [
  {
    date: "2019 – 2023",
    title: "Bachelor of Lorem Studies",
    place: "Universidad Lorem Ipsum",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    date: "2022",
    title: "Lorem Certification",
    place: "Ipsum Institute",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    date: "2021",
    title: "Full-Stack Lorem Bootcamp",
    place: "Dolor Academy",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
  },
];

const TABS = ["Experience", "Studies"];

function CareerCard({ date, title, place, description }: CareerEntry) {
  return (
    <div className="flex gap-4 group">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-ctp-surface1 group-hover:bg-ctp-red mt-1 transition-colors duration-200 shrink-0" />
        <div className="w-px flex-1 bg-ctp-surface0 mt-2" />
      </div>
      <div className="pb-6">
        <span className="text-xs text-ctp-subtext0">{date}</span>
        <p className="text-ctp-text font-semibold mt-0.5">{title}</p>
        <p className="text-ctp-red text-sm">{place}</p>
        <p className="text-ctp-subtext0 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}

export default function Career() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const entries = activeTab === "Experience" ? EXPERIENCE : STUDIES;

  return (
    <Tab tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab}>
      <div className="flex flex-col mt-2">
        {entries.map((entry) => (
          <CareerCard key={`${entry.title}-${entry.place}`} {...entry} />
        ))}
      </div>
    </Tab>
  );
}
