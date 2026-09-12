import React from "react";
import {
  Sprout,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-field-meadow border-t border-field-sand text-soil-loam">
      {/* Upper Footer: Branding, Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#"
              className="flex items-center gap-2.5 font-black text-2xl tracking-tight text-soil-deep"
            >
              <span className="p-2.5 bg-white border border-field-sand text-leaf-emerald rounded-2xl shadow-sm">
                <Sprout className="w-6 h-6" />
              </span>
              <span>
                Agri<span className="text-leaf-emerald">Pulse</span>
              </span>
            </a>

            <p className="text-sm leading-relaxed text-soil-loam pr-4">
              Modernizing agricultural ecosystems from the ground up. We bring
              automated poultry housing, precision greenhouse horticulture, and
              living soil science to commercial and family farms.
            </p>

            <div className="flex items-center gap-4 text-xs font-bold text-soil-deep pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-leaf-emerald" /> Certified
                Agri-Advisors
              </span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-leaf-emerald" />{" "}
                Eco-Positive
              </span>
            </div>
          </div>

          {/* Col 2: Services Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-soil-deep">
              Agro Solutions
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a
                  href="#poultry"
                  className="hover:text-leaf-emerald transition-colors"
                >
                  Automated Poultry Sheds
                </a>
              </li>
              <li>
                <a
                  href="#poultry"
                  className="hover:text-leaf-emerald transition-colors"
                >
                  Flock Bio-Security & Feeds
                </a>
              </li>
              <li>
                <a
                  href="#horticulture"
                  className="hover:text-leaf-emerald transition-colors"
                >
                  Precision Polyhouses & Floriculture
                </a>
              </li>
              <li>
                <a
                  href="#horticulture"
                  className="hover:text-leaf-emerald transition-colors"
                >
                  Drip Fertigation & Hydroponics
                </a>
              </li>
              <li>
                <a
                  href="#soil"
                  className="hover:text-leaf-emerald transition-colors"
                >
                  Soil Lab Diagnostics & NPK Audit
                </a>
              </li>
              <li>
                <a
                  href="#soil"
                  className="hover:text-leaf-emerald transition-colors"
                >
                  Microbial Soil Revitalization
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Details (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-soil-deep">
              Field Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-leaf-emerald flex-shrink-0 mt-1" />
                <span>Valley Agritech Zone, Sector 4, Agropolis</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-leaf-emerald flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-leaf-emerald transition-colors"
                >
                  +1 (800) 555-FARM
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-leaf-emerald flex-shrink-0" />
                <a
                  href="mailto:support@agripulse.farm"
                  className="hover:text-leaf-emerald transition-colors"
                >
                  support@agripulse.farm
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter / Advisory Updates (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-soil-deep">
              Field Advisory Dispatch
            </h4>
            <p className="text-xs leading-relaxed text-soil-loam">
              Receive seasonal crop protection warnings, poultry climate alerts,
              and organic yield guides once a month.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-2 pt-1"
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter farm email address"
                  className="w-full bg-white border border-field-sand rounded-xl px-3.5 py-2.5 text-xs text-soil-deep placeholder-soil-soft focus:outline-none focus:border-leaf-emerald transition"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-leaf-emerald hover:bg-leaf-hover text-white text-xs font-bold rounded-xl shadow-sm transition flex items-center justify-center gap-1.5"
              >
                Subscribe to Field Alerts <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Lower Bar: Copyright & Compliance */}
      <div className="border-t border-field-sand/80 bg-field-sun py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-soil-soft">
          <p>© 2026 AgriPulse Agro Services Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium">
            <a href="#" className="hover:text-leaf-emerald transition-colors">
              Bio-Safety Compliance
            </a>
            <a href="#" className="hover:text-leaf-emerald transition-colors">
              Organic Soil Standards
            </a>
            <a href="#" className="hover:text-leaf-emerald transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-leaf-emerald transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
