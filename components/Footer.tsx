export default function Footer() {
  return (
    <footer className="bg-[#04111F] py-16 text-white">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">

        <div>
          <h2 className="text-2xl font-bold">
            شاهراه تجارت باشماق
          </h2>

          <p className="mt-4 leading-8 text-slate-400">
            متخصص در واردات خودرو از طریق منطقه آزاد مریوان-بانه، ترخیص کالا از گمرک، لجستیک و خدمات بازرگانی بین‌المللی
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">
            تماس باما
          </h3>

          <p className="mt-4 text-slate-400">
            +98 918 788 3475
          </p>

          <p className="mt-2 text-slate-400">
            kyanoosh.khornegah@gmail.com
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">
            آدرس
          </h3>

          <p className="mt-4 leading-8 text-slate-400">
            منطقه آزاد تجاری صنعتی مریوان-بانه
            <br />
            مرز باشماق
            <br />
            مریوان
          </p>
        </div>

      </div>

      <div className="mt-16 border-t border-white/10 pt-8 text-center text-slate-500">
        تمامی حقوق این وبسایت متعلق به شرکت شاهراه تجارت باشماق است.
      </div>

    </footer>
  );
}