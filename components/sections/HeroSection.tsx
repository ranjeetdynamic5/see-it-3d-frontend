// components/sections/HeroSection.tsx
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function HeroSection({
  title,
  subtitle,
  image,
}: HeroSectionProps) {
  return (
    <section className="relative h-[420px] w-full overflow-hidden">
      {/* Background */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3 text-lg text-gray-200">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
