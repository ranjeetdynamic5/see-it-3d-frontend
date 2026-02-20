"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50">

      {/* ================= TOP BAR ================= */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">

          <div className="flex items-center gap-6">
            <span>03331212187</span>
            <span>jamesogston@seeit3d.co.uk</span>
          </div>

          <div className="flex gap-3">
            <Link href="/support" className="bg-red-500 text-white px-4 py-1 text-sm">
              Support
            </Link>
            <Link href="/shop" className="bg-red-500 text-white px-4 py-1 text-sm">
              Shop
            </Link>
            <Link href="/signup" className="bg-red-500 text-white px-4 py-1 text-sm">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/icons/seeit_logo.jpg"
              alt="SeeIt3D"
              width={180}
              height={50}
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">

            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
            <Link href="/training">Online Training</Link>

            {/* ================= SKETCHUP DROPDOWN ================= */}
            <div className="relative group">

              <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">

                <span>SketchUp</span>

                <svg
                  className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>

              </div>

              {/* DROPDOWN */}
              <div className="absolute left-0 mt-3 w-56 bg-white shadow-lg 
                              opacity-0 invisible group-hover:opacity-100 
                              group-hover:visible transition duration-200">

                <Link
                  href="/sketchup"
                  className="block px-5 py-3 bg-gray-700 text-white"
                >
                  SketchUp Services
                </Link>

                <Link
                  href="/sketchup/extensions"
                  className="block px-5 py-3 hover:bg-gray-200"
                >
                  SKP Extensions
                </Link>

                <Link
                  href="/sketchup/resources"
                  className="block px-5 py-3 hover:bg-gray-200"
                >
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

          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>
      </div>
    </header>
  );
}