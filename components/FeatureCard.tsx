type Props = {
  title: string;
  text: string;
};

export default function FeatureCard({ title, text }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <h3 className="text-2xl font-bold text-[#07182D]">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-slate-600">
        {text}
      </p>
    </div>
  );
}