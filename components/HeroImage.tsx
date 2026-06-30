import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative h-[620px] w-[480px] overflow-hidden rounded-[36px] border border-white/10 shadow-2xl">

      <Image
        src="/images/hero-truck.jpg"
        alt="Shahrah Trade"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#07182D]/90 via-transparent to-transparent"></div>

      <div className="absolute left-8 top-8 rounded-full bg-[#D4AF37] px-5 py-2 text-sm font-bold text-[#07182D]">
        Since 2026
      </div>

      <div className="absolute bottom-10 left-8 right-8">

        <h3 className="text-3xl font-black text-white">
          Bashmaq Border
        </h3>

        <p className="mt-3 text-slate-200">
          Vehicle Import • Customs • Logistics
        </p>

      </div>

    </div>
  );
}