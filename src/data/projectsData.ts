import type { LucideIcon } from "lucide-react";
import {
  Warehouse,
  Droplets,
  Tractor,
  Home,
  Handshake,
  Sprout,
  Layers,
  Flower2,
  Fish,
  Utensils,
  Shovel,
  Trees,
  Footprints,
  Waves,
  Egg,
  TreePalm,
  Sparkles,
} from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export const projectsData: ProjectItem[] = [
  {
    id: "polyhouse",
    title: "Polyhouse Projects",
    category: "Protected Cultivation",
    description:
      "Climate-controlled greenhouse cultivation using polyethylene film. Protects crops from weather, pests, and disease. Enables year-round growing with up to 3× higher yield.",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    icon: Warehouse,
  },
  {
    id: "hydroponics",
    title: "Hydroponic Projects",
    category: "Soilless Tech",
    description:
      "Soil-free, water-efficient crop production systems. High output in small spaces. Ideal for leafy vegetables, herbs, and strawberries. NFT, DWC, and Dutch Bucket systems available.",
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=800&q=80",
    icon: Droplets,
  },
  {
    id: "open-cultivation",
    title: "Open Cultivation Projects",
    category: "Agronomy",
    description:
      "Traditional and semi-modern open field farming with agri-tech interventions — soil testing, irrigation planning, crop selection, and yield monitoring.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
    icon: Tractor,
  },
  {
    id: "rooftop-gardening",
    title: "Rooftop Gardening",
    category: "Urban Agri",
    description:
      "Urban farming on rooftops and terraces. Custom systems for homes, apartments, hotels, and offices. Can generate monthly income via our buyback programme.",
    image:
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
    icon: Home,
  },
  {
    id: "joint-venture",
    title: "Joint Venture Projects",
    category: "Agri Business",
    description:
      "Co-investment model for large-scale agri-projects. Suitable for landowners and investors seeking passive income from agriculture.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    icon: Handshake,
  },
  {
    id: "nursery",
    title: "Nursery Projects",
    category: "Propagation",
    description:
      "Commercial nursery setup for plant propagation and seedling production. Covers vegetable seedlings, flower plants, ornamental plants, and saplings.",
    image:
      "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80",
    icon: Sprout,
  },
  {
    id: "vertical-farming",
    title: "Vertical Farming Projects",
    category: "Hi-Tech Farming",
    description:
      "Multi-layer indoor farming using artificial lighting and controlled environments. Maximum yield per sq.ft. Ideal for urban areas and limited-space locations.",
    image:
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=800&q=80",
    icon: Layers,
  },
  {
    id: "floriculture",
    title: "Floriculture Projects",
    category: "Commercial Crops",
    description:
      "Commercial flower cultivation for domestic and export markets. Includes rose, gerbera, marigold, and exotic flower farms in polyhouse or open field.",
    image:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
    icon: Flower2,
  },
  {
    id: "aquaculture",
    title: "Aquaculture Projects",
    category: "Aquatics",
    description:
      "Fish farming and integrated aqua systems. Covers RAS (Recirculating Aquaculture Systems), pond-based fish farming, and biofloc technology.",
    image:
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
    icon: Fish,
  },
  {
    id: "mushroom",
    title: "Mushroom Cultivation",
    category: "Indoor Farming",
    description:
      "High-value indoor mushroom farming. Oyster, button, and shiitake mushrooms. Low investment, high return. Full setup and training provided.",
    image:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    icon: Utensils,
  },
  {
    id: "gardening",
    title: "Gardening Projects",
    category: "Home & Community",
    description:
      "Kitchen garden, home garden, school garden, and community garden setups. Designed for personal use or small-scale produce generation.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    icon: Shovel,
  },
  {
    id: "landscaping",
    title: "Landscaping Projects",
    category: "Outdoor Architecture",
    description:
      "Professional landscaping for homes, offices, industrial campuses, and public spaces. Includes lawn design, planting, pathways, and water features.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa8c4a52d31?auto=format&fit=crop&w=800&q=80",
    icon: Trees,
  },
  {
    id: "goat-farming",
    title: "Goat Farming Projects",
    category: "Livestock",
    description:
      "At Fresh Agriculture by Green Bio-Tech, we promote modern and profitable goat farming projects designed to help farmers increase income and livestock productivity.",
    image:
      "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=800&q=80",
    icon: Footprints,
  },
  {
    id: "pondliner",
    title: "Pondliner Project",
    category: "Water Conservation",
    description:
      "We provide high quality pond liner solutions designed to improve water conservation and support sustainable agriculture practices.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    icon: Waves,
  },
  {
    id: "poultry-farms",
    title: "Automatically Poultry Farms",
    category: "Poultry Tech",
    description:
      "Modern poultry farming systems equipped with automated feeding, watering, climate control, and monitoring technologies to maximize productivity, improve bird welfare, and reduce operational costs.",
    image:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80",
    icon: Egg,
  },
  {
    id: "oil-palm",
    title: "Oil Palm Project",
    category: "Oilseed Cultivation",
    description:
      "At Fresh Agriculture by Green Bio-Tech, we support farmers with modern Oil Palm cultivation projects designed to increase productivity, profitability, and sustainable agricultural development. Oil Palm is one of the most productive oilseed crops, offering farmers a reliable source of long-term income and high economic returns.",
    image:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
    icon: TreePalm,
  },
  {
    id: "saffron",
    title: "Saffron Cultivation",
    category: "High-Value Crops",
    description:
      'At Fresh Agriculture by Green Bio-Tech, we promote modern and sustainable saffron cultivation projects designed to help farmers diversify their crops and generate higher income. Known as the "Red Gold" of Agriculture, saffron is one of the world\'s most valuable spices, offering excellent market demand and profitability.',
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    icon: Sparkles,
  },
];
