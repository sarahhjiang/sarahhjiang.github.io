import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type ExperienceColor =
  | "primary"
  | "accent"
  | "secondary"
  | "lilac"
  | "orchid"
  | "periwinkle"
  | "sapphire"
  | "petal"
  | "bubblegum";

const experienceStyles: Record<
  ExperienceColor,
  { wrapper: string; icon: string; hoverText: string }
> = {
  primary: {
    wrapper: "bg-primary/10 border-primary/30",
    icon: "text-primary",
    hoverText: "group-hover:text-primary",
  },
  accent: {
    wrapper: "bg-accent/10 border-accent/30",
    icon: "text-accent",
    hoverText: "group-hover:text-accent",
  },
  secondary: {
    wrapper: "bg-secondary/10 border-secondary/30",
    icon: "text-secondary",
    hoverText: "group-hover:text-secondary",
  },
  lilac: {
    wrapper: "bg-lilac/10 border-lilac/30",
    icon: "text-lilac",
    hoverText: "group-hover:text-lilac",
  },
  orchid: {
    wrapper: "bg-orchid/10 border-orchid/30",
    icon: "text-orchid",
    hoverText: "group-hover:text-orchid",
  },
  periwinkle: {
    wrapper: "bg-periwinkle/10 border-periwinkle/30",
    icon: "text-periwinkle",
    hoverText: "group-hover:text-periwinkle",
  },
  sapphire: {
    wrapper: "bg-sapphire/10 border-sapphire/30",
    icon: "text-sapphire",
    hoverText: "group-hover:text-sapphire",
  },
  petal: {
    wrapper: "bg-petal/10 border-petal/30",
    icon: "text-petal",
    hoverText: "group-hover:text-petal",
  },
  bubblegum: {
    wrapper: "bg-bubblegum/10 border-bubblegum/30",
    icon: "text-bubblegum",
    hoverText: "group-hover:text-bubblegum",
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
    // {
    //   role: "Founding Engineer",
    //   organization: "Mantis Biotech",
    //   period: "2025–Present",
    //   description: "Building next-gen biomedical infra.",
    //   color: "primary",
    // },
    {
      role: "Deep Learning Researcher",
      organization: "Health Intelligence Lab, UCLA",
      period: "2025–Present",
      description: "Developing novel deep learning architectures for wearable biosignal analysis and health prediction.",
      color: "petal",
    },
    {
      role: "Full Stack Developer & Research Fellow",
      organization: "BIG IDEAs Lab, Duke University",
      period: "2022–2025",
      description: "Led development of research platforms and conducted machine learning research on health equity and disease detection in wearable technology.",
      color: "periwinkle",
    },
    {
      role: "Teaching Assistant",
      organization: "Duke CS & BME",
      period: "2022–2025",
      description: "Project dev. and head undergraduate TA for Intro to Data Science, TA Egr Design & Comm, grader for Embedded Medical Software, MedTech Design",
      color: "orchid",
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
                      <h3
                        className={cn(
                          "text-xl font-bold text-foreground transition-smooth",
                          color.hoverText,
                        )}
                      >
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
