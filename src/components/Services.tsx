import {
  Egg,
  Flower2,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "poultry",
    icon: Egg,
    tag: "Poultry Management",
    tagColor: "bg-amber-100 text-sun-amber border-amber-200",
    title: "Poultry Housing & Bio-Security",
    description:
      "Smart broiler & layer shed automation, digital climate regulators, flock nutrition plans, and disease early-alert systems.",
    benefits: [
      "Automated climate & ventilation sensors",
      "Flock health & biosecurity tracking",
      "Optimized feed-to-egg conversion",
    ],
  },
  {
    id: "horticulture",
    icon: Flower2,
    tag: "Horticulture & Greenhouses",
    tagColor: "bg-emerald-100 text-leaf-emerald border-emerald-200",
    title: "High-Yield Polyhouses & Floriculture",
    description:
      "Turnkey climate-controlled greenhouses, drip fertigation systems, hydroponics, and year-round exotic vegetable propagation.",
    benefits: [
      "Engineered polyhouse structures",
      "Drip micro-fertigation automation",
      "Protection from unseasonal weather",
    ],
  },
  {
    id: "soil",
    icon: FlaskConical,
    tag: "Agronomy & Soil Vitality",
    tagColor: "bg-lime-100 text-sapling-lime border-lime-200",
    title: "Soil Diagnostics & Microbial Care",
    description:
      "Comprehensive lab soil profiling, organic matter restoration, pH rebalancing, and custom micronutrient schedules.",
    benefits: [
      "Full spectrum NPK + micronutrient testing",
      "Microbial bio-fertilizer planning",
      "Natural pest disruption schedules",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-field-sun border-b border-field-sand"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-leaf-emerald font-extrabold uppercase tracking-wider text-xs">
            Comprehensive Field Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-soil-deep tracking-tight">
            Engineered for Health, Yield, and Sustainability
          </h2>
          <p className="text-soil-loam text-base">
            From planting the first sapling to running large-scale automated
            sheds, we support every phase of your agriculture cycle.
          </p>
        </div>

        {/* Services 3-Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white hover:bg-field-meadow/50 rounded-3xl p-8 border border-field-sand hover:border-sapling-lime hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="p-3 bg-field-meadow border border-field-sand text-leaf-emerald rounded-2xl">
                      <Icon className="w-7 h-7" />
                    </span>
                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full border ${service.tagColor}`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-soil-deep mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-soil-loam text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 text-xs font-semibold text-soil-deep mb-8 border-t border-field-sand pt-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-leaf-emerald flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-leaf-emerald hover:text-leaf-hover transition-colors"
                >
                  Consult Specialists <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
