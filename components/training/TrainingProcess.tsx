import {
  UserPlusIcon,
  ComputerDesktopIcon,
  VideoCameraIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

export default function TrainingProcess() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          How Online Training Works
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-slate-600">
          Our live sessions are delivered in a secure virtual room with practical
          exercises — everything is recorded so you can revisit anytime.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* STEP 1 */}
          <div className="rounded-xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <span className="inline-block rounded-md bg-[#0b2b3c] px-3 py-1 text-xs text-white">
              Step 1
            </span>

            <div className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-50">
              <UserPlusIcon className="h-8 w-8 text-[#EA5455]" />
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
              Register Online
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Sign up and get instant confirmation for your training slot.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="rounded-xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <span className="inline-block rounded-md bg-[#0b2b3c] px-3 py-1 text-xs text-white">
              Step 2
            </span>

            <div className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-50">
              <ComputerDesktopIcon className="h-8 w-8 text-[#EA5455]" />
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
              Set Up Software
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Install and prepare required tools before the session.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="rounded-xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <span className="inline-block rounded-md bg-[#0b2b3c] px-3 py-1 text-xs text-white">
              Step 3
            </span>

            <div className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-50">
              <VideoCameraIcon className="h-8 w-8 text-[#EA5455]" />
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
              Join Live Class
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Attend instructor-led live sessions in real time.
            </p>
          </div>

          {/* STEP 4 */}
          <div className="rounded-xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <span className="inline-block rounded-md bg-[#0b2b3c] px-3 py-1 text-xs text-white">
              Step 4
            </span>

            <div className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-50">
              <AcademicCapIcon className="h-8 w-8 text-[#EA5455]" />
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
              Get Certified
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Receive certification and lifetime access to recordings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
