import Beneficios from "@/components/Beneficios";
import Clubes from "@/components/Clubes";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Clubes />
        <Beneficios />
        <Contacto />
      </main>

      <Footer />
    </>
  );
}