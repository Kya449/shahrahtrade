import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import CarImport from "../../components/CarImport";
import WhyUs from "../../components/WhyUs";
import Stats from "../../components/Stats";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import SectionDivider from "../../components/SectionDivider";
import WhatsappButton from "../../components/WhatsappButton";

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