import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Headshot: place your image file in `public/headshot.jpg` or `public/headshot.webp` */}
          <div className="flex justify-center mb-8">
            {/* Gradient ring wrapper — adjust p-1 to a smaller/larger ring */}
            <div className="rounded-full p-1 bg-gradient-to-br from-primary to-blush shadow-hover hover:scale-105 transition-transform">
              <img
                src="/headshot.jpg"
                alt="Sarah Jiang headshot"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover block"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-3xl md:text-6xl font-bold text-foreground tracking-tight">
            Sarah Jiang
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 font-medium">
            AI Researcher |   Biomedical Engineer
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Working toward fair models and systems that connect biosignals, behavior, and health.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              size="lg"
              onClick={() => scrollToSection("#research")}
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-hover transition-smooth text-base px-8"
            >
              My Research
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="rounded-full border-2 border-foreground/20 hover:border-primary hover:bg-primary/5 transition-smooth text-base px-8"
            >
              Get in Touch
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-foreground/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
