import Image, { StaticImageData } from 'next/image';

export interface CommitmentCard {
  icon: StaticImageData;
  title: string;
  description: string;
}

export interface CommitmentSectionProps {
  label: string;
  title: string;
  descriptions: string[];
  cards: CommitmentCard[];
}

export default function CommitmentSection({
  label,
  title,
  descriptions,
  cards,
}: CommitmentSectionProps) {
  return (
    <section className="bg-[#2B271E] py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20 rounded-bl-[100px] rounded-tr-[100px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#AD9451] mb-3">
              {label}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-normal text-[#FFFFFF] mb-8 leading-tight max-w-60 md:max-w-70">
              {title}
            </h2>

            <div className="space-y-6">
              {descriptions.map((desc, index) => (
                <p
                  key={index}
                  className="text-[#FFFFFF94] leading-relaxed text-sm max-w-lg sm:text-[15px]"
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>

          {/* Right Side - Cards */}
          <div className="space-y-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="border-l-[2.4px] border-t border-r border-b border-[#AD9451] bg-[#FFFFFF0F] rounded-tr-sm rounded-br-sm p-5 sm:p-6 flex gap-5 hover:shadow-lg transition"
              >
                {/* Icon */}
                <div className="shrink-0 w-8 h-8 bg-[#AD95512E] rounded-full flex items-center justify-center">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={14}
                    height={14}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-sm sm:text-[15px] font-semibold text-[#FFFFFF] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#FFFFFF73] text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}