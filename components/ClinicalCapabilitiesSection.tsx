import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import checkboxIcon from '@/assets/icons/checkbox-circle.svg';

interface ClinicalCapabilitiesSectionProps {
  imageSrc: StaticImageData | string;
  imageAlt?: string;
}

export default function ClinicalCapabilitiesSection({
  imageSrc,
  imageAlt = 'Clinical care team',
}: ClinicalCapabilitiesSectionProps) {
  const acceptedReferrals = [
    'Local Authority Funded Placements (Lancashire County Council & Blackpool Council)',
    'Dementia Residential Care (Early, moderate, and advanced stages - specific to Mariners Court)',
    'EMI (Elderly Mentally Infirm)',
    'Hospital Discharges (Step-down and long-term placements)',
    'Respite & Short-Stay Care',
    'Private / Self-Funding Residents (including LA Top-Ups)',
  ];


  return (
    <section className="py-16 md:py-20 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Image - appears first on mobile */}
        <div className="md:hidden mb-10">
          <div className="relative w-full h-64 rounded-2xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <span className="text-[#AD9451] text-xs font-semibold tracking-wide">
              SERVICE SCOPE
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mt-3 mb-6">
              Clinical Capabilities and Admission Profile
            </h2>

            {/* Description */}
            <p className="text-[#6B7280] text-sm md:text-base mb-8">
              We are equipped to support a range of needs, bridging the gap between local authority commissioning requirements and high-quality care delivery. Clear criteria help you make appropriate referrals efficiently.
            </p>

            {/* Accepted Referrals Section */}
            <div className="mb-6 bg-white border-[0.8px] border-[#E5E7EB] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#1F2933] mb-6 flex items-center">
                We Actively Accept Referrals For:
              </h3>

              <ul className="space-y-4">
                {acceptedReferrals.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className='shrink-0'>
                     <Image src={checkboxIcon} alt="Checkbox" width={20} height={20} />
                    </div>
                    <div>
                        <p className='text-[#6B7280] text-sm md:text-[15px]'>{item}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions Section */}
            <div className="bg-[#FAF8F4] rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-[#1F2933] mb-3 flex items-center">
                <span className="text-xl mr-3 text-[#F54900]">✕</span>
                Exclusions:
              </h3>
              <p className="text-[#6B7280] leading-6 text-sm md:text-[15px]">
                Please note that our services are registered for <span className="font-bold">Residential and Residential Dementia care</span>. We do not provide in-house <span className="font-bold">Nursing Care</span> for complex clinical interventions requiring a Registered Nurse on shift 24/7.
              </p>
            </div>

            {/* Button */}
            <Link
              href="/contact"
              className="inline-block bg-[#AD9451] hover:bg-[#8B6D3C] text-white font-medium px-8 py-3 rounded-full transition"
            >
              Make Referral
            </Link>
          </div>

          {/* Desktop Image - appears on right on desktop */}
          <div className="hidden md:block">
            <div className="relative w-full h-96 md:h-150 rounded-[20px] overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}