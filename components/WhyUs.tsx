import SectionTitle from "./SectionTitle";

export default function WhyUs() {
  const items = [
    {
      number: "01",
      title: "Experienced Team",
      text: "Professional experts in international trade and customs procedures.",
    },
    {
      number: "02",
      title: "Bashmaq Border",
      text: "Direct access to one of Iran's most important commercial border crossings.",
    },
    {
      number: "03",
      title: "Fast Process",
      text: "Quick customs clearance and efficient transportation management.",
    },
    {
      number: "04",
      title: "Reliable Service",
      text: "Transparent communication and long-term business partnership.",
    },
  ];

  return (
    <section className="bg-[#07182D] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="Why Choose Us"
          title="Why Shahrah Trade"
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {items.map((item) => (
            <div
              key={item.number}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur transition duration-300 hover:bg-white/10"
            >
              <span className="text-5xl font-black text-[#D4AF37]">
                {item.number}
              </span>

              <h3 className="mt-8 text-3xl font-bold">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}