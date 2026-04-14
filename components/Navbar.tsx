'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Homes', href: '/our-homes' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Contact', href: '/contact' },
  ];

   const isActive = (href: string) => {
    // For Home, check if on root
    if (href === '/' && pathname === '/') return true;
    // For hash links, check if pathname contains the text
    if (href.startsWith('#')) return false;
    return pathname === href;
  };

  return (
    <>
    <nav className="hidden md:block fixed top-0 md:top-6 left-0 right-0 z-50 max-w-7xl md:mx-auto mx-0 rounded-full md:bg-[#FFFFFFF2] bg-[#FAF8F4] border-[0.8px] border-[#E5E7EB] shadow-md">
      <div className="md:max-w-6xl md:mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <Image src={logo} alt="Terebinth Limited Logo" className="h-30 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                 className={`text-[15px] font-lato transition ${
                  isActive(item.href)
                    ? 'text-[#AD9551]'
                    : 'text-[#6B7280] hover:text-[#AD9551]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Callback Button */}
          <Link href="/contact" className="hidden md:block text-sm bg-[#AD9451] cursor-pointer text-white px-6 py-3 rounded-full hover:bg-[#8B6D3C] transition">
            Enquire Now
          </Link>
        </div>
        </div>
      </nav>

      {/* Mobile Navbar Header */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#FAF8F4] border-b-[1.1px] border-[#AD9551] rounded-full">
        <div className="flex justify-between items-center h-16 px-6">
          {/* Logo */}
          <Link href="/">
            <Image src={logo} alt="Terebinth Limited Logo" className="h-30 w-auto" />
          </Link>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl font-bold text-[#1F2933]"
          >
             <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </nav>
       
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed top-0 left-0 right-0 bg-[#FAF8F4] z-40">
            {/* Navigation Items */}
            <div className="px-6 py-6 mt-16 space-y-5">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-lato transition ${
                    isActive(item.href)
                      ? 'text-[#AD9551] font-semibold'
                      : 'text-[#6B7280] hover:text-[#AD9551]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Enquire Button */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  router.push('/contact');
                }}
                className="w-full mt-2 bg-[#AD9451] text-white text-sm py-4 rounded-full hover:bg-[#8B6D3C] transition font-medium"
              >
                Enquire Now
              </button>
            </div>
          </div>
        )}
    </>
  );
}