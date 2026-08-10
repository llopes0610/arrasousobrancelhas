import Hero from "@/components/home/Hero";
import InstitutionalVideo from "@/components/home/InstitutionalVideo";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutPreview from "@/components/home/AboutPreview";
import LocationPreview from "@/components/home/LocationPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <InstitutionalVideo />
      <ServicesPreview />
      <AboutPreview />
      <LocationPreview />
      <FinalCTA />
    </>
  );
}