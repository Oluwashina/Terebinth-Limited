import Image, { StaticImageData } from 'next/image';

export interface LeadershipProfileSectionProps {
  profileImage: StaticImageData;
  profileName: string;
  label: string;
  title: string;
  descriptions: string[];
  quote?: {
    text: string;
    attribution: string;
  };
  backgroundColor?: string;
  objectPosition?: string;
}

export default function LeadershipProfileSection({
  profileImage,
  profileName,
  label,
  title,
  descriptions,
  quote,
  backgroundColor = 'bg-[#F8FAFB]',
  objectPosition = 'center 5%'
}: LeadershipProfileSectionProps) {
  return (
    <section className={`${backgroundColor} py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Profile Image */}
          <div className="relative w-full h-80 sm:h-96 lg:h-full rounded-[20px] overflow-hidden">
            <Image
              src={profileImage}
              alt={profileName}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: objectPosition }}

            />
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#AD9451] mb-3">
              {label}
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#1F2933] max-w-md mb-6 leading-tight">
              {title}
            </h2>

            {/* Descriptions */}
            <div className="space-y-4 mb-6">
              {descriptions.map((desc, index) => (
                <p
                  key={index}
                  className="text-[#6B7280] leading-relaxed max-w-lg text-sm sm:text-[15px]"
                >
                  {desc}
                </p>
              ))}
            </div>

            {/* Quote Section */}
            {quote && (
              <div className="bg-[#AD95510D] border-[0.8px] border-[#AD955133] p-5 rounded-lg">
                <p className="text-[#1F2933] italic leading-relaxed text-sm sm:text-[15px] mb-3">
                  "{quote.text}"
                </p>
                <p className="text-[#6B7280] text-[13px]">
                  – {quote.attribution}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}