import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import GrowthCube from "@/components/GrowthCube";
import Pipeline from "@/components/Pipeline";
import KineticTrain from "@/components/KineticTrain";
import Work from "@/components/Work";
import AILab from "@/components/AILab";
import Writing from "@/components/Writing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Experience />
        <GrowthCube />
        <Pipeline />
        <KineticTrain />
        <Work />
        <AILab />
        <Writing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
