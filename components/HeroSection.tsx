import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';


export interface TextSegment {
  text: string;
  isHighlighted?: boolean; // true = gold + italic, false = regular color
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
    <section className="relative w-full h-screen min-h-150 overflow-hidden rounded-b-[50px]">
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
      <div className="absolute inset-0 flex flex-col justify-center items-start max-w-7xl mx-auto px-6 md:px-0 pt-24 sm:pt-0">
        <div className="max-w-3xl">
          {/* Badges */}
          {badges.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {badges.map((badgeText, index) => (
                <div
                  key={index}
                  className="inline-block bg-[#FAF8F4] border-[0.8px] border-[#AD9451] px-4 py-2 rounded-full"
                >
                  <p className="text-[#AD9451] text-sm font-medium text-center uppercase tracking-wide">
                    • {badgeText}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Title & Subtitle */}
        <h1 className="text-4xl sm:text-4xl lg:text-5xl leading-tight font-bold text-[#F8F6F3] mb-8 max-w-2xl">
            {titleSegments.map((segment, index) => (
                <span
                key={index}
                className={segment.isHighlighted ? 'text-[#AD9551] italic' : ''}
                >
                {segment.text}
                </span>
            ))}
            </h1>

          {/* Description */}
          <p className="text-lg text-[#F8F6F3] mb-8 mt-4 leading-relaxed">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={`px-8 py-3 rounded-full font-medium text-center transition ${
                  button.variant === 'outline'
                    ? 'bg-[#FAF8F4] text-[#AD9451] hover:bg-[#FAF8F4]/90' 
                    : 'bg-[#AD9451] text-white hover:bg-[#8B6D3C]'
                }`}
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}