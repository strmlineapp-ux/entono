import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Lookbook from "@/components/Lookbook";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <Collections />
        <Lookbook />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
