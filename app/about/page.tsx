import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import aboutImage from '@/assets/images/about.jpg';
import terebinthImg from '@/assets/images/terebinthImg.jpg';
import aboutHeroImage from '@/assets/images/heroImage.jpg'
import HeroSection from "@/components/HeroSection";
import ApproachSection from "@/components/ApproachSection";
import heartIcon from '@/assets/icons/heart.svg';
import trendIcon from '@/assets/icons/trend.svg';
import shieldIcon from '@/assets/icons/shield.svg';
import personIcon from '@/assets/icons/person.svg';
import medalIcon from '@/assets/icons/medal.svg';
import checkboxIcon from '@/assets/icons/checkbox.svg';
import MissionSection from "@/components/MisssionSection";
import shola from '@/assets/images/shola-ogunleye.jpg';
import familyImg from '@/assets/images/families.jpg';
import admissionStepsImage from '@/assets/images/admission-steps.jpg'
import LeadershipSection from "@/components/LeadershipSection";
import LeadershipProfileSection from "@/components/LeadershipProfileSection";
import CommitmentSection from "@/components/FamilyCommitmment";
import GovernanceQualitySection from "@/components/GovernanceQualitySection";


export default function AboutPage() {

   const approachCards = [
    {
      icon: personIcon,
      title: 'Person-Centred Care',
      description: 'We take time to understand each resident\'s history, preferences and needs. Care plans are developed in partnership with residents and their families, ensuring support is tailored and meaningful.'
    },
    {
      icon: shieldIcon  ,
      title: 'Professional Standards',
      description: 'Our staff are trained, supported and supervised to deliver care that meets all regulatory requirements. We maintain clear oversight and accountability across all our homes at all times.'
    },
    {
      icon: heartIcon,
      title: 'Family Partnership',
      description: 'We recognise the vital role families play in a resident\'s wellbeing. We maintain open communication, welcome visits and involve families in care decisions wherever appropriate.'
    },
    {
      icon: trendIcon,
      title: 'Continuous Improvement',
      description: 'We regularly review our practices, learn from feedback and implement improvements. Quality care means never standing still — it means always striving to do better for our residents.'
    },
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

   const commitments = [
    {
      title: 'Accountable to residents & families',
      description: 'Open, transparent communication is central to everything we do — from day-to-day care to significant decisions.'
    },
    {
      title: 'Regulated & compliant',
      description: 'All homes are CQC registered and meet the required standards for residential care provision in England.'
    },
    {
      title: 'Staff development & support',
      description: 'We invest in training and supervision so our teams can deliver the highest quality of compassionate care.'
    },
    {
      title: 'Continuously improving',
      description: 'Regular reviews, resident feedback and quality audits keep our standards rising across all three homes.'
    },
  ];

  return (
    <div>
      <HeroSection
        imageSrc={aboutHeroImage}
        imageAlt="About Terebinth Limited"
        badges={[
          'ABOUT US'
        ]}
        titleSegments={[
          { text: 'Caring for ', isHighlighted: false },
          { text: 'Your Loved Ones ', isHighlighted: true },
          { text: 'with Dignity and Respect', isHighlighted: false },
        ]}
        description="Terebinth Limited is a Fylde Coast care provider focused on delivering safe, respectful and person-centred residential care. With homes across Blackpool, Thornton-Cleveleys and Fleetwood, we are committed to creating supportive environments where residents feel valued and families feel reassured."
        buttons={[]}
      />


      <AboutSection
        image={aboutImage}
        title="Who We Are"
        label="Our Story"
        descriptions={[
          ' Terebinth Limited is a locally rooted residential care provider serving communities across the Fylde Coast. With homes in Blackpool, Thornton-Cleveleys and Fleetwood, we bring a personal and professional approach to residential care. ',
          'Our team is dedicated to creating safe, warm and respectful environments where residents can lead their best lives while receiving the support they need. We understand the importance of trust when choosing a care home.' ,
          'As a growing organisation, we remain committed to maintaining the highest standards of care across all our homes — ensuring consistency, quality and compassion in everything we do.'
        ]}
        buttonLabel="Read More"
        buttonHref="/our-homes"
      />

         <AboutSection
        image={terebinthImg}
        title="Why Choose Terebinth Limited "
        label="Our Story"
        descriptions={[
          'Terebinth Limited is a Fylde Coast care provider built on a straightforward principle: residential care should combine compassion with professionalism, warmth with clear accountability, and everyday support with genuine respect for the people being cared for. We operate three residential care homes across Blackpool, Thornton-Cleveleys, and Fleetwood. Our local presence gives us a practical understanding of the communities we serve and makes visiting easier for families across the Fylde Coast. Each home is registered with the Care Quality Commission and operates under experienced local management.',
          "What sets us apart is our focus on doing care properly. We value clear leadership, honest communication, and a culture where residents are treated as individuals. We're not the largest provider, but we aim to be dependable, transparent, and committed to continuous improvement. Our aim is to build services that families can trust and that residents genuinely feel at home in."
        ]}
        buttonLabel="Read More"
        buttonHref="/our-homes"
        imagePosition="right"
      />

      <GovernanceQualitySection
  label="GOVERNANCE AND QUALITY"
  title="Our Approach to Governance and Quality"
  description="At Terebinth Limited, governance and quality assurance are embedded into everything we do. We combine experienced leadership with structured processes to ensure our homes meet regulatory requirements, maintain safe environments, and deliver person-centred care."
  cards={[
    {
      icon: shieldIcon,
      title: 'CQC Registration & Compliance',
      description: 'All our homes are registered with the Care Quality Commission and operate under experienced Managers who understand regulatory standards and best practice.',
    },
    {
      icon: checkboxIcon,
      title: 'Quality Monitoring Systems',
      description: 'We use structured quality assurance processes, regular audits, and care plan reviews to ensure standards are maintained and improvements are identified and acted upon.',
    },
    {
      icon: trendIcon,
      title: 'Continuous Improvement Culture',
      description: 'We regularly review our practices, learn from feedback and implement improvements. Quality care means never standing still — it means always striving to do better for our residents.',
    },
  ]}
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
                text: "Raising the standard of adult social care requires more than just compassion; it demands robust governance, commercial discipline and a relentless focus on quality. This is what we are about",
                attribution: "[Shola Ogunleye], Director"
            }}
         />

         <CommitmentSection
          label="OUR COMMITMENT TO FAMILIES"
          title="How We Work with Families"
          description="We believe good care is built on strong partnerships with families, and with the people we support."
          items={[
            {
              title: 'Open Communication',
              description: 'We keep families informed about their loved one\'s well-being, care plans, and any changes. We believe families should never be left in the dark.',
            },
            {
              title: 'Involvement in Care Planning',
              description: 'Families are invited to contribute to care plans and share insights about preferences, routines, and what makes their loved one comfortable.',
            },
            {
              title: 'Visiting & Accessibility',
              description: 'We welcome family visits and understand how important it is for families to stay connected with their loved ones.',
            },
            {
              title: 'Transparent Admissions',
              description: 'From the first enquiry through to admission, we aim to make the process clear, supportive, and respectful.',
            },
          ]}
          buttonLabel="Arrange a Family Enquiry"
          buttonHref="/contact"
          imageSrc={familyImg}
          imageAlt="Family visit at care home"
          imagePosition="right"
        />

         <CommitmentSection
          label="Our commitment to professionals"
          title="How We Work with Professionals"
          description="We believe good care is built on strong partnerships with professionals, and with the people we support."
          items={[
            {
              title: 'Rapid Referral Response',
              description: 'We offer same-day referral reviews and a 24-hour pre-admission assessment guarantee to help prevent delayed discharges.',
            },
            {
              title: 'Bed Availability',
              description: 'We provide regular updates on current vacancies across our three homes to support effective brokerage and placement planning.',
            },
            {
              title: 'Clear Clinical Criteria',
              description: 'We\'re upfront about what we can and cannot support, helping professionals make appropriate referrals without wasted time.',
            },
            {
              title: 'Collaborative Admission',
              description: 'We work closely with discharge teams, social workers, and commissioners to ensure smooth, well-coordinated placements.',
            },
          ]}
          buttonLabel="Make a Referral"
          buttonHref="/referral"
          imageSrc={admissionStepsImage}
          imageAlt="Family visit at care home"
          imagePosition="left"
        />

       <ApproachSection
        label="Our Principles"
        title="Our Approach to Care"
        subtitle="At Terebinth Limited, we believe excellent residential care is built on respect, compassion and clear communication."
        cards={approachCards}
      />

       <MissionSection
        label="Our Mission"
        title="Why We Do What We Do"
        description="Our mission is to provide safe, compassionate and well-led residential care that protects dignity, supports wellbeing and gives families confidence. We want our homes to be places where people feel secure, supported and respected. We also recognise that quality care depends on clear standards, responsible leadership and a commitment to continuous improvement. Our mission is therefore not only to provide care, but to build services that are trusted, accountable and sustainable."
        mission="Our mission is therefore not only to provide care, but to build services that are trusted, accountable and sustainable."
        attribution="Terebinth Limited — Mission Statement"
      />

      <LeadershipSection
        label="Leadership"
        title="Leadership and Commitment"
        description="Terebinth Limited is led by experienced professionals who understand the importance of quality care and the responsibilities that come with it. Our leadership team provides clear direction, supports our staff and ensures that standards are met and maintained across all our homes. We are accountable to our residents, their families and the wider community. We work closely with local health and social care partners, regulators and commissioners to ensure our services meet the needs of those we serve."
        subdescription="Our commitment to improvement is ongoing. We invest in our staff, our facilities and our systems because Terebinth Limited aims to be a trusted name in residential care across the Fylde Coast."
        commitments={commitments}
      />
      

      <CTASection
            title="Find Out More About Our Homes"
              label='discover our homes'
            description="Explore our homes across the Fylde Coast and learn more about the care environments we are building for residents and families"
            buttons={[
              {
                label: 'View Our Homes',
                href: '/our-homes',
                variant: 'solid',
              },
              {
                label: 'Discuss care Needs',
                href: '/contact',
                variant: 'outline',
              },
            ]}
          />
    </div>
  );
}