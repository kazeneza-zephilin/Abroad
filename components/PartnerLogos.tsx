import { homeContent } from "@/content/home";

export default function PartnerLogos() {
  const { partners } = homeContent;

  return (
    <section className="py-14 bg-neutral-900" aria-label="Partner Universities">
      <div className="container-custom">
        <p className="text-center text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-10">
          {partners.heading}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {partners.logos.map((name) => (
            <div
              key={name}
              className="bg-neutral-800 rounded-xl px-4 py-5 flex items-center justify-center border border-neutral-700 hover:border-primary/50 transition-colors duration-300"
            >
              <span className="text-neutral-300 text-xs font-semibold text-center leading-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
