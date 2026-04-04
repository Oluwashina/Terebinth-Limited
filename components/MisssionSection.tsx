export interface MissionSectionProps {
  label: string;
  title: string;
  description: string;
  mission: string;
  attribution: string;
}

export default function MissionSection({
  label,
  title,
  description,
  mission,
  attribution,
}: MissionSectionProps) {
  return (
    <section className="bg-[#342A13] py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#AD9551] mb-3">
              {label}
            </p>
            <h2 className="text-2xl md:max-w-53 max-w-45 sm:text-3xl lg:text-4xl text-[#F8F6F3] mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-[#F8F6F3] leading-relaxed text-sm font-light sm:text-base">
              {description}
            </p>
          </div>

          {/* Right Side - Mission Quote */}
          <div className="border-l-[2.4px] border-[#AD9551] pl-8 py-4">
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#F8F6F3] italic leading-relaxed mb-5">
              "{mission}"
            </p>
            <p className="text-xs sm:text-xs uppercase tracking-widest text-[#F8F6F3] font-normal">
              {attribution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}