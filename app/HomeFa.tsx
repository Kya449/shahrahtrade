import SectionDivider from "../components/fa/SectionDivider";
import CTA from "../components/fa/CTA";
import WhatsappButton from "../components/fa/WhatsappButton";
import Contact from "../components/fa/Contact";
import WhyUs from "../components/fa/WhyUs";
import CarImport from "../components/fa/CarImport";
import Footer from "../components/fa/Footer";
import Header from "../components/fa/Header";
import Hero from "../components/fa/Hero";
import Services from "../components/fa/Services";
import About from "../components/fa/About";
import Stats from "../components/fa/Stats";

export default function HomePage() {
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