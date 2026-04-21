import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import BuildProcess from "@/components/BuildProcess";
import UtilitySpecs from "@/components/UtilitySpecs";
import Specs from "@/components/Specs";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-carbon-950 text-silver-mist">
      <Nav />
      <Hero />
      <Vision />
      <UtilitySpecs />
      <BuildProcess />
      <Specs />
      <Quote />
      <Footer />
    </main>
  );
}
