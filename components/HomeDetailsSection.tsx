import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import locationIcon from '@/assets/icons/map.svg';

export interface HomeFeature {
  text: string;
}

export interface HomeDetailsSectionProps {
  location: string;
  homeTitle: string;
  address: string;
  image: StaticImageData;
  imageLabel: string;
  descriptions: string[];
  features: HomeFeature[];
  viewButtonLabel?: string;
  viewButtonHref?: string;
  bookButtonLabel?: string;
  bookButtonHref?: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
}

export default function HomeDetailsSection({
  location,
  homeTitle,
  address,
  image,
  imageLabel,
  descriptions,
  features,
  viewButtonLabel = 'View',
  viewButtonHref = '#',
  bookButtonLabel = 'Book A Visit',
  bookButtonHref = '#',
  imagePosition = 'left',
  backgroundColor = 'bg-white',
}: HomeDetailsSectionProps) {
  const imageCol = (
    <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-[20px] overflow-hidden">
      <Image
        src={image}
        alt={homeTitle}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
      {/* Image Label Overlay */}
      <div className="absolute bottom-4 flex gap-2 items-center left-4 bg-[#1F2933D9] text-white px-4 py-3 rounded-full text-xs sm:text-xs font-medium">
        <div className='bg-[#AD9551] w-1.5 h-1.5 rounded-full'></div>
        {imageLabel}
      </div>
    </div>
  );

  const contentCol = (
    <div>
      {/* Location Label */}
      <p className="text-sm font-semibold uppercase tracking-wide text-[#AD9451] mb-2">
        {location}
      </p>

      {/* Home Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2933] mb-4 leading-tight">
        {homeTitle}
      </h2>

      {/* Address with Icon */}
      <div className="flex items-center gap-2 mb-4">
        <Image
          src={locationIcon}
          alt="Location Icon"
          className="w-4 h-4 text-[#AD9451] mt-0.5 shrink-0"
        />
        <p className="text-[#6B7280] text-sm sm:text-[15px]">{address}</p>
      </div>

      <div className='bg-[#AD9551] w-9 h-0.5 mb-4'></div>

      {/* Descriptions */}
      <div className="space-y-4 mb-6">
        {descriptions.map((desc, index) => (
          <p
            key={index}
            className="text-[#6B7280] leading-relaxed text-sm sm:text-[15px]"
          >
            {desc}
          </p>
        ))}
      </div>

      {/* Features List */}
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-[#AD9551] rounded-full mt-2 shrink-0" />
            <p className="text-[#1F2933] text-sm sm:text-[15px]">
              {feature.text}
            </p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href={viewButtonHref}
          className="inline-block bg-[#AD9451] text-white px-10 py-3 text-sm rounded-full font-medium hover:bg-[#8B6D3C] transition text-center"
        >
          {viewButtonLabel}
        </Link>
        <Link
          href={bookButtonHref}
          className="inline-block bg-[#F0E8D5] text-[#AD9451] px-10 py-3 text-sm rounded-full font-medium hover:bg-[#AD9451] hover:text-white transition text-center"
        >
          {bookButtonLabel}
        </Link>
      </div>
    </div>
  );

  return (
    <section className={`${backgroundColor} py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${imagePosition === 'right' ? 'lg:grid-cols-2' : ''}`}>
           {/* Image Column */}
        <div className={imagePosition === 'right' ? 'lg:order-2' : ''}>
          {imageCol}
        </div>

        {/* Content Column */}
        <div className={imagePosition === 'right' ? 'lg:order-1' : ''}>
          {contentCol}
        </div>
        </div>
      </div>
    </section>
  );
}