import Image, { StaticImageData } from 'next/image';
import checkboxIcon from '@/assets/icons/checkbox-circle.svg';

interface InformationItem {
  text: string;
}

interface InformationCard {
  icon: StaticImageData;
  title: string;
  items: InformationItem[];
}

interface InformationNeededSectionProps {
  label: string;
  title: string;
  description: string;
  cards: InformationCard[];
  backgroundColor?: string;
}

export default function InformationNeededSection({
  label,
  title,
  description,
  cards,
  backgroundColor = 'bg-[#FAF8F4]',
}: InformationNeededSectionProps) {
  return (
    <section className={`py-16 md:py-20 px-6 md:px-8 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="text-[#AD9451] text-xs font-semibold uppercase tracking-wide block mb-3">
            {label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6">
            {title}
          </h2>
          <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Cards Grid - 2x2 */}
        <div className="grid bg-white grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-4 md:p-8 transition"
            >
              {/* Title and Icon - Flex Row */}
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-[#AD95511A] rounded-full shrink-0">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={18}
                    height={18}
                  />
                </div>
                <div>
                <h3 className="text-lg font-bold text-[#1F2933]">
                {card.title}
                </h3>

                  {/* Items List */}
                <ul className="space-y-3 mt-3">
                    {card.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                        <span className="shrink-0 mt-0.5">
                        <Image
                            src={checkboxIcon}
                            alt="Checkbox"
                            width={16}
                            height={16}
                        />
                        </span>
                        <span className="text-[#6B7280] text-sm leading-relaxed">
                        {item.text}
                        </span>
                    </li>
                    ))}
                </ul>
                </div>
              </div>

            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}