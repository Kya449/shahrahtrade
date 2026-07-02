import Image from "next/image";

export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-4">

      <div className="relative h-14 w-14 overflow-hidden rounded-2xl shadow-lg">
        <Image
          src="/images/logo.jpg"
          alt="Shahrah Trade"
          fill
          className="object-cover"
          priority
        />
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