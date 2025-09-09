import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import ResultsGallery from "@/components/ResultsGallery";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problems />
      <ResultsGallery />
      <Benefits />
      <SocialProof />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
