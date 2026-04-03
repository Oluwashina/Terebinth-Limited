import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface AboutSectionProps {
  image: StaticImageData;
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function AboutSection({
  image,
  title,
  description,
  buttonLabel = 'Read More',
  buttonHref = '#',
}: AboutSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-[20px] overflow-hidden order-2 lg:order-1">
            <Image
              src={image}
              alt="About us"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#AD9451] mb-3">
              About Us
            </p>
            <h2 className="text-3xl sm:text-3xl lg:text-4xl max-w-xs font-bold text-[#1F2933] mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-[#6B7280] mb-6 max-w-md leading-relaxed text-sm sm:text-[15px]">
              {description}
            </p>
            <Link
              href={buttonHref}
              className="inline-block bg-[#AD9451] text-white px-10 py-4 text-sm rounded-full font-medium hover:bg-[#8B6D3C] transition"
            >
              {buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}