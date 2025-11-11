import { motion } from "framer-motion";
import { Briefcase, Film, Palette, Lightbulb, Zap } from "lucide-react";
import { SiAdobepremierepro, SiAdobeaftereffects, SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign } from "react-icons/si";

export default function AboutPage() {
  const skills = [
    {
      category: "Video Editing",
      icon: Film,
      items: [
        { name: "Adobe Premiere Pro", icon: SiAdobepremierepro },
        { name: "After Effects", icon: SiAdobeaftereffects },
        { name: "DaVinci Resolve", icon: null, badge: "Learning" },
      ],
    },
    {
      category: "Graphic Design",
      icon: Palette,
      items: [
        { name: "Adobe Photoshop", icon: SiAdobephotoshop },
        { name: "Adobe Illustrator", icon: SiAdobeillustrator },
        { name: "Adobe InDesign", icon: SiAdobeindesign },
      ],
    },
    {
      category: "Creative Focus",
      icon: Lightbulb,
      items: [
        { name: "YouTube Content", icon: null },
        { name: "Instagram Stories & Reels", icon: null },
        { name: "Brand Platform Content", icon: null },
      ],
    },
    {
      category: "Specialties",
      icon: Zap,
      items: [
        { name: "Motion Design", icon: null },
        { name: "Audio Synchronization", icon: null },
        { name: "Color Grading", icon: null },
        { name: "Visual Storytelling", icon: null },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            data-testid="text-about-title"
          >
            About Me
          </h1>
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-about-subtitle"
          >
            Creative journey, skills, and passion for visual storytelling
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden bg-muted border border-border">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
                alt="Shradha - Video Editor & Graphic Designer"
                className="w-full h-full object-cover"
                data-testid="img-profile"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4" data-testid="text-bio">
              <p className="text-lg leading-relaxed">
                I'm a skilled Video Editor and Graphic Designer with a deep passion
                for storytelling through visual media. My approach combines
                technical precision with creative vision to deliver impactful
                content across digital platforms.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Every project I work on is an opportunity to craft compelling
                narratives that resonate with audiences. Whether it's a product
                demo, customer success story, or creative content for social media,
                I bring the same dedication to quality and attention to detail.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                My expertise spans the full spectrum of post-production, from
                precision editing and motion design to color grading and audio
                synchronization. I'm constantly evolving my skillset and currently
                expanding into DaVinci Resolve to enhance my color grading
                capabilities.
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <div className="flex items-start gap-4 p-6 bg-accent/10 rounded-lg border border-accent/20">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Currently</p>
                  <h3 className="font-display text-xl font-semibold mb-1" data-testid="text-current-role">
                    Video Editing Intern at EOXS
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-current-description">
                    Editing product demos and customer success stories that drive
                    engagement and showcase product value
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-16"
        >
          <h2
            className="font-display text-3xl sm:text-4xl font-bold text-center"
            data-testid="text-skills-title"
          >
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + groupIndex * 0.1 }}
                className="space-y-6"
                data-testid={`card-skill-group-${groupIndex}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <skillGroup.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">
                    {skillGroup.category}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {skillGroup.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-3 text-lg group"
                      data-testid={`item-skill-${groupIndex}-${itemIndex}`}
                    >
                      {item.icon ? (
                        <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                      )}
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {item.name}
                      </span>
                      {item.badge && (
                        <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent-foreground">
                          {item.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
