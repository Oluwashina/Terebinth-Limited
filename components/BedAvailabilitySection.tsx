export default function BedAvailabilitySection() {
  const facilities = [
    {
      id: 1,
      name: 'Redbricks Care Home',
      location: 'Thornton-Cleveleys',
      specialism: 'Residential - Dementia',
      vacancies: '1 Bed Available',
      status: 'available',
    },
    {
      id: 2,
      name: 'Watson House Rest Home',
      location: 'Blackpool',
      specialism: 'Residential Care',
      vacancies: 'Full (Waitlist Open)',
      status: 'waitlist',
    },
    {
      id: 3,
      name: 'Mariners Court Care Home',
      location: 'Fleetwood',
      specialism: 'Residential - Dementia',
      vacancies: '5 Beds Available',
      status: 'available',
    },
  ];

  const getVacancyColor = (status: string) => {
    if (status === 'available') return 'bg-[#DCFCE7] text-[#016630]';
    if (status === 'waitlist') return 'bg-[#FFEDD4] text-[#9F2D00]';
    return 'bg-gray-200 text-gray-800';
  };

  return (
    <section className="py-16 md:py-20 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-[#AD9551] text-xs font-semibold tracking-wide">
            REAL TIME UPDATES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mt-3 mb-6">
            Live Bed Availability
          </h2>
          <p className="text-[#6B7280] text-sm md:text-base max-w-xl">
            Current vacancy status across all three Terebinth Limited homes. Updated regularly to support fast placement decisions.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#AD9551] text-[15px] rounded-full">
                <th className="px-6 py-4 text-left text-white font-semibold">Care Facility</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Location</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Specialism</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Current Vacancies</th>
              </tr>
            </thead>
            <tbody>
              {facilities.map((facility) => (
                <tr
                  key={facility.id}
                className="bg-[#F8FAFB] text-[15px] hover:bg-[#F9F7F4] transition"
                >
                  <td className="px-6 py-4 text-[#1F2933] font-semibold">{facility.name}</td>
                  <td className="px-6 py-4 text-[#1F2933]">{facility.location}</td>
                  <td className="px-6 py-4 text-[#1F2933]">{facility.specialism}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[13px] font-semibold ${getVacancyColor(
                        facility.status
                      )}`}
                    >
                      {facility.vacancies}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white border-[1.1px] border-[#FAF8F4] rounded-lg p-6"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-[#1F2933] mb-1">
                  {facility.name}
                </h3>
                <p className="text-sm text-[#6B7280]">{facility.location}</p>
              </div>

              <div className="mb-4">
                <p className="text-sm text-[#6B7280]">{facility.specialism}</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xs text-[#9CA3AF]">Current Vacancies</p>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getVacancyColor(
                    facility.status
                  )}`}
                >
                  {facility.vacancies}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}