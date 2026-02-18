import Image from "next/image";
import Link from "next/link";

export default function TrainingIntro() {
  return (
    <section className="bg-slate-50 pt-8 pb-16">
      {/* 👆 pt-8 = QuickAction se gap kam */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b2b3c] leading-tight">
              Professional SketchUp Online Training – Learn from Certified Experts
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Master SketchUp, LayOut and advanced visualization workflows with
              SEEIT3D’s live, interactive courses. Join hands-on sessions, get
              real-time feedback from certified trainers, and access recordings
              after every class.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#EA5455] px-6 py-3 text-sm font-semibold text-white hover:bg-[#d94344] transition"
              >
                📅 Book Your Training
              </Link>

              <Link
                href="/training#courses"
                className="inline-flex items-center justify-center rounded-lg bg-[#EA5455] px-6 py-3 text-sm font-semibold text-white hover:bg-[#d94344] transition"
              >
                See Course Options
              </Link>
            </div>

            {/* HIGHLIGHTS */}
            <div className="mt-8 rounded-xl bg-slate-50 p-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <li>• 59+ years combined training experience</li>
                <li>• Live, hands-on sessions & recorded access</li>
                <li>• Tailored 1:1 and group programmes</li>
                <li>• Real project workflows & expert feedback</li>
              </ul>
            </div>
          </div>

          {/* RIGHT IMAGE + FLOATING CARD */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/training/Certified Experts.webp"
                alt="Professional SketchUp Training"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            {/* FLOATING INFO CARD */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white p-6 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                
                <div>
                  <p className="text-sm text-slate-500">Next cohort starts</p>
                  <p className="mt-1 font-semibold text-[#0b2b3c]">
                    Come Back Soon!
                  </p>
                </div>

                {/* 👉 BLUE BUTTON RIGHT SIDE */}
                <Link
                  href="/contact"
                  className="inline-flex justify-center rounded-lg bg-[#0b2b3c] px-6 py-3 text-sm font-semibold text-white hover:bg-[#08324a] transition whitespace-nowrap"
                >
                  Reserve Spot
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
