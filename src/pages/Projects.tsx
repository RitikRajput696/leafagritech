// import AgriCard from "../components/AgriCard";
// import { Egg, Flower2, FlaskConical, Droplets } from "lucide-react";

// function Projects() {
//   //   const projects = [{}];
//   return (
//     <section className="py-16 bg-field-sun">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Card 1: Poultry */}
//           <AgriCard
//             image="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80"
//             imageAlt="Commercial layer chickens in automated house"
//             badgeText="Livestock"
//             icon={Egg}
//             title="Automated Broiler & Layer Housing"
//             description="Integrated poultry telemetry, climate controllers, automated feeder lines, and bio-security protocols designed to maximize flock weight and egg yields."
//             actionText="Explore Poultry Tech"
//             href="#poultry"
//           />

//           {/* Card 2: Horticulture */}
//           <AgriCard
//             image="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
//             imageAlt="High yield strawberry greenhouse"
//             badgeText="Horticulture"
//             icon={Flower2}
//             title="Climate-Controlled Polyhouses"
//             description="Engineered greenhouse enclosures with automated curtain venting, misting units, and organic floriculture substrates for year-round harvesting."
//             actionText="View Greenhouse Models"
//             href="#horticulture"
//           />

//           {/* Card 3: Soil Science */}
//           <AgriCard
//             image="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80"
//             imageAlt="Fertile crop soil testing"
//             badgeText="Agronomy"
//             icon={FlaskConical}
//             title="Living Soil Diagnostics & NPK Profiling"
//             description="Complete lab-grade chemical and microbial testing to restore degraded earth, optimize fertility, and balance pH without chemical burn."
//             actionText="Request Soil Kit"
//             href="#soil"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;

import { useState, useMemo } from "react";
import AgriCard from "../components/AgriCard";
import { projectsData } from "../data/projectsData";
import { Sparkles, ArrowRight, PhoneCall } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    return ["All", ...new Set(projectsData.map((item) => item.category))];
  }, []);

  // Filter projects based on active pill
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projectsData;
    return projectsData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-field-sun text-soil-deep min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-field-meadow to-field-sun border-b border-field-sand overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-field-sand text-leaf-emerald text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sapling-lime" />
            End-To-End Agribusiness Solutions
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-soil-deep tracking-tight">
            Explore Our <span className="text-leaf-emerald">Projects</span>
          </h1>

          <p className="text-soil-loam text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From precision polyhouses and automated poultry systems to
            aquaculture and saffron propagation — explore our turn-key agro
            initiatives.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 sticky top-20 z-40 bg-field-sun/90 backdrop-blur-md border-b border-field-sand">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold whitespace-nowrap transition-all border ${
                  selectedCategory === cat
                    ? "bg-leaf-emerald text-white border-leaf-emerald shadow-md shadow-leaf-emerald/20"
                    : "bg-white text-soil-loam border-field-sand hover:border-leaf-emerald hover:text-soil-deep"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <AgriCard
                key={project.id}
                image={project.image}
                imageAlt={project.title}
                badgeText={project.category}
                icon={project.icon}
                title={project.title}
                description={project.description}
                actionText="Explore Details"
                href={`#${project.id}`}
                onActionClick={() =>
                  console.log(`Navigating to ${project.title}`)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <section className="bg-field-meadow border-t border-field-sand py-16">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h3 className="text-3xl font-black text-soil-deep tracking-tight">
            Have land or want to start a turnkey agri-project?
          </h3>
          <p className="text-soil-loam text-sm leading-relaxed max-w-xl mx-auto">
            Our agro-engineers handle full site feasibility audits, subsidies,
            structure fabrication, seed propagation, and automation setups.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-leaf-emerald hover:bg-leaf-hover text-white font-extrabold shadow-md transition flex items-center gap-2 text-sm"
            >
              Request Feasibility Report <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+1234567890"
              className="px-8 py-3.5 rounded-full bg-white border border-field-sand text-soil-deep font-bold hover:bg-field-sun transition text-sm flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-leaf-emerald" /> Speak with
              Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
