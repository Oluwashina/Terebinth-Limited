
import Image, { StaticImageData } from 'next/image';

export interface ApproachCard {
  icon: StaticImageData;
  title: string;
  description: string;
}

export interface ApproachSectionProps {
  label: string;
  title: string;
  subtitle: string;
  cards: ApproachCard[];
  gap?: string; // Optional gap between cards, e.g. "gap-6"
}

export default function ApproachSection({
  label,
  title,
  subtitle,
  cards,
  gap = 'gap-1 lg:gap-1'
}: ApproachSectionProps) {
  return (
    <section className="bg-[#FAF8F4] py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#AD9451] mb-3">
            {label}
          </p>
          <h2 className="text-2xl max-w-md mx-auto sm:text-3xl lg:text-4xl font-bold text-[#1F2933] mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto text-sm sm:text-[15px] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${gap}`}>
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 hover:shadow-lg transition"
            >

            <div className='flex gap-4 items-start'>
              {/* Icon */}
              <div className="bg-[#F0E8D5] shrink-0 w-10 h-10 rounded-full flex justify-center items-center">
                <Image
                    src={card.icon}
                    alt={card.title}
                    width={18}
                    height={18}
                />
              </div>

              <div>
                {/* Title */}
                <h3 className="text-xl sm:text-xl font-bold text-[#1F2933] mb-2">
                    {card.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] leading-relaxed text-sm">
                    {card.description}
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