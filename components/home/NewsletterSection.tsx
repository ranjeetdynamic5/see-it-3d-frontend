export default function NewsletterSection() {
  return (
    <section className="w-full my-16">
      <div className="mx-[20px] bg-[#083c57] rounded-xl px-6 py-10 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
              Join To Get Our Newsletter
            </h3>
            <p className="text-white/70 text-sm md:text-base max-w-xl">
              Join the SEEIT23D community today and take your creativity to the next dimension!
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <div>
            <button
              className="bg-[#ef5350] hover:bg-[#e53935]
                         text-white font-medium
                         px-6 py-3 rounded-md
                         transition-all duration-200"
            >
              Subscribe Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
