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
                +989187883475
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
                اینستاگرام
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

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/thank-you"
          className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-lg"
        >

          <input type="hidden" name="form-name" value="contact" />

          <input
            name="name"
            type="text"
            required
            placeholder="نام و نام خانوادگی"
            className="mb-5 w-full rounded-xl border p-4 outline-none"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="ایمیل"
            className="mb-5 w-full rounded-xl border p-4 outline-none"
          />

          <input
            name="phone"
            type="tel"
            required
            placeholder="شماره تماس"
            className="mb-5 w-full rounded-xl border p-4 outline-none"
          />

          <textarea
            name="message"
            rows={6}
            required
            placeholder="متن پیام"
            className="mb-6 w-full rounded-xl border p-4 outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-[#D4AF37] py-4 font-bold text-[#07182D] transition hover:bg-yellow-400"
          >
            درخواست مشاوره
          </button>

        </form>

      </div>
    </section>
  );
}