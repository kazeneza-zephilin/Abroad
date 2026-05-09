import { homeContent } from "@/content/home";

export default function ServicesSection() {
  const { services } = homeContent;

  return (
    <section className="py-20 bg-white" aria-label="Our Services">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="section-heading">{services.heading}</h2>
          <p className="section-subheading">{services.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((service) => (
            <div key={service.title} className="card p-6 group">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <span className="text-xl group-hover:grayscale-0" role="img" aria-label={service.title}>
                  {service.icon}
                </span>
              </div>
              <h3 className="font-bold text-neutral-900 text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="/services" className="btn-outline">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
