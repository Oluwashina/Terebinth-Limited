import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface AboutSectionProps {
  image: StaticImageData;
  title: string;
  descriptions: string[];
  label: string;
  imageButton?: {
    label: string;
    href?: string;
  };
  buttonLabel?: string;
  buttonHref?: string;
  imagePosition?: 'left' | 'right';
  bgColor?: string;
}

export default function AboutSection({
  image,
  title,
  label,
  descriptions,
  imageButton,
  buttonLabel = 'Read More',
  buttonHref = '#',
  imagePosition = 'left',
  bgColor = 'bg-white'
}: AboutSectionProps) {
  const imageCol = (
    <div className="relative w-full h-64 sm:h-80 lg:h-120 rounded-[20px] overflow-hidden">
      <Image
        src={image}
        alt="About us"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
      {imageButton && (
        <Link
          href={imageButton.href || '#'}
          className="absolute md:bottom-5 bottom-4 left-4 bg-[#AD9451] text-white px-4 py-3 text-sm rounded-full font-medium hover:bg-[#8B6D3C] transition"
        >
          {imageButton.label}
        </Link>
      )}
    </div>
  );

  const contentCol = (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-[#AD9451] mb-3">
        {label}
      </p>
      <h2 className="text-3xl sm:text-3xl lg:text-4xl max-w-xs font-bold text-[#1F2933] mb-6 leading-tight">
        {title}
      </h2>

      {/* Description Layers */}
      <div className="space-y-4 mb-6">
        {descriptions.map((desc, index) => (
          <p
            key={index}
            className="text-[#6B7280] max-w-lg leading-relaxed text-sm sm:text-[15px]"
          >
            {desc}
          </p>
        ))}
      </div>

      <Link
        href={buttonHref}
        className="inline-block bg-[#AD9451] text-white px-10 py-4 text-sm rounded-full font-medium hover:bg-[#8B6D3C] transition"
      >
        {buttonLabel}
      </Link>
    </div>
  );

  return (
    <section className={`${bgColor} py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image always first on mobile, ordered by prop on desktop */}
          <div className={imagePosition === 'right' ? 'lg:order-2' : ''}>
            {imageCol}
          </div>

          {/* Content */}
          <div className={imagePosition === 'right' ? 'lg:order-1' : ''}>
            {contentCol}
          </div>
        </div>
      </div>
    </section>
  );
}