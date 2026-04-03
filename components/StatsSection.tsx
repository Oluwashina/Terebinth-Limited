import Image, { StaticImageData } from "next/image";

export interface StatItem {
  number: string;
  label: string;
}

export interface TrustBadge {
  icon: StaticImageData;
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center py-8 border-r-[0.8px] border-[#E5E7EB] last:border-0">
              <p className="text-2xl sm:text-3xl font-bold text-[[#1F2933]] mb-2">
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-wide text-[#6B7280] font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges - Horizontal */}
        <div className="flex flex-wrap items-center py-8 justify-center gap-6 text-center">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <span className="text-[#6B7280] mx-2">•</span>}
              <div className="flex items-center gap-2">
                <Image
                    src={badge.icon}
                    alt={badge.text}
                    width={20}
                    height={20}
                />
                <p className={`text-xs sm:text-sm text-${badge.textColor || '[#AD9551]'}`}>
                  {badge.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}