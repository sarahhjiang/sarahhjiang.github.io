import { GraduationCap, MapPin, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-blush mx-auto rounded-full" />
          </div>

          <div className="gradient-card rounded-3xl p-8 md:p-12 shadow-soft">
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Hi! I’m an <span className="font-semibold text-primary">NSF Graduate Research Fellow </span> 
              and current PhD student passionate about leveraging technological innovations to democratize healthcare. 
              My research sits at the intersection of data, design, and ethics in digital health –
              I aim to develop ML solutions that are not only technically rigorous and scalable, 
              but also people-centered and clinically impactful.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              I completed my BSE in Biomedical Engineering and Computer Science at Duke University,
              where I conducted research on wearable sensors for health monitoring and developed
              full-stack applications for healthcare data management. When I'm not working on a project, 
              you can find me playing the piano, exploring local coffee shops, or 
              buried in a good book [currently reading: <em>Ariadne</em> by Jennifer Saint].
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Education</p>
                  <p className="text-sm text-muted-foreground">PhD Biostatistics, UNC</p>
                  <p className="text-sm text-muted-foreground">BSE BME & CS, Duke</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-3 rounded-xl bg-secondary/10">
                  <Sparkles className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Research Focus</p>
                  <p className="text-sm text-muted-foreground">Machine Learning</p>
                  <p className="text-sm text-muted-foreground">Disease Prediction</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-3 rounded-xl bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Chapel Hill, NC</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
