import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Brain, Microchip, Watch, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectColor =
  | "primary"
  | "accent"
  | "secondary"
  | "lilac"
  | "orchid"
  | "periwinkle"
  | "sapphire"
  | "petal"
  | "bubblegum";

const projectStyles: Record<
  ProjectColor,
  { iconWrapper: string; icon: string; hoverTitle: string; badge: string }
> = {
  primary: {
    iconWrapper: "group-hover:bg-primary/15 group-hover:shadow-[0_8px_30px_-12px_rgba(88,28,135,0.45)]",
    icon: "group-hover:text-primary",
    hoverTitle: "group-hover:text-primary",
    badge: "group-hover:border-primary/40 group-hover:text-primary",
  },
  accent: {
    iconWrapper: "group-hover:bg-accent/15 group-hover:shadow-[0_8px_30px_-12px_rgba(17,94,89,0.45)]",
    icon: "group-hover:text-accent",
    hoverTitle: "group-hover:text-accent",
    badge: "group-hover:border-accent/40 group-hover:text-accent",
  },
  secondary: {
    iconWrapper: "group-hover:bg-secondary/15 group-hover:shadow-[0_8px_30px_-12px_rgba(37,99,235,0.35)]",
    icon: "group-hover:text-secondary",
    hoverTitle: "group-hover:text-secondary",
    badge: "group-hover:border-secondary/40 group-hover:text-secondary",
  },
  lilac: {
    iconWrapper: "group-hover:bg-lilac/15 group-hover:shadow-[0_8px_30px_-12px_rgba(182,146,246,0.45)]",
    icon: "group-hover:text-lilac",
    hoverTitle: "group-hover:text-lilac",
    badge: "group-hover:border-lilac/40 group-hover:text-lilac",
  },
  orchid: {
    iconWrapper: "group-hover:bg-orchid/15 group-hover:shadow-[0_8px_30px_-12px_rgba(216,180,254,0.45)]",
    icon: "group-hover:text-orchid",
    hoverTitle: "group-hover:text-orchid",
    badge: "group-hover:border-orchid/40 group-hover:text-orchid",
  },
  periwinkle: {
    iconWrapper: "group-hover:bg-periwinkle/15 group-hover:shadow-[0_8px_30px_-12px_rgba(165,180,252,0.45)]",
    icon: "group-hover:text-periwinkle",
    hoverTitle: "group-hover:text-periwinkle",
    badge: "group-hover:border-periwinkle/40 group-hover:text-periwinkle",
  },
  sapphire: {
    iconWrapper: "group-hover:bg-sapphire/15 group-hover:shadow-[0_8px_30px_-12px_rgba(99,102,241,0.45)]",
    icon: "group-hover:text-sapphire",
    hoverTitle: "group-hover:text-sapphire",
    badge: "group-hover:border-sapphire/40 group-hover:text-sapphire",
  },
  petal: {
    iconWrapper: "group-hover:bg-petal/15 group-hover:shadow-[0_8px_30px_-12px_rgba(249,168,212,0.45)]",
    icon: "group-hover:text-petal",
    hoverTitle: "group-hover:text-petal",
    badge: "group-hover:border-petal/40 group-hover:text-petal",
  },
  bubblegum: {
    iconWrapper: "group-hover:bg-bubblegum/15 group-hover:shadow-[0_8px_30px_-12px_rgba(244,114,182,0.45)]",
    icon: "group-hover:text-bubblegum",
    hoverTitle: "group-hover:text-bubblegum",
    badge: "group-hover:border-bubblegum/40 group-hover:text-bubblegum",
  },
};

type Project = {
  title: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  color: ProjectColor;
};

const projects: Project[] = [
  {
    title: "Classifier Guided Protein Generation",
    description:
      "Developed a novel protein design framework using classifier-guided diffusion models to generate functional proteins from natural language descriptions.",
    tech: ["PyTorch", "Hugging Face Transformers", "ESM-2", "PubMedBERT"],
    icon: Brain,
    color: "primary",
  },
  {
    title: "Automated Blood Pressure Measurement System",
    description:
      "Developed a complete automated blood pressure monitoring system integrating analog signal processing, microcontroller control, and custom filtering circuits to explore the fundamentals of oscillometric blood pressure measurement.",
    tech: ["Arduino", "Circuit Design", "Signal Processing"],
    icon: Microchip,
    color: "sapphire",
  },
  {
    title: "RecycleHealth Dashboard",
    description:
      "Full-stack web application for tracking and managing wearable device donations, enabling efficient management of non-profit resources and inventory.",
    tech: ["Flask", "PostgreSQL", "Render"],
    icon: Database,
    color: "petal",
  },
  {
    title: "BIG IDEAs Research Platform",
    description:
      "Built a cloud-based platform integrating Garmin, Fitbit, and Apple HealthKit APIs to securely track, visualize, and manage wearable data for research use.",
    tech: ["FastAPI", "Django", "Azure"],
    icon: Watch,
    color: "orchid",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const styles = projectStyles[project.color] ?? projectStyles.primary;
            return (
              <Card
                key={index}
                className="gradient-card border-border/50 shadow-soft hover:shadow-hover transition-smooth group overflow-hidden"
              >
                <CardHeader>
                  <div
                    className={cn(
                      "w-14 h-14 rounded-2xl bg-muted/20 flex items-center justify-center mb-4 transition-smooth group-hover:scale-110",
                      styles.iconWrapper,
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-7 w-7 text-foreground transition-smooth",
                        styles.icon,
                      )}
                    />
                  </div>
                  <CardTitle
                    className={cn(
                      "text-xl text-foreground transition-smooth",
                      styles.hoverTitle,
                    )}
                  >
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className={cn(
                          "bg-muted/40 text-foreground/70 border border-border/20 transition-smooth",
                          styles.badge,
                        )}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
