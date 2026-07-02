export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-4">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4D46A] to-[#C89B3C] shadow-lg">

        <span className="text-2xl font-black tracking-wider text-[#07182D]">
          ST
        </span>

      </div>

      <div>

        <h1 className="text-xl font-black tracking-[0.15em] text-white">
          شاهراه تجارت
        </h1>

        <p className="mt-1 text-xs tracking-[0.3em] text-[#D4AF37]">
         منطقه آزاد مریوان - بانه
        </p>

      </div>

    </a>
  );
}