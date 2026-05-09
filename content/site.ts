export const siteConfig = {
  name: "C-Visas Agency",
  tagline: "Study Abroad Consultants in Rwanda",
  description:
    "Rwanda's trusted study abroad consultants. We help students apply to universities in Canada, UK, Germany, Australia, and the USA — and guide them through the visa process.",
  url: "https://cvisasagency.rw",
  whatsapp: "+250788000000",
  phone: "+250 788 000 000",
  email: "info@cvisasagency.rw",
  address: "KG 7 Ave, Kigali, Rwanda",
  social: {
    facebook: "https://facebook.com/cvisasagency",
    instagram: "https://instagram.com/cvisasagency",
    linkedin: "https://linkedin.com/company/cvisasagency",
    twitter: "https://twitter.com/cvisasagency",
  },
  nav: [
    { label: "Home", href: "/" },
    {
      label: "Destinations",
      href: "/destinations",
      children: [
        { label: "Study in Canada", href: "/destinations/canada" },
        { label: "Study in UK", href: "/destinations/uk" },
        { label: "Study in Germany", href: "/destinations/germany" },
        { label: "Study in Australia", href: "/destinations/australia" },
        { label: "Study in USA", href: "/destinations/usa" },
      ],
    },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Visa Assistance", href: "/services/visa-assistance" },
        { label: "Admission Support", href: "/services/admission-support" },
        { label: "Scholarship Guidance", href: "/services/scholarship-guidance" },
        { label: "Interview Preparation", href: "/services/interview-preparation" },
      ],
    },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ],
};
