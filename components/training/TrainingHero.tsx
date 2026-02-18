import Image from "next/image";

export default function TrainingHero() {
  return (
    <section className="relative h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden bg-[#0b2f44]">
      
      {/* Background Image */}
      <Image
        src="/training/training banner.webp"
        alt="Online Training"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
}
