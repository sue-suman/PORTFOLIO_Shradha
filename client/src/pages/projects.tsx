import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Product Demo: Tech Launch",
      category: "Product Demo",
      thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=450&fit=crop",
    },
    {
      id: 2,
      title: "Customer Success Story",
      category: "Case Study",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop",
    },
    {
      id: 3,
      title: "Instagram Reel: Brand Content",
      category: "Social Media",
      thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=450&fit=crop",
    },
    {
      id: 4,
      title: "YouTube Edit: Tutorial Series",
      category: "YouTube",
      thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=450&fit=crop",
    },
    {
      id: 5,
      title: "Motion Graphics: Brand Intro",
      category: "Motion Design",
      thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=450&fit=crop",
    },
    {
      id: 6,
      title: "Color Grading: Cinematic Edit",
      category: "Color Grading",
      thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=450&fit=crop",
    },
    {
      id: 7,
      title: "Event Highlight: Conference 2024",
      category: "Event",
      thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=450&fit=crop",
    },
    {
      id: 8,
      title: "Brand Story: Company Culture",
      category: "Brand Content",
      thumbnail: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=450&fit=crop",
    },
    {
      id: 9,
      title: "Audio Sync: Music Video",
      category: "Music Video",
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=450&fit=crop",
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
            data-testid="text-projects-title"
          >
            Projects
          </h1>
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-projects-subtitle"
          >
            A collection of video editing and motion design work across various
            platforms and formats
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`card-project-${project.id}`}
              className="group relative aspect-video overflow-hidden rounded-lg bg-muted border border-border hover-elevate active-elevate-2 cursor-pointer"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <button
                data-testid={`button-play-${project.id}`}
                aria-label={`Play ${project.title}`}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 focus:outline-none"
              >
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm pointer-events-none">
                  <Play className="h-8 w-8 text-primary-foreground fill-current ml-1" />
                </div>
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <Badge
                  variant="secondary"
                  className="mb-2 no-default-hover-elevate"
                  data-testid={`badge-category-${project.id}`}
                >
                  {project.category}
                </Badge>
                <h3
                  className="font-display text-lg font-semibold line-clamp-2"
                  data-testid={`text-project-title-${project.id}`}
                >
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
