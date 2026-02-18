import {
  UserGroupIcon,
  PresentationChartLineIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";

export default function TrainingWhyChoose() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-slate-900">
          Why Choose SEEIT3D?
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-slate-600">
          Designed for professionals and teams who want measurable skills fast.
          We focus on real workflows, practical project outcomes, and
          trainer-led problem solving.
        </p>

        {/* Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1 */}
          <div className="group rounded-xl border border-slate-100 bg-slate-50 p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-red-50 transition group-hover:scale-95">
              <UserGroupIcon className="h-8 w-8 text-[#EA5455]" />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              Proven Trainers
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Certified instructors with decades of real-world industry
              experience across architecture, design, and visualization.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group rounded-xl border border-slate-100 bg-slate-50 p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-red-50 transition group-hover:scale-95">
              <PresentationChartLineIcon className="h-8 w-8 text-[#EA5455]" />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              Live & Interactive
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Learn directly with trainers in real time through guided,
              instructor-led sessions — not pre-recorded videos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group rounded-xl border border-slate-100 bg-slate-50 p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-red-50 transition group-hover:scale-95">
              <PlayCircleIcon className="h-8 w-8 text-[#EA5455]" />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              Recording & Resources
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Every session is recorded and shared, giving you long-term access
              to learning materials for revision and continued growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
