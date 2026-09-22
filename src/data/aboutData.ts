import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  Target,
  Activity,
  FlaskConical,
  Cpu,
  Leaf,
  BarChart3,
  Award,
  Zap,
  Users,
  ShieldCheck,
  Headphones,
  TrendingUp,
} from "lucide-react";

export interface AboutPillar {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ValueBadge {
  id: string;
  title: string;
  icon: LucideIcon;
}

export const aboutPillars: AboutPillar[] = [
  {
    id: "irrigation",
    title: "Smart Irrigation Systems",
    description:
      "We provide intelligent irrigation solutions that help farmers optimize water usage through automated and sensor-based systems. This improves crop health while reducing water wastage and operational costs.",
    icon: Droplets,
  },
  {
    id: "precision",
    title: "Precision Farming Solutions",
    description:
      "Our precision farming technologies use real-time data and modern tools to help farmers monitor field conditions accurately. This enables better decision-making, higher productivity, and efficient resource management.",
    icon: Target,
  },
  {
    id: "crop-health",
    title: "Crop Health Monitoring",
    description:
      "We help farmers track crop growth and identify diseases, nutrient deficiencies, or pest issues at an early stage. Timely monitoring improves crop quality and reduces potential losses.",
    icon: Activity,
  },
  {
    id: "soil-analysis",
    title: "Soil Testing & Analysis",
    description:
      "Our soil analysis services help farmers understand soil fertility, nutrient levels, and pH balance. Based on the results, we recommend suitable farming practices for better crop yield and soil health.",
    icon: FlaskConical,
  },
  {
    id: "automation",
    title: "Farm Automation Technologies",
    description:
      "We introduce modern automation systems that simplify farming operations such as irrigation control, monitoring, and equipment management. Automation saves time, labor, and improves overall efficiency.",
    icon: Cpu,
  },
  {
    id: "sustainable",
    title: "Sustainable Farming Practices",
    description:
      "We promote eco-friendly farming methods that protect natural resources and support long-term agricultural growth. Our sustainable solutions focus on reducing chemical dependency and improving environmental balance.",
    icon: Leaf,
  },
  {
    id: "data-driven",
    title: "Data-Driven Agricultural Solutions",
    description:
      "We use advanced agricultural data and analytics to help farmers make smarter farming decisions. Accurate insights improve productivity, reduce risks, and increase profitability.",
    icon: BarChart3,
  },
];

export const valueBadges: ValueBadge[] = [
  { id: "1", title: "3+ Years of Industry Experience", icon: Award },
  { id: "2", title: "Advanced Smart Farming Technologies", icon: Zap },
  { id: "3", title: "Farmer-Centric Approach", icon: Users },
  { id: "4", title: "Sustainable & Eco-Friendly Solutions", icon: ShieldCheck },
  {
    id: "5",
    title: "Reliable Support & Agricultural Expertise",
    icon: Headphones,
  },
  { id: "6", title: "Commitment to Innovation and Growth", icon: TrendingUp },
];
