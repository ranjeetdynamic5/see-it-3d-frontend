import {
  BadgeCheck,
  UserCheck,
  Users,
  Award,
  CalendarDays,
  Monitor,
} from "lucide-react";

const formats = [
  {
    title: "Standard Authorised Training Courses",
    desc: "Our authorised training courses are officially recognised and delivered by certified trainers with software partner support.",
    icon: BadgeCheck,
  },
  {
    title: "1:1 & B2B Custom Training",
    desc: "A fully personalised, high-impact training solution aligned to your workflow, live projects, and long-term goals.",
    icon: UserCheck,
  },
  {
    title: "Group Workshops",
    desc: "Team-focused workshops designed to improve office workflows, standards, and collaborative productivity.",
    icon: Users,
  },
  {
    title: "Get Certified",
    desc: "Receive an industry-recognised certificate after training to validate and showcase your professional skills.",
    icon: Award,
  },
  {
    title: "Project Days",
    desc: "Dedicated expert-led sessions focused on real project progress, optimisation, and milestone delivery.",
    icon: CalendarDays,
  },
  {
    title: "Onsite Training",
    desc: "In-person training at your workplace — ideal for hands-on guidance, process alignment, and workflow optimisation.",
    icon: Monitor,
  },
];

export default function TrainingCourseFormat() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Course Format
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {formats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  group rounded-2xl border border-slate-200 bg-white p-8
                  transition-all duration-300
                  hover:shadow-xl hover:scale-[0.97]
                "
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="
                    flex h-14 w-14 items-center justify-center
                    rounded-xl border border-red-500
                    text-red-500
                    transition-all duration-300
                    group-hover:bg-red-500 group-hover:text-white
                  ">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 text-center">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-600 text-center leading-relaxed">
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
