import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';
import contactImage from '@/assets/images/heroImage.jpg'
import CTASection from '@/components/CTASection';

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

       <CTASection
        title="Talk to Us About Care For Your Loved Ones"
        label='GET IN TOUCH'
        description="If you are exploring residential care for yourself or a loved one, we are here to help. We understand that finding the right care setting is an important decision, and we are committed to offering a professional, respectful and supportive first conversation."
        buttons={[
            {
            label: 'Arrange a Family Enquiry',
            href: '/contact',
            variant: 'solid',
            },
            {
            label: 'Make A Referral ',
            href: '/referral',
                variant: 'outline',
                },
            ]}
        />
    
    </div>
  );
}