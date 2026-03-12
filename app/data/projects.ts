import mssFlowImg from "@/assets/images/mss-flow-0.jpg";
import contiBeatImg from "@/assets/images/conti-beat-0.jpg";
import stencilTrackingImg from "@/assets/images/stencil-tracking-0.jpg";
import jidokaReportImg from "@/assets/images/jidoka-report-0.jpg";
import wipMovementImg from "@/assets/images/wip-movement-1.jpg";
import jidokaUnlockImg from "@/assets/images/jidoka-unlock-1.jpg";
import kdmAlertImg from "@/assets/images/kdm-alerts-1.jpg";
import inventoryImg from "@/assets/images/inventory-1.jpg";
import centinelImg from "@/assets/images/centinela-1.jpg";
import dualScannerImg from "@/assets/images/dual-scanner-1.jpg";
import radminAutomation from "@/assets/images/radmin-automation-1.jpg";
import MssFlow from "@/components/projects/content/mss-flow";
import ContiBeatAPI from "@/components/projects/content/contibeat-api";
import StencilTracking from "@/components/projects/content/stencil-tracking";
import JidokaReport from "@/components/projects/content/jidoka-report";

export type ProjectEntry = {
  title: string;
  description: string;
  img: string;
  tags: string[];
  url: string;
  content?: React.ComponentType;
  featured?: boolean;
};

export const disclaimer = "These projects were developed under contract, so I'm unable to share the source code.";

export const projects: ProjectEntry[] = [
  {
    title: "MSS Flow",
    description:
      "Visual workflow platform for analyzing and executing complex MES unit movements.",
    tags: ["C#", "ASP.NET", "React", "MongoDB", "Oracle", "React Flow", "MUI", "Reverse Engineering", "XLSX"],
    img: mssFlowImg,
    url: "/projects/mss-flow",
    content: MssFlow,
    featured: true,
  },
  {
    title: "ContiBeat API",
    description:
      "Custom API built through reverse engineering to enable automated messaging in ContiBeat.",
    tags: ["C#", ".NET", "REST API", "SignalR", "Reverse Engineering"],
    img: contiBeatImg,
    url: "/projects/contibeat-api",
    content: ContiBeatAPI,
    featured: true,
  },
  {
    title: "Stencil Tracking",
    description:
      "System that tracks stencil usage and enforces cleaning cycles to prevent soldering defects.",
    tags: ["C#", "ASP.NET", "React", "SQL Server", "Hero UI", "TypeScript", "Tailwind", "ApexCharts", "XLSX"],
    img: stencilTrackingImg,
    url: "/projects/stencil-tracking",
    content: StencilTracking,
    featured: true,
  },
  {
    title: "Jidoka Report",
    description:
      "Analytics dashboard that improves accuracy of Jidoka stoppage reporting in manufacturing lines.",
    tags: ["C#", "ASP.NET", "React", "Oracle", "MUI", "ApexCharts", "XLSX"],
    img: jidokaReportImg,
    url: "/projects/jidoka-report",
    content: JidokaReport,
    featured: true,
  },
  {
    title: "Centinela",
    description:
      "Monitoring service that detects failures and automatically restarts critical server applications.",
    tags: ["C#", ".NET", "ASP.NET", "React", "WPF", "TCP/IP"],
    img: centinelImg,
    url: "/projects/centinela",
  },
  {
    title: "KDM Alerts",
    description:
      "Alerting system that monitors key inventory levels and triggers automated notifications.",
    tags: ["C#", "ASP.NET", "React", "Oracle", "Puppeteer", "Reverse Engineering"],
    img: kdmAlertImg,
    url: "/projects/kdm-alerts",
  },
  {
    title: "WIP Movements",
    description:
      "Secure interface for managing Work-In-Progress unit movements within MES environments.",
    tags: ["C#", "ASP.NET", "React", "Oracle", "MUI"],
    img: wipMovementImg,
    url: "/projects/wip-movements",
  },
  {
    title: "Inventory",
    description:
      "Tool that maps relationships between MES servers and production floor machines.",
    tags: ["C#", "ASP.NET", ".NET", "React", "MUI", "Oracle", "UI Automation", "TCP/IP", "XLSX"],
    img: inventoryImg,
    url: "/projects/inventory",
  },
  {
    title: "Jidoka Unlock",
    description:
      "Web interface that allows operators to safely unlock MES stations blocked by Jidoka events.",
    tags: ["C#", "ASP.NET", "React", "Oracle", "Puppeteer", "MUI"],
    img: jidokaUnlockImg,
    url: "/projects/jidoka-unlock",
  },
  {
    title: "Radmin Automation",
    description:
      "Automation utility for executing remote commands across multiple machines.",
    tags: ["C#", ".NET", "Radmin", "XAML", "Avalonia UI", "TCP/IP", "Automation UI"],
    img: radminAutomation,
    url: "/projects/radmin-automation",
  },
  {
    title: "Dual Scanner",
    description:
      "Utility that merges two barcode scanners into a single virtual input for MES integration.",
    tags: ["C#", ".NET", "WinForms", "Cognex", "COM", "TCP/IP"],
    img: dualScannerImg,
    url: "/projects/dual-scanner",
  },
];