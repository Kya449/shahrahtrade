import Header from "../components/en/Header";
import Hero from "../components/en/Hero";
import Services from "../components/en/Services";
import CarImport from "../components/en/CarImport";
import WhyUs from "../components/en/WhyUs";
import Stats from "../components/en/Stats";
import About from "../components/en/About";
import Contact from "../components/en/Contact";
import Footer from "../components/en/Footer";
import CTA from "../components/en/CTA";
import SectionDivider from "../components/en/SectionDivider";
import WhatsappButton from "../components/en/WhatsappButton";

export default function EnglishPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <CarImport />
        <SectionDivider />
        <WhyUs />
        <SectionDivider />
        <Stats />
        <SectionDivider />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}