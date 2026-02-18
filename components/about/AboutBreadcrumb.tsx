import Link from "next/link";

const AboutBreadcrumb = () => {
  return (
    <div className="relative z-30 -mt-20 mb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center">
        <div className="rounded-2xl bg-[#0b2b3c] px-10 py-6 shadow-xl text-center">
          <h1 className="text-3xl font-semibold text-white">About</h1>
          <p className="mt-1 text-sm text-gray-300">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-1 text-[#EA5455]">›</span>
            About
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBreadcrumb;
