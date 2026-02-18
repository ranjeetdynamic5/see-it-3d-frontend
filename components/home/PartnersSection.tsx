"use client";

import Image from "next/image";

const partners = Array.from(
  { length: 24 },
  (_, i) => `/partners/${String(i + 1).padStart(2, "0")}.webp`
);

export default function PartnersSection() {
  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title">Our Trusted Partners</h2>

        {/* description text */}
        <p className="partners-desc">
          We empower professionals to achieve extraordinary results in design,
          visualization, and creativity. Explore the world of possibilities
          with our trusted partners!
        </p>

        <div className="partners-grid">
          {partners.map((logo, index) => (
            <div key={index} className="partner-card">
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                width={180}
                height={100}
                className="partner-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
