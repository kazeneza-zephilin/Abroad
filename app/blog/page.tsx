import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog | Study Abroad Guides & Tips | C-Visas Agency",
  description:
    "Read guides and tips about studying abroad, visa processes, and international education opportunities.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Blog | Study Abroad Guides & Tips",
    description:
      "Read guides and tips about studying abroad, visa processes, and international education opportunities.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Study Abroad Blog
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Expert guides, visa tips, and insights for international students.
            Learn from our experience helping thousands of students achieve
            their dreams.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-4 flex-grow line-clamp-3">
                    {post.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-slate-600 mb-6">
            Get personalized guidance from our consultants. Book a free
            consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#consultation-form"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Consultation
            </a>
            <a
              href="/quiz"
              className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Take Quiz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
