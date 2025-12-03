import HeroSection from "@/components/home/HeroSection";
import ServicesHighlight from "@/components/home/ServicesHighlight";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";
import ExitIntentModal from "@/components/ExitIntentModal";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesHighlight />
      <WhyChooseUs />
      <CTASection />
      <ExitIntentModal />
    </>
  );
}