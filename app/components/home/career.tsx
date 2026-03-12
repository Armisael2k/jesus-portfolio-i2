import { useState } from "react";
import { Tab, TabContent } from "@/components/ui/tab";
import { experience, studies, type CareerEntry } from "@/data/career";

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

  return (
    <Tab tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab}>
      <TabContent value="Experience" activeTab={activeTab} className="flex flex-col mt-2">
        {experience.map((entry) => (
          <CareerCard key={`${entry.title}-${entry.place}`} {...entry} />
        ))}
      </TabContent>
      <TabContent value="Studies" activeTab={activeTab} className="flex flex-col mt-2">
        {studies.map((entry) => (
          <CareerCard key={`${entry.title}-${entry.place}`} {...entry} />
        ))}
      </TabContent>
    </Tab>
  );
}
