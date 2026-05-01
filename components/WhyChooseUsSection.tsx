import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface FeatureCard {
  icon: StaticImageData;
  title: string;
  description: string;
}

export interface WhyChooseUsSectionProps {
  label: string;
  title: string;
  subtitle: string;
  features: FeatureCard[];
  buttons?: Array<{
    label: string;
    href: string;
    variant?: 'solid' | 'outline';
  }>;
  gridCols?: 'md:grid-cols-2' | 'md:grid-cols-2 lg:grid-cols-3';
  gap?: string;
}

export default function WhyChooseUsSection({
  label,
  title,
  subtitle,
  features,
  buttons = [],
  gridCols = 'md:grid-cols-2 lg:grid-cols-3',
  gap = 'gap-0 lg:gap-6',
}: WhyChooseUsSectionProps) {
  return (
    <section className="bg-[#FAF8F4] py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#AD9451] mb-3">
            {label}
          </p>
          <h2 className="text-2xl sm:text-3xl max-w-xl lg:text-4xl font-bold text-[#1F2933] mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-[#6B7280] text-base sm:text-base max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-1 ${gridCols} ${gap}`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 border-[0.8px] border-[#E5E7EB] rounded-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="mb-4">
                 <div className="bg-[#F0E8D5] w-10 h-10 rounded-full flex justify-center items-center">
                    <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={18}
                        height={18}
                    />
                </div>
             </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#1F2933] mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B7280] leading-relaxed text-sm max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        {buttons.length > 0 && (
          <div className="flex mt-12 flex-col sm:flex-row justify-center gap-4">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={`px-8 py-3 rounded-full font-medium text-[15px] text-center transition whitespace-nowrap ${
                  button.variant === 'outline'
                    ? 'border-2 border-[#AD9451] text-[#AD9451] hover:bg-[#AD9451] hover:text-white'
                    : 'bg-[#AD9451] text-white hover:bg-[#8B6D3C]'
                }`}
              >
                {button.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}