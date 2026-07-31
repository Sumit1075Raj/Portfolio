"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Machine Learning",
    skills: [
      { name: "Numpy", level: 75 },
      { name: "Pandas", level: 80 },
      { name: "Scikit-learn", level: 85 },
      { name: "Seaborn/Matplotlib", level: 88 },
      { name: "Xgboost", level: 85 },
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 80 },
      { name: "SQL", level: 85 },
      { name: "Java", level: 75 },
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", level: 92 },
      { name: "Node.js", level: 85 },
      { name: "FastAPI", level: 88 },
      { name: "PostgreSQL", level: 82 },
    ],
    gradient: "from-cyan-500 to-green-500",
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Git", level: 92 },
      { name: "Colab", level: 90 },
      { name: "Jupyter Notebook", level: 90 },
    ],
    gradient: "from-orange-500 to-red-500",
  },
]

const techIcons = [
  { name: "Python", icon: "🐍" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass-card rounded-full text-sm text-blue-400 mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Technologies I{" "}
            <span className="gradient-text">Master</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit spanning machine learning, web development, and cloud technologies.
          </p>
        </motion.div>

        {/* Floating tech icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.2, y: -10 }}
              className="p-4 glass-card rounded-xl text-3xl cursor-pointer"
              title={tech.name}
            >
              {tech.icon}
            </motion.div>
          ))}
        </motion.div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className={`text-xl font-semibold mb-6 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    gradient={category.gradient}
                    delay={categoryIndex * 0.2 + skillIndex * 0.1}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillBar({
  skill,
  gradient,
  delay,
  isInView,
}: {
  skill: { name: string; level: number }
  gradient: string
  delay: number
  isInView: boolean
}) {
  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium group-hover:text-purple-400 transition-colors">
          {skill.name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="text-muted-foreground"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${gradient} rounded-full relative`}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: delay + 1,
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
