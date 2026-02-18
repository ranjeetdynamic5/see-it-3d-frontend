// components/sections/WhyChoose.tsx
import { UserCheck, MonitorPlay, FolderOpen } from "lucide-react";

const items = [
  {
    icon: UserCheck,
    title: "Proven Trainers",
    desc: "Certified instructors with decades of real-world industry experience.",
  },
  {
    icon: MonitorPlay,
    title: "Live & Interactive",
    desc: "Instructor-led live sessions — not passive pre-recorded videos.",
  },
  {
    icon: FolderOpen,
    title: "Recording & Resources",
    desc: "Every session recorded and shared for long-term access.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Why Choose SEEIT3D?
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Designed for professionals and teams who want measurable skills fast.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="rounded-xl border bg-white p-8 shadow-sm
                           transition-transform duration-300 hover:scale-95"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center
                                rounded-lg border border-red-500">
                  <Icon className="h-7 w-7 text-red-500" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
