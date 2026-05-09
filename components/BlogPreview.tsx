import Link from "next/link";
import { homeContent } from "@/content/home";

export default function BlogPreview() {
  const { blog } = homeContent;

  return (
    <section className="py-20 bg-white" aria-label="Blog and Resources">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="section-heading">{blog.heading}</h2>
            <p className="section-subheading">{blog.description}</p>
          </div>
          <Link href="/blog" className="btn-outline flex-shrink-0">
            All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blog.posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card flex flex-col overflow-hidden"
            >
              {/* Colour header */}
              <div className="h-2 bg-primary" />

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="tag text-xs">{post.category}</span>
                  <span className="text-xs text-neutral-400">{post.readTime}</span>
                </div>

                <h3 className="font-bold text-neutral-900 text-base leading-snug mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-neutral-500 leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-neutral-100">
                  <span className="text-xs text-neutral-400">{post.date}</span>
                  <span className="text-xs font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
