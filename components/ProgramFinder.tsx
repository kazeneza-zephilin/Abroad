"use client";

import { useState } from "react";
import Link from "next/link";
import { homeContent } from "@/content/home";

export default function ProgramFinder() {
  const { programFinder } = homeContent;
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-white" aria-label="Program Finder">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Category list */}
          <div>
            <span className="tag mb-4 inline-block">Program Finder</span>
            <h2 className="section-heading mb-3">{programFinder.heading}</h2>
            <p className="section-subheading mb-8">
              Tell us what level you want to study at and we will match you to the right universities and countries.
            </p>

            <div className="space-y-2">
              {programFinder.categories.map((cat, i) => (
                <button
                  key={cat}
                  onClick={() => setActive(i)}
                  className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-left transition-all duration-200 ${
                    active === i
                      ? "bg-primary text-white shadow-lg"
                      : "bg-neutral-50 text-neutral-700 hover:bg-red-50 hover:text-primary"
                  }`}
                >
                  <span className="font-medium text-sm">{cat}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${active === i ? "rotate-90" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/quiz" className="btn-primary">
                Find My Program
              </Link>
            </div>
          </div>

          {/* Right: Image / Info panel */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/destinations/canada.jpg"
                alt="Students on campus"
                className="w-full h-[420px] object-cover"
                width={580}
                height={420}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl" />
            </div>

            {/* Info card overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white rounded-xl p-5 shadow-xl">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">
                      {programFinder.categories[active]}
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      Available in Canada, UK, Germany, Australia and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-50 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
