import HeroImage from "./HeroImage";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#07182D] via-[#0B2E59] to-[#123E73] pt-36 pb-24 text-white">

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <div>

          <p className="text-[#D4AF37]">
            شرکت تجارت بین المللی شاهراه
          </p>

          <h1 className="mt-6 text-5xl font-black leading-tight lg:text-7xl">
            واردات خودرو
            <br />
            ترخیص کالا
            <br />
            تجارت بین‌الملل
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-slate-300">
            خدمات تخصصی واردات خودرو، ترخیص کالا، حمل‌ونقل بین‌المللی،
            صادرات و واردات از طریق مرز رسمی باشماق.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Button>
              دریافت مشاوره رایگان
            </Button>

            <a
              href="#services"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
            >
              مشاهده خدمات
            </a>

          </div>

          <div className="mt-16 flex flex-wrap gap-12">

            <div>
              <h3 className="text-5xl font-black text-[#D4AF37]">
                +250
              </h3>

              <p className="mt-2 text-slate-300">
                پروژه موفق
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-[#D4AF37]">
                10+
              </h3>

              <p className="mt-2 text-slate-300">
                سال تجربه
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-[#D4AF37]">
                100%
              </h3>

              <p className="mt-2 text-slate-300">
                رضایت مشتریان
              </p>
            </div>

          </div>

        </div>

        <div className="flex justify-center">
          <HeroImage />
        </div>

      </div>

    </section>
  );
}