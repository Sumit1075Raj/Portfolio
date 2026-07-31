"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "SR Tour & Travels",
    description:
      "A modern, interactive travel & tourism web application featuring real-time destination search, category filtering, an interactive booking modal with live price estimation, and direct WhatsApp reservation integration.",
    image: "/tour-travels.jpg",
    tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "WhatsApp API"],
    github: "https://github.com/Sumit1075Raj/TourTravelFrontendProject",
    live: "https://srtourtravel.netlify.app/",
    category: "Web Development",
  },
  {
    title: "Before You Buy - AI Decision Engine",
    description:
      "An AI-powered smart consumer advisory platform that scrapes Amazon & Flipkart metadata, extracts YouTube reviews and Reddit sentiment, and leverages Google Gemini AI for personalized buying guides.",
    image: "/before-you-buy.jpg",
    tech: ["Python", "FastAPI", "Playwright", "Google Gemini AI", "Next.js", "Tailwind CSS"],
    github: "https://github.com/Sumit1075Raj/BeforeYouBuy",
    live: "https://github.com/Sumit1075Raj/BeforeYouBuy",
    category: "Machine Learning",
  },
  {
    title: "Ghar - House Price Predictor",
    description:
      "An AI-driven real estate valuation platform that predicts property prices based on location, area, amenities, and structural features using machine learning regression models.",
    image: "https://miro.medium.com/v2/resize:fit:1400/0*cDRFtpTiOJFrfzS5.jpg",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Flask"],
    github: "https://github.com/Sumit1075Raj/Ghar---Ai-powered-House-Price-Prediction",
    live: "https://ghar-ai-powered-house-price-prediction--sumitraj1075.replit.app",
    category: "Machine Learning",
  },
  {
    title: "Farm Saathi",
    description:
      "FarmSaathi is an AI-powered livestock healthcare platform that helps farmers detect animal diseases, receive instant diagnosis, access treatment recommendations, and manage animal health records through an intelligent web application.",
    image: "/farm-saathi.jpg",
    tech: ["RAG", "Computer Vision", "Chatbot", "FastAPI", "React"],
    github: "https://github.com/Sumit1075Raj/FarmSaathi---Livestock-Diagnostic-",
    live: "https://github.com/Sumit1075Raj/FarmSaathi---Livestock-Diagnostic-",
    category: "Machine Learning",
  },
  {
    title: "Session Subscription System",
    description:
      "A full-stack MERN application for managing client subscriptions, tracking daily session progress, and maintaining financial records for gyms, fitness trainers, and service-based businesses.",
    image: "/session-subscription.jpg",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    github: "https://github.com/Sumit1075Raj/Session-Subscription-system",
    live: "https://session-subscription-system-1.onrender.com",
    category: "Web Development",
  },
]

const categories = ["All", "Machine Learning", "Web Development"]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 0.9, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 glass-card rounded-full text-sm text-cyan-400 mb-4">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Projects That{" "}
            <span className="gradient-text">Inspire</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A collection of my most impactful projects spanning AI, web development, and beyond.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 border-0 text-white"
                  : "border-purple-500/30 hover:border-purple-500/60 text-foreground"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl overflow-hidden h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                  
                  {/* Overlay buttons */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center gap-4 bg-background/50 backdrop-blur-sm"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 glass rounded-full hover:glow-purple"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 glass rounded-full hover:glow-blue"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.a>
                  </motion.div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="glass text-foreground border-purple-500/30"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View more link */}
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 text-sm font-medium group/link"
                    whileHover={{ x: 5 }}
                  >
                    View Project
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
