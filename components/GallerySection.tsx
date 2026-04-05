import Image, { StaticImageData } from 'next/image';

export interface GalleryImage {
  src: StaticImageData;
  label: string;
}

export interface GallerySectionProps {
  label: string;
  title: string;
  subtitle: string;
  images: GalleryImage[];
  backgroundColor?: string;
}

export default function GallerySection({
  label,
  title,
  subtitle,
  images,
  backgroundColor = 'bg-[#F8FAFB]',
}: GallerySectionProps) {
  return (
    <section className={`${backgroundColor} py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-20`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#AD9451] mb-3">
            {label}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#1F2933] mb-4 leading-tight max-w-md">
            {title}
          </h2>
          <p className="text-[#6B7280] leading-relaxed text-sm sm:text-[15px] max-w-xl">
            {subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-64 sm:h-72 lg:h-80 rounded-[20px] overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.label}
                fill
                priority
                 sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition duration-300"
              />

              {/* Image Label Overlay */}
              <div
                style={{
                        background: 'linear-gradient(0deg, rgba(31, 41, 51, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '30%',
                    }}
                 className="absolute transition flex items-end">
                  <div className="w-full p-4">
                  <p className="text-white text-sm sm:text-[15px] font-semibold">
                    {image.label}
                  </p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}