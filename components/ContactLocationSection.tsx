import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import locationIcon from '@/assets/icons/map.svg';
import phoneIcon from '@/assets/icons/call.svg';
import emailIcon from '@/assets/icons/message.svg';

export interface ContactLocationSectionProps {
  label: string;
  title: string;
  description: string;
  address: {
    name: string;
    street: string;
    city: string;
    postcode: string;
    country?: string;
  };
  phone: string;
  alternativePhone?: string;
  email: string;
  visitExpectation: string;
  buttonLabel?: string;
  buttonHref?: string;
  mapEmbedUrl: string;
  backgroundColor?: string;
}

export default function ContactLocationSection({
  label,
  title,
  description,
  address,
  phone,
  alternativePhone,
  email,
  visitExpectation,
  buttonLabel = 'Discuss Care Needs',
  buttonHref = '#',
  mapEmbedUrl,
  backgroundColor = 'bg-[#F8FAFB]',
}: ContactLocationSectionProps) {
  return (
    <section className={`${backgroundColor} py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Contact Information */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#AD9451] mb-3">
              {label}
            </p>

            <h2 className="text-3xl sm:text-4xl max-w-lg lg:text-4xl font-bold text-[#1F2933] mb-6 leading-tight">
              {title}
            </h2>

            <p className="text-[#6B7280] leading-relaxed max-w-lg text-sm sm:text-[15px] mb-8">
              {description}
            </p>

            {/* Address */}
            <div className="flex gap-4 mb-6">
             
             <div className="border-[0.8px] border-[#E5E7EB] rounded-lg w-14 h-14 bg-[#FFFFFF] flex items-center justify-center shrink-0">
                    <Image src={locationIcon} alt="Location Icon" width={24} height={24} />
                </div>
              <div>
                <h3 className="font-semibold text-[#1F2933] mb-1">Address</h3>
                <p className="text-[#6B7280] text-sm sm:text-[15px]">
                  {address.name}<br />
                  {address.street}<br />
                  {address.city}<br />
                  {address.country}<br />
                  {address.postcode}
                </p>
              </div>
            </div>

            {/* Telephone */}
            <div className="flex gap-4 mb-6">
                <div className="border-[0.8px] border-[#E5E7EB] rounded-lg w-14 h-14 bg-[#FFFFFF] flex items-center justify-center shrink-0">
                    <Image src={phoneIcon} alt="Phone Icon" width={24} height={24} />
                </div>
              <div>
                <h3 className="font-semibold text-[#1F2933] mb-1">Telephone</h3>
                <a href={`tel:${phone}`} className="text-[#AD9551] font-medium text-sm sm:text-[15px] hover:underline">
                  {phone}
                </a>
                {alternativePhone && (
                  <>
                    <br/>
                    <a href={`tel:${alternativePhone}`} className="text-[#AD9551] font-medium text-sm sm:text-[15px] hover:underline">
                      {alternativePhone}
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 mb-8">
              <div className="border-[0.8px] border-[#E5E7EB] rounded-lg w-14 h-14 bg-[#FFFFFF] flex items-center justify-center shrink-0">
                    <Image src={emailIcon} alt="Email Icon" width={24} height={24} />
                </div>
              <div>
                <h3 className="font-semibold text-[#1F2933] mb-1">Email</h3>
                <a href={`mailto:${email}`} className="text-[#AD9451] font-medium text-sm sm:text-[15px] hover:underline">
                  {email}
                </a>
              </div>
            </div>

            {/* Visit Expectation Box */}
            <div className="bg-[#AD95510D] border-[0.8px] border-[#AD955133] rounded-lg p-5 sm:p-6 mb-8">
              <h4 className="font-semibold text-[#1F2933] mb-2">What to expect when you visit</h4>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {visitExpectation}
              </p>
            </div>

            {/* Button */}
            <Link
              href={buttonHref}
              className="inline-block bg-[#AD9451] text-white px-8 py-3 text-sm rounded-full font-medium hover:bg-[#8B6D3C] transition"
            >
              {buttonLabel}
            </Link>
          </div>

          {/* Right - Map */}
          <div className="w-full h-96 sm:h-125 rounded-2xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={mapEmbedUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
}