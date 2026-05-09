"use client";

import { useState } from "react";
import QuizModal from "@/components/QuizModal";
import Link from "next/link";

export default function QuizPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="pt-28 pb-20 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <span className="tag mb-4 inline-block">Free — Takes Under 3 Minutes</span>
            <h1 className="section-heading mb-4">
              Check Your Study Abroad Eligibility
            </h1>
            <p className="section-subheading mb-8">
              Answer 7 short questions about your background, goals, and budget. We will review your profile and send you honest options — including when a particular country may not be the right fit.
            </p>

            <button
              id="start-quiz-btn"
              onClick={() => setOpen(true)}
              className="btn-primary text-base px-10 py-4"
            >
              Start the Eligibility Quiz
            </button>

            <p className="text-xs text-neutral-400 mt-4">
              No spam. No sales call. Just an honest assessment.
            </p>
          </div>

          {/* What we check */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Your Academic Profile",
                description:
                  "We look at your education level and what programmes you qualify for at partner universities.",
              },
              {
                title: "Your Budget Range",
                description:
                  "We match you to destinations and funding options that align with what you can realistically spend.",
              },
              {
                title: "Your Timeline",
                description:
                  "Different intake dates have different deadlines. We flag if your timeline is tight and what to prioritise.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6 text-center">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is the quiz free?",
                  a: "Yes. The quiz and the follow-up assessment are both free. We explain our service fees only if you decide to proceed with a full application.",
                },
                {
                  q: "What happens after I complete the quiz?",
                  a: "A consultant reviews your profile and contacts you within one business day. We do not use automated systems for this — a real person reads your answers.",
                },
                {
                  q: "What if I am not eligible for any destination?",
                  a: "We will tell you clearly. We also explain what you would need to change — whether that is an English test score, savings amount, or education level — to become eligible in future.",
                },
              ].map((item) => (
                <div key={item.q} className="card p-6">
                  <h3 className="font-semibold text-neutral-900 mb-2">{item.q}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="text-sm text-neutral-500 hover:text-primary transition-colors">
              Prefer to speak to someone directly? Book a consultation.
            </Link>
          </div>
        </div>
      </section>

      <QuizModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
