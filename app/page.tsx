import SectionDivider from "../components/SectionDivider";
import CTA from "../components/CTA";
import WhatsappButton from "../components/WhatsappButton";
import Contact from "../components/Contact";
import WhyUs from "../components/WhyUs";
import CarImport from "../components/CarImport";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Stats from "../components/Stats";

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