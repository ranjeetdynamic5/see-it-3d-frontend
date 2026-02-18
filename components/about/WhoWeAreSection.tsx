import React from "react";
import {
  Box,
  Cpu,
  Globe,
  GraduationCap,
} from "lucide-react";

const cards = [
  {
    title: "3D Software & Visualisation",
    desc: "Industry-leading tools and workflows for architectural design, visualisation, and prototyping.",
    icon: Box,
  },
  {
    title: "AI-Powered Solutions",
    desc: "Smart automation and AI-driven workflows to improve efficiency, accuracy, and decision-making.",
    icon: Cpu,
  },
  {
    title: "Modern Web Development",
    desc: "High-performance, scalable websites and platforms built with modern technologies.",
    icon: Globe,
  },
  {
    title: "Training & Consultancy",
    desc: "Expert-led training and consultancy to help teams adopt tools, workflows, and best practices.",
    icon: GraduationCap,
  },
];

const WhoWeAre = () => {
  return (
    <section className="relative bg-white py-10 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          
          {/* LEFT CONTENT (unchanged) */}
          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-[#EA5455]">
              Who We Are
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted Digital & 3D Solutions Partner{" "}
              <span className="text-[#EA5455]">Since 2004</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              <strong>We are SEEIT3D</strong>, specializing in industry-leading{" "}
              <strong>3D software</strong>, <strong>custom hardware</strong>,
              professional <strong>training</strong>, and expert{" "}
              <strong>consultancy services</strong> that empower creators to bring
              their ideas to life.
            </p>

            <p className="mt-4 text-gray-600">
              Alongside our strong foundation in 3D technologies, we also deliver
              modern <strong>AI-powered solutions</strong> and{" "}
              <strong>high-performance web development</strong>.
            </p>

            <p className="mt-4 text-gray-600">
              Founded in 2004 by <strong>James Ogston</strong>, SEEIT3D has grown
              into one of the most recognized names in the 3D design industry —
              now strengthened further by AI-driven workflows and modern web
              technologies.
            </p>
          </div>

          {/* RIGHT CARDS WITH ICONS */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#EA5455] hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EA5455]/10">
                    <Icon className="h-6 w-6 text-[#EA5455]" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* subtle background accent */}
      <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[#EA5455]/10 blur-3xl" />
    </section>
  );
};

export default WhoWeAre;
