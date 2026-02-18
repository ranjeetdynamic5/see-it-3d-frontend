"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

/* ================= DATA ================= */

const services = [
  {
    img: "/Our Services/3D Modeling.webp",
    title: "3D Modeling & Visualization",
    desc:
      "Professional 3D modeling, rendering, and visualization services for architectural, interior, and product design projects.",
    link: "#",
  },
  {
    img: "/Our Services/Training Programs.webp",
    title: "Professional Training Programs",
    desc:
      "Expert-led SketchUp and rendering training for individuals, teams, and businesses at all experience levels.",
    link: "#",
  },
  {
    img: "/Our Services/Software and Hardware.webp",
    title: "3D Software & Hardware",
    desc:
      "Industry-leading 3D software, extensions, and high-performance workstations tailored for design professionals.",
    link: "#",
  },
  {
    img: "/Our Services/web service.webp",
    title: "Web Design & Digital Solutions",
    desc:
      "Modern, SEO-optimized, and performance-driven websites designed to grow your business and online presence.",
    link: "#",
  },
];

/* ================= MAIN ================= */

export default function OurServices() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="bg-[#f6f9fc] py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase text-[#0b2a4a] mb-2">
            Our Services
          </p>

          <div className="w-12 h-[2px] bg-red-500 mx-auto mb-6" />

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b2a4a] mb-4">
            Commendable Services for Design & Digital Excellence
          </h2>

          <p className="text-[16px] text-gray-600">
            We offer specialized services designed to support professionals at
            every stage of their design journey.
          </p>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} data={service} />
          ))}
        </div>

        {/* ================= MOBILE CAROUSEL ================= */}
        <div className="md:hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {services.map((service, index) => (
                <div key={index} className="flex-[0_0_100%] px-4">
                  <ServiceCard data={service} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= CARD ================= */

function ServiceCard({ data }: { data: any }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col text-center">

      {/* Image */}
      <div className="relative h-44">
        <Image
          src={data.img}
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[18px] font-bold text-[#0b2a4a] mb-3">
          {data.title}
        </h3>

        <p className="text-[15px] text-gray-600 mb-6">
          {data.desc}
        </p>

        <a
          href={data.link}
          className="mt-auto text-red-500 font-semibold hover:underline"
        >
          View Service →
        </a>
      </div>

    </div>
  );
}
