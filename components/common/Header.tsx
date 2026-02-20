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
    <header className="relative z-50 w-full bg-white shadow-sm">
      
      {/* ================= TOP BAR ================= */}
      <div className="bg-gray-100 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              📞 03331212187
            </span>
            <span className="flex items-center gap-2">
              ✉ jamesogston@seeit3d.co.uk
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/support" className="bg-red-500 text-white px-3 py-1 rounded">
              Support
            </Link>
            <Link href="/shop" className="bg-red-500 text-white px-3 py-1 rounded">
              Shop
            </Link>
            <Link href="/signup" className="bg-red-500 text-white px-3 py-1 rounded">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        
        <Link href="/">
          <Image
            src="/icons/seeit_logo.jpg"
            alt="Logo"
            width={200}
            height={50}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 font-medium text-gray-800">

          <Link href="/about" className="hover:text-red-500">About</Link>
          <Link href="/events" className="hover:text-red-500">Events</Link>
          <Link href="/training" className="hover:text-red-500">Online Training</Link>

          {/* ================= SKETCHUP DROPDOWN ================= */}
          <div className="relative group">

            <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
              <span>SketchUp</span>
              <span className="group-hover:hidden">+</span>
              <span className="hidden group-hover:inline">-</span>
            </div>

            <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

              <Link
                href="/sketchup-services"
                className="block px-4 py-3 hover:bg-gray-200 hover:text-white bg-gray-700 text-white"
              >
                SketchUp Services
              </Link>

              <Link
                href="/sketchup-extensions"
                className="block px-4 py-3 hover:bg-gray-200"
              >
                Skp Extensions
              </Link>

              <Link
                href="/sketchup-resources"
                className="block px-4 py-3 hover:bg-gray-200"
              >
                SketchUp Resources
              </Link>

            </div>
          </div>

          <Link href="/products" className="hover:text-red-500">Products</Link>
          <Link href="/services" className="hover:text-red-500">Web Services</Link>
          <Link href="/rendering" className="hover:text-red-500">Rendering</Link>
          <Link href="/shop" className="hover:text-red-500">Shop</Link>
          <Link href="/blog" className="hover:text-red-500">Blog</Link>
          <Link href="/contact" className="hover:text-red-500">Contact Us</Link>

        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6">
          <button
            className="text-2xl mb-6"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <div className="flex flex-col gap-4 text-lg">
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
            <Link href="/training">Online Training</Link>
            <Link href="/sketchup-services">SketchUp Services</Link>
            <Link href="/sketchup-extensions">Skp Extensions</Link>
            <Link href="/sketchup-resources">SketchUp Resources</Link>
            <Link href="/products">Products</Link>
            <Link href="/services">Web Services</Link>
            <Link href="/rendering">Rendering</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}