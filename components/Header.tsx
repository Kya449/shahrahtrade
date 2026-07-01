import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07182D]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        <Logo />

        <nav className="hidden items-center gap-10 text-sm font-medium text-white lg:flex">
          <a href="#" className="transition hover:text-[#D4AF37]">
            Overview
          </a>

          <a href="#services" className="transition hover:text-[#D4AF37]">
            Services
          </a>

          <a href="#about" className="transition hover:text-[#D4AF37]">
            About
          </a>

          <a href="#contact" className="transition hover:text-[#D4AF37]">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-xl bg-[#D4AF37] px-6 py-3 font-bold text-[#07182D] transition hover:scale-105"
        >
          Get Quote
        </a>

      </div>
    </header>
  );
}