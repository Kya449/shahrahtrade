export default function CarImport() {
  return (
    <section className="bg-[#07182D] py-24 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-16 px-6 items-center">

        <div>
          <p className="uppercase tracking-[0.4em] text-[#D4AF37]">
            Featured Service
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight">
            Vehicle Import
            <br />
            From Bashmaq Free Zone
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-300">
            Shahrah Trade specializes in importing vehicles through
            Bashmaq Free Zone. We manage customs clearance,
            transportation and documentation from start to finish.
          </p>

          <button className="mt-10 rounded-xl bg-[#D4AF37] px-8 py-4 font-bold text-slate-900 hover:bg-yellow-400">
            Request Import Consultation
          </button>
        </div>

        <div className="flex h-[500px] items-center justify-center rounded-3xl border border-white/10 bg-white/5">
          <span className="text-slate-400 text-xl">
            Vehicle Showcase
          </span>
        </div>

      </div>
    </section>
  );
}