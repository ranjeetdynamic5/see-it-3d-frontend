import Link from "next/link";

const IndustriesSection = () => {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Tailored Solutions for{" "}
              <span className="text-[#EA5455]">Every Industry</span>
            </h2>

            <p className="mt-6 text-lg text-slate-700">
              Every organisation has unique challenges. We deliver customised
              solutions that combine <strong>3D design technologies</strong>,
              <strong> AI-powered systems</strong>, and
              <strong> modern web platforms</strong> to meet the specific needs
              of each industry we serve.
            </p>

            <p className="mt-4 text-slate-600">
              Our expertise includes industry-leading
              <strong> 3D software</strong>, high-performance
              <strong> PC & Mac hardware</strong>, globally recognised
              <strong> training programmes</strong>, and expert
              <strong> consultancy</strong> — all designed to streamline
              workflows, reduce complexity, and improve productivity.
            </p>

            <p className="mt-4 text-slate-600">
              From independent designers and creative professionals to
              large-scale enterprises and public-sector organisations, we help
              teams leverage <strong>automation</strong>,
              <strong> data-driven insights</strong>, and
              <strong> scalable digital infrastructure</strong> to maximise
              efficiency and long-term value.
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
              src="/About/Tailored Solutions.webp"
              alt="Industry-specific 3D, AI and web technology solutions"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
