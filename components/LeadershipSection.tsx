export interface CommitmentItem {
  title: string;
  description: string;
}

export interface LeadershipSectionProps {
  label: string;
  title: string;
  description: string;
  subdescription: string;
  commitments: CommitmentItem[];
}

export default function LeadershipSection({
  label,
  title,
  description,
  subdescription,
  commitments,
}: LeadershipSectionProps) {
  return (
    <section className="bg-[#FAF8F4] py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

         <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#AD9451] mb-2">
                {label}
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F2933] leading-tight">
                {title}
                </h2>
            </div>

        <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Header */}
          <div>
            <p className="text-[#6B7280] mb-6 leading-relaxed text-sm sm:text-base">
              {description}
            </p>

             <p className="text-[#6B7280] leading-relaxed text-sm sm:text-base">
              {subdescription}
            </p>
          </div>

          {/* Right Side - Commitment Cards */}
          <div className="space-y-5">
            {commitments.map((item, index) => (
              <div
                key={index}
                className="border-l-[2.4px] border-r-[0.8px] border-b-[0.8px] border-t-[0.8px] bg-[#FFFFFF] border-[#AD9451] p-4 sm:p-6 rounded-tr-xs rounded-br-xs hover:shadow-md transition"
              >
                <h3 className="text-sm sm:text-xl font-semibold text-[#1F2933] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}