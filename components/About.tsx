import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <div>

          <SectionTitle
            subtitle="About Us"
            title="Who We Are"
          />

          <p className="mt-8 leading-9 text-slate-600">
            Shahrah Trade provides international trade,
            customs clearance, logistics and vehicle import
            services through Bashmaq Border.
          </p>

          <p className="mt-6 leading-9 text-slate-600">
            We help businesses simplify cross-border trade
            with reliable, transparent and professional
            logistics solutions.
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl shadow-2xl">

          <Image
            src="/images/trade.jpg"
            alt="About Shahrah Trade"
            width={700}
            height={700}
            className="h-full w-full object-cover"
          />

        </div>

      </div>
    </section>
  );
}