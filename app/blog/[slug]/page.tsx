import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/content/site";
import { blogPosts, getBlogPost, getAllBlogSlugs } from "@/content/blog";

export const dynamic = "error";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: `${post.title} | C-Visas Agency Blog`,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Featured Image */}
      {post.imageUrl && (
        <div className="relative h-96 bg-slate-200 w-full overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Header */}
      <article className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/blog" className="hover:text-slate-900 font-medium">
              Blog
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-medium truncate">{post.title}</span>
          </nav>

          {/* Article Meta */}
          <div className="mb-8">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {post.description}
            </p>

            {/* Author and Date */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 border-t border-b border-slate-200">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  C
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{post.author}</p>
                  <p className="text-sm text-slate-600">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <div className="text-sm font-medium text-slate-600 bg-slate-50 px-4 py-2 rounded-lg w-fit">
                {post.readTime} minute read
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="py-12">
            {post.content.split("\n\n").map((paragraph, i) => {
              const trimmed = paragraph.trim();
              
              // Skip empty paragraphs
              if (!trimmed) return null;

              // Headings (##)
              if (trimmed.startsWith("##")) {
                const heading = trimmed.replace(/^##\s*/, "");
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold text-slate-900 mt-8 mb-4"
                  >
                    {heading}
                  </h2>
                );
              }

              // Subheadings (####)
              if (trimmed.startsWith("####")) {
                const subheading = trimmed.replace(/^####\s*/, "");
                return (
                  <h4
                    key={i}
                    className="text-lg font-semibold text-slate-900 mt-6 mb-3"
                  >
                    {subheading}
                  </h4>
                );
              }

              // Unordered lists (-)
              if (trimmed.startsWith("-")) {
                const items = trimmed
                  .split("\n")
                  .filter((item) => item.trim())
                  .map((item) => item.replace(/^-\s*/, ""));
                return (
                  <ul key={i} className="list-disc list-inside space-y-2 mb-6 ml-2">
                    {items.map((item, j) => (
                      <li key={j} className="text-slate-700 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              // Bold text with ** (for highlighted items like "Prime Lending Rate": 8-10%)
              let formattedParagraph = trimmed;
              formattedParagraph = formattedParagraph.replace(
                /\*\*([^*]+)\*\*/g,
                (_, text) =>
                  `<strong class="font-semibold text-slate-900">${text}</strong>`
              );

              // Regular paragraphs
              return (
                <p
                  key={i}
                  className="text-slate-700 leading-relaxed mb-6 text-base"
                  dangerouslySetInnerHTML={{ __html: formattedParagraph }}
                />
              );
            })}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-blue-100 border-t border-blue-200">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 sm:p-10 rounded-xl border border-blue-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Need Expert Guidance?
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our consultants can help you navigate the entire study abroad process and secure the best financing options. Book a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Contact Us Today
              </Link>
              <Link
                href="/quiz"
                className="inline-block px-6 py-3 bg-slate-100 text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors text-center"
              >
                Check Your Eligibility
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                >
                  {/* Related Image */}
                  {relatedPost.imageUrl && (
                    <div className="relative h-40 bg-slate-200 overflow-hidden">
                      <img
                        src={relatedPost.imageUrl}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded mb-3">
                      {relatedPost.category}
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 text-base">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                      {relatedPost.description}
                    </p>
                    <div className="text-xs text-slate-500 font-medium">
                      {new Date(relatedPost.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      • {relatedPost.readTime} min
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <span>←</span>
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
