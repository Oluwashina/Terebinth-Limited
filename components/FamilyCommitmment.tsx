import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface CommitmentItem {
  title: string;
  description: string;
}

interface CommitmentSectionProps {
  label: string;
  title: string;
  description: string;
  items: CommitmentItem[];
  buttonLabel: string;
  buttonHref: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
  imagePosition?: 'left' | 'right'; // Default: 'right'
  bgColor?: string; // Default: 'bg-white'
}

export default function CommitmentSection({
  label,
  title,
  description,
  items,
  buttonLabel,
  buttonHref,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  bgColor = 'bg-white',
}: CommitmentSectionProps) {
  const contentSection = (
    <div className="flex flex-col justify-center">
      {/* Label */}
      <span className="text-[#AD9451] uppercase text-xs font-semibold tracking-wide mb-3">
        {label}
      </span>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6">
        {title}
      </h2>

      {/* Description */}
      <p className="text-[#6B7280] text-sm md:text-base max-w-xl mb-8 leading-relaxed">
        {description}
      </p>

      {/* Items List */}
      <div className="space-y-6 mb-8">
        {items.map((item, index) => (
          <div key={index}>
            <h3 className="text-lg font-bold text-[#1F2933] mb-2">
              {item.title}
            </h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div>
        <Link
          href={buttonHref}
          className="inline-block text-sm bg-[#AD9451] hover:bg-[#8B6D3C] text-white font-medium px-8 py-3 rounded-full transition"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );

  const imageSection = (
    <div className="relative w-full h-96 md:h-125 min-h-96 rounded-2xl overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading='eager'
      />
    </div>
  );

  return (
    <section className={`py-16 md:py-20 px-6 md:px-8 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
            imagePosition === 'left' ? 'md:auto-cols-auto' : 'md:auto-cols-auto'
          }`}
        >
          {/* Image always first on mobile */}
          <div className={`${imagePosition === 'left' ? 'md:order-1' : 'md:order-2'}`}>
            {imageSection}
          </div>

          {/* Content */}
          <div className={`${imagePosition === 'left' ? 'md:order-2' : 'md:order-1'}`}>
            {contentSection}
          </div>
        </div>
      </div>
    </section>
  );
}