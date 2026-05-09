"use client";

import { useState } from "react";
import { homeContent } from "@/content/home";

export default function Testimonials() {
  const { testimonials } = homeContent;
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-neutral-50" aria-label="Student Testimonials">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="section-heading">{testimonials.heading}</h2>
          <p className="section-subheading">
            Real students. Real outcomes. No paid reviews.
          </p>
        </div>

        {/* Desktop: all cards */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.items.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <TestimonialCard t={testimonials.items[active]} />

          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === active ? "w-6 bg-primary" : "bg-neutral-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialItem {
  name: string;
  destination: string;
  university: string;
  programme: string;
  quote: string;
  year: string;
}

function TestimonialCard({ t }: { t: TestimonialItem }) {
  return (
    <div className="card p-6 flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <blockquote className="text-sm text-neutral-700 leading-relaxed italic flex-1">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <div className="pt-4 border-t border-neutral-100">
        <div className="flex items-center gap-3">
          {/* Avatar placeholder */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-red-400 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">
              {t.name.charAt(0)}
            </span>
          </div>
          <div>
            <div className="font-semibold text-neutral-900 text-sm">{t.name}</div>
            <div className="text-xs text-neutral-500">
              {t.programme} · {t.university}
            </div>
            <div className="text-xs text-primary font-medium mt-0.5">
              {t.destination} · {t.year}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
