"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Fred Rodriquez",
    role: "Interior Designer",
    rating: 5,
    text:
      "SEEIT3D’s training sessions are absolutely fantastic! As someone new to SketchUp, I was amazed at how their tailored, one-on-one coaching helped me master the software so quickly.",
  },
  {
    name: "Emma Thompson",
    role: "Lead Architect",
    rating: 5,
    text:
      "We’ve partnered with SEEIT3D for several architectural projects, and their 3D rendering services have consistently exceeded expectations. Every detail and expertise are great.",
  },
  {
    name: "Bennett Miller",
    role: "Project Manager",
    rating: 5,
    text:
      "Our company needed SketchUp and V-Ray licenses, and SEEIT3D made the process seamless. Not only did they guide us in choosing the right tools, but their trainings are amazing.",
  },
  {
    name: "Calum Watson",
    role: "Designer",
    rating: 5,
    text:
      "Always Helpful 💯 I've worked with James for around 8 years now since I started using SketchUp, he always fixes any issues quickly and with no fuss. I couldn't get signed in on a new computer today and he walked me through every step until it was sorted. Also, I'm always kept up to date with upgrades, webinars etc. Great service 👌",
  },
];

const VISIBLE = 3;

// clone first 3 cards for infinite loop
const slides = [...testimonials, ...testimonials.slice(0, VISIBLE)];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // RESET LOGIC (after last fake slide)
  useEffect(() => {
    if (index === testimonials.length + 1) {
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
        }
        setIndex(0);
      }, 700);
    } else {
      if (trackRef.current) {
        trackRef.current.style.transition = "transform 0.7s ease";
      }
    }
  }, [index]);

  const prev = () => {
    if (index === 0) {
      setIndex(testimonials.length);
    } else {
      setIndex((prev) => prev - 1);
    }
  };

  const next = () => {
    setIndex((prev) => prev + 1);
  };

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Testimonials.webp"
          alt="Testimonials"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0b2a4a]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-14">
          <div>
            <p className="text-white text-sm mb-2">Testimonials</p>
            <div className="w-12 h-[2px] bg-red-500 mb-4" />
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              What Our Clients Say
            </h2>
          </div>

          <button className="hidden md:block bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
            View All →
          </button>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex"
            style={{
              transform: `translateX(-${index * (100 / VISIBLE)}%)`,
            }}
          >
            {slides.map((item, i) => (
              <div
                key={i}
                className="w-full md:w-1/3 px-4 flex-shrink-0"
              >
                <div className="bg-white rounded-xl shadow-lg p-8 h-full relative">
                  <span className="absolute top-4 right-6 text-[72px] leading-none text-gray-300/70 select-none">
  “
</span>

                  {/* Stars */}
                  <div className="flex mb-4">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.text}
                  </p>

                  <h4 className="font-semibold text-[#0b2a4a]">
                    {item.name}
                  </h4>
                  <p className="text-sm text-red-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
