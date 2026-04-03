'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
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
    <nav className="fixed top-6 left-0 right-0 z-50 max-w-7xl md:mx-auto mx-6 rounded-full bg-[#FFFFFFF2] border-[0.8px] border-[#E5E7EB] shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <button className="hidden md:block text-sm bg-[#AD9451] cursor-pointer text-white px-6 py-3 rounded-full hover:bg-[#8B6D3C] transition">
            Get a Callback
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-800"
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block py-2 text-sm font-lato transition ${
                  isActive(item.href)
                    ? 'text-[#AD9551]'
                    : 'text-[#6B7280] hover:text-[#AD9551]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full mt-4 bg-[#AD9451] text-white py-2 rounded-full hover:bg-[#8B6D3C] transition">
              Get a Callback
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}