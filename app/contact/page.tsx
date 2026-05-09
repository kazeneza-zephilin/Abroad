import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us — Book a Free Consultation",
  description:
    "Book a free consultation with a C-Visas Agency consultant. We help Rwandan students plan and apply for study abroad programmes in Canada, UK, Germany, Australia, and the USA.",
};

export default function ContactPage() {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag mb-4 inline-block">Free First Consultation</span>
            <h1 className="section-heading mb-4">Book a Consultation</h1>
            <p className="section-subheading max-w-xl mx-auto">
              A consultant will review your profile and give you an honest assessment of your options. No upfront commitment required.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="card p-8">
                <h2 className="text-xl font-bold text-neutral-900 mb-6">Send us a message</h2>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        First name
                      </label>
                      <input
                        id="first-name"
                        type="text"
                        required
                        placeholder="Your first name"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Last name
                      </label>
                      <input
                        id="last-name"
                        type="text"
                        required
                        placeholder="Your last name"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Email address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      WhatsApp number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+250 7XX XXX XXX"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Destination of interest
                    </label>
                    <select
                      id="destination"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
                    >
                      <option value="">Select a destination</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                      <option>Australia</option>
                      <option>United States</option>
                      <option>France</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      What are you looking for help with?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Briefly describe your situation — education level, destination, timeline, and any specific questions."
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full py-4 text-base">
                    Send Message
                  </button>

                  <p className="text-xs text-neutral-400 text-center">
                    We respond within one business day. Your information is not shared with third parties.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-6">
                <h3 className="font-bold text-neutral-900 mb-5">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      ),
                      label: "Address",
                      value: siteConfig.address,
                      href: null,
                    },
                    {
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      ),
                      label: "Phone",
                      value: siteConfig.phone,
                      href: `tel:${siteConfig.phone}`,
                    },
                    {
                      icon: (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      ),
                      label: "Email",
                      value: siteConfig.email,
                      href: `mailto:${siteConfig.email}`,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-400 mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium text-neutral-800 hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-neutral-800">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp card */}
              <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900 text-sm">Prefer WhatsApp?</p>
                    <p className="text-xs text-neutral-500">We reply within a few hours</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-green-500 text-white font-semibold text-sm py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Message Us on WhatsApp
                </a>
              </div>

              {/* Office hours */}
              <div className="card p-6">
                <h3 className="font-bold text-neutral-900 mb-4 text-sm">Office Hours</h3>
                <div className="space-y-2">
                  {[
                    { day: "Monday – Friday", hours: "8:00 – 18:00" },
                    { day: "Saturday", hours: "9:00 – 14:00" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((item) => (
                    <div key={item.day} className="flex justify-between text-sm">
                      <span className="text-neutral-500">{item.day}</span>
                      <span className={`font-medium ${item.hours === "Closed" ? "text-neutral-400" : "text-neutral-800"}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
