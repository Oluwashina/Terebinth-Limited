import Link from 'next/link';

export default function RegulationStatusSection() {
  const homes = [
    {
      id: 1,
      name: 'Redbricks Care Home',
      location: 'Thornton-Cleveleys',
      status: 'CQC REGISTERED',
      statusColor: 'bg-[#00A63E]',
      description: 'Registered under the current provider.',
      cqcLink: 'https://www.cqc.org.uk/location/1-16958494954',
    },
    {
      id: 2,
      name: 'Watson House Rest Home',
      location: 'Blackpool',
      status: 'GOOD',
      statusColor: 'bg-[#00A63E]',
      description: 'Inspected and rated Good overall by the Care Quality Commission.',
      cqcLink: 'https://www.cqc.org.uk/location/1-2789934083',
    },
    {
      id: 3,
      name: 'Mariners Court Care Home',
      location: 'Fleetwood',
      status: 'AWAITING INSPECTION',
      statusColor: 'bg-[#F59E0B]',
      description: 'Registered with the CQC on 11 March 2026. Awaiting Inspection',
      cqcLink: 'https://www.cqc.org.uk/location/1-27205845980',
    },
  ];

  return (
    <section className="py-16 md:py-20 px-6 md:px-8 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-[#AD9451] text-xs font-semibold tracking-wide">
            REGULATED BY THE CARE QUALITY COMMISSION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mt-3 mb-6">
            Our Regulation Status
          </h2>
          <p className="text-[#6B7280] text-sm md:text-base max-w-2xl">
            Each of our services is registered separately with the CQC.
          </p>
        </div>

        {/* Homes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homes.map((home) => (
            <div
              key={home.id}
              className="border-r-[1.5px] border-r-[#AD9451] bg-white rounded-[20px] p-8 flex flex-col hover:shadow-md transition"
            >
              {/* Home Info */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#1F2933] mb-2">
                  {home.name}
                </h3>
                <p className="text-sm text-[#6B7280]">{home.location}</p>
              </div>

              {/* Status Badge */}
              <div className="mb-6">
                <span
                  className={`inline-block ${home.statusColor} text-white text-xs font-bold px-8 py-3 rounded-full`}
                >
                  {home.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#6B7280] mb-6 grow">
                {home.description}
              </p>

              {/* CQC Link */}
              <Link
                href={home.cqcLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A961] hover:text-[#8B6D3C] font-medium text-sm flex items-center gap-2 transition"
              >
                View CQC Profile
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}