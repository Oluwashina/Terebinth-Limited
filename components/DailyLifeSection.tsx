import Image, { StaticImageData } from 'next/image';

export interface DailyLifeCard {
  icon: StaticImageData;
  title: string;
  description: string;
}

export interface DailyLifeSectionProps {
  label: string;
  title: string;
  subtitle: string;
  cards: DailyLifeCard[];
  backgroundColor?: string;
}

export default function DailyLifeSection({
  label,
  title,
  subtitle,
  cards,
  backgroundColor = 'bg-white',
}: DailyLifeSectionProps) {
  return (
    <section className={`${backgroundColor} py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-20`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#AD9451] mb-3">
            {label}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#1F2933] mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-[#6B7280] leading-relaxed text-sm sm:text-[15px] max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F8FAFB] border-[1.1px] md:border-[0.8px] border-[#E5E7EB] p-6 rounded-lg hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="mb-5">
                <div className="bg-[#FAF8F4] w-11 h-11 flex items-center justify-center rounded-lg">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#1F2933] mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B7280] leading-relaxed text-sm sm:text-[15px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}