import { StaticImageData } from "next/image";
import Image from "next/image";

export interface ValueCard {
  icon: StaticImageData;
  title: string;
  description: string;
}

export interface ValuesSectionProps {
  label: string;
  title: string;
  subtitle: string;
  values: ValueCard[];
  bgColor?: string;
}

export default function ValuesSection({ label, title, subtitle, values, bgColor = "bg-white" }: ValuesSectionProps) {
  return (
    <section className={`${bgColor} py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#AD9551] mb-3">
            {label}
          </p>
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-[#1F2933] mb-3 leading-tight">
            {title}
          </h2>
          <p className="text-[#6B7280] max-w-lg text-sm sm:text-[15px] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 lg:gap-1">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 md:p-8 md:rounded-lg hover:shadow-lg transition md:border-none border-[1.1px] border-[#E5E7EB]">
              {/* Icon */}
              <div className="mb-6">
                <div className="bg-[#F0E8D5] w-10 h-10 rounded-full flex justify-center items-center">
                <Image
                    src={value.icon}
                    alt={value.title}
                    width={18}
                    height={18}
                />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold font-lato text-[#1F2933] mb-3">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B7280] leading-relaxed max-w-xs text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}