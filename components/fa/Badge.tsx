type Props = {
  text: string;
};

export default function Badge({ text }: Props) {
  return (
    <span className="rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-bold text-[#07182D]">
      {text}
    </span>
  );
}