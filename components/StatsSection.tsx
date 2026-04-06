import Image, { StaticImageData } from "next/image";
import React from "react";

export interface StatItem {
  number: string;
  label: string;
}

export interface TrustBadge {
  icon?: StaticImageData;
  text: string;
  textColor?: string;
}

export interface StatsSectionProps {
  stats: StatItem[];
  badges: TrustBadge[];
}

export default function StatsSection({ stats, badges }: StatsSectionProps) {
  return (
    <section className="bg-white px-6 border-b-[0.8px] border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center py-8 md:border-r-[0.8px] md:border-[#E5E7EB] md:last:border-0">
              <p className="text-2xl sm:text-3xl font-semibold text-[[#1F2933]] mb-2">
                {stat.number}
              </p>
              <p className="text-xs uppercase tracking-wide text-[#6B7280] font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges - Horizontal */}
        <div className="flex flex-wrap items-center py-6 md:py-8 md:justify-center gap-4 md:gap-6 text-center">
          {badges.map((badge, index) => (
            <React.Fragment key={index}>
            {index === 2 && <span className="bg-[#E5E7EB] hidden md:block w-px h-6"></span>}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                {badge.icon && (
                  <Image
                    src={badge.icon}
                    alt={badge.text}
                    width={20}
                    height={20}
                  />
                )}
                <p className={`text-xs sm:text-sm text-${badge.textColor || '[#AD9551]'}`}>
                  {badge.text}
                </p>
              </div>
            </div>
            </React.Fragment>
          ))}
        </div>
        
      </div>
    </section>
  );
}