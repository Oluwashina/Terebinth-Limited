import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface EnquiryCard {
  icon: StaticImageData | string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

interface HomesEnquiryCTASectionProps {
  label: string;
  title: string;
  description: string;
  cards: EnquiryCard[];
  backgroundColor?: string;
}

export default function HomesEnquiryCTASection({
  label,
  title,
  description,
  cards,
  backgroundColor = 'bg-[#F9F7F4]',
}: HomesEnquiryCTASectionProps) {
  return (
    <section className={`py-16 md:py-24 px-6 md:px-8 ${backgroundColor}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#AD9451] text-xs font-semibold uppercase tracking-wide block mb-3">
            {label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6">
            {title}
          </h2>
          <p className="text-[#6B7280] text-sm md:text-base max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border-l-[1.5px] border-l-[#AD9451] border-r-[1.5px] border-r-[#AD9451] bg-white rounded-lg p-8 flex flex-col items-center text-center hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#AD95511A] rounded-full">
                  {typeof card.icon === 'string' ? (
                    <span className="text-3xl">{card.icon}</span>
                  ) : (
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={24}
                      height={24}
                    />
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1F2933] mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B7280] max-w-sm mx-auto text-sm leading-relaxed mb-8 grow">
                {card.description}
              </p>

              {/* Button */}
              <Link
                href={card.buttonHref}
                className="inline-block bg-[#AD9451] text-sm hover:bg-[#8B6D3C] text-white font-medium px-8 py-3 rounded-full transition"
              >
                {card.buttonLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}