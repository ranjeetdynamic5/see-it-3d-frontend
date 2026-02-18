import Image from "next/image";

const trainingItems = [
  {
    title: "Specialised Training Programmes",
    desc: "Expert-led training covering CAD/BIM tools, advanced 3D workflows, visualisation techniques, and modern digital practices designed to match real-world project needs.",
    image: "/About/Specialized Training.webp",
  },
  {
    title: "Flexible Learning Options",
    desc: "Choose from onsite, online, or live instructor-led sessions, tailored for individuals, teams, and organisations looking to upskill efficiently and confidently.",
    image: "/About/Flexible Learning.webp",
  },
  {
    title: "Recognised Excellence & Support",
    desc: "Trusted by leading software developers and global partners, we provide ongoing guidance, technical support, and best-practice advice long after training is complete.",
    image: "/About/Recognized Excellence.webp",
  },
];

const TrainingSupport = () => {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Training & Support for{" "}
            <span className="text-[#EA5455]">Your Success</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Our expert-led <strong>training programmes</strong> and dedicated
            <strong> support services</strong> help professionals and businesses
            master <strong>3D design tools</strong>, adopt
            <strong> AI-enabled workflows</strong>, and make better use of
            <strong> digital platforms</strong>.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trainingItems.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#EA5455] hover:shadow-lg"
            >
              {/* IMAGE */}
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSupport;
