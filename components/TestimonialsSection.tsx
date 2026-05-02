import Image from "next/image";
import quoteIcon from "../assets/icons/quote.svg";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
  rating: number; // 1-5 stars
}

export interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="bg-[#F8FAFB] py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className='flex justify-between items-center'>
          <div className="mb-12 sm:mb-12 lg:mb-14">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#AD9451] mb-3">
              Family Voices
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F2933] mb-4 leading-tight">
              Trusted by Families <br />
              Across the Fylde Coast
            </h2>

            <p className="text-[#6B7280] text-sm sm:text-[15px]">
             Trusted by families across the Fylde Coast for compassionate, professional care.
            </p>
          </div>

          {/* <div>
              <Link
              href="/testimonials"
              className="inline-block bg-[#AD9451] hover:bg-[#8B6D3C] text-white text-sm font-medium px-10 py-3 rounded-full transition"
            >
              Read More
            </Link>
          </div> */}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#F8FAFB] flex flex-col  border-[0.8px] border-[#E5E7EB] p-8 rounded-sm hover:shadow-md transition"
            >

              {/* Quote Mark */}
              <div className="mb-4">
                <Image src={quoteIcon} alt="Quote Icon" width={32} height={32} />
              </div>

              {/* Quote */}
              <p className="text-[#1F2933] italic leading-relaxed mb-8 text-sm sm:text-sm">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className='mt-auto'>
                 {/* Rating */}
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#AD9551] text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-[#1F2933] text-sm mb-0">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-[#6B7280]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}