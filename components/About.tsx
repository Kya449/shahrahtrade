import SectionTitle from "./SectionTitle";
export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="About Us"
          title="Who We Are"
        />

        <p className="mt-6 max-w-3xl text-slate-600 leading-8">
          Shahrah Trade is a logistics and international trading company
          based in Marivan border zone, focused on import, export,
          and customs clearance services.
        </p>

      </div>
    </section>
  );
}