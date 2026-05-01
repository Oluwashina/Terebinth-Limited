"use client";
import Link from 'next/link';
import Image from 'next/image';
import heartIcon from '@/assets/icons/heart.svg'
import downloadIcon from '@/assets/icons/download.svg'

export default function DownloadableResourcesSection() {
  const resources = [
    {
      id: 1,
      icon: heartIcon,
      title: 'For Families',
      description:
        "Choosing a care home is one of the hardest decisions you'll make. We understand that, and we're here to support you every step of the way.",
      buttonLabel: 'Make Enquiries',
      buttonHref: '/contact',
      buttonVariant: 'solid',
    },
    {
      id: 2,
      icon: downloadIcon,
      title: 'Referral Sheet',
      description: 'One-page referral form for quick submissions',
      buttonLabel: 'Download Sheet',
      buttonHref: '#',
      buttonVariant: 'solid',
      isDownload: true,
    },
    {
      id: 3,
      icon: heartIcon,
      title: 'CQC Profiles',
      description: 'Links to all current CQC registration profiles',
      buttonLabel: 'Make Enquiries',
      buttonHref: '/contact',
      buttonVariant: 'solid',
    },
  ];

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Replace with your actual PDF path
    const link = document.createElement('a');
    link.href = '/referral-sheet.pdf';
    link.download = 'Terebinth-Referral-Sheet.pdf';
    link.click();
  };

  return (
    <section className="py-16 md:py-20 px-6 md:px-8 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-[#AD9451] text-xs font-semibold tracking-wide">
            RESOURCES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mt-3 mb-6">
            Downloadable Resources
          </h2>
          <p className="text-[#6B7280] text-sm md:text-base max-w-2xl">
            Access our professional resource library including commissioner packs, referral forms, and CQC profiles for streamlined placement processes.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="border-l-[1.5px] border-r-[1.5px] border-l-[#AD9451] border-r-[#AD9451] bg-white rounded-lg p-8 flex flex-col justify-between hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className='mb-6 flex justify-center'> 
                <div className="flex justify-center items-center bg-[#AD94511A] rounded-full w-12 h-12 text-4xl">
                    <Image src={resource.icon} alt={resource.title} width={20} height={20} />
                </div>
               </div>

              {/* Content */}
              <div className="mb-8 grow text-center">
                <h3 className="text-xl font-bold text-[#1F2933] mb-3">
                  {resource.title}
                </h3>
                <p className="text-[#6B7280] text-[13px] leading-relaxed">
                  {resource.description}
                </p>
              </div>

              {/* Button */}
              {resource.isDownload ? (
                <a
                  href="#"
                  onClick={handleDownload}
                  className="inline-block w-full text-center bg-[#AD9451] hover:bg-[#8B6D3C] text-white font-medium px-6 py-3 rounded-full transition"
                >
                  {resource.buttonLabel}
                </a>
              ) : (
                <Link
                  href={resource.buttonHref}
                  className="inline-block w-full text-center bg-[#AD9451] hover:bg-[#8B6D3C] text-white font-medium px-6 py-3 rounded-full transition"
                >
                  {resource.buttonLabel}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}