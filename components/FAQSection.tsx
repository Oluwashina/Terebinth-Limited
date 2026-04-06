'use client';

import { useState } from 'react';
import Link from 'next/link';
import arrowUp from '@/assets/icons/arrow_up.svg';
import arrowDown from '@/assets/icons/arrow_down.svg';
import Image from 'next/image';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  label: string;
  title: string;
  subtitle: string;
  items: FAQItem[];
  ctaText?: string;
  ctaButtonLabel?: string;
  ctaButtonHref?: string;
}

export default function FAQSection({
  label,
  title,
  subtitle,
  items,
  ctaText = 'Have more questions? We are here to help.',
  ctaButtonLabel = 'Get in Touch',
  ctaButtonHref = '/contact',
}: FAQSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#AD9451] mb-3">
            {label}
          </p>
          <h2 className="text-3xl sm:text-4xl max-w-sm mx-auto lg:text-4xl font-bold text-[#1F2933] mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-[#6B7280] leading-relaxed text-sm sm:text-[15px]">
            {subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-b border-[#E5E7EB] pb-2"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full flex  items-center justify-between py-3 text-left hover:text-[#AD9451] transition"
              >
                <h3 className="text-sm sm:text-base font-medium text-[#1F2933] pr-6">
                  {item.question}
                </h3>
                <div className="shrink-0 w-8 h-8 cursor-pointer flex items-center justify-center bg-[#F5EDD8] rounded-full">
                    {expandedIndex === index ? (
                        <Image src={arrowUp} alt="Collapse" className="w-4 h-4 transition-transform" />   
                    ) : (
                        <Image src={arrowDown
                        } alt="Expand" className="w-4 h-4 transition-transform" />
                    )}  
                  {/* <svg
                    className={`w-4 h-4 text-[#AD9451] transition-transform ${
                      expandedIndex === index ? 'rotate-45' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg> */}
                </div>
              </button>

              {/* Answer - Expanded */}
              {expandedIndex === index && (
                <div className="pb-4 pr-12">
                  <p className="text-[#6B7280] max-w-2xl leading-relaxed text-sm">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#6B7280] mb-6 text-sm sm:text-[15px]">
            {ctaText}
          </p>
          <Link
            href={ctaButtonHref}
            className="inline-block bg-[#AD9451] text-white px-12 py-4 text-[15px] rounded-full font-medium hover:bg-[#8B6D3C] transition"
          >
            {ctaButtonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}