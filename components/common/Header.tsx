"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = 0;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="site-header">

      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        <div className="top-bar-inner">

          <div className="top-contact">
            <span className="icon-text">
              <Image src="/icons/call.png" alt="Call" width={16} height={16} />
              03331212187
            </span>

            <span className="icon-text">
              <Image src="/icons/email.png" alt="Email" width={16} height={16} />
              jamesogston@seeit3d.co.uk
            </span>
          </div>

          <div className="top-social">
            <a href="https://www.facebook.com/SeeIt3d" target="blank">
              <Image src="/icons/fb.png" alt="Facebook" width={40} height={40} />
            </a>
            <a href="https://www.instagram.com/seeit3dwithjames/" target="blank">
              <Image src="/icons/inta.png" alt="Instagram" width={40} height={40} />
            </a>
            <a href="https://www.youtube.com/user/SEEIT3D" target="blank">
              <Image src="/icons/yt.png" alt="YouTube" width={40} height={40} />
            </a>
            <a href="https://x.com/SeeIt3D" target="blank">
              <Image src="/icons/x.png" alt="X" width={40} height={40} />
            </a>
          </div>

          <div className="top-actions">
            <Link href="/support">Support</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/signup">Sign Up</Link>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="main-nav">
        <div className="main-nav-inner">

          <Link href="/" className="logo-wrap">
            <Image
              src="/icons/seeit_logo.jpg"
              alt="SeeIt3D Logo"
              width={250}
              height={55}
              priority
            />
          </Link>

          <nav className="desktop-menu">
            <div className="nav-links">

              <Link href="/about">About</Link>
              <Link href="/events">Events</Link>
              <Link href="/training">Online Training</Link>

              {/* ================= SKETCHUP DROPDOWN ================= */}
              <div className="nav-dropdown">
                <div className="nav-dropdown-trigger">
                  <span>SketchUp</span>

                  <svg
                    className="dropdown-icon"
                    viewBox="0 0 24 24"
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>

                <div className="nav-dropdown-menu">
                  <Link href="/sketchup" className="dropdown-title">
                    SketchUp Services
                  </Link>

                  <Link href="/sketchup/extensions" className="dropdown-item">
                    SKP Extensions
                  </Link>

                  <Link href="/sketchup/resources" className="dropdown-item">
                    SketchUp Resources
                  </Link>
                </div>
              </div>

              <Link href="/products">Products</Link>
              <Link href="/services">Web Services</Link>
              <Link href="/rendering">Rendering</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact Us</Link>

            </div>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

    </header>
  );
}