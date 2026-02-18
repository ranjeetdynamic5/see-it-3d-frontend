import Link from "next/link";

const InnovationSection = () => {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Leading the Digital Design{" "}
              <span className="text-[#EA5455]">Evolution</span>
            </h2>

            <p className="mt-6 text-lg text-slate-700">
              SEEIT3D is a trusted technology partner delivering advanced
              <strong> 3D design solutions</strong>, intelligent
              <strong> AI-powered systems</strong>, and modern
              <strong> web design & development</strong> for businesses across
              the UK and beyond.
            </p>

            <p className="mt-4 text-slate-600">
              Our expertise spans industry-leading <strong>3D modelling</strong>,
              <strong> CAD/BIM workflows</strong>, high-quality
              <strong> rendering & visualisation</strong>, and immersive
              <strong> virtual experiences</strong> — enabling professionals to
              communicate ideas with clarity and impact.
            </p>

            <p className="mt-4 text-slate-600">
              Beyond 3D, we help organisations unlock efficiency and scale
              through <strong>AI-driven automation</strong>, data-informed
              decision systems, and smart integrations that streamline complex
              workflows.
            </p>

            <p className="mt-4 text-slate-600">
              We also design and develop <strong>high-performance websites</strong>
              and digital platforms using modern technologies, ensuring fast
              load times, strong SEO foundations, and user experiences that
              convert — whether it’s a marketing site, training platform, or
              custom web application.
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

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="/About/3D Design Revolution.webp"
              alt="3D design, AI solutions and modern web development"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
