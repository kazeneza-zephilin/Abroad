import Link from "next/link";
import { homeContent } from "@/content/home";

export default function StepsSection() {
  const { steps } = homeContent;

  return (
    <section className="py-20 bg-white" aria-label="How to Apply">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-heading">{steps.heading}</h2>
          <p className="section-subheading">
            Most students complete the first two steps in under 24 hours.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connector lines on desktop */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-neutral-200" />

          {steps.items.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Step number circle */}
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black mb-6 border-2 transition-all z-10 ${
                i === 0
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-neutral-300 border-neutral-200"
              }`}>
                {step.number}
              </div>

              <h3 className="font-bold text-neutral-900 text-lg mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-14">
          <Link href="/quiz" className="btn-primary text-base px-8 py-4">
            Start with the Eligibility Quiz
          </Link>
          <Link href="/contact" className="btn-outline text-base px-8 py-4">
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
