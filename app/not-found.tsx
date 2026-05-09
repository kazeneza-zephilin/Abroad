import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="pt-28 pb-20 min-h-screen flex items-center bg-white">
      <div className="container-custom text-center">
        <div className="max-w-lg mx-auto">
          <div className="text-8xl font-black text-primary mb-6">404</div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Page not found</h1>
          <p className="text-neutral-500 mb-10">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">
              Back to Homepage
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
