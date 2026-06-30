type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button
      className="
        rounded-xl
        bg-gradient-to-r
        from-[#D4AF37]
        to-[#F4D46A]
        px-8
        py-4
        font-bold
        text-[#07182D]
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:shadow-2xl
        active:scale-95
      "
    >
      {children}
    </button>
  );
}