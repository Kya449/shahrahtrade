import Image from "next/image";

export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-4">

      <Image
        src="/images/logo.png"
        alt="Shahrah Trade"
        width={58}
        height={58}
        priority
      />

      <div>

        <h1 className="text-xl font-black uppercase tracking-[0.18em] text-white">
          Shahrah Trade
        </h1>

        <p className="mt-1 text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
          Bashmaq Border
        </p>

      </div>

    </a>
  );
}