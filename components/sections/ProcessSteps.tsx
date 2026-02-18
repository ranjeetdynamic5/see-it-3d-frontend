// components/sections/ProcessSteps.tsx
import { UserPlus, Settings, Video, Award } from "lucide-react";

const steps = [
  {
    step: "Step 1",
    icon: UserPlus,
    title: "Register Online",
    desc: "Sign up and get instant confirmation for your training slot.",
  },
  {
    step: "Step 2",
    icon: Settings,
    title: "Set Up Software",
    desc: "We’ll help you install all required tools before your session.",
  },
  {
    step: "Step 3",
    icon: Video,
    title: "Join Live Class",
    desc: "Attend live, interactive training with real-time collaboration.",
  },
  {
    step: "Step 4",
    icon: Award,
    title: "Get Certified",
    desc: "Receive your certificate and access recorded materials anytime.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          How Online Training Works
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          A simple, structured learning journey designed for professionals.
        </p>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="rounded-xl bg-white p-6 shadow-sm
                           transition-transform duration-300 hover:scale-95"
              >
                <span className="inline-block mb-4 rounded bg-[#0b2b3c] px-3 py-1 text-xs text-white">
                  {step.step}
                </span>

                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center
                                rounded-lg border border-red-500">
                  <Icon className="h-7 w-7 text-red-500" />
                </div>

                <h3 className="font-semibold mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
