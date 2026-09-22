import { useState } from "react";
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

const galleryItems: GalleryCard[] = [
  {
    id: "1",
    title: "Precision Polyhouse Floriculture",
    category: "Protected Cultivation",
    tag: "Polyhouse",
    metric: "3× Yield Boost",
    desc: "Double-layered UV polyethylene greenhouses regulating humidity, heat, and insect prevention.",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "2",
    title: "Automated Poultry Broiler Sheds",
    category: "Livestock Care",
    tag: "Poultry",
    metric: "99.4% Flocking Yield",
    desc: "Climate sensors and automated feeder lines regulating ammonia, temperature, and feeding.",
    image:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "3",
    title: "Commercial NFT Hydroponics",
    category: "Soilless Tech",
    tag: "Hydroponics",
    metric: "-85% Water Use",
    desc: "Closed-circuit channels circulating mineral nutrients directly to crop root zones.",
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "4",
    title: "Indoor Saffron Farming",
    category: "Red Gold Spice",
    tag: "Saffron",
    metric: "High Profit Crop",
    desc: "Climate-controlled multi-tier rooms replicating pristine harvest conditions year-round.",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "5",
    title: "Living Soil NPK Rejuvenation",
    category: "Agronomy",
    tag: "Soil Lab",
    metric: "100% Bio-Organic",
    desc: "Active biological microbial restoration balancing soil pH and organic carbon retention.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "6",
    title: "HDPE Geo-Membrane Pond Liners",
    category: "Water Conservation",
    tag: "Pondliner",
    metric: "Zero Seepage",
    desc: "500+ micron heavy-duty impermeable barrier membranes preventing irrigation percolation losses.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function FullViewGallery() {
  const [activeId, setActiveId] = useState<string>("1");

  return (
    <div className="h-dvh w-screen overflow-hidden bg-field-sun text-soil-deep flex flex-col p-3 sm:p-5 select-none">
      {/* Top Header */}
      <header className="flex-none flex items-center justify-between pb-3 border-b border-field-sand">
        <div className="flex items-center gap-2">
          <span className="p-1.5 bg-field-meadow border border-field-sand text-leaf-emerald rounded-xl">
            <Sprout className="w-4 h-4 sm:w-5 sm:h-5" />
          </span>
          <span className="font-black text-lg sm:text-xl tracking-tight text-soil-deep">
            Agri<span className="text-leaf-emerald">Pulse</span>
          </span>
          <span className="text-[11px] font-bold text-soil-soft uppercase tracking-wider ml-1 hidden sm:inline">
            / Field Mosaic
          </span>
        </div>

        <span className="text-[11px] font-bold text-leaf-emerald bg-white px-3 py-1 rounded-full border border-field-sand shadow-xs inline-flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-sapling-lime" />
          <span className="hidden sm:inline">Hover over panels</span>
          <span className="sm:hidden">Tap card to expand</span>
        </span>
      </header>

      {/* Responsive Accordion Wall: Vertical on phones (`flex-col`), Horizontal on tablet/desktop (`md:flex-row`) */}
      <main className="grow pt-3 flex flex-col md:flex-row gap-2 sm:gap-3 w-full h-full overflow-hidden">
        {galleryItems.map((item) => {
          const isActive = activeId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              onMouseEnter={() => setActiveId(item.id)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border ${
                isActive
                  ? "flex-5 md:flex-4 border-leaf-emerald ring-2 ring-leaf-emerald/20 shadow-lg"
                  : "flex-1 opacity-75 hover:opacity-90 border-field-sand"
              }`}
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
              />

              {/* Natural Darkening Scrim */}
              <div
                className={`absolute inset-0 bg-soil-deep/60 transition-opacity duration-300 ${
                  isActive ? "opacity-70" : "opacity-40"
                }`}
              />

              {/* Inactive State Badge: Horizontal on mobile, vertical rotated label on desktop */}
              <div
                className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-200 ${
                  isActive ? "opacity-0" : "opacity-100"
                }`}
              >
                <span className="text-[11px] font-black uppercase tracking-wider text-white bg-soil-deep/70 px-3 py-1 rounded-full border border-white/20 md:bg-transparent md:border-0 md:px-0 md:py-0 md:-rotate-90 md:tracking-widest">
                  {item.tag}
                </span>
              </div>

              {/* Active Expanded State: Content Details */}
              <div
                className={`absolute inset-0 p-4 sm:p-6 flex flex-col justify-between text-white transition-all duration-300 ${
                  isActive
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {/* Top Badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-leaf-emerald bg-white px-2.5 py-1 rounded-full shadow-xs">
                    {item.category}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-sapling-lime bg-soil-deep/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-sapling-lime/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-sapling-lime" />
                    <span>{item.metric}</span>
                  </span>
                </div>

                {/* Bottom Text Block */}
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-xl font-black leading-tight drop-shadow-sm text-white">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-field-sand/90 leading-relaxed max-w-lg line-clamp-2">
                    {item.desc}
                  </p>
                  <div className="pt-1 flex items-center gap-1 text-[11px] font-bold text-sapling-lime">
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
