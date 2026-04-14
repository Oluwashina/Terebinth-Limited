import Link from 'next/link';

interface CQCRating {
  rating: string;
  ratingColor: string;
  lastUpdate: string;
  reportUrl: string;
}

interface CareHomeReview {
  homeName: string;
  score: number;
  maxScore?: number;
  reviewsUrl: string;
}

interface RatingsSectionProps {
  cqc: CQCRating;
  careHomeReview: CareHomeReview;
  backgroundColor?: string;
}

export default function RatingsSection({
  cqc,
  careHomeReview,
  backgroundColor = 'bg-[#F9FAFB]',
}: RatingsSectionProps) {
  const { score, maxScore = 10 } = careHomeReview;
  const percentage = (score / maxScore) * 100;
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <section className={`${backgroundColor} py-16 sm:py-20 px-6 sm:px-12 lg:px-20`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CQC Rating Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10 flex flex-col items-center text-center">
            {/* CQC Logo */}
            <div className="flex items-center gap-3 mb-6">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="26" stroke="#5C2D91" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 12" />
                <path d="M28 8 C38 8, 48 18, 48 28 C48 38, 38 48, 28 48" stroke="#5C2D91" strokeWidth="4" strokeLinecap="round" fill="none" />
                <circle cx="28" cy="28" r="8" fill="#5C2D91" />
              </svg>
              <div className="text-left">
                <p className="text-lg font-semibold text-[#5C2D91] leading-tight">CareQuality</p>
                <p className="text-lg font-semibold text-[#5C2D91] leading-tight">Commission</p>
              </div>
            </div>

            <p className="text-[#6B7280] text-sm sm:text-base mb-5">We are proud to be rated</p>

            <div className={`${cqc.ratingColor} text-white text-2xl sm:text-3xl font-bold tracking-widest py-4 px-16 rounded-lg mb-5 w-full max-w-sm`}>
              {cqc.rating}
            </div>

            <p className="text-[#6B7280] text-xs sm:text-sm mb-4">Last update: {cqc.lastUpdate}</p>

            <Link
              href={cqc.reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5C2D91] text-xs sm:text-sm font-semibold tracking-wider underline underline-offset-4 hover:text-[#4a2275] transition"
            >
              VIEW THE REPORT
            </Link>
          </div>

          {/* CareHome.co.uk Review Card */}
          <div className="bg-[#F8F9FA] rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10 flex flex-col items-center text-center">
            <p className="text-[#5C2D91] text-lg sm:text-xl font-semibold mb-1">CareHome.co.uk Review</p>
            <p className="text-[#6B7280] text-sm sm:text-base mb-6">{careHomeReview.homeName}</p>

            {/* Circular Score */}
            <div className="relative w-32 h-32 mb-5">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="6" />
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-[#1F2933]">{score}</span>
              </div>
            </div>

            {/* carehome.co.uk branding */}
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 rounded-full bg-[#2563EB] flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">c</span>
              </div>
              <span className="text-[#2563EB] text-sm font-medium">carehome.co.uk</span>
            </div>

            <p className="text-[#6B7280] text-xs sm:text-sm mb-1">Review Score</p>
            <p className="text-[#9CA3AF] text-[11px] mb-4">&copy; 2025 carehome.co.uk</p>

            <Link
              href={careHomeReview.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] text-xs sm:text-sm font-semibold tracking-wider hover:text-[#1d4ed8] transition"
            >
              READ OUR REVIEWS ON CAREHOME.CO.UK
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}