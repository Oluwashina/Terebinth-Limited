import Image from "next/image";
import heartIcon from '@/assets/icons/heart.svg';

export default function WWhoWeSupportSection() {
  const steps = [
    {
      number: 1,
      title: 'Residential Care for Older Adults',
      description:
        'Long-term, person-centred residential care for older adults needing day-to-day support.',
    },
    {
      number: 2,
      title: 'Dementia Aware Support',
      description:
        'Calm, structured environments and staff trained in dementia-awareness and approach to care.',
    },
    {
      number: 3,
      title: 'Respite and Short Stay where Available',
      description:
        'Short-term placements subject to assessment and availability, including planned and urgent respite.',
    },
    {
      number: 4,
      title: 'Local to the Fylde Coast ',
      description:
        'Three homes across the Fylde Coast keeping residents close to family and community.',
    },
  ];

  return (
    <section className="py-16 md:py-20 px-6 md:px-8 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-[#AD9451] text-xs font-semibold tracking-wide">
            Who We support 
          </span>
          <h2 className="text-3xl md:text-4xl font-bold max-w-lg text-[#1F2933] mt-3 mb-6">
           Residential Care Shaped Around the Person  
          </h2>
          <p className="text-[#6B7280] text-sm md:text-base max-w-xl">
            Our services are registered for residential and dementia care. Each home assesses every enquiry individually to make sure we are the right fit before admission.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2">
          {steps.map((step) => (
            <div
              key={step.number}
                className="md:bg-white bg-[#F8FAFB] md:rounded-none rounded-lg p-6 border-[1.1px] border-[#E5E7EB] md:border-0 md:border-r md:border-r-[#F5EDD8] transition">
              {/* Number Badge */}
              <div className="mb-6">
                <div className="bg-[#F0E8D5] w-10 h-10 flex justify-center items-center rounded-full">
                  <Image src={heartIcon} alt="Heart Icon" width={18} height={18} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#1F2933] mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}