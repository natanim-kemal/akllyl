import StructuredData from "@/components/StructuredData";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Appointments from "@/components/Appointments";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <StructuredData />
      <Navbar />

      <Hero />
      <Services />
      <About />
      <Appointments />
      <Gallery />
      <Contact />
      <Footer />

      <ThemeToggle />
    </main>
  );
}
