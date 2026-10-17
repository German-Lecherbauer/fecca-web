import Alianzas from "@/components/Alianzas";
import Beneficios from "@/components/Beneficios";
import Clubes from "@/components/Clubes";
import Contacto from "@/components/Contacto";
import ExpoBanner from "@/components/ExpoBanner";
import ExpoGaleria from "@/components/ExpoGaleria";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NuestraMision from "@/components/NuestraMision";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <NuestraMision />
        <ExpoBanner />
        <ExpoGaleria />
        <Beneficios />
        <Clubes />
        <Alianzas />
        <Contacto />
      </main>

      <Footer />
    </>
  );
}