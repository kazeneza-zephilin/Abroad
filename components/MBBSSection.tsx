import Link from "next/link";
import { homeContent } from "@/content/home";

export default function MBBSSection() {
  const { mbbs } = homeContent;

  return (
    <section className="py-16 bg-neutral-50 border-t border-neutral-100" aria-label="MBBS Programs">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: Text */}
          <div className="lg:w-2/5">
            <span className="tag mb-3 inline-block">{mbbs.tag}</span>
            <h2 className="section-heading mb-4">{mbbs.heading}</h2>
            <p className="section-subheading mb-6">{mbbs.description}</p>
            <Link href="/destinations" className="btn-primary">
              View All Destinations
            </Link>
          </div>

          {/* Right: Country cards */}
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mbbs.items.map((item) => (
              <div
                key={item.country}
                className="card p-5 flex items-start gap-4"
              >
                <div className="text-3xl flex-shrink-0">{item.flag}</div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-base mb-1">
                    MBBS in {item.country}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
