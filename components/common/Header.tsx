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
    <header className="site-header relative z-50">

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
            <a href="https://www.facebook.com/SeeIt3d" target="_blank">
              <Image src="/icons/fb.png" alt="Facebook" width={40} height={40} />
            </a>
            <a href="https://www.instagram.com/seeit3dwithjames/" target="_blank">
              <Image src="/icons/inta.png" alt="Instagram" width={40} height={40} />
            </a>
            <a href="https://www.youtube.com/user/SEEIT3D" target="_blank">
              <Image src="/icons/yt.png" alt="YouTube" width={40} height={40} />
            </a>
            <a href="https://x.com/SeeIt3D" target="_blank">
              <Image src="/icons/x.png" alt="X" width={40} height={40} />
            </a>
          </div>

          <div className="top-actions">
            <Link href="/support">Support</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/signup">Sign Up</Link>

            <Link href="/account" className="account-link">
              <Image src="/icons/profile.png" alt="Account" width={20} height={20} />
              <span>Account</span>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="cart-link">
              <Image src="/icons/cart.png" alt="Cart" width={22} height={22} />
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
            <NavLinks />
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button
          className="mobile-menu-close"
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
    <div className="nav-links flex items-center gap-6 relative" onClick={onClick}>

      <Link href="/about">About</Link>
      <Link href="/events">Events</Link>
      <Link href="/training">Online Training</Link>

      {/* ===== SketchUp Dropdown ===== */}
      <div className="relative group">

        <div className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition">
          <span>SketchUp</span>
          <span className="group-hover:hidden">+</span>
          <span className="hidden group-hover:inline">-</span>
        </div>

        <div className="absolute left-0 mt-3 w-72 
                        opacity-0 invisible 
                        group-hover:opacity-100 group-hover:visible 
                        transition-all duration-200">

          <div className="bg-white shadow-xl rounded-lg overflow-hidden border divide-y">

            <Link href="/sketchup-services"
              className="block px-5 py-3 font-semibold bg-[#2f3b46] text-white">
              SketchUp Services
            </Link>

            <Link href="/sketchup-bim-services"
              className="block px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-red-500 transition">
              BIM Services
            </Link>

            <Link href="/sketchup-3d-modelling-services"
              className="block px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-red-500 transition">
              3D Modelling
            </Link>

            <Link href="/sketchup-rendering-services"
              className="block px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-red-500 transition">
              Rendering
            </Link>

            <Link href="/sketchup-training"
              className="block px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-red-500 transition">
              Training
            </Link>

            <Link href="/sketchup-extensions"
              className="block px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-red-500 transition">
              Extensions
            </Link>

            <Link href="/sketchup-resources"
              className="block px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-red-500 transition">
              Resources
            </Link>

          </div>
        </div>
      </div>

      <Link href="/products">Products</Link>
      <Link href="/services">Web Services</Link>
      <Link href="/rendering">Rendering</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact Us</Link>

    </div>
  );
}