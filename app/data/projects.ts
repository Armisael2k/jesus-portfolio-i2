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
import Centinela from "@/components/projects/content/centinela";
import JidokaUnlock from "@/components/projects/content/jidoka-unlock";

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
      "Visual platform that centralizes MES tools, scripts, and data collection to execute complex unit movements.",
    tags: ["C#", "ASP.NET", "React", "MongoDB", "Oracle", "React Flow", "MUI", "Reverse Engineering", "XLSX"],
    img: mssFlowImg,
    url: "/projects/mss-flow",
    content: MssFlow,
    featured: true,
  },
  {
    title: "Centinela",
    description:
      "Monitoring and auto-recovery service for critical applications running across manufacturing networks.",
    tags: ["C#", ".NET", "ASP.NET", "React", "WPF", "TCP/IP"],
    img: centinelImg,
    url: "/projects/centinela",
    content: Centinela,
    featured: true,
  },
  {
    title: "Stencil Tracking",
    description:
      "Full-stack system for stencil checkout, return, cleaning cycles, and supervisor alerts in PCB production.",
    tags: ["C#", "ASP.NET", "React", "SQL Server", "Hero UI", "TypeScript", "Tailwind", "ApexCharts", "XLSX"],
    img: stencilTrackingImg,
    url: "/projects/stencil-tracking",
    content: StencilTracking,
    featured: true,
  },
  {
    title: "Jidoka Report",
    description:
      "Reporting dashboard for Jidoka production stoppages, improving event accuracy by 62%.",
    tags: ["C#", "ASP.NET", "React", "Oracle", "MUI", "ApexCharts", "XLSX"],
    img: jidokaReportImg,
    url: "/projects/jidoka-report",
    content: JidokaReport,
    featured: true,
  },
  {
    title: "Jidoka Unlock",
    description:
      "Controlled web tool for safely unlocking MES stations blocked by Jidoka events.",
    tags: ["C#", "ASP.NET", "React", "Oracle", "Puppeteer", "MUI"],
    img: jidokaUnlockImg,
    url: "/projects/jidoka-unlock",
    content: JidokaUnlock,
    featured: true,
  },
  {
    title: "ContiBeat API",
    description:
      "Custom REST API created after Telegram integrations were blocked, restoring automated alerts through ContiBeat.",
    tags: ["C#", ".NET", "REST API", "SignalR", "Reverse Engineering"],
    img: contiBeatImg,
    url: "/projects/contibeat-api",
    content: ContiBeatAPI,
    featured: true,
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
    title: "WIP Movements",
    description:
      "Secure interface for managing Work-In-Progress unit movements within MES environments.",
    tags: ["C#", "ASP.NET", "React", "Oracle", "MUI"],
    img: wipMovementImg,
    url: "/projects/wip-movements",
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
  {
    title: "KDM Alerts",
    description:
      "Alerting system that monitors key inventory levels and triggers automated notifications.",
    tags: ["C#", "ASP.NET", "React", "Oracle", "Puppeteer", "Reverse Engineering"],
    img: kdmAlertImg,
    url: "/projects/kdm-alerts",
  },
];
