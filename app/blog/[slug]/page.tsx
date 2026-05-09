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
            <Link href="/blog" className="hover:text-slate-900">
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{post.title}</span>
          </nav>

          {/* Article Meta */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-slate-600 mb-6">{post.description}</p>

            {/* Author and Date */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-t border-b border-slate-200">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <div>
                  <p className="font-medium text-slate-900">{post.author}</p>
                  <p className="text-sm text-slate-600">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <div className="text-sm text-slate-600">
                {post.readTime} min read
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-slate max-w-none py-8">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("##")) {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold text-slate-900 mt-8 mb-4"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("-")) {
                const items = paragraph.split("\n").filter((item) => item);
                return (
                  <ul key={i} className="list-disc list-inside space-y-2 mb-4">
                    {items.map((item, j) => (
                      <li key={j} className="text-slate-700">
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p key={i} className="text-slate-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Need Expert Guidance?
            </h3>
            <p className="text-slate-600 mb-6">
              Our consultants can help you navigate the entire study abroad
              process. Book a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Contact Us
              </Link>
              <Link
                href="/quiz"
                className="inline-block px-6 py-3 bg-slate-100 text-slate-900 font-medium rounded-lg hover:bg-slate-200 transition-colors text-center"
              >
                Take Eligibility Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Related Image */}
                  {relatedPost.imageUrl && (
                    <div className="relative h-32 bg-slate-200 overflow-hidden">
                      <img
                        src={relatedPost.imageUrl}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                      {relatedPost.description}
                    </p>
                    <div className="text-xs text-slate-500">
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
