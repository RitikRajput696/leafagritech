import { Sparkles, ArrowRight, Sun } from "lucide-react";

export default function Hero() {
  const stats = [
    { value: "240k+", label: "Acres Revitalized" },
    { value: "98.4%", label: "Hatchery Health Rate" },
    { value: "1,200+", label: "Family & Tech Farms" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-field-sun via-field-meadow to-field-sun pt-12 pb-24 lg:pt-20 lg:pb-32 border-b border-field-sand">
      {/* Warm Ambient Sunlight Accent */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-lime-100/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Editorial Copy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-field-meadow border border-sapling-lime/40 text-leaf-emerald text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sapling-lime" />
            Fresh Agricultural Systems
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-soil-deep leading-[1.14] tracking-tight">
            Cultivating Life from{" "}
            <span className="text-leaf-emerald">Living Soil</span> to{" "}
            <span className="underline decoration-sapling-lime decoration-4 underline-offset-4">
              Healthy Flocks.
            </span>
          </h1>

          <p className="text-lg text-soil-loam max-w-xl leading-relaxed">
            Turn your land into an abundant, resilient ecosystem. We deliver
            integrated horticulture polyhouses, automated poultry
            infrastructure, and organic soil regeneration.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#services"
              className="px-8 py-4 rounded-full bg-leaf-emerald hover:bg-leaf-hover text-white font-bold shadow-lg shadow-leaf-emerald/25 transition-all flex items-center gap-2 text-sm"
            >
              Explore Services <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white border border-field-sand text-soil-deep font-bold hover:bg-field-meadow shadow-sm transition-all text-sm"
            >
              Book Field Inspection
            </a>
          </div>

          {/* Earth Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-field-sand">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-2xl sm:text-3xl font-extrabold text-soil-deep">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-soil-soft font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Agricultural Visual Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Soft Green Glow Behind Image */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-sapling-lime/20 to-leaf-emerald/20 rounded-3xl blur-xl" />

            <div className="relative bg-white rounded-3xl p-4 shadow-xl border border-field-sand">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80"
                alt="Green wheat field in morning light"
                className="w-full h-80 object-cover rounded-2xl mb-4 shadow-sm"
              />

              {/* Status Floating Box */}
              <div className="flex items-center justify-between p-4 bg-field-meadow rounded-2xl border border-field-sand">
                <div className="flex items-center gap-3">
                  <span className="p-2.5 bg-white text-leaf-emerald rounded-xl border border-field-sand shadow-xs">
                    <Sun className="w-5 h-5 text-sun-amber" />
                  </span>
                  <div>
                    <div className="text-[11px] text-soil-soft font-bold uppercase tracking-wider">
                      Field Condition
                    </div>
                    <div className="text-sm font-extrabold text-soil-deep">
                      Optimal Growth Phase
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-leaf-emerald bg-white border border-field-sand px-3 py-1 rounded-full shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-sapling-lime animate-ping" />{" "}
                  Live Telemetry
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
