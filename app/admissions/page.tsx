import HeroSection from "@/components/HeroSection";
import admissionsHeroImage from '@/assets/images/heroImage.jpg';
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import AdmissionStepsSection from "@/components/AdmissionStepsSection";
import admissionStepsImage from '@/assets/images/admission-steps.jpg'
import heartIcon from '@/assets/icons/heart.svg';
import personIcon from '@/assets/icons/person.svg';
import shieldIcon from '@/assets/icons/shield.svg';
import CommitmentSection from "@/components/CommitmentSection";
import FAQSection from "@/components/FAQSection";


export default function AdmissionsPage() {
 return (
    <div>
     <HeroSection
        imageSrc={admissionsHeroImage}
        imageAlt="Admissions - Finding the Right Care Home"
        badges={[
            'GETTING STARTED'
        ]}
        titleSegments={[
          { text: 'Finding The ', isHighlighted: false },
          { text: 'Right Care Home ', isHighlighted: true },
          { text: 'For Your Loved Ones', isHighlighted: false },
        ]}
        description="We understand that choosing residential care is a major decision. Our aim is to make the enquiry and admissions process clear, respectful and supportive from the very first conversation."
        buttons={[]}
      />

      <ProcessSection
            label="HOW IT WORKS"
            title="A Simple, Supportive Process"
            descriptions={[
                "We understand that choosing a residential care home is one of the most significant decisions a family will make. Throughout the admissions process we aim to be transparent, supportive and responsive to your questions and concerns.",
                "Our team will take the time to understand your loved one's needs, preferences and life history to ensure we can provide appropriate, person-centred care from day one.",
                "We encourage open communication and partnership with families at every stage from initial enquiry through to admission and beyond."
            ]}
            contactBox={{
                heading: "READY TO GET STARTED?",
                phone: "01253 341550",
                phoneLabel: "Mon-Fri, 9am-5pm",
                email: "enquiries@terebinthltd.com",
                emailLabel: "We aim to respond within 24 hours",
                buttonLabel: "Contact Us",
                buttonHref: "/contact",
            }}
       />

       <AdmissionStepsSection
            label="THE ADMISSION PROCESS"
            title="From First Contact to Admissions"
            subtitle="A clear, supportive pathway designed to make the process as straightforward as possible for you and your family."
            image={admissionStepsImage}
            steps={[
                {
                title: "Initial Contact",
                description: "Get in touch by phone or email to discuss your needs. We will listen carefully, answer your questions and provide information about our homes and services — with no pressure at any point."
                },
                {
                title: "Conversation and Assessment",
                description: "We will have a detailed conversation about the person requiring care — their needs, preferences, daily routine and any specific requirements. This helps us understand how we can provide the right support."
                },
                {
                title: "Home Visit",
                description: "We warmly encourage visits to our homes so you can see the environment, meet our staff and ask any questions. This helps families make informed, confident decisions in their own time."
                },
                {
                title: "Care Planning",
                description: "If a placement is agreed, we will work with you to develop a person-centred care plan that reflects your loved one's individual needs, preferences and personal history."
                },
                {
                title: "Admission and Settlement",
                description: "We support a smooth transition, helping your loved one settle in and ensuring families feel confident and well-informed throughout. Our team remains available to you at every stage."
                }
            ]}
      />

      <CommitmentSection
        label="WHAT TO EXPECT"
        title="Our Commitment to You"
        descriptions={[
            "We understand that choosing residential care is a significant decision for families. Throughout the admissions process we aim to be transparent, supportive and responsive to your questions and concerns.",
            "Our team will take the time to understand your loved one's needs, preferences and life history to ensure we can provide appropriate, person-centred care from day one.",
            "We encourage open communication and partnership with families at every stage from initial enquiry through to admission and beyond."
        ]}
        cards={[
            {
            icon: heartIcon,
            title: "No pressure, no rush",
            description: "We give families the time and space they need to make the right decision with confidence."
            },
            {
            icon: personIcon,
            title: "Open family communication",
            description: "We keep families informed and involved at every step, from first contact to ongoing care."
            },
            {
            icon: personIcon,
            title: "Person-centred from day one",
            description: "Care plans are built around the individual — their history, preferences and daily needs."
            },
            {
            icon: shieldIcon,
            title: "Smooth, supported transition",
            description: "We help residents and families settle in with confidence, care and continuity."
            }
        ]}
     />

     <FAQSection
        label="COMMON QUESTIONS"
        title="Frequently Asked Questions"
        subtitle="Answers to questions families often ask us about the admissions process."
        items={[
            {
            question: "How do I enquire about a home?",
            answer: "You can contact us directly by phone, email or through the website contact form."
            },
            {
            question: "Can I ask about more than one home?",
            answer: "Yes. We can help you understand which of our homes may be most suitable."
            },
            {
            question: "Can I arrange an enquiry or visit?",
            answer: "Please contact our team and we will advise on the next available steps."
            },
            {
            question: "Who can make an enquiry?",
            answer: "Enquiries can be made by individuals, families, representatives, professionals or referrers."
            },
        ]}
        ctaText="Have more questions? We are here to help."
        ctaButtonLabel="Get in Touch"
        ctaButtonHref="/contact"
      />

     <CTASection
        title="Talk to Us About Care For Your Loved Ones"
        label='GET IN TOUCH'
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
    </div>
    );
}