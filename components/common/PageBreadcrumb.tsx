import Link from "next/link";

interface PageBreadcrumbProps {
  title: string;
}

const PageBreadcrumb = ({ title }: PageBreadcrumbProps) => {
  return (
    <section
      className="
        relative z-30
        -mt-16 sm:-mt-20 lg:-mt-24
        mb-14 sm:mb-20
      "
    >
      <div className="mx-auto max-w-7xl px-4 flex justify-center">
        
        {/* Breadcrumb Card */}
        <div
          className="
            w-[280px] sm:w-[320px]
            rounded-2xl
            bg-[#0b2b3c]
            px-8 py-6
            text-center
            shadow-2xl
          "
        >
          <h1 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
            {title}
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-gray-300">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span className="mx-2 text-[#EA5455]">›</span>
            <span className="text-gray-200">{title}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageBreadcrumb;
