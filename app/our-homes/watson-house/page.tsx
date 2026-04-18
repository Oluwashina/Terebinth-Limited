import ContactLocationSection from "@/components/ContactLocationSection";
import DailyLifeSection from "@/components/DailyLifeSection";
import mealIcon from '@/assets/icons/meal.svg';
import activitiesIcon from '@/assets/icons/activities.svg';
import clockIcon from '@/assets/icons/clock.svg';
import CareSpecialismsSection from "@/components/CareSpecialismsSection";
import aboutImage from '@/assets/images/about.jpg';
import AboutSection from "@/components/AboutSection";
import LeadershipProfileSection from "@/components/LeadershipProfileSection";
import sara from '@/assets/images/sara-bonny.jpg';
import ApproachSection from "@/components/ApproachSection";
import personIcon from '@/assets/icons/person.svg';
import homeIcon from '@/assets/icons/home.svg';
import medalIcon from '@/assets/icons/medal.svg';
import accessibilityIcon from '@/assets/icons/accessibility.svg';
import HeroSection from "@/components/HeroSection";
import watsonHeroImage from '@/assets/images/watson-house.jpg'; 
import accommodationImg from '@/assets/images/img1.jpg'; 
import watsonPersonalCareImg from '@/assets/images/watson-personal-care.jpg'; 
import GallerySection from "@/components/GallerySection";
import watsonBedroomArea from '@/assets/images/watson-bedroom-area.jpg';
import watsonOutdoorArea from '@/assets/images/watson-outdoor-area.jpg';
import watsonInteriorHallway from '@/assets/images/watson-interior-hallway.jpg';
import watson_Img1 from '@/assets/images/watson_Img1.jpg';
import watson_Img2 from '@/assets/images/waston_Img2.jpg';
import watson_Img3 from '@/assets/images/watson_img3.jpg';
import watson_Img4 from '@/assets/images/watson_img4.jpg';
import Image from "next/image";
import Link from "next/link";


export default function WatsonHousePage() {
 
  const whyChooseUsFeatures = [
    {
      icon: personIcon,
      title: 'Small Home Environment ',
      description: 'Registered for up to 9 residents, helping create a more individual setting. Our smaller scale allows staff to provide truly personalised care and build meaningful relationships with each resident, ensuring everyone is known as an individual.'
    },
    {
      icon: medalIcon,
      title: 'Good CQC Rating',
      description: 'The home is rated Good overall by the Care Quality Commission, reflecting our commitment to quality care across all areas: safe, effective, caring, responsive and well-led services.'
    },
    {
      icon: accessibilityIcon,
      title: 'Accessible Local Setting',
      description: 'Our South Shore location provides easy access for visiting families and connects residents to the familiar local community.'
    },
    {
      icon: homeIcon,
      title: 'Well-Known South Shore Location',
      description: "South Pier, Sandcastle Waterpark and Blackpool Pleasure Beach are all part of the wider nearby area, giving relatives familiar landmarks when visiting and making the home easy to find and recognise."
    },
  ];

    return (
        <div>
         <HeroSection
            imageSrc={watsonHeroImage}
            imageAlt="Watson House - Residential Care by the Sea"
            badges={[
                'CQC Rated Good',
                'up to 9 Residents',
                'Blackpool South Shore Location'
            ]}
            titleSegments={[
            { text: 'Personal ', isHighlighted: false },
            { text: 'Residential Care ', isHighlighted: true },
            { text: 'in a Small, Homely Blackpool Setting', isHighlighted: false },
            ]}
            description="A Good-rated, CQC-regulated care home for up to 9 residents, offering personal care in a calm and more individual environment.Watson House Rest Home is located on Station Road in Blackpool's South Shore area, close to the promenade and local amenities. Nearby family landmarks in the wider area include South Pier, Sandcastle Waterpark and Blackpool Pleasure Beach, which helps position the home in a well-known and accessible part of Blackpool for visiting relatives."
            buttons={[
              {
                label: 'Book A Visit',
                href: '/contact',
                variant: 'solid',
              },
              {
                label: 'Speak to Our Team ',
                href: '/contact',
                variant: 'outline',
              },
            ]}
        />
      
         <AboutSection
            image={aboutImage}
            title="A Smaller Home with a More Personal Feel"
            label="ABOUT THE HOME"
            descriptions={[
            'Watson House Rest Home is a residential care home run by Terebinth Limited and led by a registered manager. Its smaller registration size supports a more personal setting than many larger homes, while remaining fully within the CQC-regulated framework. Watson House supports adults over 65, adults under 65, and people with physical disabilities. Set close to Blackpool promenade and the South Shore seafront area, the home sits in a location that is familiar and convenient for many families visiting from within Blackpool and the wider Fylde Coast.'
            ]}
            buttonLabel="Book A Visit"
            buttonHref="/contact"
            imagePosition="right"
        />

    
         <LeadershipProfileSection
            profileImage={sara}
            profileName="Sara Bonny"
            label="OUR LEADERSHIP"
            title="Meet Sara Bonney, Registered Manager"
            descriptions={[
             "Sara brings together deep care experience, calm leadership, and robust governance oversight. With over 20 years of experience in health and social care, Sara is an accomplished Care Home Manager with a proven record of delivering safe and high-quality care services. She combines her warm leadership with strong operational discipline and has successfully led care teams, strengthened compliance, supported residents and families, and helped services grow in quality, reputation, and stability. Sara's approach emphasizes clear communication, person-centred support, and creating environments where both residents and staff feel valued and respected. "
            ]}
            quote={{
                text: "At Watson House Care Home we're not just providing care — we're creating a home where people feel respected, supported, and genuinely cared for. It's a privilege to lead such a dedicated team.",
                attribution: "Sara Bonney, Registered Manager"
            }}
            objectPosition="center 25%"
         />

        <ApproachSection
            label="Why Choose Us"
            title="Why Families Choose Watson House"
            subtitle="A smaller-scale home, and a location close to Blackpool's promenade and South Shore amenities."
            cards={whyChooseUsFeatures}
            gap="gap-0"
        />

          <AboutSection
            image={accommodationImg}
            title="Comfortable Accommodation in a Homely Setting"
            label="ACCOMMODATION"
            descriptions={[
                "Watson House offers nine single bedrooms over two floors, with en suite vanity units, alongside communal lounge and dining areas. Watson House is  accessible, safe, homely, and suitable for people’s needs."
            ]}
           facilities={[
              "Private bedrooms with en-suite facilities",
              "Comfortable lounges and communal areas",
              "Dining area for shared meals",
              "Garden and outdoor space",
              "Visitors parking available",
              "Stairs Lift"
            ]}
            buttonLabel="Arrange A Visit"
            buttonHref="/contact"
            imagePosition="right"
            bgColor="bg-[#F8FAFB]"
        />

          {/* CQC Rating Section */}
        <section className="bg-[#342A13] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">   
            {/* Heading */}
            <h2 className="text-lg md:text-xl font-bold text-[#FAF8F4] mb-4">CQC Rating: Good</h2>
   
            {/* Description */}
            <p className="text-[#FAF8F4] text-sm md:text-sm leading-relaxed mb-6 max-w-xl mx-auto opacity-90">
              Watson House Rest Home is rated Good overall by the Care Quality Commission. This rating reflects our commitment to providing safe, effective, caring, responsive and well-led services where every resident is treated with dignity and respect.
            </p>
            
            {/* CQC Link */}
            <Link 
              href="https://www.cqc.org.uk/location/1-2789934083"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-sm text-[#AD9551] hover:text-[#E5B88D] font-medium transition-colors"
            >
              <span>
                <Image src={medalIcon} alt="CQC Good Rating" width={16} height={16} />  
              </span>
              <span>CQC Rated Good</span>
            </Link>
          </div>
        </section>
          
          <section className="py-10 px-4">
            <div className="max-w-7xl mx-auto">
            
              <iframe 
                src="/watson-widget.html"
                width="100%"
                height="310px"
                title="Watson House Widget"
                style={{ maxHeight:'100%', border: 'none' }}
              />
            </div>
          </section>

        <CareSpecialismsSection
            image={watsonPersonalCareImg}
            label="CARE AND SUPPORT"
            title="Personal Care with Dignity at the Centre"
            description="Watson House is registered to provide accommodation for persons who require nursing or personal care including adults over 65, adults under 65 and physical disabilities."
            specialisms={[
                'ADULTS OVER 65',
                'ADULTS UNDER 65',
                'People with physical Disabilities'
            ]}
            buttonLabel="Discuss Care Needs"
            buttonHref="/contact"
            imagePosition="left"
            backgroundColor="bg-[#F8FAFB]"
         />
         
         <DailyLifeSection
          label="DAILY LIFE"
          title="Life at Watson House Rest Home"
          subtitle="We create a daily routine that balances structure with flexibility, respecting individual preferences while encouraging social connection and meaningful activity."
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
          title="Explore Watson House Rest Home"
          subtitle="Take a closer look at our facilities, communal spaces, and the welcoming, homely environment we've created for our residents."
          images={[
            {
              src: watson_Img1,
              label: ""
            },
            {
              src: watsonInteriorHallway,
              label: ""
            },
            {
              src: watsonBedroomArea,
              label: ""
            },
            {
              src: watsonOutdoorArea,
              label: ""
            },
            {
              src: aboutImage,
              label: ""
            },
            {
              src: watsonPersonalCareImg,
              label: ""
            },
            {
              src: watson_Img2,
              label: ""
            },
            {
              src: watson_Img3,
              label: ""
            },
            {
              src: watson_Img4,
              label: ""
            }
          ]}
          backgroundColor="bg-[#FFFFFF]"
        />

        <ContactLocationSection
            label="GET IN TOUCH"
            title="Get in Touch with Watson House Rest Home"
            description="If you're exploring care options for yourself or a loved one, we welcome enquiries and visit. We're here to answer your questions, discuss individual care needs, and help you make an informed decision about the right care setting."
            address={{
                name: "Watson House Rest Home",
                street: "50 Station Road",
                city: "Blackpool ",
                country: "Lancashire",
                postcode: "FY4 1EU"
            }}
            phone="01253 341550"
            email="enquiries@terebinthltd.com"
            visitExpectation="When you arrange a visit, you'll have the opportunity to tour the home, meet our team, and discuss your specific care needs in detail. We'll take the time to answer all your questions and help you understand how we can support you or your loved one."
            buttonLabel="Discuss Care Needs"
            buttonHref="/contact"
            mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.6485385168835!2d-3.0541756232057047!3d53.795742672423025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b44057cd89651%3A0xb6c6d2c794fd671!2sWatson%20House%2C%2050%20Station%20Rd%2C%20Blackpool%20FY4%201EU%2C%20UK!5e0!3m2!1sen!2sng!4v1775475570296!5m2!1sen!2sng"
            backgroundColor="bg-[#FFFFFF]"
         />
            
        </div>
    )
};
