"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔹 Cart count (abhi dummy, baad me WooCommerce se aayega)
  const cartCount = 0;

  // body scroll lock when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="site-header">
      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        <div className="top-bar-inner">
          {/* Contact */}
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

          {/* Social */}
          <div className="top-social">
            <a
              href="https://www.facebook.com/SeeIt3d"
              aria-label="Facebook"
              target="blank"
            >
              <Image src="/icons/fb.png" alt="Facebook" width={40} height={40} />
            </a>
            <a
              href="https://www.instagram.com/seeit3dwithjames/"
              aria-label="Instagram"
              target="blank"
            >
              <Image src="/icons/inta.png" alt="Instagram" width={40} height={40} />
            </a>
            <a
              href="https://www.youtube.com/user/SEEIT3D"
              aria-label="YouTube"
              target="blank"
            >
              <Image src="/icons/yt.png" alt="YouTube" width={40} height={40} />
            </a>
            <a
              href="https://x.com/SeeIt3D"
              aria-label="X"
              target="blank"
            >
              <Image src="/icons/x.png" alt="X" width={40} height={40} />
            </a>
          </div>

          {/* Actions */}
          <div className="top-actions">
            <Link href="/support">Support</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/signup">Sign Up</Link>

            <Link href="/account" className="account-link">
              <Image
                src="/icons/profile.png"
                alt="Account"
                width={20}
                height={20}
              />
              <span>Account</span>
            </Link>

            {/* 🛒 CART (ADDED – nothing else touched) */}
            <Link href={`${process.env.NEXT_PUBLIC_WC_API_URL}/cart`} className="cart-link" aria-label="Cart">
              <Image
                src="/icons/cart.png"
                alt="Cart"
                width={22}
                height={22}
              />
              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="main-nav">
        <div className="main-nav-inner">
          {/* Logo */}
          <Link href="/" className="logo-wrap">
            <Image
              src="/icons/seeit_logo.jpg"
              alt="SeeIt3D Logo"
              width={250}
              height={55}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="desktop-menu">
            <NavLinks />
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ================= MOBILE DROPDOWN ================= */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button
          className="mobile-menu-close"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <nav className="mobile-nav">
          <NavLinks onClick={() => setMenuOpen(false)} />
        </nav>
      </div>
    </header>
  );
}

/* ================= NAV LINKS ================= */

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <div className="nav-links" onClick={onClick}>
      <Link href="/about">About</Link>
      <Link href="/events">Events</Link>
      <Link href="/training">Online Training</Link>
      <Link href="/sketchup">SketchUp +</Link>
      <Link href="/products">Products</Link>
      <Link href="/services">Web Services</Link>
      <Link href="/rendering">Rendering</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact Us</Link>
    </div>
  );
}
