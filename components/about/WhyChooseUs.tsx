import {
  Boxes,
  Briefcase,
  Globe,
  Cpu,
  Code2,
} from "lucide-react";

const features = [
  {
    title: "Comprehensive Digital Solutions",
    desc: "We deliver end-to-end solutions covering 3D software, specialised hardware, professional training, consultancy, and modern digital platforms — all aligned to real business needs.",
    icon: Boxes,
  },
  {
    title: "Proven Industry Expertise",
    desc: "With 33 years of combined experience across architecture, construction, and design sectors, we understand complex workflows and turn technical challenges into practical solutions.",
    icon: Briefcase,
  },
  {
    title: "Global Reach & Ongoing Support",
    desc: "We work with clients across the UK, Europe, and beyond, offering onsite and remote training, long-term consultancy, and responsive technical support whenever it’s needed.",
    icon: Globe,
  },
  {
    title: "AI-Driven Innovation",
    desc: "We help organisations adopt AI to automate repetitive tasks, analyse data more effectively, and improve decision-making — creating smarter, faster, and more efficient workflows.",
    icon: Cpu,
  },
  {
    title: "High-Performance Web Development",
    desc: "Our team builds fast, scalable, and SEO-optimised websites and web applications that deliver exceptional user experiences, integrate seamlessly with existing systems, and support long-term growth.",
    icon: Code2,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Why Choose{" "}
            <span className="text-[#EA5455]">SEEIT3D?</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            At SEEIT3D, we combine deep industry knowledge with modern
            technologies to deliver reliable
            <strong> 3D solutions</strong>,
            <strong> AI-powered systems</strong>, and
            <strong> high-quality web development</strong>.
            Our focus is simple: help clients work smarter, faster, and more
            confidently in a rapidly evolving digital landscape.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#EA5455] hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EA5455]/10">
                  <Icon className="h-6 w-6 text-[#EA5455]" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
