type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button className="rounded-xl bg-[#D4AF37] px-8 py-4 font-bold text-[#07182D] transition duration-300 hover:scale-105 hover:bg-yellow-400">
      {children}
    </button>
  );
}