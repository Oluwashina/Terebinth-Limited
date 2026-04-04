import Image, { StaticImageData } from 'next/image';

export interface StepItem {
  title: string;
  description: string;
}

export interface AdmissionStepsSectionProps {
  label: string;
  title: string;
  subtitle: string;
  image: StaticImageData;
  steps: StepItem[];
}

export default function AdmissionStepsSection({
  label,
  title,
  subtitle,
  image,
  steps,
}: AdmissionStepsSectionProps) {
  return (
    <section className="bg-[#FAF8F4] py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <div className='mb-10'>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#AD9451] mb-3">
              {label}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#1F2933] mb-4 leading-tight max-w-md">
              {title}
            </h2>
            <p className="text-[#6B7280] max-w-sm mb-8 leading-relaxed text-sm">
              {subtitle}
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image */}
          <div className="relative w-full h-64 sm:h-80 lg:h-150 rounded-[20px] overflow-hidden order-2 lg:order-1">
            <Image
              src={image}
              alt="Admission process"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Steps */}
          <div className="order-1 lg:order-2">
            {/* Steps List */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="border-l-[2.4px] border-t border-r border-b border-[#AD9451] rounded-tr-sm rounded-br-sm bg-white p-5 sm:p-6 hover:shadow-md transition"
                >
                  <h3 className="text-sm sm:text-base font-semibold text-[#1F2933] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}