import AboutSection from "@/components/AboutSection";
import LeadershipProfileSection from "@/components/LeadershipProfileSection";
import sara from '@/assets/images/sara-bonny.jpg';
import ApproachSection from "@/components/ApproachSection";;
import medalIcon from '@/assets/icons/medal.svg';
import heartIcon from '@/assets/icons/heart.svg';
import hookIcon from '@/assets/icons/hook.svg';
import sunlightIcon from '@/assets/icons/sunlight.svg';
import DailyLifeSection from "@/components/DailyLifeSection";
import mealIcon from '@/assets/icons/meal.svg';
import activitiesIcon from '@/assets/icons/activities.svg';
import clockIcon from '@/assets/icons/clock.svg';
import HeroSection from "@/components/HeroSection";
import marinersHeroImage from '@/assets/images/mariners-court.jpg';
import aboutImage from '@/assets/images/marinerscourt2.jpg';
import ValuesSection from "@/components/ValuesSection";
import trendIcon from '@/assets/icons/trend.svg';
import shieldIcon from '@/assets/icons/shield.svg';
import personIcon from '@/assets/icons/person.svg';
import checkboxIcon from '@/assets/icons/checkbox.svg';
import checkboxCircleIcon from '@/assets/icons/checkbox-circle.svg';
import facilitiesImage1 from '@/assets/images/facilityImage1.jpg';
import facilitiesImage2 from '@/assets/images/facilityImage2.jpg';
import ContactLocationSection from "@/components/ContactLocationSection";
import Image from "next/image";
import GallerySection from "@/components/GallerySection";
import marinaLoungeArea from '@/assets/images/mariners-lounge-area.jpg';
import marinaLoungeArea2 from '@/assets/images/mariners-lounge-area2.jpg';
import marinaDiningArea from '@/assets/images/marina-dining-area.jpg';
import marinaKitchen from '@/assets/images/marina-kitchen.jpg';
import marinersKitchen from '@/assets/images/mariners-kitchen.jpg';
import marinersLakeView from '@/assets/images/mariners-lake-view.jpg';
import marinersLakeView2 from '@/assets/images/mariners-lake-view2.jpg';
import marinersGarden from '@/assets/images/mariners-garden.jpg';
import marinersGarden2 from '@/assets/images/mariners-garden2.jpg';
import marinersBedroom from '@/assets/images/mariners-bedroom.jpg';
import marinersBedroom2 from '@/assets/images/mariners-bedroom2.jpg';
import marinersLounge from '@/assets/images/mariners-lounge.jpg';
import Link from "next/link";
import FeesAndFundingSection from "@/components/FeesAndFundingSection";
import feesImage from '@/assets/images/fee_fundingImg.jpg';
import FeaturedNewsSection from "@/components/FeaturedNewsSection";


export default function MarinersCourtPage() {

      const whyChooseUsFeatures = [
    {
      icon: hookIcon,
      title: 'Distinctive Coastal Location',
      description: "Set beside Fleetwood's boating lake and promenade, Mariners Court sits in one of Fleetwood's most recognisable coastal settings. The location feels local, familiar and connected to the life of the town."
    },
    {
      icon: heartIcon,
      title: 'Fresh Start Under New Management ',
      description: 'Mariners Court is reopening with a renewed focus on warmth, dignity and everyday reassurance. This fresh chapter brings stronger communication, a positive culture and better day-to-day experience.'
    },
    {
      icon: medalIcon,
      title: 'CQC Registered Manager',
      description: 'Led by Sara Bonney, a CQC Registered Manager with over 20 years in health and social care. Sara combines warm leadership with strong operational discipline and proven track record of quality care.'
    },
    {
      icon: sunlightIcon,
      title: 'Well Connected Fleetwood Setting',
      description: "Close to Marine Hall, Fleetwood Market, Fleetwood Museum, and connected by Blackpool's tramway. The location makes visits convenient for families across the Fylde Coast."
    },
  ];

    const values = [
    {
      icon: heartIcon,
      title: 'Dignity',
      description: 'We treat every person with respect, compassion and understanding.'
    },
    {
      icon: shieldIcon,
      title: 'Safety',
      description: 'We believe people should feel secure, protected and well supported.'
    },
    {
      icon: personIcon,
      title: 'Person Centred Care',
      description: "We recognise individuality and tailor support around each person's needs and preferences."
    },
    {
      icon: checkboxIcon,
      title: 'Accountability',
      description: 'Clear leadership and responsibility at every level, with open communication to families at all times.'
    },
    {
      icon: medalIcon,
      title: 'Community',
      description: 'We believe kindness, patience and empathy matter in every interaction.'
    },
    {
      icon: trendIcon,
      title: 'Improvement',
      description: "We are committed to learning, developing and strengthening our services over time."
    },
  ];

    return (
        <div>
            <HeroSection
                imageSrc={marinersHeroImage}
                imageAlt="Mariners Court - Fresh New Chapter in Fleetwood"
                badges={[
                    'Beside Boating Lake',
                    'Up to 26 Residents',
                    'CQC Registered Manager'
                ]}
                titleSegments={[
                    { text: 'A ', isHighlighted: false },
                    { text: 'Fresh New Chapter ', isHighlighted: true },
                    { text: 'in Fleetwood Seafront Care ', isHighlighted: false },
                    { text: '(as Featured in Blackpool Gazette)', isHighlighted: false, fontSize: 'text-xl lg:text-4xl leading-normal' },
                ]}
                description="Mariners Court is reopening under new management with a clear aim: to create a comfortable, well-led home where residents feel respected, and families feel informed, welcome and involved. Set beside Fleetwood's boating lake and promenade on Laidleys Walk, Mariners Court offers 26 beds in one of Fleetwood's most distinctive coastal settings — close to Marine Hall, Fleetwood Market, the Museum and connected by the Fylde Coast tramway."
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
            title="A Fresh Start Built on Better Communication and Stronger Care"
            label="WELCOME TO MARINERS COURT"
            descriptions={[
            'Mariners Court is being reopened under new management with a clear aim: to create a comfortable, well-led home where residents feel respected, and families feel informed, welcome and involved. This reopening marks a fresh start built on better communication, a positive culture and a stronger day-to-day experience. Mariners Court already has a recognised place in Fleetwood because of its seafront position. This fresh chapter is about moving forward: creating a welcoming home where residents and families feel comfortable, respected and listened to, with clear leadership and dependable standards guiding everything we do. '
            ]}
            buttonLabel="Book A Visit"
            buttonHref="/contact"
            imagePosition="right"
        />

          <LeadershipProfileSection
            profileImage={sara}
            profileName="Sara Bonney"
            label="OUR LEADERSHIP"
            title="Meet Sara Bonney, Registered Manager"
            descriptions={[
               "Sara brings together deep care experience, calm leadership, and robust governance oversight. With over 20 years of experience in health and social care, Sara is an accomplished Care Home Manager with a proven record of delivering safe and high-quality care services. She combines her warm leadership with strong operational discipline and has successfully led care teams, strengthened compliance, supported residents and families, and helped services grow in quality, reputation, and stability.",
               " Sara's approach emphasizes clear communication, person-centred support, and creating environments where both residents and staff feel valued and respected. As the Registered Manager at Mariners Court, Sara is leading this fresh chapter with a focus on building trust, maintaining high standards, and ensuring that every resident receives compassionate, dignified care tailored to their individual needs. Her extensive background in care home management positions her well to guide Mariners Court through this new beginning."
            ]}
            quote={{
                text: "This is an exciting new chapter for Mariners Court. We're committed to creating a home where residents feel comfortable, families feel involved, and quality care is at the heart of everything we do.",
                attribution: "Sara Bonney, Registered Manager"
            }}
            objectPosition="center 25%"
         />

        {/* Featured News Section */}
          <FeaturedNewsSection
          label="IN THE NEWS"
          title="Featured in the Blackpool Gazette"
          description="Mariners Court Care Home was featured in the Blackpool Gazette for its reopening under new management with a renewed focus on quality care and community connection in Fleetwood. The coverage highlights our commitment to creating a welcoming, well-led home where residents feel supported and families feel involved."
          buttonLabel="Read More"
          buttonHref="#"
        />

          <ValuesSection 
            label="Our Values"
            title="Values That Shape our Care"
            subtitle="The way we care is shaped by a clear set of values that guide our decisions, our culture and our day-to-day support."
            values={values}
            bgColor="bg-[#F8FAFB]"
        />

          <ApproachSection
            label="Why Choose Us"
            title="Why Families Are Drawn to Mariners Court"
            subtitle="Families want more than a care setting. They want confidence in the environment, confidence in the people and confidence in the next step."
            cards={whyChooseUsFeatures}
            gap="gap-0"
          />

          {/* Fleetwood's Coastal Community Section */}
            <section className="bg-[#342A13] py-14 md:py-20 px-4 mx-6 md:mx-0 rounded-bl-[100px] rounded-tr-[100px] border-[1.1px] border-[#E5E7EB] md:border-none">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold max-w-md text-[#FAF8F4] mb-4 md:mb-6 leading-tight">
                In the Heart of Fleetwood's Coastal Community
                </h2>
                
                <p className="text-[#FAF8F4] text-sm md:text-base leading-relaxed">
                Fleetwood's identity has long been shaped by the sea. It was conceived as a planned town in the 1830s, with streets laid out by architect Decimus Burton, and its seafront remains one of its defining features. The boating lake beside Mariners Court is part of Fleetwood's local heritage — the model yachting club was formed in 1929 and the smaller lake officially opened in 1932. 
                </p>
                <p className="text-[#FAF8F4] mt-5 text-sm md:text-base leading-relaxed">
                    This gives the area a calm but characterful sense of place that is unusual for a care home setting. Residents at Mariners Court benefit from this distinctive coastal location while remaining connected to local amenities and easily accessible for visiting families.
                </p>
            </div>
          </section>


            <section className="py-10 px-4">
                  <div className="max-w-7xl mx-auto">
                  
                    <iframe 
                      src="/mariners-widget.html"
                      width="100%"
                      height="250px"
                      title="Mariners Court Widget"
                      style={{ maxHeight:'100%', border: 'none' }}
                    />
                  </div>
          </section>

          {/* Care & Support Section */}
        <section className="py-16 md:py-20 px-4 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div>
                <p className="text-[#AD9451] text-sm font-semibold uppercase tracking-wider mb-4">
                Care & Support
                </p>
                
                <h2 className="text-2xl md:text-4xl font-bold text-[#1F2933] max-w-md mb-6 leading-tight">
                Care That Protects Dignity and Builds Confidence
                </h2>
                
                <div className="space-y-5 text-[#6B7280] mb-8">
                <p className="text-sm md:text-base leading-relaxed">
                    Our mission is to provide safe, compassionate and well-led residential care that supports each person as an individual. We aim to create homes where kindness, respect and well-being are part of everyday life. That means focusing not only on care needs, but also on comfort, routine, communication, emotional well-being and the quality of each resident's daily experience.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                    We take time to understand each resident's background, preferences and care requirements. Our care plans are developed collaboratively with residents and families, ensuring that support is tailored to individual needs and reviewed regularly to remain appropriate and effective.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                    Our experienced care team provides compassionate assistance with all aspects of daily living — personal care, medication management, mobility support, and help with meals. We believe in supporting independence wherever possible while providing reassurance and practical help when needed.
                </p>
                </div>
              
                 <Link
                  href="/contact"
                    className="inline-block bg-[#AD9451] text-white px-8 py-4 text-sm rounded-full font-medium hover:bg-[#8B6D3C] transition"
                  >
                  Discuss Care Needs
                </Link>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
                {/* Our Mission Box */}
                <div className="bg-[#342A13] rounded-bl-[70px] rounded-tr-[70px] p-8">
                <h3 className="text-2xl font-bold text-[#FAF8F4] mb-4">Our Mission</h3>
                <p className="text-sm md:text-[15px] text-[#FAF8F4] leading-relaxed opacity-90">
                    To provide safe, compassionate and well-led residential care that supports each person as an individual, creating homes where kindness, respect and well-being are part of everyday life.
                </p>
                </div>
                
                {/* What Makes Us Different */}
                <div className="bg-[#AD95510D] border-[0.8px] border-[#AD955133] rounded-[20px] p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-[#1F2933] mb-6">What Makes Us Different</h3>
                
                <div className="space-y-6">
                    {/* Fresh Start */}
                    <div className="flex gap-4">
                    <div className="shrink-0">
                        <Image src={shieldIcon} alt="Fresh Start" width={20} height={20} />
                    </div>
                    <div>
                        <h4 className="font-medium text-[#1F2933] text-sm md:text-[15px] mb-1">Fresh Start</h4>
                        <p className="text-sm text-[#6B7280]">New management bringing renewed focus on quality and communication</p>
                    </div>
                    </div>
                    
                    {/* Experienced Leadership */}
                    <div className="flex gap-4">
                    <div className="shrink-0">
                     <Image src={medalIcon} alt="Fresh Start" width={20} height={20} />
                    </div>
                    <div>
                        <h4 className="font-medium text-[#1F2933] text-sm md:text-[15px] mb-1">Experienced Leadership</h4>
                        <p className="text-sm text-[#6B7280]">CQC Registered Manager with 20+ years in care</p>
                    </div>
                    </div>
                    
                    {/* Person-Centred Approach */}
                    <div className="flex gap-4">
                      <div className="shrink-0">
                         <Image src={heartIcon} alt="Person-Centred Approach" width={20} height={20} />
                    </div>
                    <div>
                        <h4 className="font-medium text-[#1F2933] text-sm md:text-[15px] mb-1">Person-Centred Approach</h4>
                        <p className="text-sm text-[#6B7280]">Individual care plans tailored to each resident's needs</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        <DailyLifeSection
          label="DAILY LIFE"
          title="Life at Mariner’s court"
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
              description: "Families are welcome to visit throughout the day, and we encourage involvement in care planning. Our Fleetwood location makes us easy to reach for families from across Blackpool and the Fylde Coast."
            }
          ]}
          backgroundColor="bg-[#FFFFFF]"
        />

        {/* Accommodation & Facilities Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div>
                <p className="text-[#AD9451] text-xs font-semibold uppercase tracking-wider mb-4">
                Accommodation & Facilities
                </p>
                
                <h2 className="text-3xl md:text-4xl max-w-md font-bold text-[#1F2933] mb-6 leading-tight">
                A Setting That Supports Everyday Comfort
                </h2>
                
                <p className="text-[#6B7280] text-sm  md:text-base leading-relaxed mb-8">
                Good facilities are about more than rooms. They are about how the home feels to live in and how easy it is for families to stay connected. Mariners Court's seafront setting, nearby amenities and strong local identity help create a home that feels part of Fleetwood rather than separate from it. As a 26-bed care home, Mariners Court provides a comfortable scale that allows for personal attention while offering all the facilities needed for quality residential care. Our reopening under new management includes refreshed standards across accommodation, communal spaces, and the overall living environment.
                </p>
                
                <div className="bg-[#FAF8F4] border-[0.8px] border-[#F0E8D5] rounded-lg p-6">
                <h3 className="font-bold text-[#1F2933] text-base md:text-lg mb-6">Our Facilities Include:</h3>
                <ul className="space-y-4">
                    <li className="flex gap-3 items-center">
                    <Image src={checkboxCircleIcon} alt="✓" width={20} height={20} />
                    <span className="text-[#6B7280] text-sm md:text-base">Private bedrooms with en-suite facilities</span>
                    </li>
                    <li className="flex gap-3 items-center">
                    <Image src={checkboxCircleIcon} alt="✓" width={20} height={20} />
                    <span className="text-[#6B7280] text-sm md:text-base">Comfortable lounges and communal spaces</span>
                    </li>
                    <li className="flex gap-3 items-center">
                    <Image src={checkboxCircleIcon} alt="✓" width={20} height={20} />
                    <span className="text-[#6B7280] text-sm md:text-base">Dining areas for shared meals</span>
                    </li>
                    <li className="flex gap-3 items-center">
                    <Image src={checkboxCircleIcon} alt="✓" width={20} height={20} />
                    <span className="text-[#6B7280] text-sm md:text-base">Garden and outdoor space</span>
                    </li>
                    <li className="flex gap-3 items-center">
                    <Image src={checkboxCircleIcon} alt="✓" width={20} height={20} />
                    <span className="text-[#6B7280] text-sm md:text-base">Accessible bathrooms and adapted facilities</span>
                    </li>
                    <li className="flex gap-3 items-center">
                    <Image src={checkboxCircleIcon} alt="✓" width={20} height={20} />
                    <span className="text-[#6B7280] text-sm md:text-base">Activity and quiet rooms</span>
                    </li>
                    <li className="flex gap-3 items-center">
                    <Image src={checkboxCircleIcon} alt="✓" width={20} height={20} />
                    <span className="text-[#6B7280] text-sm md:text-base">Visitor parking available</span>
                    </li>
                    <li className="flex gap-3 items-center">
                    <Image src={checkboxCircleIcon} alt="✓" width={20} height={20} />
                    <span className="text-[#6B7280] text-sm md:text-base">Hair salon</span>
                    </li>
                    <li className="flex gap-3 items-center">
                    <Image src={checkboxCircleIcon} alt="✓" width={20} height={20} />
                    <span className="text-[#6B7280] text-sm md:text-base">In-house chef</span>
                    </li>
                      <li className="flex gap-3 items-center">
                    <Image src={checkboxCircleIcon} alt="✓" width={20} height={20} />
                    <span className="text-[#6B7280] text-sm md:text-base">Passenger Lift</span>
                    </li>
                     <li className="flex gap-3 items-center">
                    <Image src={checkboxCircleIcon} alt="✓" width={20} height={20} />
                    <span className="text-[#6B7280] text-sm md:text-base">Stairs Lift</span>
                    </li>
                </ul>
                </div>
            </div>
            
            {/* Right Column - Images */}
            <div className="relative space-y-6">
                <Image
                src={facilitiesImage1}
                alt="Comfortable lounge area"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full rounded-[20px] object-cover h-full md:h-100"
                />
                <Image
                src={facilitiesImage2}
                alt="Bright communal space"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                 className="w-full rounded-[20px] object-cover h-full md:h-100"
                />
            </div>
            </div>
        </div>
        </section>

         <GallerySection
          label="GALLERY"
          title="Explore Mariners Court Care Home"
          subtitle="Take a closer look at our facilities, communal spaces, and the welcoming, homely environment we've created for our residents."
          images={[
            {
              src: marinaLoungeArea,
              label: ""
            },
            {
              src: marinaDiningArea,
              label: ""
            },
            {
              src: marinaKitchen,
              label: ""
            },
             {
              src: marinaLoungeArea2,
              label: ""
            },
            {
              src: marinersLakeView,
              label: ""
            },
            {
              src: marinersGarden,
              label: ""
            },
            {
              src: marinersLakeView2,
              label: ""
            },
            {
              src: marinersBedroom,
              label: ""
            },
            {
              src: marinersKitchen,
              label: ""
            },
            {
              src: marinersGarden2,
              label: ""
            },
            {
              src: marinersLounge,
              label: ""
            },
            {
              src: marinersBedroom2,
              label: ""
            }
          ]}
          backgroundColor="bg-[#FFFFFF]"
        />

          <FeesAndFundingSection
          image={feesImage}
          homeName="Mariners Court Care Home"
          backgroundColor="bg-[#FAF8F4]"
        />

         <ContactLocationSection
            label="GET IN TOUCH"
            title="Get in Touch with Mariners Court Care Home"
            description="If you're exploring care options for yourself or a loved one, we welcome enquiries and visit. We're here to answer your questions, discuss individual care needs, and help you make an informed decision about the right care setting."
            address={{
                name: "Mariners Court Care Home",
                street: "45–46 Laidleys Walk",
                city: "Fleetwood",
                country: "Lancashire",
                postcode: "FY7 7JL"
            }}
            phone="07960 485280"
            alternativePhone="01253 872493"
            email="marinerscourt@terebinthltd.com"
            visitExpectation="When you arrange a visit, you'll have the opportunity to tour the home, meet our team, and discuss your specific care needs in detail. We'll take the time to answer all your questions and help you understand how we can support you or your loved one."
            buttonLabel="Discuss Care Needs"
            buttonHref="/contact"
            mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.4434883436256!2d-3.0381164231979025!3d53.92386447246247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b5c642de4e009%3A0xa6cceea9aa067b91!2sMariners%20Court%20Care%20Home!5e0!3m2!1sen!2sng!4v1775475732544!5m2!1sen!2sng"
            backgroundColor="bg-[#FFFFFF]"
            />
        </div>
    );
}