import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Brain, Activity, Watch } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "RecycleHealth Dashboard",
      description: "Full-stack web application for tracking and managing wearable device donations, enabling efficient management of non-profit resources and inventory.",
      tech: ["Flask", "PostgreSQL", "Render"],
      icon: Database,
      gradient: "from-primary/10 to-accent/10",
    },
    {
      title: "BIG IDEAs Research Platform",
      description: "Built a cloud-based platform integrating Garmin, Fitbit, and Apple HealthKit APIs to securely track, visualize, and manage wearable data for research use.",
      tech: ["FastAPI", "Django", "Azure"],
      icon: Watch,
      gradient: "from-blush/10 to-secondary/10",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects
          </h2>
          {/* divider removed */}
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="gradient-card border-border/50 shadow-soft hover:shadow-hover transition-smooth group overflow-hidden"
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                    <Icon className="h-7 w-7 text-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
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
                        className="bg-muted/50 text-foreground/70 border-border/30"
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
