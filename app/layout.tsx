import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/Footer";
import { Heebo } from "next/font/google";
import React from "react";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={heebo.className}>

        {/* Global Header */}
        <Header />

        {/* Page Content */}
        {children}

        {/* Global Footer */}
        <Footer />

      </body>
    </html>
  );
}
