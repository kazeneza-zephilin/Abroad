import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import HeroSection from "@/components/HeroSection";
import MBBSSection from "@/components/MBBSSection";
import ServicesSection from "@/components/ServicesSection";
import DestinationsSection from "@/components/DestinationsSection";
import ProgramFinder from "@/components/ProgramFinder";
import PartnerLogos from "@/components/PartnerLogos";
import StepsSection from "@/components/StepsSection";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Study Abroad Consultants in Rwanda | C-Visas Agency",
  description:
    "Rwanda's trusted study abroad consultants. We help students get accepted at universities in Canada, UK, Germany, Australia, and the USA — and guide them through the visa process.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Study Abroad Consultants in Rwanda | C-Visas Agency",
    description:
      "Rwanda's trusted study abroad consultants. We help students get accepted at universities in Canada, UK, Germany, Australia, and the USA — and guide them through the visa process.",
    url: siteConfig.url,
  },
};

// JSON-LD schema for the homepage
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "KG 7 Ave",
        addressLocality: "Kigali",
        addressCountry: "RW",
      },
      sameAs: Object.values(siteConfig.social),
      priceRange: "$$",
      openingHours: "Mo-Fr 08:00-18:00",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does a Canada student visa take from Rwanda?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Processing times vary between 4 and 12 weeks depending on the time of year and application completeness. We recommend applying at least 3 months before your intake date.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need an IELTS score to study abroad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most English-speaking destinations (Canada, UK, Australia, USA) require an English test. Germany and France may accept alternatives. We advise based on your chosen destination.",
          },
        },
        {
          "@type": "Question",
          name: "What does C-Visas Agency charge?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer a free initial consultation. Service fees vary depending on the complexity of the application. We explain our fees clearly before you commit.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get a scholarship to study abroad from Rwanda?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We work with students applying for government scholarships (like Mastercard Foundation), institutional bursaries, and country-specific funding. Eligibility depends on your academic profile and chosen programme.",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection />
      <MBBSSection />
      <ServicesSection />
      <DestinationsSection />
      <ProgramFinder />
      <PartnerLogos />
      <StepsSection />
      <Testimonials />
      <BlogPreview />
      <CtaBanner />
    </>
  );
}
