import { useState } from "react";
import { aboutPillars, valueBadges } from "../data/aboutData";
import {
  Sparkles,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  Sprout,
  ShieldCheck,
  X,
} from "lucide-react";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [callSubmitted, setCallSubmitted] = useState(false);

  return (
    <div className="bg-field-sun text-soil-deep min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative py-20 bg-linear-to-b from-field-meadow to-field-sun border-b border-field-sand overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-field-sand text-leaf-emerald text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sapling-lime" />
            Our Vision & Journey
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-soil-deep tracking-tight">
            About <span className="text-leaf-emerald">Fresh-Agriculture</span>
          </h1>

          <p className="text-soil-loam text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Where innovation and agriculture grow together for a sustainable,
            tech-driven future.
          </p>
        </div>
      </section>

      {/* 2. Story Section with Image */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Story */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-field-meadow border border-field-sand text-xs font-bold text-leaf-emerald uppercase tracking-wider">
              <Sprout className="w-3.5 h-3.5" /> About Fresh-Agriculture
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-soil-deep leading-tight tracking-tight">
              Transforming Traditional Fields into Smart, Resilient Ecosystems.
            </h2>

            <div className="space-y-4 text-soil-loam text-sm sm:text-base leading-relaxed">
              <p>
                Welcome to{" "}
                <strong className="text-soil-deep font-bold">
                  Leaf Agritech
                </strong>{" "}
                — where innovation and agriculture grow together for a
                sustainable future.
              </p>
              <p>
                We are committed to transforming traditional farming into smart,
                efficient, and technology-driven agriculture. With over 3+ years
                of experience in the agricultural sector, we provide modern
                farming solutions that help farmers increase productivity,
                reduce operational costs, and adopt environmentally responsible
                practices.
              </p>
              <p>
                We believe that the future of farming lies in the perfect
                combination of technology, sustainability, and practical
                agricultural knowledge. Our goal is to empower farmers with
                advanced tools and innovative techniques that make farming more
                profitable, efficient, and future-ready.
              </p>
              <p>
                Through our innovative approach, we help farmers make informed
                decisions, optimize resources, improve crop quality, and
                maximize yields while protecting the environment. We focus on
                reducing water wastage, improving soil health, and promoting
                eco-friendly farming methods that support long-term agricultural
                growth.
              </p>
              <p>
                We understand the real challenges faced by modern farmers.
                That’s why we work closely with agricultural communities to
                deliver practical, reliable, and affordable solutions tailored
                to their farming needs. Our mission is to contribute toward
                global food security and build a smarter agricultural ecosystem
                where technology empowers every farmer to succeed.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-3.5 rounded-full bg-leaf-emerald hover:bg-leaf-hover text-white text-sm font-extrabold shadow-md shadow-leaf-emerald/20 transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Get a Call Back
              </button>
            </div>
          </div>

          {/* Right Showcase Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative bg-white rounded-3xl p-4 shadow-xl border border-field-sand">
                <img
                  src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80"
                  alt="Mushroom Cultivation Cluster"
                  className="w-full h-[120] object-cover rounded-2xl shadow-inner"
                />

                {/* Floating Bottom Card */}
                <div className="p-4 bg-field-meadow rounded-2xl border border-field-sand mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 bg-white text-leaf-emerald rounded-xl border border-field-sand shadow-xs">
                      <ShieldCheck className="w-5 h-5" />
                    </span>
                    <div>
                      <div className="text-[11px] text-soil-soft font-bold uppercase tracking-wider">
                        Certified Practice
                      </div>
                      <div className="text-sm font-extrabold text-soil-deep">
                        Eco-Friendly Agriculture
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-black text-leaf-emerald bg-white px-3 py-1 rounded-full border border-field-sand">
                    3+ Yrs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 7 Solution Pillars Grid */}
      <section className="py-20 bg-field-meadow border-t border-field-sand">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-leaf-emerald font-extrabold uppercase tracking-wider text-xs">
              Specialized Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-soil-deep tracking-tight">
              Comprehensive Technology Capabilities
            </h2>
            <p className="text-soil-loam text-sm leading-relaxed">
              Seven integrated pillars engineered to improve farm productivity,
              decrease wastage, and automate routine field tasks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {aboutPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-white rounded-2xl p-6 border border-field-sand hover:border-sapling-lime hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <span className="w-12 h-12 rounded-xl bg-field-meadow border border-field-sand text-leaf-emerald flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </span>
                    <h3 className="text-lg font-black text-soil-deep leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-soil-loam leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Six Core Value Badges */}
      <section className="py-16 bg-white border-t border-field-sand">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {valueBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.id}
                  className="flex items-center gap-3 p-4 sm:p-5 rounded-2xl bg-field-sun border border-field-sand hover:border-leaf-emerald hover:bg-field-meadow/50 transition-colors shadow-xs"
                >
                  <span className="p-2.5 bg-white border border-field-sand text-leaf-emerald rounded-xl shadow-xs shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-xs sm:text-sm font-black text-soil-deep leading-snug">
                    {badge.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Call Back Popup Modal */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 z-50 bg-soil-deep/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl border border-field-sand max-w-md w-full p-6 sm:p-8 relative shadow-2xl space-y-5"
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-soil-soft hover:text-soil-deep"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {callSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-field-meadow text-leaf-emerald rounded-full flex items-center justify-center mx-auto border border-field-sand">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-soil-deep">
                  Call Scheduled!
                </h4>
                <p className="text-xs text-soil-loam">
                  Our agronomist team will call you back within business hours.
                </p>
                <button
                  onClick={() => {
                    setCallSubmitted(false);
                    setModalOpen(false);
                  }}
                  className="text-xs font-bold text-leaf-emerald underline pt-2"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div>
                  <h3 className="text-xl font-black text-soil-deep">
                    Request a Call Back
                  </h3>
                  <p className="text-xs text-soil-loam mt-1">
                    Leave your details and an agricultural advisor will reach
                    out shortly.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setCallSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-[11px] font-bold text-soil-deep uppercase mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-field-sun border border-field-sand rounded-xl px-3.5 py-2.5 text-xs text-soil-deep focus:outline-none focus:border-leaf-emerald transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-soil-deep uppercase mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-field-sun border border-field-sand rounded-xl px-3.5 py-2.5 text-xs text-soil-deep focus:outline-none focus:border-leaf-emerald transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-leaf-emerald hover:bg-leaf-hover text-white text-xs font-black rounded-xl shadow-md transition flex items-center justify-center gap-1.5"
                  >
                    Confirm Callback <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
