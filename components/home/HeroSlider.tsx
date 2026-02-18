"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SLIDES = [
  {
    desktop: "/sliders/00feb_1920x650.webp",
    mobile: "/sliders/00feb_300x450.webp",
    link: "/new-year-offer",
  },
  {
    desktop: "/sliders/02D5-banner-3_desktop.webp",
    mobile: "/sliders/02D5-banner-3_mobile.webp",
    link: "/offers/zwcad",
  },
  {
    desktop: "/sliders/03zwcad2026_desktop.webp",
    mobile: "/sliders/03zwcad2026_mobile.webp",
    link: "/products/zwcad-2026",
  },
  {
    desktop: "/sliders/04skp_banner_desktop.webp",
    mobile: "/sliders/04skp_banner_mobile.webp",
    link: "/products/sketchup",
  },
  {
    desktop: "/sliders/05web_services_desktop.webp",
    mobile: "/sliders/05web_services_mobile.webp",
    link: "/services/web",
  },
  {
    desktop: "/sliders/06BIM_desktop.webp",
    mobile: "/sliders/06BIM_mobile.webp",
    link: "/services/bim",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">
      {SLIDES.map((slide, i) => (
        <Link
          href={slide.link}
          key={i}
          className={`hero-slide ${i === active ? "active" : ""}`}
          aria-hidden={i !== active}
        >
          {/* Desktop */}
          <div className="hero-image desktop-only">
            <Image
              src={slide.desktop}
              alt="Hero Banner"
              fill
              priority={i === 0}
              sizes="100vw"
            />
          </div>

          {/* Mobile */}
          <div className="hero-image mobile-only">
            <Image
              src={slide.mobile}
              alt="Hero Banner"
              fill
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        </Link>
      ))}

      {/* Dots */}
      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
