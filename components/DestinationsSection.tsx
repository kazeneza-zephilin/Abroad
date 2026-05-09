import Link from "next/link";
import { homeContent } from "@/content/home";

export default function DestinationsSection() {
  const { destinations } = homeContent;

  return (
    <section className="py-20 bg-neutral-50" aria-label="Study Destinations">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="section-heading">{destinations.heading}</h2>
            <p className="section-subheading max-w-xl">{destinations.description}</p>
          </div>
          <Link href="/destinations" className="btn-outline flex-shrink-0">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.items.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group block rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={dest.image}
                  alt={`Study in ${dest.country}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={400}
                  height={192}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-bold text-xl flex items-center gap-2">
                    <span className="text-2xl">{dest.flag}</span>
                    {dest.country}
                  </span>
                </div>
                {/* Red accent top bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              </div>

              {/* Content */}
              <div className="bg-white p-5">
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {dest.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
