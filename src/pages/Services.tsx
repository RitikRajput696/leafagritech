import { primaryServices, whyChooseUsList } from "../data/servicesData";
import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function Services() {
  return (
    <div className="bg-field-sun text-soil-deep min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-field-meadow to-field-sun border-b border-field-sand">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-field-sand text-leaf-emerald text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sapling-lime" />
            Dedicated Agricultural Care
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-soil-deep tracking-tight">
            Our <span className="text-leaf-emerald">Services</span>
          </h1>

          <p className="text-soil-loam text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Reliable lifecycle management, scheduled system maintenance, and
            risk-free harvest buybacks designed to keep your agro-investments
            secure.
          </p>
        </div>
      </section>

      {/* "WHAT WE OFFER" Detailed Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center">
            <span className="text-leaf-emerald font-black uppercase tracking-widest text-xs">
              What We Offer
            </span>
            <h2 className="text-3xl font-black text-soil-deep mt-1">
              End-to-End Operational Support
            </h2>
          </div>

          {primaryServices.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl border border-field-sand shadow-lg overflow-hidden grid lg:grid-cols-12 items-center hover:border-sapling-lime transition-all duration-300"
              >
                {/* Image Section */}
                <div
                  className={`lg:col-span-6 h-80 lg:h-[420px] relative overflow-hidden bg-field-meadow ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 bg-white/95 backdrop-blur-sm border border-field-sand text-soil-deep text-xs font-black uppercase tracking-wider rounded-full shadow-xs">
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`lg:col-span-6 p-8 sm:p-12 space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="p-3 bg-field-meadow border border-field-sand text-leaf-emerald rounded-2xl shadow-xs">
                      <Icon className="w-6 h-6" />
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-soil-deep">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-soil-loam text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Checklist */}
                  <ul className="space-y-3 pt-2">
                    {service.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm font-semibold text-soil-deep"
                      >
                        <span className="p-1 bg-field-meadow border border-field-sand rounded-full text-leaf-emerald mt-0.5 flex-shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <div className="pt-4">
                    <a
                      href={service.href}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-leaf-emerald hover:bg-leaf-hover text-white text-sm font-extrabold shadow-md shadow-leaf-emerald/20 transition-all"
                    >
                      {service.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* "WHY CHOOSE US?" Section */}
      <section className="py-20 bg-field-meadow border-t border-field-sand">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <span className="text-leaf-emerald font-black uppercase tracking-widest text-xs">
              Why Choose Us?
            </span>
            <h2 className="text-3xl font-black text-soil-deep">
              Built on Trust, Field Experience & Tech
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsList.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-7 border border-field-sand hover:border-sapling-lime hover:shadow-md transition-all text-center flex flex-col items-center justify-start space-y-4"
                >
                  <div className="w-14 h-14 bg-field-meadow border border-field-sand text-leaf-emerald rounded-2xl flex items-center justify-center shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-black text-soil-deep">
                    {item.title}
                  </h4>
                  <p className="text-soil-loam text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
