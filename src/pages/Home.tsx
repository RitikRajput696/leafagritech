import { useState } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";

import {
  PhoneCall,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Droplets,
  ThermometerSnowflake,
} from "lucide-react";

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-field-sun text-soil-deep flex flex-col antialiased selection:bg-sapling-lime selection:text-white">
      {/* 1. TOP TICKER / NOTIFICATION BANNER */}
      <div className="bg-field-meadow text-soil-deep text-xs sm:text-sm py-2.5 px-4 text-center font-semibold border-b border-field-sand">
        🌱 Sustainable farm engineering, poultry telemetry & greenhouse setups —{" "}
        <a
          href="#services"
          className="underline text-leaf-emerald hover:text-leaf-hover font-bold ml-1 transition-colors inline-flex items-center gap-1"
        >
          View all agro practices <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      <main className="grow">
        {/* 3. HERO SHOWCASE */}
        <Hero />

        {/* 4. WHY CHOOSE US / TRUST BANNER */}
        <section className="py-12 bg-white border-b border-field-sand">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-soil-soft mb-8">
              Empowering Regenerative & Tech-Driven Agriculture Across Domains
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 rounded-2xl bg-field-meadow/60 border border-field-sand">
                <div className="text-3xl font-black text-leaf-emerald">
                  100%
                </div>
                <div className="text-xs font-semibold text-soil-loam mt-1">
                  Organic Soil Compliance
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-field-meadow/60 border border-field-sand">
                <div className="text-3xl font-black text-leaf-emerald">
                  -35%
                </div>
                <div className="text-xs font-semibold text-soil-loam mt-1">
                  Water Waste via Drip Tech
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-field-meadow/60 border border-field-sand">
                <div className="text-3xl font-black text-leaf-emerald">
                  24/7
                </div>
                <div className="text-xs font-semibold text-soil-loam mt-1">
                  Hatchery Environment IoT
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-field-meadow/60 border border-field-sand">
                <div className="text-3xl font-black text-leaf-emerald">
                  +40%
                </div>
                <div className="text-xs font-semibold text-soil-loam mt-1">
                  Average Yield Increase
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SERVICES GRID (POULTRY, HORTICULTURE, SOIL) */}
        <Services />

        {/* 6. FEATURE FOCUS: POULTRY & CLIMATE TECH */}
        <section
          id="poultry"
          className="py-20 bg-field-meadow border-b border-field-sand"
        >
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-field-sand text-xs font-bold text-leaf-emerald uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-sapling-lime" />{" "}
                Specialized Poultry Systems
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-soil-deep tracking-tight">
                Flock Biosecurity & Automated Climate Automation
              </h2>
              <p className="text-soil-loam text-base leading-relaxed">
                Poultry yields depend heavily on temperature, air turnover, and
                feed timing. Our turnkey automated sheds regulate ammonia
                levels, feed delivery, and temperature in real-time.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-white text-leaf-emerald rounded-lg border border-field-sand mt-0.5">
                    <ThermometerSnowflake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-soil-deep text-sm">
                      Automated Air Quality & Temperature
                    </h4>
                    <p className="text-xs text-soil-loam">
                      Variable speed extraction fans maintain optimum
                      micro-climates for layers and broilers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-white text-leaf-emerald rounded-lg border border-field-sand mt-0.5">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-soil-deep text-sm">
                      Sensor-Regulated Nipple Drinkers
                    </h4>
                    <p className="text-xs text-soil-loam">
                      Eliminates damp litter bed issues and ensures clean
                      medication delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-white text-leaf-emerald rounded-lg border border-field-sand mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-soil-deep text-sm">
                      Bio-Security Perimeter Defenses
                    </h4>
                    <p className="text-xs text-soil-loam">
                      Strict hygiene station planning and isolation systems to
                      prevent pathogen introductions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white p-4 rounded-3xl border border-field-sand shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=900&q=80"
                  alt="Modern Poultry Livestock"
                  className="w-full h-80 object-cover rounded-2xl mb-4"
                />
                <div className="p-4 bg-field-sun rounded-xl border border-field-sand flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-soil-soft uppercase">
                      Broiler Batch Health
                    </span>
                    <h5 className="font-black text-soil-deep text-base">
                      99.2% Uniform Growth Rate
                    </h5>
                  </div>
                  <span className="px-3 py-1 text-xs font-extrabold bg-leaf-emerald text-white rounded-full">
                    Optimal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CONTACT / CONSULTATION REQUEST SECTION */}
        <section
          id="contact"
          className="py-20 bg-field-sun border-b border-field-sand"
        >
          <div className="max-w-4xl mx-auto px-6 text-center space-y-4 mb-10">
            <span className="text-leaf-emerald font-extrabold uppercase tracking-wider text-xs">
              Direct Field Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-soil-deep tracking-tight">
              Schedule an Agronomist Field Inspection
            </h2>
            <p className="text-soil-loam text-sm max-w-xl mx-auto">
              Tell us about your farm layout, poultry sheds, or soil challenges.
              Our engineers will visit your land or set up an initial
              consultation call.
            </p>
          </div>

          <div className="max-w-2xl mx-auto px-6">
            <div className="bg-white p-8 rounded-3xl border border-field-sand shadow-xl">
              {formSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 bg-field-meadow text-leaf-emerald rounded-full flex items-center justify-center mx-auto border border-field-sand">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-soil-deep">
                    Inspection Request Logged
                  </h3>
                  <p className="text-sm text-soil-loam">
                    Our regional agronomy representative will contact you within
                    24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-leaf-emerald underline pt-2"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-soil-deep uppercase mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Miller"
                        className="w-full bg-field-sun border border-field-sand rounded-xl px-4 py-3 text-sm text-soil-deep focus:outline-none focus:border-leaf-emerald transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-soil-deep uppercase mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-field-sun border border-field-sand rounded-xl px-4 py-3 text-sm text-soil-deep focus:outline-none focus:border-leaf-emerald transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-soil-deep uppercase mb-1">
                      Farm Service Needed
                    </label>
                    <select className="w-full bg-field-sun border border-field-sand rounded-xl px-4 py-3 text-sm text-soil-deep focus:outline-none focus:border-leaf-emerald transition">
                      <option>
                        Poultry Farm Infrastructure & Climate Sensors
                      </option>
                      <option>Precision Polyhouse & Floriculture Design</option>
                      <option>
                        Full Laboratory Soil Test & Agronomy Advice
                      </option>
                      <option>Commercial Drip Fertigation Retrofitting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-soil-deep uppercase mb-1">
                      Farm Location & Acreage
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify your location, approximate acres, and current issues..."
                      className="w-full bg-field-sun border border-field-sand rounded-xl px-4 py-3 text-sm text-soil-deep focus:outline-none focus:border-leaf-emerald transition"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-leaf-emerald hover:bg-leaf-hover text-white font-extrabold rounded-xl shadow-md transition flex items-center justify-center gap-2"
                  >
                    Submit Field Request <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* 8. QUICK DIRECT PHONE CTA STRIP */}
        <section className="bg-linear-to-r from-leaf-emerald to-leaf-hover text-white py-14">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Need immediate advice on flock or crops?
              </h3>
              <p className="text-emerald-100 text-sm">
                Emergency agronomists and veterinarians available on field
                dispatch.
              </p>
            </div>
            <a
              href="tel:+18005553276"
              className="px-8 py-4 rounded-full bg-white text-soil-deep font-extrabold hover:bg-field-sun transition-all shadow-lg flex items-center gap-2.5 whitespace-nowrap text-sm"
            >
              <PhoneCall className="w-4 h-4 text-leaf-emerald" /> +1 (800)
              555-FARM
            </a>
          </div>
        </section>
      </main>

      {/* 9. COMPLETE AGRICULTURAL FOOTER */}
      <Footer />
    </div>
  );
}
