import HeroSection from "@/components/HeroSection";
import HeroImage from '@/assets/images/hero-image.jpg'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import { StaticImageData } from 'next/image';
import redbricsImage from '@/assets/images/redbricks.jpg';
import watsonImage from '@/assets/images/watson-house.jpg';
import marinersImage from '@/assets/images/mariners-court.jpg';
import starIcon from '@/assets/icons/star.svg';
import checkboxIcon from '@/assets/icons/checkbox.svg';
import aboutImage from '@/assets/images/about.jpg';
import heartIcon from '@/assets/icons/heart.svg';
import medalIcon from '@/assets/icons/medal.svg';
import trendIcon from '@/assets/icons/trend.svg';
import shieldIcon from '@/assets/icons/shield.svg';
import personIcon from '@/assets/icons/person.svg';
import CareHomesSection from "@/components/CareHomesSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
export default function Home() {

  const careHomes = [
    {
      id: 'redbricks',
      name: 'Redbricks Care Home',
      location: 'Thornton-Cleveleys',
      image: redbricsImage as StaticImageData,
      description: 'Part of the Fylde Coast care network, Redbricks provides compassionate residential support in a warm, well-managed environment.',
      features: [
        'Safe Care Environment',
        'Compassionate Support Staff',
        'Community Connections',
        'Regular Activities and Engagement'
      ]
    },
    {
      id: 'watson-house',
      name: 'Watson House Rest Home',
      location: 'Blackpool',
      image: watsonImage as StaticImageData,
      description: 'A welcoming residential setting providing respectful, day-to-day care for residents in the heart of Blackpool.',
      features: [
        'Comfortable residential accommodation',
        'Person-Centred Support',
        'Experienced Care Team',
        'Family Investment Welcomes'
      ]
    },
    {
      id: 'mariners-court',
      name: 'Mariners Court Care Home',
      location: 'Fleetwood',
      image: marinersImage as StaticImageData,
      description: 'Our Fleetwood-based home, focused on creating a comfortable, well-managed environment with a clear emphasis on dignity and choice.',
      features: [
        'Well-managed residential setting',
        'Focus on comfort and dignity',
        'Trained and assessed staff',
        'Responsive care approach'
      ]
    }
  ];

    const values = [
    {
      icon: heartIcon,
      title: 'Dignity',
      description: 'Treating every resident with respect and compassion in all that we do, preserving their independence and individuality.'
    },
    {
      icon: shieldIcon,
      title: 'Safety',
      description: 'Creating secure environments, maintaining clear oversight and ensuring the physical wellbeing of every resident.'
    },
    {
      icon: personIcon,
      title: 'Person-Centred',
      description: 'Support tailored to individual needs, preferences and life histories — because every resident is unique.'
    },
    {
      icon: checkboxIcon,
      title: 'Accountability',
      description: 'Clear leadership and responsibility at every level, with open communication to families at all times.'
    },
    {
      icon: medalIcon,
      title: 'Community',
      description: 'Building strong connections with residents, families and the wider Fylde Coast community around each of our homes.'
    },
    {
      icon: trendIcon,
      title: 'Improvement',
      description: 'Continuously reviewing our practices, acting on feedback, and striving to deliver the highest quality of care.'
    },
  ];
  
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

      <StatsSection
        stats={[
          { number: '3', label: 'Care Homes' },
          { number: '100%', label: 'Fylde Coast' },
          { number: '★★★★★', label: 'Family Reviews' },
          { number: '24/7', label: 'On-Site Support' },
        ]}
        badges={[
          { icon: starIcon, text: 'CQC Registered Provider', textColor: '[#6B7280]' },
          { icon: starIcon, text: 'All homes inspected & compliant', textColor: '[#AD9451]' },
          { icon: checkboxIcon, text: 'Established care provider', textColor: '[#6B7280]' },
          { icon: starIcon, text: 'Fylde Coast community', textColor: '[#AD9451]' },
        ]}
      />
      <CareHomesSection homes={careHomes} />
      <AboutSection
        image={aboutImage}
        title="A Trusted Local Care Provider"
        description="Terebinth Limited operates residential care services across the Fylde Coast. We are committed to safe, respectful and person-centred care that prioritises dignity, wellbeing, and quality of life for every resident and their family."
        buttonLabel="Read More"
        buttonHref="/about"
      />

      <ValuesSection values={values} />

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
