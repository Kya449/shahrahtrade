import Image from "next/image";

export default function CarImport() {
  return (
    <section className="bg-[#07182D] py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <div>
          <p className="uppercase tracking-[0.4em] text-[#D4AF37]">
            خدمات ویژه
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight">
            واردات خودرو
            <br />
            از منطقه آزاد بانه-مریوان
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-300">
           شاهراه تجارت تمامی مراحل واردات خودرو،
           اعم از خرید، ترخیص، حمل و ثبت اسناد را
           از ابتدا تا انتها مدیریت می‌کند.
          </p>

          <button className="mt-10 rounded-xl bg-[#D4AF37] px-8 py-4 font-bold text-slate-900 transition hover:bg-yellow-400">
            درخواست مشاوره
          </button>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

          <Image
            src="/images/car-import.jpg"
            alt="Vehicle Import"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07182D]/60 via-transparent to-transparent"></div>

          <div className="absolute bottom-8 left-8">
            <h3 className="text-3xl font-bold text-white">
            واردات خودرو پلاک منطقه
            </h3>

            <p className="mt-2 text-slate-200">
              منطقه آزاد بانه-مریوان
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}