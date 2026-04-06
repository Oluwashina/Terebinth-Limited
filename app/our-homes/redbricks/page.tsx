import HeroSection from "@/components/HeroSection";
import redbricksHeroImage from '@/assets/images/redbricks.jpg'; 
import AboutSection from "@/components/AboutSection";
import aboutImage from '@/assets/images/redbricks-about.jpg';
import LeadershipProfileSection from "@/components/LeadershipProfileSection";
import shola from '@/assets/images/shola-ogunleye.jpg';
import heartIcon from '@/assets/icons/heart.svg';
import homeIcon from '@/assets/icons/home.svg';
import waveIcon from '@/assets/icons/wave.svg';
import mealIcon from '@/assets/icons/meal.svg';
import activitiesIcon from '@/assets/icons/activities.svg';
import clockIcon from '@/assets/icons/clock.svg';
import locationIcon from '@/assets/icons/map.svg';
import ApproachSection from "@/components/ApproachSection";
import CareSpecialismsSection from "@/components/CareSpecialismsSection";
import careImage from '@/assets/images/care-activity.jpg';
import bathroomImage from '@/assets/images/bathroom.jpg';
import bedroomArea from '@/assets/images/bedroomArea.jpg';
import outdoorArea from '@/assets/images/outdoorArea.jpg';
import ensuiteRoom from '@/assets/images/ensuiteRoom.jpg';
import redbricksAccomodation from '@/assets/images/redbricks-accomodation.jpg';
import activitiesArea from '@/assets/images/activitiesArea.jpg';
import mainLoungeArea from '@/assets/images/mainLoungeArea.jpg';
import DailyLifeSection from "@/components/DailyLifeSection";
import GallerySection from "@/components/GallerySection";
import ContactLocationSection from "@/components/ContactLocationSection";

export default function RedbricksPage() {

     const whyChooseUsFeatures = [
    {
      icon: homeIcon,
      title: 'Smaller Scale Environment',
      description: 'CQC registration permits a maximum of 9 service users, creating an intimate, family-like atmosphere where staff can provide truly personalised care and attention to each resident.'
    },
    {
      icon: waveIcon,
      title: 'Coastal Location',
      description: 'The home is situated on the sea front in Little Bispham, offering residents beautiful views and the therapeutic benefits of being close to the coast.'
    },
    {
      icon: heartIcon,
      title: 'Dementia Specialism',
      description: 'Our experienced team provides specialist support for people living with dementia, with person-centred approaches designed to promote wellbeing, dignity and quality of life.'
    },
    {
      icon: locationIcon,
      title: 'Recognisable nearby Lamdmarks',
      description: "The surrounding area includes Mary's Shell on Cleveleys beach and Marsh Mill in Thornton, both useful reference points for location-based directions and local familiarity for visiting families."
    },
  ];

 return (
    <div>
     <HeroSection
        imageSrc={redbricksHeroImage}
        imageAlt="Redbricks Care Home - Residential Care by the Sea"
        badges={[
            'CQC REGISTERED',
            'UP TO 9 RESIDENTS',
            'DEMENTIA SPECIALISM'
        ]}
        titleSegments={[
          { text: 'Residential Care ', isHighlighted: true },
          { text: 'by the Sea in a Smaller, More Personal Setting', isHighlighted: false },
        ]}
        description="A CQC-registered residential care home on Queens Promenade in Thornton-Cleveleys, offering personal care for up to 9 residents. Redbricks Care Home sits on the Fylde Coast at 512 Queens Promenade in Little Bispham, a seafront position. The wider nearby area includes recognisable local landmarks such as Mary's Shell on Cleveleys beach and Marsh Mill in Thornton, which helps place the home in a familiar part of the coast for visiting families."
        buttons={[
          {
            label: 'Book A Visit',
            href: '/book-visit?home=redbricks',
            variant: 'solid',
          },
          {
            label: 'Book a Visit',
            href: '/book-visit?home=redbricks',
            variant: 'outline',
          },
        ]}
      />

      <AboutSection
        image={aboutImage}
        title="A Small Home with a Strong Sense of Place"
        label="ABOUT THE HOME"
        descriptions={[
          'Redbricks Care Home is a residential home run by Terebinth Limited, the home’s service specialisms are care for adults over 65, adults under 65, and people living with dementia.  Its Queens Promenade address gives the home a distinctive coastal identity. The seafront position and the wider Cleveleys area help create a location that feels easy to recognise for local families and visiting relatives. That positioning is grounded in the home’s address and description of the premises. '
        ]}
        buttonLabel="Book A Visit"
        buttonHref="/contact"
        imagePosition="right"
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

        <ApproachSection
            label="Why Choose Us"
            title="Why Families Choose Redbricks"
            subtitle="A smaller registered home, a distinctive seafront setting, and a location in a well-known part of the Fylde Coast. "
            cards={whyChooseUsFeatures}
            gap="gap-0"
         />

           <AboutSection
            image={redbricksAccomodation}
            title="Comfortable Accommodation in Compact Coastal Homes"
            label="ACCOMODATION"
            descriptions={[
                "Redbricks premises has an open-plan lounge/dining room, kitchen and laundry facilities, and nine single rooms with ensuite facilities across the ground and first floors. There is a passenger lift between floors. "
            ]}
            buttonLabel="Arrange A Visit"
            buttonHref="/contact"
            imagePosition="right"
            bgColor="bg-[#F8FAFB]"
        />

        <CareSpecialismsSection
            image={careImage}
            label="CARE AND SUPPORT"
            title="Personal Care with Reassurance and Day-to-Day Support"
            description="Redbricks is registered for accommodation for persons who require nursing or personal care. Service specialisms including adults over 65, adults under 65, and dementia"
            specialisms={[
                'ADULTS OVER 65',
                'ADULTS UNDER 65',
                'PEOPLE LIVING WITH DEMENTIA'
            ]}
            buttonLabel="Discuss Care Needs"
            buttonHref="/contact"
            imagePosition="left"
            backgroundColor="bg-[#F8FAFB]"
         />

         <DailyLifeSection
          label="DAILY LIFE"
          title="Life at Redbricks Care Home"
          subtitle="We have a variety of stimulating daily entertainment designed to promote wellbeing, social connection and enjoyment."
          cards={[
            {
              icon: mealIcon,
              title: "Meals & Nutrition",
              description: "Nutritious, home-cooked meals served daily in our dining area. We accommodate all dietary requirements, preferences, and cultural needs, ensuring mealtimes are both enjoyable and nourishing."
            },
            {
              icon: activitiesIcon,
              title: "Activities & Social Life",
              description: "A varied programme of activities designed around resident interests — from gentle exercise and games to music, arts and crafts, and trips to local amenities when appropriate."
            },
            {
              icon: clockIcon,
              title: "Visiting & Family Involvement",
              description: "Families are welcome to visit throughout the day, and we encourage involvement in care planning. Our South Shore location makes us easy to reach for families from across Blackpool and the Fylde Coast."
            }
          ]}
          backgroundColor="bg-[#FFFFFF]"
        />

        <GallerySection
          label="GALLERY"
          title="Explore Redbricks Care Home"
          subtitle="Take a closer look at our facilities, communal spaces, and the welcoming, homely environment we've created for our residents."
          images={[
            {
              src: mainLoungeArea,
              label: "Main Lounge & Dining Area"
            },
            {
              src: activitiesArea,
              label: "Activities Area"
            },
            {
              src: bathroomImage,
              label: "Bathroom"
            },
            {
              src: bedroomArea,
              label: "Bedroom Area"
            },
            {
              src: outdoorArea,
              label: "Outdoor Area"
            },
            {
              src: ensuiteRoom,
              label: "En suite Room"
            }
          ]}
          backgroundColor="bg-[#FFFFFF]"
        />

        <ContactLocationSection
          label="GET IN TOUCH"
          title="Get in Touch with Redbricks Care Home"
          description="The home's location on Queens Promenade places it in a recognisable coastal stretch between Blackpool and Cleveleys, with the wider area including landmarks such as Mary's Shell and Marsh Mill. That makes the location easy to explain and easy to place for visiting relatives."
          address={{
            name: "Redbricks Care Home",
            street: "512 Queens Promenade",
            city: "Thornton-Cleveleys",
            postcode: "FY5 1PQ"
          }}
          phone="01253 854008"
          email="enquiries@terebinthltd.com"
          visitExpectation="When you arrange a visit, you'll have the opportunity to tour the home, meet our team, and discuss your specific care needs in detail. We'll take the time to answer all your questions and help you understand how we can support you or your loved one."
          buttonLabel="Discuss Care Needs"
          buttonHref="/contact"
          mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.6823386498986!2d-3.0517924088128296!3d53.86629640139537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b4355d955f211%3A0xb2bb8180a5b99a7b!2sRedbricks!5e0!3m2!1sen!2sng!4v1775475671041!5m2!1sen!2sng"
          backgroundColor="bg-[#FFFFFF]"
        />

    </div>
    );
}