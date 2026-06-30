import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        <div>

          <SectionTitle
            subtitle="Contact"
            title="Let's Work Together"
          />

          <div className="space-y-8">

            <div>
              <h3 className="text-lg font-bold text-[#07182D]">
                Phone
              </h3>

              <p className="mt-2 text-slate-600">
                +98 918 788 3475
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#07182D]">
                Email
              </h3>

              <p className="mt-2 text-slate-600">
                kyanoosh.khornegah@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#07182D]">
                Instagram
              </h3>

              <p className="mt-2 text-slate-600">
                @ShahrahTrade
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#07182D]">
                Address
              </h3>

              <p className="mt-2 text-slate-600">
                Parsian Building, Unit 212,
                Bashmaq Border, Marivan, Iran
              </p>
            </div>

          </div>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-lg">

          <input
            type="text"
            placeholder="Your Name"
            className="mb-5 w-full rounded-xl border p-4 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="mb-5 w-full rounded-xl border p-4 outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="mb-5 w-full rounded-xl border p-4 outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            className="mb-6 w-full rounded-xl border p-4 outline-none"
          />

          <button className="w-full rounded-xl bg-[#D4AF37] py-4 font-bold text-[#07182D] transition hover:bg-yellow-400">
            Request Consulation
          </button>

        </div>

      </div>
    </section>
  );
}