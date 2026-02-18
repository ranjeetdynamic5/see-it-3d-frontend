"use client";

import React from "react";

export default function TrainingSection() {
  return (
    <section className="bg-[#f6f9fc] py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-medium uppercase text-[#0b2a4a] mb-2">
            Our Training
          </p>

          <div className="w-12 h-[2px] bg-red-500 mx-auto mb-6" />

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b2a4a] mb-4">
            Training That Makes a Difference
          </h2>

          <p className="text-[16px] text-gray-600">
            Cutting-edge 3D solutions and exceptional training experiences that
            drive innovation, creativity, and success.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-10">

          <TrainingCard
            number="01"
            title="Personalized Learning"
            text="At SEEIT3D, our training programs are tailored to suit your unique needs, whether you're a beginner, professional, or advanced designer. From one-to-one coaching to group sessions, we ensure every participant gets the attention and expertise they need to excel."
            icon={
              <svg width="40" height="40" fill="none" stroke="#ef4444" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12z"/>
                <path d="M3 21c0-4.5 4-8 9-8s9 3.5 9 8"/>
              </svg>
            }
          />

          <TrainingCard
            number="02"
            title="Practical Approach"
            text="Our training goes beyond theory, offering hands-on experience with cutting-edge 3D design tools like SketchUp, V-Ray, and more. Delivered virtually or onsite, our sessions provide practical insights and tips to streamline your workflows and boost productivity."
            icon={
              <svg width="40" height="40" fill="none" stroke="#ef4444" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <path d="M8 2v4M16 2v4M3 10h18"/>
              </svg>
            }
          />

          <TrainingCard
            number="03"
            title="Global Expertise"
            text="With years of industry expertise, we’ve trained thousands of professionals worldwide. Whether you're in the UK or anywhere else, our virtual training ensures you access world-class guidance to transform your skills and achieve your creative goals."
            icon={
              <svg width="40" height="40" fill="none" stroke="#ef4444" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z"/>
                <path d="M3 10.5V15l9 4.5 9-4.5v-4.5"/>
              </svg>
            }
          />

        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function TrainingCard({
  number,
  title,
  text,
  icon,
}: {
  number: string;
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className="group relative bg-white rounded-2xl shadow-lg px-8 pt-14 pb-10 text-center h-full
                 transition-all duration-300 ease-out
                 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Number badge */}
      <div
        className="absolute -top-6 left-1/2 -translate-x-1/2
                   bg-[#ef4444] text-white font-semibold text-lg
                   px-4 py-2 rounded-md
                   transition-transform duration-300
                   group-hover:scale-105"
      >
        {number}
      </div>

      {/* Icon */}
      <div
        className="flex justify-center mb-6
                   transition-transform duration-300
                   group-hover:scale-110"
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-[20px] font-bold text-[#0b2a4a] mb-4">
        {title}
      </h3>

      {/* Text */}
      <p className="text-[15px] text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
