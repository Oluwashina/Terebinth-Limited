import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import homesHeroImage from '@/assets/images/heroImage.jpg'; 
import watsonHouseImage from '@/assets/images/watson-house.jpg';
import redbricksImage from '@/assets/images/redbricks.jpg';
import HomeDetailsSection from "@/components/HomeDetailsSection";
import marinersImage from '@/assets/images/mariners-court.jpg';
import HomesSharedSection from "@/components/HomeSharedSection";
import heartIcon from '@/assets/icons/heart.svg';
import personIcon from '@/assets/icons/person.svg';
import shieldIcon from '@/assets/icons/shield.svg';
import trendIcon from '@/assets/icons/trend.svg';
import checkboxIcon from '@/assets/icons/checkbox.svg';
import websiteIcon from '@/assets/icons/website.svg';
import HomesEnquiryCTASection from "@/components/HomesEnquiryCTASection";

export default function OurHomesPage() {
 return (
    <div>
     <HeroSection
        imageSrc={homesHeroImage}
        imageAlt="Our Homes - Three Welcoming Homes Across the Fylde Coast"
        badges={[
            'OUR LOCATIONS'
        ]}
        titleSegments={[
          { text: 'Three ', isHighlighted: false },
          { text: 'Welcoming Homes Across ', isHighlighted: true },
          { text: 'the Fylde Coast', isHighlighted: false },
        ]}
        description="Terebinth Limited operates residential care services across the Fylde Coast. Our homes are intended to provide supportive, respectful and well-managed environments where residents feel safe, comfortable and valued."
        buttons={[]}
      />

     <HomeDetailsSection 
            badge={{
            text: 'CQC Registered',
            color: 'bg-[#DBEAFE] text-[#193CB8]',
           }}
            location="THORNTON-CLEVELEYS"
            homeTitle="Redbricks Care Home"
            address="512 Queens Promenade Thornton-Cleveleys, FY5 1PQ"
            image={redbricksImage}
            imageLabel="Redbricks Care Home, Thornton-Cleveleys"
            descriptions={[
                "Redbricks Care Home is part of the growing Fylde Coast care network. Located in Thornton-Cleveleys, the home reflects our commitment to providing safe and compassionate residential support in a warm and well-managed environment.",
                "Residents at Redbricks benefit from a caring team, regular activities and strong community connections that help maintain quality of life."
            ]}
            contact={{
                title: 'Contact Redbricks Care Home',
                phone: '01253 854008',
                email: 'redbrickscarehome@terebinthltd.com',
            }}
            viewButtonLabel="View Redbricks"
            viewButtonHref="/our-homes/redbricks"
            bookButtonLabel="Arrange A Visit"
            bookButtonHref="/contact"
            imagePosition="right"
            backgroundColor="bg-[#FFFFFF]"
         />

     <HomeDetailsSection 
       badge={{
            text: 'CQC Good',
            color: 'bg-[#DCFCE7] text-[#016630]',
           }}
        location="BLACKPOOL"
        homeTitle="Watson House Rest Home"
        address="50 Station Road, Blackpool, FY4 1EU"
        image={watsonHouseImage}
        imageLabel="Watson House Rest Home, Blackpool"
        descriptions={[
            "Watson House Rest Home is a welcoming residential care setting within the Terebinth Limited group. Located in Blackpool, the home provides respectful and supportive day-to-day care for residents who require assistance with personal care and daily living activities.",
            "Our experienced team creates a comfortable and safe environment where residents feel valued, supported and at home."
        ]}
        contact={{
            title: 'Contact Watson House',
            phone: '01253 341550',
            email: 'watsonhousecare@live.co.uk',
        }}
        viewButtonLabel="View Watson"
        viewButtonHref="/our-homes/watson-house"
        bookButtonLabel="Arrange A Visit"
        bookButtonHref="/contact"
        imagePosition="left"
        backgroundColor="bg-[#FAF8F4]"
        />

         <HomeDetailsSection 
           badge={{
            text: 'CQC Registered',
            color: 'bg-[#DBEAFE] text-[#193CB8]',
           }}
            location="FLEETWOOD"
            homeTitle="Mariners Court Care Home"
            address="45-46 Laidleys Walk Fleetwood, FY7 7JL"
            image={marinersImage}
            imageLabel="Mariners Court Care Home, Fleetwood"
            descriptions={[
                "Mariners Court Care Home is our Fleetwood-based residential service. The home is focused on creating a comfortable and well-managed environment for residents, with a clear emphasis on respect, safety and quality day-to-day support.",
                "Our team at Mariners Court is trained, supervised and dedicated to providing a consistent, dignified and responsive care experience for every resident."
            ]}
             contact={{
            title: 'Contact Mariners Court ',
            phone: '01253 872493',
            altPhone: '07960 485280',
            email: 'marinerscourt@terebinthltd.com',
        }}
            viewButtonLabel="View Mariners"
            viewButtonHref="/our-homes/mariners-court"
            bookButtonLabel="Arrange A Visit"
            bookButtonHref="/contact"
            imagePosition="right"
            backgroundColor="bg-white"
            />


        <HomesSharedSection
            label="CONSISTENT QUALITY"
            title="What Our Homes Share"
            subtitle="Across all three homes you will find the same commitment to quality, dignity and compassionate care."
            features={[
                {
            icon: heartIcon,
            title: "Warm, respectful environments",
            description: "Homes where residents feel safe, valued and genuinely cared for every day."
            },
            {
            icon: personIcon,
            title: "Person-centred support",
            description: "Care tailored to the individual needs, preferences and life history of each resident."
            },
            {
            icon: shieldIcon,
            title: "Focus on dignity and wellbeing",
            description: "Preserving independence and individuality is at the heart of everything we do."
            },
            {
            icon: trendIcon,
            title: "Responsive day-to-day care",
            description: "Attentive teams who adapt quickly to changing needs and circumstances."
            },
            {
            icon: checkboxIcon,
            title: "CQC registered and compliant",
            description: "All homes are inspected, regulated and meet required standards for residential care."
            },
            {
            icon: websiteIcon,
            title: "Clear leadership and oversight",
            description: "Experienced managers ensure consistent standards and open communication with families."
            }
         ]}
        />

        <HomesEnquiryCTASection
        label="GET IN TOUCH"
        title="Speak To Us About Our Homes"
        description="If you would like to know more about any of our homes, discuss suitability, or ask about current availability, we welcome your enquiry."
        cards={[
            {
            icon: heartIcon,
            title: 'For Families',
            description: 'Arrange a visit, discuss care needs, or ask about admissions for yourself or a loved one.',
            buttonLabel: 'Make Family Enquiry',
            buttonHref: '/contact',
            },
            {
            icon: personIcon,
            title: 'For Professionals',
            description: 'Submit referrals, check bed availability, or discuss placement criteria with our team.',
            buttonLabel: 'Make Professional Referral',
            buttonHref: '/referral',
            },
        ]}
        backgroundColor="bg-[#FAF8F4]"
        />


    </div>
    );
}