import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";

export default function Services() {
  const services = [
    {
      title: "واردات خودرو",
      text: "واردات انواع خودرو سواری از طریق منطقه آزاد و مرز رسمی باشماق همراه با انجام تمامی مراحل قانونی",
    },
    {
      title: "ترخیص کالا",
      text: "ترخیص سریع کالا از گمرک با پیگیری کامل اسناد و امور اداری.",
    },
    {
      title: "حمل و نقل بین المللی",
      text: "مدیریت حمل‌ونقل داخلی و بین‌المللی برای کالاهای تجاری.",
    },
    {
      title: "صادرات و واردات",
      text: "مشاوره تخصصی تجارت خارجی و انجام فرآیند صادرات و واردات.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="خدمات ما"
          title="راهکارهای حرفه‌ای تجاری"
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {services.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              text={item.text}
            />
          ))}

        </div>

      </div>
    </section>
  );
}