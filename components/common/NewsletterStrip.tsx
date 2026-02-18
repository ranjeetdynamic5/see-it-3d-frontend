import Link from "next/link";

export default function NewsletterStrip() {
  return (
    <section className="relative z-30">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        
        {/* This wrapper controls overlap */}
        <div className="relative -mt-8 md:-mt-16">
          <div className="rounded-2xl bg-[#07324a] px-8 py-10 shadow-2xl md:px-14 md:py-12">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              
              {/* TEXT */}
              <div>
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  Join To Get Our Newsletter
                </h3>
                <p className="mt-2 max-w-xl text-sm text-slate-300">
                  Join the SEEIT3D community today and take your creativity
                  to the next dimension with insights on 3D, AI, and modern
                  digital technologies.
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/newsletter"
                className="inline-flex items-center justify-center rounded-lg bg-[#EA5455] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d94a4b]"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
