import { ExternalLink, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Research = () => {
  const publications = [
    {
      title: "Movement Foundation Models",
      journal: "in progress",
      year: "2025-present",
      role: "Researcher",
      status: "ongoing",
      description: "Developing large-scale, contrastive and autoregressive models on high-dimensional accelerometer data to pretrain general-purpose health foundation models.",
      link: "#",
    },
    {
      title: "Demographic Representation in Biosignal Data",
      journal: "The Lancet Digital Health",
      year: "2023-2024",
      role: "First Author",
      status: "Published",
      description: "Comprehensive analysis of demographic biases in wearable biosignal datasets and their implications for ML model fairness.",
      link: "https://www.thelancet.com/journals/landig/article/PIIS2589-7500(24)00170-5/fulltext",
    },
    {
      title: "Wearable Sensors & Cardiovascular Health/Functional Capacity",
      journal: "under review",
      year: "2022-2025",
      role: "Second Author",
      status: "Coming soon...",
      description: "Systematic review of SOTA wearable sensor technologies for cardiovascular health monitoring and functional capacity assessment against gold-standard clinical measures.",
      link: "#",
    },
    {
      title: "Causal Inference on Heart Disease Outcomes Using Wearable + EHR Data",
      journal: "Independent Study",
      year: "2024-2025",
      role: "Lead Researcher",
      status: "Completed",
      description: "Applying causal inference methods to understand relationships between commercially available wearable-derived features (AllOfUs), social determinants of health (SDOH), and cardiovascular outcomes.",
      link: "#",
    },
    {
      title: "Social Determinants of Opioid Use Disorder",
      journal: "under review",
      year: "2024",
      role: "Researcher",
      status: "Coming soon...",
      description: "Understanding social determinants of health related to opioid use disorder (OUD) relapse. By identifying statistically significant determinants that influence relapse, we seek to inform the development of digital health technologies for supporting relapse prevention efforts. Poster presented at CERSI Summit 2024, full paper under review",
      link: "#",
    },
  ];

  const getStatusClasses = (status: string) => {
    const s = (status || "").toLowerCase();
    if (s.includes("publish")) return "bg-accent/20 text-accent-foreground border-accent/30";
    if (s.includes("review") || s.includes("coming")) return "bg-secondary/20 text-secondary-foreground border-secondary/30";
    if (s.includes("ongo") || s.includes("in progress") || s.includes("progress")) return "bg-primary/20 text-primary-foreground border-primary/30";
    if (s.includes("complete")) return "bg-muted/20 text-muted-foreground border-muted/30";
    // fallback
    return "bg-muted/10 text-foreground/70 border-border/30";
  };

  return (
    <section id="research" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Research
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineering interpretable machine learning systems that transform biosignals into actionable health insights
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-blush mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="gradient-card border-border/50 shadow-soft hover:shadow-hover transition-smooth overflow-hidden group"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-smooth">
                    {pub.title}
                  </CardTitle>
                  <Badge className={`${getStatusClasses(pub.status)} border w-fit`}>
                    {pub.status}
                  </Badge>
                </div>
                <CardDescription className="text-base">
                  <span className="font-semibold text-foreground/70">{pub.journal}</span> · {pub.year} · {pub.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {pub.description}
                </p>
                <div className="flex items-center gap-2">
                  {pub.link && pub.link !== "#" ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-smooth"
                    >
                      <FileText className="h-4 w-4" />
                      View Publication
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
