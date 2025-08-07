import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <CTA />
          <div className="flex justify-center mt-8">
          <Button onClick={() => navigate("/save-links")}>Start Saving Links</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;