import { motion } from "framer-motion";
import { ChevronDown, Film, Sparkles, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HomePage() {
  const scrollToReel = () => {
    document.getElementById("video-reel")?.scrollIntoView({ behavior: "smooth" });
  };

  const specialties = [
    {
      icon: Film,
      title: "Video Editing",
      description: "Professional editing with Adobe Premiere Pro and After Effects. Currently mastering DaVinci Resolve.",
    },
    {
      icon: Sparkles,
      title: "Motion Design",
      description: "Creating dynamic motion graphics with precise audio sync and seamless transitions.",
    },
    {
      icon: Palette,
      title: "Visual Storytelling",
      description: "Expert color grading and story-driven content for YouTube, Instagram, and brand platforms.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-8"
          >
            <h1
              className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight"
              data-testid="text-hero-name"
            >
              Shradha
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light"
              data-testid="text-hero-subtitle"
            >
              Video Editor & Graphic Designer
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg max-w-2xl mx-auto text-muted-foreground leading-relaxed"
              data-testid="text-hero-tagline"
            >
              Passionate about storytelling, precision editing, and impactful visuals
              across digital platforms
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link href="/projects">
                <Button size="lg" data-testid="button-view-projects" className="hover-elevate active-elevate-2">
                  View Projects
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  data-testid="button-get-in-touch"
                  className="hover-elevate active-elevate-2"
                >
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          onClick={scrollToReel}
          data-testid="button-scroll-indicator"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.button>
      </section>

      <section id="video-reel" className="py-24 px-6 lg:px-8 bg-card/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2
            className="font-display text-4xl sm:text-5xl font-bold text-center mb-4"
            data-testid="text-reel-title"
          >
            Latest Reel
          </h2>
          <p
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            data-testid="text-reel-description"
          >
            A showcase of recent video editing work including product demos,
            customer success stories, and creative content
          </p>

          <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border">
            <iframe
              data-testid="iframe-video-reel"
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video Reel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </section>

      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl sm:text-4xl font-bold text-center mb-16"
            data-testid="text-specialties-title"
          >
            Specialties
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center space-y-4"
                data-testid={`card-specialty-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-accent/20 text-accent-foreground">
                  <specialty.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-semibold">
                  {specialty.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
