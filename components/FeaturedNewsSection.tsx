import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import arrowRight from '@/assets/icons/arrow_right.svg';
import logo from '@/assets/images/logo.png';

interface FeaturedNewsSectionProps {
  label: string;
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function FeaturedNewsSection({
  label,
  title,
  description,
//   buttonLabel = 'Read More',
//   buttonHref = '#',
}: FeaturedNewsSectionProps) {
  return (
    <section className="bg-[#342A13] py-14 md:py-20 px-4 mx-6 md:mx-0 md:rounded-br-[100px] rounded-br-[70px] rounded-tl-[70px] md:rounded-tl-[100px] border-[1.1px] border-[#E5E7EB] md:border-none relative overflow-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <div className="w-96 h-96 md:w-250 md:h-250 relative">
          <Image
            src={logo}
            alt="Terebinth Limited Logo"
            fill
            className="object-cover"
            loading='eager'
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-start mb-6">
          {/* Label Badge */}
          <div className="bg-white rounded-full py-3 px-4 uppercase text-[#AD9451] text-[13px] font-semibold">
            <p>{label}</p>
          </div>

          {/* Button */}
          {/* <Link
            href={buttonHref}
            className="inline-block bg-[#AD9451] text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-[#8B6D3C] transition"
          >
            {buttonLabel}
            <Image src={arrowRight} alt="Arrow Right" width={14} height={14} className="inline-block ml-2" />
          </Link> */}
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold max-w-md text-[#FAF8F4] mb-4 md:mb-5 leading-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="text-[#FAF8F4] text-sm md:text-base max-w-5xl leading-relaxed mb-8">
          {description}
        </p>
      </div>
    </section>
  );
}
