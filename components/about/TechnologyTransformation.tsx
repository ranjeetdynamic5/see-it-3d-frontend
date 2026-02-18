import Link from "next/link";

const TechnologyTransformation = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          
          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src="/About/Transforming Businesses.webp"
              alt="AEC BIM workflows, AI automation and digital design transformation"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Transforming Businesses{" "}
              <span className="text-[#EA5455]">with Technology</span>
            </h2>

            <p className="mt-6 text-lg text-slate-700">
              We help organisations modernise the way they design, collaborate,
              and deliver projects by combining advanced
              <strong> AEC and BIM workflows</strong> with intelligent
              <strong> AI-powered systems</strong> and scalable
              <strong> web-based solutions</strong>.
            </p>

            <p className="mt-4 text-slate-600">
              Our expertise covers <strong>2D drafting</strong>,
              <strong> 3D modelling</strong>, and high-quality
              <strong> visualisation</strong> aligned with
              <strong> UK government BIM standards</strong>, enabling teams to
              improve accuracy, compliance, and cross-discipline collaboration.
            </p>

            <p className="mt-4 text-slate-600">
              Beyond design, we integrate <strong>AI-driven automation</strong>
              to reduce manual effort, optimise data flows, and support smarter
              decision-making across complex projects and organisations.
            </p>

            <p className="mt-4 text-slate-600">
              Through <strong>custom web platforms</strong> and
              <strong> cloud-based applications</strong>, we ensure these
              technologies are affordable, easy to integrate, and accessible —
              helping businesses scale efficiently without disrupting existing
              workflows.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-[#EA5455] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d94a4b]"
              >
                Contact Us
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyTransformation;
