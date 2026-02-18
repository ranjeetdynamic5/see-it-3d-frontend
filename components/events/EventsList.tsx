import Image from "next/image";

const events = [
  {
    id: 1,
    date: "19 Jan 2026",
    time: "11:00 am – 3:00 pm",
    title:
      "SOLD OUT: NURBS Mastery Workshop – Live PRIVATE Patent Project Modelling in MOI3D",
    mode: "Online",
    image: "/event 1.webp",
  },
  {
    id: 2,
    date: "9 Jan 2026",
    time: "9:00 am – 1:30 pm",
    title: "SOLD OUT: SketchUp Pro 2026 – Woodwork Bespoke Project",
    mode: "Online",
    image: "/event 2.webp",
  },
  {
    id: 3,
    date: "1 Jan 2026",
    time: "9:30 am – 5:30 pm",
    title: "Website Design Projects 2026 – New Year Deals",
    mode: "Online",
    image: "/event 3.webp",
  },
];

export default function EventsList() {
  return (
    <section className="bg-[#f4f8fb] py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-semibold text-[#0b2a4a] mb-10">
          Latest Past Events
        </h1>

        {/* EVENTS LIST */}
        <div className="space-y-12">
          {events.map((event) => (
            <div
              key={event.id}
              className="grid md:grid-cols-3 gap-8 bg-white rounded-xl p-6 shadow-sm"
            >
              {/* DATE */}
              <div>
                <p className="text-sm text-gray-400">{event.date}</p>
                <p className="text-sm text-gray-400 mt-1">{event.time}</p>
              </div>

              {/* CONTENT */}
              <div className="md:col-span-1">
                <h3 className="font-semibold text-[#0b2a4a] mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500">{event.mode}</p>
              </div>

              {/* IMAGE */}
              <div className="flex justify-end">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={200}
                  height={140}
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
