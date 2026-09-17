import type { LucideIcon } from "lucide-react";
import {
  Wrench,
  Handshake,
  Cpu,
  GraduationCap,
  Leaf,
  Headphones,
} from "lucide-react";

export interface ServiceDetail {
  id: string;
  badge: string;
  title: string;
  description: string;
  points: string[];
  buttonText: string;
  href: string;
  image: string;
  icon: LucideIcon;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const primaryServices: ServiceDetail[] = [
  {
    id: "amc-service",
    badge: "Operations & Care",
    title: "AMC Service",
    description:
      "Year-round maintenance, inspection, and technical support for installed farm systems. Covers equipment servicing, crop monitoring, and on-site/remote assistance 6 days per week.",
    points: [
      "Scheduled equipment inspections and servicing",
      "Real-time crop monitoring support",
      "On-site and remote technical assistance",
      "6-day-a-week availability",
      "Emergency breakdown response",
    ],
    buttonText: "Get Direction →",
    href: "#contact",
    image:
      "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=900&q=80",
    icon: Wrench,
  },
  {
    id: "buyback-service",
    badge: "Market Assurance",
    title: "Buyback Services",
    description:
      "Company guarantees purchase of the farmer's produce at pre-agreed prices. Logistics handled entirely by company. Payment settled within 7 working days of collection.",
    points: [
      "Pre-agreed purchase prices — no market risk",
      "Full logistics managed by our team",
      "Payment within 7 working days",
      "Quality grading assistance",
      "Available for all project types",
    ],
    buttonText: "Get Direction →",
    href: "#contact",
    image:
      "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=900&q=80",
    icon: Handshake,
  },
];

export const whyChooseUsList: WhyChooseUsItem[] = [
  {
    id: "smart-tech",
    title: "Smart Farming Solutions",
    description:
      "Advanced agricultural technologies designed to improve productivity and efficiency.",
    icon: Cpu,
  },
  {
    id: "expert-guidance",
    title: "Expert Guidance",
    description:
      "Professional support and practical farming knowledge tailored for modern agriculture.",
    icon: GraduationCap,
  },
  {
    id: "sustainable-approach",
    title: "Sustainable Approach",
    description:
      "Eco-friendly and future-ready farming solutions engineered for long-term growth.",
    icon: Leaf,
  },
  {
    id: "quick-support",
    title: "Quick Support",
    description:
      "Dedicated customer assistance for farmers, agro-investors, and commercial farm owners.",
    icon: Headphones,
  },
];
