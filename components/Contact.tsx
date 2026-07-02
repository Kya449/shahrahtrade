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
            subtitle="تماس با ما"
            title="درخواست همکاری"
          />

          <div className="space-y-8">

            <div>
              <h3 className="text-lg font-bold text-[#07182D]">
                شماره تماس
              </h3>

              <p className="mt-2 text-slate-600">
                +98 918 788 3475
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#07182D]">
                ایمیل
              </h3>

              <p className="mt-2 text-slate-600">
                kyanoosh.khornegah@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#07182D]">
                انستاگرام
              </h3>

              <p className="mt-2 text-slate-600">
                @ShahrahTrade
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#07182D]">
                آدرس
              </h3>

              <p className="mt-2 text-slate-600">
                ایران، مریوان، مرز باشماق، ساختمان پارسیان، دفتر 212
              </p>
            </div>

          </div>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-lg">

          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            className="mb-5 w-full rounded-xl border p-4 outline-none"
          />

          <input
            type="email"
            placeholder="ایمیل"
            className="mb-5 w-full rounded-xl border p-4 outline-none"
          />

          <input
            type="tel"
            placeholder="شماره تماس"
            className="mb-5 w-full rounded-xl border p-4 outline-none"
          />

          <textarea
            placeholder="متن پیام"
            rows={6}
            className="mb-6 w-full rounded-xl border p-4 outline-none"
          />

          <button className="w-full rounded-xl bg-[#D4AF37] py-4 font-bold text-[#07182D] transition hover:bg-yellow-400">
            درخواست مشاوره
          </button>

        </div>

      </div>
    </section>
  );
}