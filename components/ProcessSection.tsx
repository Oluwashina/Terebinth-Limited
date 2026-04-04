import Link from 'next/link';
import callIcon from '@/assets/icons/call.svg';
import emailIcon from '@/assets/icons/message.svg';
import Image from 'next/image';

export interface ProcessSectionProps {
  label: string;
  title: string;
  descriptions: string[];
  contactBox: {
    heading: string;
    phone: string;
    phoneLabel: string;
    email: string;
    emailLabel: string;
    buttonLabel: string;
    buttonHref: string;
  };
}

export default function ProcessSection({
  label,
  title,
  descriptions,
  contactBox,
}: ProcessSectionProps) {
  return (
    <section className="bg-[#FFFFFF] py-12 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#AD9451] mb-3">
              {label}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#1F2933] mb-8 leading-tight max-w-md">
              {title}
            </h2>
            
            <div className="space-y-6">
              {descriptions.map((desc, index) => (
                <p
                  key={index}
                  className="text-[#6B7280] leading-relaxed text-sm sm:text-[15px]"
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>

          {/* Right Contact Box */}
          <div className="flex items-start lg:items-center">
            <div className="w-full border-l-[2.4px] border-r-[0.8px] border-b-[0.8px] border-t-[0.8px] border-[#AD9451] rounded-tr-xs rounded-br-xs p-6 sm:p-8 bg-[#FAF8F4]">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#AD9551] mb-8">
                {contactBox.heading}
              </h3>

              {/* Phone */}
              <div className="mb-6 flex items-start gap-4">
                <div className="bg-[#F5EDD8] w-10 h-10 flex items-center justify-center rounded-full">
                    <Image src={callIcon} alt="Phone Icon" className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-[#1F2933]">{contactBox.phone}</p>
                  <p className="text-sm text-[#6B7280]">{contactBox.phoneLabel}</p>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8 flex items-start gap-4">
                <div className="bg-[#F5EDD8] w-10 h-10 flex items-center justify-center rounded-full">
                    <Image src={emailIcon} alt="Email Icon" className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-[#1F2933]">{contactBox.email}</p>
                  <p className="text-sm text-[#6B7280]">{contactBox.emailLabel}</p>
                </div>
              </div>

              {/* Button */}
              <Link
                href={contactBox.buttonHref}
                className="block w-full bg-[#AD9451] text-white px-8 py-4 text-center text-sm rounded-full font-medium hover:bg-[#8B6D3C] transition"
              >
                {contactBox.buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}