import React, { useState } from "react";
import { Sprout, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

interface GalleryCard {
  id: string;
  title: string;
  category: string;
  tag: string;
  metric: string;
  desc: string;
  image: string;
}

const galleryData: GalleryCard[][] = [
  // ROW 1: 6 High-Tech Protected & Urban Agri Practices
  [
    {
      id: "r1-1",
      title: "Precision Polyhouse Floriculture",
      category: "Protected Cultivation",
      tag: "Polyhouse",
      metric: "3× Yield Boost",
      desc: "Double-layered UV polyethylene greenhouses regulating humidity, heat, and insect prevention.",
      image:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "r1-2",
      title: "Automated Poultry Broiler Sheds",
      category: "Livestock Care",
      tag: "Poultry",
      metric: "99.4% Flocking Yield",
      desc: "Climate sensors and automated feeder lines regulating ammonia, temperature, and feeding.",
      image:
        "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "r1-3",
      title: "Commercial NFT Hydroponics",
      category: "Soilless Tech",
      tag: "Hydroponics",
      metric: "-85% Water Use",
      desc: "Closed-circuit channels circulating mineral nutrients directly to crop root zones.",
      image:
        "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "r1-4",
      title: "Indoor Saffron Farming",
      category: "Red Gold Spice",
      tag: "Saffron",
      metric: "High Profit Crop",
      desc: "Climate-controlled multi-tier rooms replicating pristine harvest conditions year-round.",
      image:
        "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "r1-5",
      title: "Commercial Nursery Saplings",
      category: "Plant Propagation",
      tag: "Nursery",
      metric: "98% Germination",
      desc: "Uniform disease-resistant seedlings and grafted orchard stock hardened for field planting.",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "r1-6",
      title: "Darkroom Oyster Mushroom Tunnels",
      category: "Indoor Cultivation",
      tag: "Mushrooms",
      metric: "21-Day Harvest",
      desc: "Humidity-saturated sterile darkrooms for oyster, button, and shiitake fruiting blocks.",
      image:
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    },
  ],

  // ROW 2: 6 Soil, Water & Open-Field Initiatives
  [
    {
      id: "r2-1",
      title: "Living Soil NPK Rejuvenation",
      category: "Agronomy",
      tag: "Soil Lab",
      metric: "100% Bio-Organic",
      desc: "Active biological microbial restoration balancing soil pH and organic carbon retention.",
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "r2-2",
      title: "Biofloc Aquaculture Tanks",
      category: "Aquatics",
      tag: "Aquaculture",
      metric: "Zero Waste Water",
      desc: "High-density inland fish breeding tanks equipped with automated continuous dissolved oxygen.",
      image:
        "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "r2-3",
      title: "Drip Micro-Fertigation Networks",
      category: "Irrigation",
      tag: "Drip Tech",
      metric: "+40% Water Saved",
      desc: "Precision pressure-compensated drippers delivering fertilizers directly to feeder roots.",
      image:
        "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "r2-4",
      title: "Commercial Oil Palm Plantations",
      category: "Oilseed Cultivation",
      tag: "Oil Palm",
      metric: "Long-Term Yield",
      desc: "High-yield hybrid palms engineered for reliable per-acre vegetable oil returns.",
      image:
        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "r2-5",
      title: "Stall-Fed Goat Farming",
      category: "Livestock Husbandry",
      tag: "Goat Care",
      metric: "Vaccinated Stock",
      desc: "Elevated slatted floor housing with automated fodder racks and strict bio-security pens.",
      image:
        "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "r2-6",
      title: "HDPE Geo-Membrane Pond Liners",
      category: "Water Conservation",
      tag: "Pondliner",
      metric: "Zero Seepage",
      desc: "500+ micron heavy-duty impermeable barrier membranes preventing irrigation percolation losses.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    },
  ],
];

export default function FullViewGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="h-screen w-screen overflow-hidden bg-field-sun text-soil-deep flex flex-col p-4 sm:p-5 select-none">
      {/* Slim Header Bar */}
      <header className="flex-none flex items-center justify-between pb-3 border-b border-field-sand">
        <div className="flex items-center gap-2.5">
          <span className="p-1.5 bg-field-meadow border border-field-sand text-leaf-emerald rounded-xl shadow-xs">
            <Sprout className="w-5 h-5" />
          </span>
          <span className="font-black text-xl tracking-tight text-soil-deep">
            Agri<span className="text-leaf-emerald">Pulse</span>
          </span>
          <span className="text-xs font-bold text-soil-soft uppercase tracking-wider ml-1 hidden sm:inline">
            / Live Field Operations
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-leaf-emerald bg-white px-3.5 py-1.5 rounded-full border border-field-sand shadow-xs inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-sapling-lime" /> Hover card to
            reveal full widescreen view
          </span>
        </div>
      </header>

      {/* 2-Row Mosaic Grid that fills entire screen height */}
      <main className="flex-grow pt-3 flex flex-col gap-3 h-full overflow-hidden">
        {galleryData.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex-1 flex gap-2.5 sm:gap-3 w-full h-full overflow-hidden"
          >
            {row.map((item) => {
              const isHovered = hoveredId === item.id;
              const hasActiveHover = hoveredId !== null;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`relative h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border ${
                    isHovered
                      ? "flex-[3.5] sm:flex-[4] border-leaf-emerald shadow-2xl ring-2 ring-leaf-emerald/20"
                      : hasActiveHover
                        ? "flex-[0.6] opacity-55 border-field-sand"
                        : "flex-1 opacity-90 border-field-sand shadow-xs"
                  }`}
                >
                  {/* Photo with zero scale transform */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />

                  {/* Gradient Scrim */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-soil-deep/95 via-soil-deep/30 to-transparent transition-opacity duration-300 ${
                      isHovered ? "opacity-90" : "opacity-65"
                    }`}
                  />

                  {/* Collapsed State: Vertical Text Tag */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-200 ${
                      isHovered ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <span className="text-[11px] font-black uppercase tracking-widest text-white whitespace-nowrap -rotate-90 drop-shadow-md">
                      {item.tag}
                    </span>
                  </div>

                  {/* Expanded State: Full Card Content */}
                  <div
                    className={`absolute inset-0 p-5 sm:p-6 flex flex-col justify-between text-white transition-all duration-300 ${
                      isHovered
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    {/* Top Row Badges */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-leaf-emerald bg-white px-3 py-1 rounded-full shadow-xs">
                        {item.category}
                      </span>
                      <span className="text-xs font-bold text-sapling-lime flex items-center gap-1 bg-soil-deep/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-sapling-lime/30">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {item.metric}
                      </span>
                    </div>

                    {/* Bottom Details */}
                    <div className="space-y-1.5">
                      <h3 className="text-lg sm:text-xl font-black leading-tight drop-shadow-sm text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-field-sand/90 leading-relaxed max-w-md line-clamp-2">
                        {item.desc}
                      </p>
                      <div className="pt-1 flex items-center gap-1 text-xs font-bold text-sapling-lime">
                        <span>View Project Documentation</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </main>
    </div>
  );
}
