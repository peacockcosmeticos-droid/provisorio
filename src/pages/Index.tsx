import Header from "@/components/Header";

import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import ResultsGallery from "@/components/ResultsGallery";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import PressStrip from "@/components/PressStrip";
import Ingredients from "@/components/Ingredients";
import Faq from "@/components/Faq";
import FinalCTA from "@/components/FinalCTA";
import ReelsMasonry from "@/components/ReelsMasonry";
import GuaranteesBar from "@/components/GuaranteesBar";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <Hero />
      <Problems />
      <ResultsGallery />
      <Benefits />
      <PressStrip />

      <SocialProof />
      <Ingredients />
      <ReelsMasonry />

      <Testimonials />
      <GuaranteesBar />

      <Pricing />
      <Faq />
      <FinalCTA />

      <Footer />
    </div>
  );
};

export default Index;
