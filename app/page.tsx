import HeroSection from "@/components/HeroSection";
import HeroImage from '@/assets/images/hero-image.jpg'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection
        imageSrc={HeroImage}
        imageAlt="Terebinth Limited care home"
        badge="QUALITY CARE ACROSS THE FYLDE COAST"
        titleSegments={[
          { text: 'Compassionate ', isHighlighted: false },
          { text: 'Residential Care ', isHighlighted: true },
          { text: 'for Your Loved Ones', isHighlighted: false },
        ]}
        description="Three welcoming homes across Blackpool, Thornton-Cleveleys and Fleetwood — providing safe, respectful, person-centred support since our founding."
        buttons={[
          {
            label: 'Get a Callback',
            href: '/contact',
            variant: 'solid',
          },
          {
            label: 'Get a Callback',
            href: '/contact',
            variant: 'outline',
          },
        ]}
      />
      <CTASection
        title="Talk to Us About Care For Your Loved Ones"
        description="If you are exploring residential care for yourself or a loved one, we are here to help. We understand that finding the right care setting is an important decision, and we are committed to offering a professional, respectful and supportive first conversation."
        buttons={[
          {
            label: 'Speak to Our Team',
            href: '/contact',
            variant: 'solid',
          },
          {
            label: 'View Our Homes',
            href: '#homes',
            variant: 'outline',
          },
        ]}
      />
      <Footer />
    </div>
  );
}
