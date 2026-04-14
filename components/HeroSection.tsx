import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';


export interface TextSegment {
  text: string;
  isHighlighted?: boolean; // true = gold + italic, false = regular color
  fontSize?: string; // e.g., 'text-3xl', 'text-5xl'
}

export interface HeroButton {
  label: string;
  href: string;
  variant?: 'solid' | 'outline';
}

export interface HeroSectionProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  badges?: string[];
  titleSegments: TextSegment[];  // Array instead of title/subtitle/additionalText
  description: string;
  buttons?: HeroButton[];
}

export default function HeroSection({
  imageSrc,
  imageAlt,
  badges = [],
  titleSegments,
  description,
  buttons = [],
}: HeroSectionProps) {
  return (
    <section className="relative w-full md:min-h-screen overflow-hidden rounded-b-[50px]">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative w-full h-full flex flex-col justify-center md:justify-end md:min-h-screen">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pb-16 md:pb-24 pt-24 md:pt-44">
          <div className="max-w-2xl">
            {/* Badges */}
            {badges.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {badges.map((badgeText, index) => (
                  <div
                    key={index}
                    className="inline-block bg-[#FAF8F4] border-[0.8px] border-[#AD9451] px-3 md:px-4 py-2 rounded-full"
                  >
                    <p className="text-[#AD9451] text-xs md:text-sm font-medium text-center uppercase tracking-wide">
                      • {badgeText}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-[#F8F6F3] mb-6 md:mb-8">
              {titleSegments.map((segment, index) => (
                <span
                  key={index}
                  className={`${
                    segment.isHighlighted ? 'text-[#AD9551] italic' : ''
                  } ${segment.fontSize || ''}`}
                >
                  {segment.text}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-[#F8F6F3] mb-8 md:mb-10 leading-relaxed">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`px-8 py-3 rounded-full font-medium text-center transition whitespace-nowrap ${
                    button.variant === 'outline'
                      ? 'bg-[#FAF8F4] border-[#AD9451] border-[1.5px] text-[#AD9451] hover:bg-[#FAF8F4]/90' 
                      : 'bg-[#AD9451] text-white hover:bg-[#8B6D3C]'
                  }`}
                >
                  {button.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}