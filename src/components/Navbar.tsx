import { useState } from "react";
import { Link } from "react-router-dom";
import { Sprout, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-field-sun/90 backdrop-blur-md border-b border-field-sand text-soil-deep">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-black text-2xl tracking-tight text-soil-deep"
        >
          <span className="p-2.5 bg-field-meadow border border-field-sand text-leaf-emerald rounded-2xl shadow-sm">
            <Sprout className="w-6 h-6" />
          </span>
          <span>
            Leaf<span className="text-leaf-emerald"> Agritech</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-soil-loam">
          <Link to="/" className="hover:text-leaf-emerald transition-colors">
            Home
          </Link>
          <Link
            to="/Projects"
            className="hover:text-leaf-emerald transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/Services"
            className="hover:text-leaf-emerald transition-colors"
          >
            Services
          </Link>
          <Link
            to="/About"
            className="hover:text-leaf-emerald transition-colors"
          >
            About Us
          </Link>
          <a
            href="/Gallery"
            className="hover:text-leaf-emerald transition-colors"
          >
            Gallery
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-sm font-bold text-white bg-leaf-emerald hover:bg-leaf-hover shadow-md shadow-leaf-emerald/20 transition-all flex items-center gap-1.5"
          >
            Get in Touch <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-soil-deep hover:text-leaf-emerald"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-field-meadow border-b border-field-sand px-6 py-5 space-y-4">
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block font-semibold text-soil-deep"
          >
            Services
          </a>
          <a
            href="#poultry"
            onClick={() => setIsOpen(false)}
            className="block font-semibold text-soil-deep"
          >
            Poultry Care
          </a>
          <a
            href="#horticulture"
            onClick={() => setIsOpen(false)}
            className="block font-semibold text-soil-deep"
          >
            Horticulture
          </a>
          <a
            href="#soil"
            onClick={() => setIsOpen(false)}
            className="block font-semibold text-soil-deep"
          >
            Soil & Agronomy
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center py-2.5 rounded-full font-bold text-white bg-leaf-emerald mt-2"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
