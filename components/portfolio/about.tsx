"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Code, Globe, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Skilled in building and applying Machine Learning models to solve real-world problems.",
    color: "from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500",
  },
  {
    icon: Code,
    title: "Python Development",
    description: "Proficient in the Python ecosystem including data science libraries, with experience in building and deploying machine learning applications.",
    color: "from-indigo-600 to-blue-600 dark:from-indigo-500 dark:to-blue-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack with React, Next.js, Node.js, and modern web technologies.",
    color: "from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Passionate about exploring cutting-edge technologies and implementing creative solutions.",
    color: "from-violet-600 to-purple-600 dark:from-violet-500 dark:to-purple-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 0.9, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass-card rounded-full text-sm text-purple-600 dark:text-purple-400 font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Transforming Ideas into{" "}
            <span className="gradient-text">Intelligent Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            I&apos;m Sumit Raj, a Machine Learning Engineer and Full Stack Developer passionate about building intelligent systems and scalable web applications. I enjoy turning data into meaningful insights and creating real-world solutions through code.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 glass-card rounded-2xl h-full relative overflow-hidden transition-all duration-300 group-hover:border-purple-500/40 group-hover:shadow-lg dark:group-hover:shadow-purple-900/30"
              >
                {/* Gradient glow effect on hover - balanced for light & dark mode */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 dark:group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${item.color} rounded-2xl blur-xl -z-10`} />
                
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-sm`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                {/* Decorative number */}
                <span className="absolute bottom-4 right-4 text-6xl font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors duration-300">
                  0{index + 1}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "Fresher", label: "Exploring Technologies" },
            { value: "8+", label: "Projects Completed" },
            { value: "10+", label: "ML Models Completed" },
            { value: "100%", label: "Dedication" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 glass-card rounded-xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, type: "spring" }}
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
