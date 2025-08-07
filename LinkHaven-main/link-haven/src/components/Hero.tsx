import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button"; // ✅ only one import!
import { ArrowRight, BookmarkPlus, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useNavigate } from "react-router-dom"; // ✅

export function ContactButton() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate("/contact")} variant="outline">
      Contact Us
    </Button>
  );
}

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-accent/50 border border-primary/20 rounded-full text-sm font-medium text-accent-foreground">
                <Zap className="w-4 h-4 mr-2 text-primary" />
                Save links instantly from anywhere
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Your personal{" "}
                <span className="gradient-text">link sanctuary</span>{" "}
                in the cloud
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Never lose a valuable link again. Organize, search, and access your bookmarks 
                from any device with intelligent tagging and powerful search.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* ✅ working route */}
              <Button
                onClick={() => navigate("/save-links")}
                variant="hero"
                size="lg"
                className="group"
              >
                Start Saving Links
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button variant="outline" size="lg" className="group">
                <BookmarkPlus className="w-5 h-5 mr-2" />
                See How It Works
              </Button>

              {/* ✅ Contact Button */}
              <ContactButton />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">50k+</div>
                <div className="text-sm text-muted-foreground">Links Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">5 sec</div>
                <div className="text-sm text-muted-foreground">Avg Search</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img
                src={heroImage}
                alt="Link Haven Dashboard"
                className="w-full h-auto rounded-2xl shadow-large border border-border/20"
              />

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-card border border-border/50 rounded-lg p-3 shadow-medium animate-pulse-soft">
                <Shield className="w-6 h-6 text-secondary" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card border border-border/50 rounded-lg p-3 shadow-medium animate-pulse-soft">
                <BookmarkPlus className="w-6 h-6 text-primary" />
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-2xl -z-10 blur-3xl transform scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
