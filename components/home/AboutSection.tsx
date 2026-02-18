import Image from 'next/image'

const AboutSection = () => {
  return (
    <>
      {/* Blue Strip – FULL WIDTH */}
      <div className="bg-[#0b3a53] text-white text-center py-4">
        <p className="text-lg font-semibold">
          Find us on www.SketchUp.com
        </p>
      </div>

      {/* About Section – BOXED */}
      <section className="bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Image */}
            <div>
              <Image
                src="/About/3dModelling-scaled.webp"
                alt="About SEEIT3D"
                width={600}
                height={600}
                className="rounded-md shadow-md object-cover"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-4xl font-bold text-[#0b3a53] mb-6">
                About Us
              </h2>

              <p className="text-gray-700 leading-relaxed mb-5 italic">
                “We are <strong>SEEIT3D</strong>, we specialize in providing
                industry-leading 3D software, custom hardware, training,
                and consultancy services that empower creators to bring
                their ideas to life.”
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                With over two decades of expertise, we have established
                ourselves as the trusted go-to partner for architects,
                designers, educators, and businesses across the UK and
                beyond. Founded in 2004 by <strong>James Ogston</strong>,
                SEEIT3D has grown into one of the most recognized names
                in the 3D design industry.
              </p>

              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition">
                Contact Us →
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection
