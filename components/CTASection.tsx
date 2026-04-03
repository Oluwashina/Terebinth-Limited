import Link from 'next/link';

export interface CTASectionProps {
  title: string;
  description: string;
  buttons: Array<{
    label: string;
    href: string;
    variant?: 'solid' | 'outline';
  }>;
}

export default function CTASection({
  title,
  description,
  buttons,
}: CTASectionProps) {
  return (
    <section className="bg-[#AC9556] py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <h2 className="text-3xl sm:text-3xl max-w-lg lg:text-4xl font-bold text-[#F7F4EE] mb-6 leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#F7F4EE] mb-10 leading-relaxed max-w-3xl">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={`px-8 py-3 rounded-full font-medium text-center transition whitespace-nowrap ${
                  button.variant === 'outline'
                    ? 'border-2 border-[#FAF8F4] text-[#FAF8F4] hover:bg-white hover:text-[#AD9451]'
                    : 'bg-[#FAF8F4] text-[#AD9451] hover:bg-[#F7F4EE] hover:text-[#AD9451]'
                }`}
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}