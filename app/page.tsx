import HeroSection from "@/components/HeroSection";
import HeroImage from '@/assets/images/heroImage.jpg'
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
import shola from '@/assets/images/shola-ogunleye.jpg';
import shieldIcon from '@/assets/icons/shield.svg';
import locationIcon from '@/assets/icons/map.svg';
import personIcon from '@/assets/icons/person.svg';
import CareHomesSection from "@/components/CareHomesSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadershipProfileSection from "@/components/LeadershipProfileSection";



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
      description: 'Our Fleetwood-based home is focused on creating a comfortable, well-managed environment with a clear emphasis on dignity and choice.',
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

    const whyChooseUsFeatures = [
    {
      icon: locationIcon,
      title: 'Local and Accessible',
      description: 'As a Fylde Coast provider, we understand the communities we serve and the importance of care that feels personal and close to home.'
    },
    {
      icon: personIcon,
      title: 'Residential Care with a Personal Approach',
      description: 'We believe care should be shaped around the individual, with attention to comfort, dignity and day-to-day wellbeing.'
    },
    {
      icon: heartIcon,
      title: 'Warm, Respectful Environments',
      description: 'Our aim is to create homes where residents feel settled, supported and valued.'
    },
    {
      icon: shieldIcon,
      title: 'Clear Leadership and Oversight',
      description: 'We value accountable management, dependable systems and a well-led care environment.'
    },
    {
      icon: checkboxIcon,
      title: 'Family Reassurance',
      description: 'We understand that families want confidence as well as care. Our approach is designed to provide both.'
    },
    {
      icon: medalIcon,
      title: 'Commitment to Quality',
      description: 'We focus on building services that combine compassion with professionalism and continuous improvement.'
    },
  ];

  const testimonials = [
    {
      id: '1',
      quote: 'The staff at Watson House treated my mother with such dignity and respect. We felt completely at ease knowing she was in safe, caring hands from day one.',
      author: 'Paula M.',
      role: 'Daughter of Resident',
      initials: 'PM',
      rating: 5,
    },
    {
      id: '2',
      quote: 'The warm, caring environment at Watson made such a difference to our father. Staff genuinely understood what person-centred care means in practice.',
      author: 'James A.',
      role: 'Son of Resident',
      initials: 'JA',
      rating: 5,
    },
    {
      id: '3',
      quote: 'The staff at Redbrick House treated my mother with such dignity and respect. We felt completely at ease knowing she was in safe, caring hands from day one.',
      author: 'Susan O.',
      role: 'Son of Resident',
      initials: 'SO',
      rating: 5,
    },
    {
      id: '4',
      quote: 'The warm, caring environment at Watson made such a difference to our father. Staff genuinely understood what person-centred care means in practice.',
      author: 'Stewart W.',
      role: 'Son of Resident',
      initials: 'SW',
      rating: 5,
    },
  ];

  
  return (
    <>
      <HeroSection
        imageSrc={HeroImage}
        imageAlt="Terebinth Limited care home"
        badges={[
          'QUALITY CARE ACROSS THE FYLDE COAST'
        ]}
        titleSegments={[
          { text: 'Compassionate ', isHighlighted: false },
          { text: 'Residential Care ', isHighlighted: true },
          { text: 'for Your Loved Ones', isHighlighted: false },
        ]}
        description="At Terebinth Limited, we provide safe, respectful and person-centred residential care in homes across Blackpool, Thornton-Cleveleys and Fleetwood. Our focus is on dignity, wellbeing and creating environments where residents feel supported and families feel reassured."
        buttons={[
          {
            label: 'Explore Our Homes ',
            href: '/our-homes',
            variant: 'solid',
          },
          {
            label: 'Contact Us',
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
          { text: 'All homes inspected & compliant', textColor: '[#AD9451]' },
          { icon: checkboxIcon, text: 'Established care provider', textColor: '[#6B7280]' },
          { text: 'Fylde Coast community', textColor: '[#AD9451]' },
        ]}
      />
      <CareHomesSection homes={careHomes} />
      <AboutSection
        image={aboutImage}
        label="About Us"
        title="A Trusted Local Care Provider"
        descriptions={[
          "Terebinth Limited is a locally rooted care provider with a growing presence across the Fylde Coast. We are committed to delivering residential care that combines compassion with professionalism, helping residents feel safe, respected and valued every day.",
          "We believe good care is built on strong leadership, attentive support and a genuine understanding of the people we serve. Our aim is to provide homes that offer not only care, but also comfort, stability and peace of mind for families."
        ]}
        buttonLabel="Read More"
        buttonHref="/about"
      />

      <ValuesSection 
        label="Our Values"
        title="What Drives Our Care"
        subtitle="These values guide everything we do and shape the culture of care across all our homes."
        values={values}
       />

         <LeadershipProfileSection
            profileImage={shola}
            profileName="Shola Ogunleye"
            label="OUR LEADERSHIP"
            title="Meet Shola Ogunleye, Our Director"
            descriptions={[
                "As a Director at Terebinth Limited, I oversee regulated residential care services across the Fylde Coast. My focus is on building safe, well-led, and person-centred care homes that thrive on clear operational controls and continuous improvement.",
                "I bring a diverse professional background spanning complex operations, procurement, project delivery, and risk management. Today, I apply that commercial and strategic breadth to the care sector—ensuring our facilities not only meet rigorous CQC standards but operate sustainably in a challenging economic landscape. Currently, I am driving the development and operational ramp-up of specialist residential services, bridging the gap between local authority commissioning needs and high-quality care delivery."
            ]}
            quote={{
                text: "At Redbricks Care Home we're not just providing care – we're creating a home where people feel respected, supported, and genuinely cared for. It's a privilege to lead such a dedicated team.",
                attribution: "[Shola Ogunleye], Director"
            }}
         />

        <WhyChooseUsSection
        label="Why Choose Us"
        title="Why Families Choose Terebinth Limited"
        subtitle="Choosing care is a significant decision. We aim to make that decision easier by providing homes that combine warmth, structure and a clear commitment to respectful support."
        features={whyChooseUsFeatures}
        buttons={[
          {
            label: 'Speak to Our Team',
            href: '/contact',
            variant: 'solid',
          },
          {
            label: 'Arrange an Enquiry',
            href: '/contact',
            variant: 'outline',
          },
        ]}
      />

      <TestimonialsSection testimonials={testimonials} />

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
            label: 'Arrange an Enquiry',
            href: '/contact',
            variant: 'outline',
          },
        ]}
      />
    </>
  );
}
