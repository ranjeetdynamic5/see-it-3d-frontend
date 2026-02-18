export default function TrainingQuickActions() {
  const actions = [
    "SketchUp 2026 7-Day Trial",
    "Sketchup 2026 New Version",
    "Previous SketchUp Versions",
    "Latest SketchUp 2026 Pricing",
  ];

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {actions.map((item) => (
            <button
              key={item}
              className="rounded-lg bg-[#EA5455] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d94a4b]"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
