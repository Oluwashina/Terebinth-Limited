import Image, { StaticImageData } from 'next/image';

interface GovernanceCard {
  icon: StaticImageData;
  title: string;
  description: string;
}

interface GovernanceQualitySectionProps {
  label: string;
  title: string;
  description: string;
  cards: GovernanceCard[];
  bgColor?: string;
}

export default function GovernanceQualitySection({
  label,
  title,
  description,
  cards,
  bgColor = 'bg-[#FAF8F4]',
}: GovernanceQualitySectionProps) {
  return (
    <section className={`py-16 md:py-20 px-6 md:px-8 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="text-[#AD9451] uppercase text-xs font-semibold tracking-wide block mb-3">
            {label}
          </span>
          <h2 className="text-3xl md:text-4xl max-w-md font-semibold text-[#1F2933] mb-6">
            {title}
          </h2>
          <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border-[0.8px] border-[#E5E7EB] rounded-sm p-6 hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="flex gap-4 items-start">
                <div className="inline-flex shrink-0 items-center justify-center w-10 h-10 bg-[#AD95511A] rounded-full">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                        {/* Title */}
                    <h3 className="text-lg font-semibold text-[#1F2933] mb-2">
                        {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#6B7280] text-sm leading-relaxed">
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