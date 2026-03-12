export interface CareerEntry {
  date: string;
  title: string;
  place: string;
  description: string;
}

export const experience: CareerEntry[] = [
  {
    date: "Mar 2023 - Sep 2025",
    title: "MES Fullstack Developer",
    place: "Continental Automotive",
    description:
      "Developed internal MES tools for production environments using C#, .NET, React, Node.js, and SQL Server. Rebuilt the Jidoka reporting system improving accuracy by 62%, built APIs for real-time production alerts, and automated operational tasks across the manufacturing floor.",
  },
  {
    date: "Aug 2022 - Dec 2022",
    title: "Web Developer Intern",
    place: "Continental Automotive",
    description:
      "Developed a web application for the returns laboratory using React, Next.js, and SQL Server. Automated report generation and replaced manual Excel tracking with a centralized web system.",
  },
];


export const studies: CareerEntry[] = [
  {
    date: "2019 - 2023",
    title: "Software Development Engineering",
    place: "Universidad Tecnológica de Nogales",
    description:
      "Engineering degree focused on software development and management, systems design, and programming fundamentals.",
  },
  {
    date: "-",
    title: "Frontend Developer (React) Certificate",
    place: "HackerRank",
    description:
      "Certification validating practical React development skills and frontend development knowledge.",
  },
  {
    date: "-",
    title: "Software Engineer Certificate",
    place: "HackerRank",
    description:
      "Assessment of programming fundamentals, data structures, and problem-solving skills.",
  }
];