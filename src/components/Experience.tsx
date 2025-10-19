import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type ExperienceColor = "primary" | "accent" | "secondary";

const experienceStyles: Record<ExperienceColor, { wrapper: string; icon: string }> = {
  primary: {
    wrapper: "bg-primary/10 border-primary/30",
    icon: "text-primary",
  },
  accent: {
    wrapper: "bg-accent/10 border-accent/30",
    icon: "text-accent",
  },
  secondary: {
    wrapper: "bg-secondary/10 border-secondary/30",
    icon: "text-secondary",
  },
};

const Experience = () => {
  const experiences: Array<{
    role: string;
    organization: string;
    period: string;
    description: string;
    color: ExperienceColor;
  }> = [
    {
      role: "Deep Learning Researcher",
      organization: "Health Intelligence Lab, UCLA",
      period: "2025–Present",
      description: "Developing novel deep learning architectures for wearable biosignal analysis and health prediction.",
      color: "primary",
    },
    {
      role: "Full Stack Developer & Research Fellow",
      organization: "BIG IDEAs Lab, Duke University",
      period: "2022–2025",
      description: "Led development of research platforms and conducted machine learning research on health equity in wearable technology.",
      color: "accent",
    },
    {
      role: "TA",
      organization: "Duke CS & BME",
      period: "2022–2025",
      description: "Project dev. and head undergraduate TA for Intro to Data Science, UTA Egr Design & Comm, grader for Embedded Medical Software, MedTech Design",
      color: "secondary",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-blush mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const color = experienceStyles[exp.color] ?? experienceStyles.primary;
              return (
                <div key={index} className="relative flex gap-8 group">
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-start pt-1">
                    <div
                      className={cn(
                        "w-16 h-16 rounded-full border-4 flex items-center justify-center shadow-soft group-hover:shadow-hover transition-smooth group-hover:scale-110",
                        color.wrapper,
                      )}
                    >
                      <Star className={cn("h-7 w-7", color.icon)} />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 gradient-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-hover transition-smooth">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-base font-semibold text-foreground/80 mb-3">
                      {exp.organization}
                    </p>
                    <p className="text-foreground/70 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
