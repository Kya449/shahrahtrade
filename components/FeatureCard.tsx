import Image from "next/image";

type Props = {
  title: string;
  text: string;
};

export default function FeatureCard({ title, text }: Props) {
  let image = "/images/trade.jpg";

  if (title === "Vehicle Import") {
    image = "/images/car-import.jpg";
  }

  if (title === "International Logistics") {
    image = "/images/logistics.jpg";
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-8">

        <h3 className="text-2xl font-bold text-[#07182D]">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-slate-600">
          {text}
        </p>

      </div>

    </div>
  );
}