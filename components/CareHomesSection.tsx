import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import locationIcon from '@/assets/icons/map.svg';

export interface CareHome {
  id: string;
  name: string;
  location: string;
  image: StaticImageData;
  description: string;
  features: string[];
}

export interface CareHomesSectionProps {
  homes: CareHome[];
}

export default function CareHomesSection({ homes }: CareHomesSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#AD9551] mb-2">
            Our Locations
          </p>
          <h2 className="text-3xl sm:text-3xl max-w-xs lg:text-4xl font-bold text-[#1F2933] mb-4">
            Care Homes Across the Fylde Coast
          </h2>
          <p className="text-[#6B7280] max-w-md">
            Three residential care homes, each providing safe, dignified and person-centred support in welcoming, well-managed environments.
          </p>
        </div>

        {/* Homes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homes.map((home) => (
            <div key={home.id} className="flex flex-col h-full">
              {/* Image */}
              <div className="relative w-full h-48 sm:h-56 mb-6 rounded-[20px] overflow-hidden">
                <Image
                  src={home.image}
                  alt={home.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col grow">
                {/* Location */}
                <p className="text-xs flex items-center gap-1 font-semibold uppercase tracking-wide text-[#AD9451] mb-2">
                    <Image src={locationIcon} alt="Location" width={14} height={14} />
                   {home.location}
                </p>

                {/* Name */}
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1F2933] mb-3">
                  {home.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#6B7280] mb-4 leading-relaxed">
                  {home.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 grow">
                  {home.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-sm text-[#1F2933] flex items-center gap-2"
                    >
                      <span className="mt-1 bg-[#AD9551] w-1.5 h-1.5 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Link
                  href={`/homes/${home.id}`}
                  className="inline-block bg-[#AD9451] text-white px-10 py-4 rounded-full font-medium text-sm text-center hover:bg-[#8B6D3C] transition w-fit"
                >
                  Make Enquiries
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}