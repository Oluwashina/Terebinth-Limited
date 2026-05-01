import HeroSection from "@/components/HeroSection";
import admissionsHeroImage from '@/assets/images/heroImage.jpg';
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import AdmissionStepsSection from "@/components/AdmissionStepsSection";
import admissionStepsImage from '@/assets/images/admission-steps.jpg'
import heartIcon from '@/assets/icons/heart.svg';
import callIcon from '@/assets/icons/call.svg';
import personIcon from '@/assets/icons/person.svg';
import shieldIcon from '@/assets/icons/shield.svg';
import medalIcon from '@/assets/icons/medal.svg';
import CommitmentSection from "@/components/CommitmentSection";
import FAQSection from "@/components/FAQSection";
import AdmissionPathway from "@/components/AdmissionPathway";
import InformationNeededSection from "@/components/InformationNeededSection";


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

         <AdmissionPathway
        label="Your Journey starts here"
        title="Choose Your Pathway"
        description="We've created dedicated routes for families and professionals to ensure you get the right support and information for your specific needs."
        cards={[
            {
            icon: heartIcon,
            title: 'For Families',
            description: "Choosing a care home is one of the hardest decisions you'll make. We understand that, and we're here to support you every step of the way.",
            buttonLabel: 'Make Enquiries',
            buttonHref: '/contact',
            },
            {
            icon: personIcon,
            title: 'For Professionals',
            description: "We work with Social Workers, NHS Discharge Teams, and Commissioners to provide fast, transparent, and responsive admissions.",
            buttonLabel: 'Make Referral',
            buttonHref: '/referral',
            },
        ]}
        backgroundColor="bg-[#FAF8F4]"
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

       <InformationNeededSection
            label="DOCUMENTS AND DETAILS"
            title="Information We Need"
            description="To provide the best possible care, we'll need some key information about your loved one. Don't worry if you don't have everything straight away — we can work through this together."
            cards={[
                {
                icon: shieldIcon,
                title: 'Personal and Medical Information',
                items: [
                    { text: 'Full name, date of birth, and NHS number' },
                    { text: 'Medical history and current medications' },
                    { text: 'GP and other healthcare provider details' },
                    { text: 'Any diagnosis or ongoing health conditions' },
                ],
                },
                {
                icon: heartIcon,
                title: 'Care Needs and Preference',
                items: [
                    { text: 'Daily life needs' },
                    { text: 'Dietary requirement and preferences' },
                    { text: 'Activities, hobbies, and interest' },
                    { text: 'Religious, cultural, or language needs' },
                ],
                },
                {
                icon: medalIcon,
                title: 'Funding Information',
                items: [
                    { text: 'Local Authority funding status' },
                    { text: 'Self funding or top-up arrangement' },
                    { text: 'Contact Details for social workers' },
                ],
                },
                {
                icon: callIcon,
                title: 'Emergency Contacts',
                items: [
                    { text: 'Next of kin and family contact details' },
                    { text: 'Power of attorney information' },
                    { text: 'Preferred method of communication' },
                    { text: 'Emergency contact number' },
                ],
                },
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
        title="Making a Professional Referral?"
        label='GET IN TOUCH'
        description="If you're a Social Worker, NHS Discharge Coordinator, or Local Authority Commissioner, visit our dedicated Referrals Portal for fast-track admissions support."
        buttons={[
            {
            label: 'Make Referral',
            href: '/referral',
            variant: 'solid',
            },
            ]
          }
        />
    </div>
    );
}