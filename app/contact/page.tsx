import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import contactImage from '@/assets/images/hero-image.jpg'

export default function ContactPage() {
  return (
    <div>
      <HeroSection
        imageSrc={contactImage}
        imageAlt="Contact us"
        badges={[
          'GET IN TOUCH'
        ]}
        titleSegments={[
          { text: 'Contact ', isHighlighted: false },
          { text: 'Us', isHighlighted: false },
        ]}
        description="If you would like to ask about one of our homes, discuss residential care options or make an enquiry, please get in touch. We are committed to offering a professional, respectful and supportive first conversation."
        buttons={[]}
      />
      
      <ContactSection />
    
    </div>
  );
}