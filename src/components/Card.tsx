// import React from "react";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AgriCardProps {
  image: string;
  imageAlt?: string;
  badgeText?: string;
  icon: LucideIcon;
  title: string;
  description: string;
  actionText?: string;
  href?: string;
  onActionClick?: () => void;
  className?: string;
}

export default function AgriCard({
  image,
  imageAlt = "Agricultural service visual",
  badgeText,
  icon: Icon,
  title,
  description,
  actionText = "Explore Solution",
  href = "#",
  onActionClick,
  className = "",
}: AgriCardProps) {
  return (
    <div
      className={`group bg-white rounded-3xl border border-field-sand overflow-hidden shadow-sm hover:shadow-xl hover:border-sapling-lime/60 transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Card Image Header with Floating Icon Badge */}
        <div className="relative h-52 w-full overflow-hidden bg-field-meadow">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Subtle Sun-Shield Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-soil-deep/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

          {/* Icon Badge (Sunken into the bottom corner of the image) */}
          <div className="absolute bottom-3 left-4 p-2.5 bg-field-sun/95 backdrop-blur-sm border border-field-sand rounded-2xl text-leaf-emerald shadow-md flex items-center justify-center">
            <Icon className="w-5 h-5" />
          </div>

          {/* Optional Category Pill */}
          {badgeText && (
            <span className="absolute top-3 right-3 px-3 py-1 bg-white/95 backdrop-blur-sm border border-field-sand text-soil-deep text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-xs">
              {badgeText}
            </span>
          )}
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-xl font-black text-soil-deep tracking-tight mb-2.5 group-hover:text-leaf-emerald transition-colors leading-snug">
            {title}
          </h3>

          <p className="text-soil-loam text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      {/* Footer / Interactive Action */}
      <div className="px-6 pb-6 pt-2 border-t border-field-sand/60 flex items-center justify-between mt-auto">
        <a
          href={href}
          onClick={onActionClick}
          className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-leaf-emerald hover:text-leaf-hover transition-colors"
        >
          <span>{actionText}</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <div className="w-1.5 h-1.5 rounded-full bg-sapling-lime" />
      </div>
    </div>
  );
}
