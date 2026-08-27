import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Ventures from "@/components/Ventures";
import Work from "@/components/Work";
import OnStage from "@/components/OnStage";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Ventures />
        <Work />
        <OnStage />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
