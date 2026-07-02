import SectionTitle from "./SectionTitle";

export default function WhyUs() {
  const items = [
    {
      number: "1",
      title: "تیم باتجربه",
      text: "کارشناسان متخصص در زمینه تجارت بین‌الملل و تشریفات گمرکی",
    },
    {
      number: "2",
      title: "مرز بین المللی باشماق",
      text: "دسترسی مستقیم به یکی از مهم‌ترین گذرگاه‌های مرزی تجاری ایران",
    },
    {
      number: "3",
      title: "فرآیند سریع",
      text: "ترخیص سریع گمرکی و مدیریت کارآمد حمل‌ونقل",
    },
    {
      number: "4",
      title: "خدمات قابل اطمینان",
      text: "ارتباط شفاف و شراکت تجاری بلندمدت",
    },
  ];

  return (
    <section className="bg-[#07182D] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="چرا شاهراه تجارت"
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