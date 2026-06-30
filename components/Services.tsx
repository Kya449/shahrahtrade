import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";

export default function Services() {
  const services = [
    {
      title: "Vehicle Import",
      text: "Professional vehicle import through Bashmaq Free Zone with complete customs documentation.",
    },
    {
      title: "Customs Clearance",
      text: "Fast, secure and reliable customs clearance handled by experienced specialists.",
    },
    {
      title: "International Logistics",
      text: "Cross-border transportation and logistics management for commercial businesses.",
    },
    {
      title: "Import & Export",
      text: "International trade consulting and commercial import & export services.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="Our Services"
          title="Professional Trade Solutions"
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