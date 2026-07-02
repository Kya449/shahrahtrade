type Props = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-16 text-center">
      <p className="uppercase tracking-[0.45em] text-[#D4AF37] font-semibold">
        {subtitle}
      </p>

      <h2 className="mt-4 text-5xl font-bold text-[#07182D]">
        {title}
      </h2>
    </div>
  );
}