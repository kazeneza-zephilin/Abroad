"use client";

import Link from "next/link";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/site";

export default function HeroSection() {
  return (
    <section className="relative pt-16 overflow-hidden bg-white" aria-label="Hero">
      {/* Top red bar */}
      <div className="bg-primary h-1 w-full" />

      <div className="container-custom py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <span className="tag mb-4 inline-block">
              {homeContent.hero.badge}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-neutral-900 leading-tight mb-5">
              Why Just Dream?{" "}
              <span className="text-primary">Study &amp; Succeed Now</span>
            </h1>

            <p className="text-neutral-500 text-lg leading-relaxed mb-8 max-w-xl">
              {homeContent.hero.subheadline}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href={homeContent.hero.cta_primary.href}
                className="btn-primary text-base px-8 py-4"
              >
                {homeContent.hero.cta_primary.label}
              </Link>
              <Link
                href="/quiz"
                className="btn-outline text-base px-8 py-4"
              >
                Check Your Eligibility
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-8 border-t border-neutral-100">
              {homeContent.stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl md:text-3xl font-black text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral-500 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero.jpg"
                alt="Students studying abroad at a top university"
                className="w-full h-[320px] md:h-[420px] object-cover"
                width={620}
                height={420}
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-900">95% Visa Success Rate</div>
                    <div className="text-xs text-neutral-500">2,000+ students placed globally</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-50 rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-neutral-100 rounded-full -z-10" />
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-neutral-50 border-t border-neutral-100 py-5">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mr-2">
              Trusted by Students from
            </span>
            {homeContent.trust.flags.map((flag, i) => (
              <span key={i} className="text-2xl" role="img">
                {flag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
