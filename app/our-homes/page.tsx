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
            location="THORNTON-CLEVELEYS"
            homeTitle="Redbricks Care Home"
            address="Thornton-Cleveleys, Lancashire"
            image={redbricksImage}
            imageLabel="Redbricks Care Home, Thornton-Cleveleys"
            descriptions={[
                "Redbricks Care Home is part of the growing Fylde Coast care network. Located in Thornton-Cleveleys, the home reflects our commitment to providing safe and compassionate residential support in a warm and well-managed environment.",
                "Residents at Redbricks benefit from a caring team, regular activities and strong community connections that help maintain quality of life."
            ]}
            features={[
                { text: "Safe, well-equipped care environment" },
                { text: "Compassionate support staff" },
                { text: "Experienced management team" },
                { text: "Regular activities and engagement" },
                { text: "Community connections and outings" }
            ]}
            viewButtonLabel="View Redbricks"
            viewButtonHref="/our-homes/redbricks"
            bookButtonLabel="Arrange A Visit"
            bookButtonHref="/contact"
            imagePosition="right"
            backgroundColor="bg-[#FFFFFF]"
         />

     <HomeDetailsSection 
        location="BLACKPOOL"
        homeTitle="Watson House Rest Home"
        address="50 Station Road, Blackpool, FY4 1EU"
        image={watsonHouseImage}
        imageLabel="Watson House Rest Home, Blackpool"
        descriptions={[
            "Watson House Rest Home is a welcoming residential care setting within the Terebinth Limited group. Located in Blackpool, the home provides respectful and supportive day-to-day care for residents who require assistance with personal care and daily living activities.",
            "Our experienced team creates a comfortable and safe environment where residents feel valued, supported and at home."
        ]}
        features={[
            { text: "Comfortable, well-maintained rooms" },
            { text: "Respectful, person-centred support" },
            { text: "Experienced and supervised care team" },
            { text: "Safe, supportive environment" },
            { text: "Family visits welcomed at all times" }
        ]}
        viewButtonLabel="View Watson"
        viewButtonHref="/our-homes/watson-house"
        bookButtonLabel="Arrange A Visit"
        bookButtonHref="/contact"
        backgroundColor="bg-[#FAF8F4]"
        />

         <HomeDetailsSection 
            location="FLEETWOOD"
            homeTitle="Mariners Court Care Home"
            address="Fleetwood, Lancashire"
            image={marinersImage}
            imageLabel="Mariners Court Care Home, Fleetwood"
            descriptions={[
                "Mariners Court Care Home is our Fleetwood-based residential service. The home is focused on creating a comfortable and well-managed environment for residents, with a clear emphasis on respect, safety and quality day-to-day support.",
                "Our team at Mariners Court is trained, supervised and dedicated to providing a consistent, dignified and responsive care experience for every resident."
            ]}
            features={[
                { text: "Well-managed residential setting" },
                { text: "Focus on comfort and dignity" },
                { text: "Trained and supervised staff" },
                { text: "Local community links" },
                { text: "Responsive, person-centred approach" }
            ]}
            viewButtonLabel="View Mariners"
            viewButtonHref="/our-homes/mariners-court"
            bookButtonLabel="Arrange A Visit"
            bookButtonHref="/contact"
            imagePosition="left"
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
            description: "Preserving independence and individuality at the heart of everything we do."
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

    <CTASection
        title="Speak to Us About Our Homes"
        description="If you are exploring residential care for yourself or a loved one, we are here to help. We understand that finding the right care setting is an important decision, and we are committed to offering a professional, respectful and supportive first conversation."
        buttons={[
          {
            label: 'Speak to Our Team',
            href: '/contact',
            variant: 'solid',
          },
          {
            label: 'View Our Homes',
            href: '/our-homes',
            variant: 'outline',
          },
        ]}
      />
    </div>
    );
}