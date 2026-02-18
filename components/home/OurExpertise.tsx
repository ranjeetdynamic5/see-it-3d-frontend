import Image from "next/image";

export default function OurExpertise() {
  return (
    <section className="bg-white overflow-hidden">
      {/* ================= MAIN SECTION ================= */}
      <div className="relative">

        <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm font-medium text-[#0b2a4a] mb-2">
              Our Expertise
            </p>

            <div className="w-12 h-[2px] bg-red-500 mb-6" />

            <h2 className="text-3xl md:text-4xl font-semibold text-[#0b2a4a] mb-6">
              Why Choose us?
            </h2>

            <p className="text-[16px] text-gray-600 mb-10 max-w-lg">
              We are authorized resellers and training providers for leading brands.
            </p>

            <ul className="space-y-6 text-[15px] text-gray-700 max-w-xl">
              <li className="flex gap-4">
                <span className="text-red-500 mt-1">●</span>
                <span>
                  Founded in 2004 by <strong>James Ogston</strong>, a pioneer in SketchUp training,
                  SEEIT3D has been at the forefront of the 3D design industry for over two decades.
                  We’ve trained and supported thousands of professionals, helping them excel in
                  their careers and projects.
                </span>
              </li>

              <li className="flex gap-4">
                <span className="text-red-500 mt-1">●</span>
                <span>
                  Our services and products are tailored to meet your specific needs, whether
                  you’re a solo designer, a growing business, or an enterprise-level organization.
                </span>
              </li>

              <li className="flex gap-4">
                <span className="text-red-500 mt-1">●</span>
                <span>
                  Our training and consultancy services extend far beyond the UK. We’ve worked
                  with clients worldwide, delivering exceptional results every time.
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE PLACEHOLDER (only for grid alignment) */}
          <div className="hidden md:block" />
        </div>

        {/* ================= FULL BLEED IMAGE ================= */}
        <div className="hidden md:block absolute top-0 right-0 h-full w-[50vw]">
          <Image
            src="/Expertise.webp"
            alt="SketchUp Authorized Training"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      {/* ================= BLUE STRIP ================= */}
      <div className="bg-[#083c57] py-8 text-center">
        <p className="text-white text-[18px] font-semibold tracking-wide">
          Find us on www.SketchUp.com
        </p>
      </div>
    </section>
  );
}
