import HeroSection from '@/components/HeroSection';
import contactImage from '@/assets/images/heroImage.jpg'
import clinicalImage from '@/assets/images/clinicalScopeImg.jpg'
import CTASection from '@/components/CTASection';
import BedAvailabilitySection from '@/components/BedAvailabilitySection';
import ClinicalCapabilitiesSection from '@/components/ClinicalCapabilitiesSection';
import AssessmentProcessSection from '@/components/AssessmentProcessSection';
import ReferralContactSection from '@/components/ReferralContactSection';
import DownloadableResourcesSection from '@/components/DownloadableResourcesSection';
import DirectHomeContactsSection from '@/components/DirectHomeContactsSection';

export default function ReferralPage() {
  return (
    <div>
      <HeroSection
        imageSrc={contactImage}
        imageAlt="Contact us"
        badges={[
          'Getting Started'
        ]}
        titleSegments={[
          { text: 'Fast, Reliable Placement Across the Fylde Coast ', isHighlighted: false },
        ]}
        description="At Terebinth Limited, we partner with Local Authority Brokerage Teams, NHS Discharge Coordinators, and Social Workers to provide safe, compliant, and person-centred residential care. We understand the pressure of finding the right placement quickly, which is why we offer transparent bed availability and a 24-hour pre-admission assessment guarantee."
        buttons={[]}
      />
    
     <BedAvailabilitySection />

     <ClinicalCapabilitiesSection imageSrc={clinicalImage} imageAlt="Clinical care team" />

     <AssessmentProcessSection />

     <ReferralContactSection />

      <DownloadableResourcesSection />

      <DirectHomeContactsSection />
      
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