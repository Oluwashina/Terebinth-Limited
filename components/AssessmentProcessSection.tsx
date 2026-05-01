export default function AssessmentProcessSection() {
  const steps = [
    {
      number: 1,
      title: 'Submit Referral',
      description:
        'Send the Care Act Assessment / Needs Assessment via our secure portal or email',
    },
    {
      number: 2,
      title: 'Same Day review',
      description:
        'Our Registered Manager will review the documentation on the same working day',
    },
    {
      number: 3,
      title: '24 Hour Assessment',
      description:
        'If the clinical profile matches our capabilities, we guarantee an assessment within 24 hours',
    },
    {
      number: 4,
      title: 'Prompt Admission',
      description:
        'Once funding is agreed, we facilitate safe, structured, and rapid admissions',
    },
  ];

  return (
    <section className="py-16 md:py-20 px-6 md:px-8 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-[#AD9451] text-xs font-semibold tracking-wide">
            FAST TRACK PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mt-3 mb-6">
            Our 24 Hour Assessment Guarantee
          </h2>
          <p className="text-[#6B7280] text-sm md:text-base max-w-xl">
            We streamline the placement process to prevent delayed hospital
            discharges and crisis situations in the community. Our commitment to
            speed doesn't compromise thoroughness.
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
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF8F4] text-[#AD9551] font-bold text-lg">
                  {step.number}
                </span>
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