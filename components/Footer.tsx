import Link from 'next/link';
import Image from 'next/image';
import locationIcon from '@/assets/icons/map.svg';
import callIcon from '@/assets/icons/call.svg';
import messageIcon from '@/assets/icons/message.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Our Homes', href: '#homes' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Contact', href: '#contact' },
  ];

  const ourHomes = [
    { label: 'Watson House', href: '#' },
    { label: 'Redbricks', href: '#' },
    { label: 'Mariners Court', href: '#' },
  ];

  const company = [
    { label: 'About', href: '#about' },
    { label: 'Our Homes', href: '#homes' },
    { label: 'Admissions', href: '#admissions' },
  ];

  return (
    <footer className="bg-[#342A13] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto md:px-0 px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Section - About */}
          <div>
            <h3 className="text-xl text-[#FAF8F4] font-semibold mb-4">Terebinth Limited</h3>
            <p className="text-sm max-w-sm text-[#FAF8F4] leading-relaxed">
              A Fylde Coast care provider focused on safe, respectful and person-centred residential care. Creating warm, supportive environments where residents feel valued and families feel reassured.
            </p>
          </div>

          {/* Middle Section - Desktop: Quick Links | Mobile: Our Homes + Company */}
          <div>
            {/* Desktop View */}
            <div className="hidden lg:block">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[#FAF8F4] mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                    className="text-sm text-[#FAF8F4] hover:text-[#AD9551] transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile/Tablet View */}
            <div className="lg:hidden">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[#FAF8F4] mb-4">
                Our Homes
              </h4>
              <ul className="space-y-2 mb-8">
                {ourHomes.map((home) => (
                  <li key={home.label}>
                    <Link
                      href={home.href}
                      className="text-sm text-gray-300 hover:text-[#AD9551] transition"
                    >
                      {home.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-sm font-semibold uppercase tracking-wide text-[#FAF8F4] mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                {company.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-300 hover:text-[#AD9551] transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section - Contact */}
          <div className="lg:col-span-1 sm:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[#FAF8F4] mb-6">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm text-[#FAF8F4]">
              <div className="flex items-start gap-3">
                <span className="mt-1">
                    <Image src={locationIcon} alt="Location Icon" width={20} height={20} />
                </span>
                <div>
                  <p>50 Station Road</p>
                  <p>Blackpool</p>
                  <p>FY4 1EU</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span>
                    <Image src={callIcon} alt="Call Icon" width={20} height={20} />
                </span>
                <a href="tel:01253341550" className="hover:text-[#AD9551] transition">
                  01253 341550
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span>
                    <Image src={messageIcon} alt="Message Icon" width={20} height={20} />
                </span>
                <a
                  href="mailto:enquiries@terebinthltd.com"
                  className="hover:text-[#AD9551] transition break-all"
                >
                  enquiries@terebinthltd.com
                </a>
              </div>
            </div>
          </div>
        </div>

          {/* Divider */}
        <div className="border-t-[0.8px] mt-10 border-[#FAF8F4]" />

        {/* Bottom Footer */}
        <div className="px-6 md:px-0 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-[#FAF8F4]">
            <p>© {currentYear} Terebinth Limited. All rights reserved.</p>
            <p className="text-center sm:text-right">
                Providing compassionate care across the Fylde Coast
            </p>
            </div>
        </div>
      </div>

    
    </footer>
  );
}