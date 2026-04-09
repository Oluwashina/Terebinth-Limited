import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface CareSpecialismsProps {
  image: StaticImageData;
  label: string;
  title: string;
  description: string;
  specialisms: string[];
  buttonLabel?: string;
  buttonHref?: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
}

export default function CareSpecialismsSection({
  image,
  label,
  title,
  description,
  specialisms,
  buttonLabel = 'Discuss Care Needs',
  buttonHref = '#',
  imagePosition = 'left',
  backgroundColor = 'bg-white',
}: CareSpecialismsProps) {
  const imageCol = (
    <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-[20px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );

  const contentCol = (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-[#AD9451] mb-3">
        {label}
      </p>

      <h2 className="text-3xl sm:text-4xl max-w-md font-bold text-[#1F2933] mb-6 leading-tight">
        {title}
      </h2>

      {/* Service Specialism Badges */}
      <div className="flex flex-wrap gap-3 mb-6">
        {specialisms.map((specialism, index) => (
          <div
            key={index}
            className="bg-[#FAF8F4] border md:border-[0.8px] border-[#AD955159] px-4 py-2 rounded-full md:rounded-[20px]"
          >
            <p className="text-[#AD9551] text-xs font-semibold uppercase tracking-wide">
              • {specialism}
            </p>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-[#6B7280] leading-relaxed text-sm sm:text-[15px] mb-8 max-w-lg">
        {description}
      </p>

      {/* Button */}
      <Link
        href={buttonHref}
        className="inline-block bg-[#AD9451] text-white px-10 py-4 text-sm rounded-full font-medium hover:bg-[#8B6D3C] transition"
      >
        {buttonLabel}
      </Link>
    </div>
  );

  return (
    <section className={`${backgroundColor} py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20`}>
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