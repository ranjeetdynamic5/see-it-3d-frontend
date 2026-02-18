"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "What software does SEEIT3D offer, and how can I purchase it?",
    answer:
      "We provide a range of leading 3D software, including Trimble SketchUp, V-Ray, Enscape, Mol3D, Thea Render, SUPodium, D5 Render, and more. You can explore and purchase these tools through our online store or contact us at info@seeit3d.co.uk for assistance in choosing the right software for your needs.",
  },
  {
    question:
      "Does SEEIT3D provide training for beginners in 3D design software like SketchUp?",
    answer:
      "Yes, we offer beginner-friendly training programs designed to help new users quickly become confident with tools like SketchUp through structured lessons and hands-on guidance.",
  },
  {
    question: "Can SEEIT3D help with custom hardware solutions for 3D design?",
    answer:
      "Absolutely. We advise on and supply custom hardware solutions optimised for 3D design, rendering, and visualisation workflows.",
  },
  {
    question: "How do I contact SEEIT3D for support or inquiries?",
    answer:
      "For general support or enquiries, email us at info@seeit3d.co.uk or call +44 (0) 333 121 2187. Our team will be happy to assist you.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-start">
        {/* LEFT IMAGE */}
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src="/faq.webp"
            alt="FAQ Consultation"
            width={600}
            height={500}
            className="object-cover w-full h-full"
          />

          {/* Floating CTA */}
          <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
            <p className="font-semibold text-[#0b2a4a] mb-2">
              If You Need Help, Get A Consultation
            </p>
            <a
              href="/contact"
              className="text-red-500 font-medium text-sm"
            >
              Get Started →
            </a>
          </div>
        </div>

        {/* RIGHT FAQ */}
        <div>
          <p className="text-sm font-medium text-[#0b2a4a] mb-2">FAQ</p>
          <div className="w-12 h-[2px] bg-red-500 mb-6" />

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b2a4a] mb-4">
            Your Queries Answered
          </h2>

          <p className="text-gray-600 mb-10 max-w-lg">
            Have questions about our services, software, training, or hardware
            solutions? We’ve compiled answers for you.
          </p>

          <div className="space-y-4">
  {faqs.map((faq, index) => {
    const isOpen = openIndex === index;

    return (
      <div
        key={index}
        className="border border-gray-200 rounded-lg overflow-hidden bg-white"
      >
        {/* QUESTION */}
        <button
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className={`w-full flex items-center justify-between px-6 py-4 text-left font-medium transition-colors duration-300
          ${
            isOpen
              ? "bg-red-500 text-white"
              : "bg-white text-[#0b2a4a]"
          }`}
        >
          <span>{faq.question}</span>
          <span
            className={`text-xl transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            {isOpen ? "−" : "+"}
          </span>
        </button>

        {/* ANSWER (SMOOTH) */}
        <div
          className={`grid transition-all duration-500 ease-in-out
          ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-6 py-5 text-sm text-gray-600 leading-relaxed bg-white">
              {faq.answer}
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>

        </div>
      </div>
    </section>
  );
}
