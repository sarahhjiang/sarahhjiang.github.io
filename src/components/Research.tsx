import { ExternalLink, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ResearchColor =
  | "primary"
  | "accent"
  | "secondary"
  | "lilac"
  | "orchid"
  | "periwinkle"
  | "sapphire"
  | "petal"
  | "bubblegum";

const researchStyles: Record<
  ResearchColor,
  { card: string; hoverTitle: string; badge: string; link: string }
> = {
  primary: {
    card: "group-hover:border-primary/40 group-hover:shadow-[0_18px_45px_-20px_rgba(88,28,135,0.45)]",
    hoverTitle: "group-hover:text-primary",
    badge: "group-hover:border-primary/40 group-hover:text-primary",
    link: "group-hover:text-primary hover:text-primary",
  },
  accent: {
    card: "group-hover:border-accent/40 group-hover:shadow-[0_18px_45px_-20px_rgba(17,94,89,0.45)]",
    hoverTitle: "group-hover:text-accent",
    badge: "group-hover:border-accent/40 group-hover:text-accent",
    link: "group-hover:text-accent hover:text-accent",
  },
  secondary: {
    card: "group-hover:border-secondary/40 group-hover:shadow-[0_18px_45px_-20px_rgba(37,99,235,0.35)]",
    hoverTitle: "group-hover:text-secondary",
    badge: "group-hover:border-secondary/40 group-hover:text-secondary",
    link: "group-hover:text-secondary hover:text-secondary",
  },
  lilac: {
    card: "group-hover:border-lilac/40 group-hover:shadow-[0_18px_45px_-20px_rgba(182,146,246,0.45)]",
    hoverTitle: "group-hover:text-lilac",
    badge: "group-hover:border-lilac/40 group-hover:text-lilac",
    link: "group-hover:text-lilac hover:text-lilac",
  },
  orchid: {
    card: "group-hover:border-orchid/40 group-hover:shadow-[0_18px_45px_-20px_rgba(216,180,254,0.45)]",
    hoverTitle: "group-hover:text-orchid",
    badge: "group-hover:border-orchid/40 group-hover:text-orchid",
    link: "group-hover:text-orchid hover:text-orchid",
  },
  periwinkle: {
    card: "group-hover:border-periwinkle/40 group-hover:shadow-[0_18px_45px_-20px_rgba(165,180,252,0.45)]",
    hoverTitle: "group-hover:text-periwinkle",
    badge: "group-hover:border-periwinkle/40 group-hover:text-periwinkle",
    link: "group-hover:text-periwinkle hover:text-periwinkle",
  },
  sapphire: {
    card: "group-hover:border-sapphire/40 group-hover:shadow-[0_18px_45px_-20px_rgba(99,102,241,0.45)]",
    hoverTitle: "group-hover:text-sapphire",
    badge: "group-hover:border-sapphire/40 group-hover:text-sapphire",
    link: "group-hover:text-sapphire hover:text-sapphire",
  },
  petal: {
    card: "group-hover:border-petal/40 group-hover:shadow-[0_18px_45px_-20px_rgba(249,168,212,0.45)]",
    hoverTitle: "group-hover:text-petal",
    badge: "group-hover:border-petal/40 group-hover:text-petal",
    link: "group-hover:text-petal hover:text-petal",
  },
  bubblegum: {
    card: "group-hover:border-bubblegum/40 group-hover:shadow-[0_18px_45px_-20px_rgba(244,114,182,0.45)]",
    hoverTitle: "group-hover:text-bubblegum",
    badge: "group-hover:border-bubblegum/40 group-hover:text-bubblegum",
    link: "group-hover:text-bubblegum hover:text-bubblegum",
  },
};

type Publication = {
  title: string;
  journal: string;
  year: string;
  role: string;
  status: string;
  description: string;
  link: string;
  color: ResearchColor;
};

const Research = () => {
  const publications: Publication[] = [
    {
      title: "Movement Foundation Models",
      journal: "in progress",
      year: "2025-present",
      role: "Researcher",
      status: "ongoing",
      description: "Developing large-scale, contrastive and autoregressive models on high-dimensional accelerometer data to pretrain general-purpose health foundation models.",
      link: "#",
      color: "sapphire",
    },
    {
      title: "Demographic Representation in Biosignal Data",
      journal: "The Lancet Digital Health",
      year: "2023-2024",
      role: "First Author",
      status: "Published",
      description: "Comprehensive analysis of demographic biases in wearable biosignal datasets and their implications for ML model fairness.",
      link: "https://www.thelancet.com/journals/landig/article/PIIS2589-7500(24)00170-5/fulltext",
      color: "petal",
    },
    {
      title: "Wearable Sensors & Cardiovascular Health/Functional Capacity",
      journal: "under review",
      year: "2022-2025",
      role: "Second Author",
      status: "Coming soon...",
      description: "Systematic review of SOTA wearable sensor technologies for cardiovascular health monitoring and functional capacity assessment against gold-standard clinical measures.",
      link: "#",
      color: "periwinkle",
    },
    {
      title: "Causal Inference on Heart Disease Outcomes Using Wearable + EHR Data",
      journal: "Independent Study",
      year: "2024-2025",
      role: "Lead Researcher",
      status: "Completed",
      description: "Applying causal inference methods to understand relationships between commercially available wearable-derived features (AllOfUs), social determinants of health (SDOH), and cardiovascular outcomes.",
      link: "#",
      color: "lilac",
    },
    {
      title: "Social Determinants of Opioid Use Disorder",
      journal: "under review",
      year: "2024",
      role: "Researcher",
      status: "Coming soon...",
      description: "Understanding social determinants of health related to opioid use disorder (OUD) relapse. By identifying statistically significant determinants that influence relapse, we seek to inform the development of digital health technologies for supporting relapse prevention efforts. Poster presented at CERSI Summit 2024, full paper under review",
      link: "#",
      color: "bubblegum",
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
            Engineering ML systems that transform medical data into actionable health insights
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-blush mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {publications.map((pub, index) => {
            const colorStyle = researchStyles[pub.color] ?? researchStyles.primary;
            return (
            <Card
              key={index}
              className={cn(
                "gradient-card border-border/50 shadow-soft transition-smooth overflow-hidden group",
                colorStyle.card,
              )}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                  <CardTitle
                    className={cn(
                      "text-xl md:text-2xl text-foreground transition-smooth",
                      colorStyle.hoverTitle,
                    )}
                  >
                    {pub.title}
                  </CardTitle>
                  <Badge
                    className={cn(
                      getStatusClasses(pub.status),
                      "border w-fit transition-smooth",
                      colorStyle.badge,
                    )}
                  >
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
                      className={cn(
                        "inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-smooth",
                        colorStyle.link,
                      )}
                    >
                      <FileText className="h-4 w-4" />
                      View Publication
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : null}
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

export default Research;
