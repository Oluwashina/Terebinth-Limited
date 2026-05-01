import Link from 'next/link';
import Image from 'next/image';
import phoneIcon from '@/assets/icons/call.svg';
import emailIcon from '@/assets/icons/message.svg';
import buildingIcon from '@/assets/icons/building.svg'; // You may need to add this icon

export default function DirectHomeContactsSection() {
  const homes = [
    {
      id: 1,
      name: 'Redbricks Care Home',
      location: 'Thornton-Cleveleys',
      specialty: 'Residential and Dementia Care',
      phone: '01253 854008',
      email: 'redbrickscarehome@terebinthltd.com',
      buttonLabel: 'View Redbricks',
      buttonHref: '/our-homes/redbricks',
    },
    {
      id: 2,
      name: 'Watson House Rest Home',
      location: 'Blackpool',
      specialty: 'Residential Care',
      phone: '01253 341550',
      email: 'watsonhousecare@live.co.uk',
      buttonLabel: 'View Watson House',
      buttonHref: '/our-homes/watson-house',
    },
    {
      id: 3,
      name: 'Mariners Court Care Home',
      location: 'Fleetwood',
      specialty: 'Residential and Dementia Care',
      phone: '01253 872493',
      altPhone: '07960 485280',
      email: 'marinerscourt@terebinthltd.com',
      buttonLabel: 'View Mariners Court',
      buttonHref: '/our-homes/mariners-court',
    },
  ];

  return (
    <section className="py-16 md:py-20 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-[#AD9451] text-xs font-semibold tracking-wide">
            HOME ENQUIRIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mt-3 mb-6">
            Direct Home Contacts
          </h2>
          <p className="text-[#6B7280] text-sm md:text-base max-w-xl">
            For home-specific queries or to speak directly with a Registered Manager, use the dedicated contact details below.
          </p>
        </div>

        {/* Homes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homes.map((home) => (
            <div
              key={home.id}
              className="border-[0.8px] border-[#E5E7EB] bg-white rounded-lg p-8 flex flex-col hover:shadow-md transition"
            >
              {/* Building Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#AD95511A] rounded-full">
                    <Image src={buildingIcon} alt="Building Icon" width={24} height={24} />
                </div>
              </div>

              {/* Home Name */}
              <h3 className="text-xl font-semibold text-[#1F2933] mb-2">
                {home.name}
              </h3>

              {/* Location and Specialty */}
              <p className="text-sm text-[#6B7280] mb-6">
                <span className="font-medium text-[#6B7280]">{home.location}</span> - <span>{home.specialty}</span>
              </p>

              {/* Phone */}
              <div className="mb-4 flex items-center gap-3">
                <div className='bg-[#AD95511A] w-8 h-8 rounded-full flex justify-center items-center'>
                <Image
                  src={phoneIcon}
                  alt="Phone"
                  width={16}
                  height={16}
                  className="text-[#AD9451]"
                />
                </div>
                <a
                  href={`tel:${home.phone.replace(/\s/g, '')}`}
                  className="text-sm text-[#6B7280] hover:text-[#AD9451] transition"
                >
                  {home.phone}
                </a>

                  {/* Alt Phone (if exists) */}
                {home.altPhone && (
                    <div className="">
                    <a
                        href={`tel:${home.altPhone.replace(/\s/g, '')}`}
                        className="text-sm text-[#6B7280] hover:text-[#AD9451] transition"
                    >
                        {home.altPhone}
                    </a>
                    </div>
                )}
              </div>

            

              {/* Email */}
              <div className="mb-6 flex items-center gap-3">
                <div className='bg-[#AD95511A] w-8 h-8 rounded-full flex justify-center items-center'>
                <Image
                  src={emailIcon}
                  alt="Email"
                  width={16}
                  height={16}
                />
                </div>
                <a
                  href={`mailto:${home.email}`}
                  className="text-sm text-[#6B7280] hover:text-[#AD9451] transition"
                >
                  {home.email}
                </a>
              </div>

              {/* Button */}
              <div className="mt-5">
                <Link
                  href={home.buttonHref}
                  className="inline-block text-sm text-center bg-[#AD9451] hover:bg-[#8B6D3C] text-white font-medium px-10 py-3 rounded-full transition"
                >
                  {home.buttonLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}