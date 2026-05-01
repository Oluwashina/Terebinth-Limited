import Image, { StaticImageData } from 'next/image';

export interface SharedFeature {
  icon: StaticImageData;
  title: string;
  description: string;
}

export interface HomesSharedSectionProps {
  label: string;
  title: string;
  subtitle: string;
  features: SharedFeature[];
}

export default function HomesSharedSection({
  label,
  title,
  subtitle,
  features,
}: HomesSharedSectionProps) {
  return (
    <section className="bg-[#2B271E] py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20 md:rounded-tr-[100px] md:rounded-bl-[100px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#AD9551] mb-3">
            {label}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-[#FFFFFF80] max-w-xl mx-auto leading-relaxed text-sm sm:text-[15px]">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-[0.8px] border-[#5A5751] p-6 sm:p-8 flex flex-col items-start hover:border-[#AD9451] transition bg[#2B271E]"
            >
            <div className='flex gap-4 items-start'>

              {/* Icon */}
              <div className="bg-[#AD95512E] shrink-0 rounded-full w-9 h-9 flex items-center justify-center mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={16}
                  height={16}
                  className="opacity-80"
                />
              </div>

              <div>
                {/* Title */}
                <h3 className="text-sm sm:text-base font-medium text-white mb-2">
                    {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#FFFFFF73] text-sm leading-relaxed">
                    {feature.description}
                </p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}