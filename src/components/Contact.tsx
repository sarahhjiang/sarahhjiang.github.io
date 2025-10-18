import { Mail, Linkedin, Github, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const contactColorStyles = {
  primary: {
    iconWrapper: "bg-primary/10",
    icon: "text-primary",
  },
  accent: {
    iconWrapper: "bg-accent/10",
    icon: "text-accent",
  },
  secondary: {
    iconWrapper: "bg-secondary/10",
    icon: "text-secondary",
  },
  blush: {
    iconWrapper: "bg-blush/10",
    icon: "text-blush",
  },
} as const;

type ContactColorKey = keyof typeof contactColorStyles;

const Contact = () => {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "sarah [dot] jiang [at] unc [dot] edu",
      href: "mailto:sarah.jiang@unc.edu",
      color: "primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "let's connect!",
      href: "https://linkedin.com/in/sarahhjiang",
      color: "accent",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "check out my projects",
      href: "https://github.com/sarahhjiang",
      color: "secondary",
    },
    {
      icon: GraduationCap,
      label: "Google Scholar",
      value: "keep up with my research",
      href: "https://scholar.google.com/citations?user=bdLjE3YAAAAJ&hl=en",
      color: "blush",
    },
  ];

  return (
    <section id="contact" className="py-24 gradient-accent-mid relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blush/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch!
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Always happy to chat about research, projects, or potential collaborations in healthcare AI
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-blush mx-auto rounded-full mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              const styles =
                contactColorStyles[(link.color ?? "primary") as ContactColorKey] ??
                contactColorStyles.primary;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="gradient-card rounded-2xl p-6 shadow-soft hover:shadow-hover transition-smooth border border-border/50">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth",
                        styles.iconWrapper,
                      )}
                    >
                      <Icon className={cn("h-6 w-6", styles.icon)} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {link.label}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-smooth">
                      {link.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Footer */}
          <div className="pt-12 border-t border-foreground/10">
            <p className="text-sm text-foreground/60 flex items-center justify-center gap-2">
              © 2025 Sarah Jiang 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
