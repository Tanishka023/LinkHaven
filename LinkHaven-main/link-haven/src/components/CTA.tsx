import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background */}
          <div className="absolute inset-0 hero-gradient rounded-3xl opacity-95"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center py-16 px-8">
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="flex justify-center">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-primary-foreground/90 font-medium">
                    Trusted by 10,000+ users
                  </span>
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
                Ready to organize your digital life?
              </h2>
              
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Join thousands of users who have already transformed how they save and organize links. 
                Start your journey to a more organized web experience today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="group font-semibold text-base px-8 py-4"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="glass" 
                  size="lg" 
                  className="text-primary-foreground border-primary-foreground/20 hover:border-primary-foreground/40"
                >
                  Watch Demo
                </Button>
              </div>
              
              <p className="text-sm text-primary-foreground/70 pt-4">
                No credit card required • Free 14-day trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;