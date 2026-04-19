import Image, { StaticImageData } from 'next/image';
import checkboxCircleIcon from '@/assets/icons/checkbox-circle.svg';

export interface FeesAndFundingSectionProps {
  image: StaticImageData;
  label?: string;
  title?: string;
  intro?: string;
  feeStructure?: string;
  fundingIntro?: string;
  fundingOptions?: string[];
  closingText?: string;
  homeName?: string;
  backgroundColor?: string;
}

export default function FeesAndFundingSection({
  image,
  label = 'FEES & FUNDING',
  title = 'Understanding Care Costs',
  intro = "We believe in transparency when it comes to fees and funding. We're here to discuss costs openly and help you understand all the options available to you.",
  feeStructure = 'Our fees cover all aspects of residential care including accommodation, meals, personal care, and activities. We provide clear information about costs from the outset, with no hidden charges. Additional services like hairdressing or chiropody can be arranged at extra cost if required.',
  fundingIntro,
  fundingOptions = [
    'Self-Funded Placements',
    'Local Authority With Top Up',
    'NHS Continuing Healthcare',
    'Mixed Funding Arrangements',
  ],
  closingText = 'We understand that discussing care costs can feel daunting. Our team is here to explain everything clearly and help you explore which funding routes may be available for your individual circumstances.',
  homeName = 'our Care Home',
  backgroundColor = 'bg-[#F8FAFB]',
}: FeesAndFundingSectionProps) {
  const defaultFundingIntro = `Care at ${homeName} can be funded in several ways, and we can help you navigate the process. Funding options include:`;

  return (
    <section className={`${backgroundColor} py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#AD9451] mb-3">
              {label}
            </p>
            <h2 className="text-3xl sm:text-3xl lg:text-4xl max-w-md font-bold text-[#1F2933] mb-6 leading-tight">
              {title}
            </h2>

            <p className="text-[#6B7280] max-w-lg leading-relaxed text-sm sm:text-[15px] mb-6">
              {intro}
            </p>

            <h3 className="font-bold text-[#1F2933] text-lg mb-3">Fee Structure</h3>
            <p className="text-[#6B7280] max-w-lg leading-relaxed text-sm sm:text-[15px] mb-6">
              {feeStructure}
            </p>

            <h3 className="font-bold text-[#1F2933] text-lg mb-3">Funding Options</h3>
            <p className="text-[#6B7280] max-w-lg leading-relaxed text-sm sm:text-[15px] mb-4">
              {fundingIntro || defaultFundingIntro}
            </p>

            <ul className="space-y-3 mb-6">
              {fundingOptions.map((option, index) => (
                <li key={index} className="flex gap-3 items-center">
                  <Image src={checkboxCircleIcon} alt="✓" width={20} height={20} />
                  <span className="text-[#6B7280] text-sm sm:text-[15px]">{option}</span>
                </li>
              ))}
            </ul>

            <p className="text-[#6B7280] max-w-lg leading-relaxed text-sm sm:text-[15px]">
              {closingText}
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full h-64 sm:h-80 lg:h-150 rounded-[20px] overflow-hidden">
            <Image
              src={image}
              alt="Care activities"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
