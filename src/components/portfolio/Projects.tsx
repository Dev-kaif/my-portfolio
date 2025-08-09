"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import MotionSplitText from "@/components/animated/MotionSplit";
import { calmEase } from "@/lib/Constant";

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  image: string;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface ProjectsProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export function Projects({ projects, onProjectClick }: ProjectsProps) {
  const [filter, setFilter] = useState("all");
  const filterOptions = ["all", "frontend", "fullstack"];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.type === filter;
  });

  const cardHoverVariants: Variants = {
    hover: {},
  };
  const imageVariants: Variants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.4, ease: calmEase } },
  };
  const overlayVariants: Variants = {
    initial: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.4, ease: calmEase } },
  };
  const ctaVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.4, ease: calmEase } },
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: calmEase }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <MotionSplitText
            text="My&nbsp;Projects"
            splitType="chars"
            duration={0.3}
            stagger={0.05}
            yOffset={40}
            className="text-3xl md:text-4xl tracking-wide font-medium font-feredoka text-center mb-12"
          />
        </div>
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  filter === option
                    ? ""
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {filter === option && (
                  <motion.div
                    className="absolute inset-0 bg-white dark:bg-gray-900 rounded-full shadow"
                    layoutId="filter-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 capitalize ${
                    filter === option
                      ? "text-gray-900 dark:text-gray-100"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {option === "frontend" ? "Frontend Only" : option}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="cursor-pointer"
                onClick={() => onProjectClick(project)}
                layoutId={`project-card-${project.id}`}
                data-cursor-text="View Project"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: calmEase,
                }}
              >
                <motion.div
                  className="h-full"
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <Card className="overflow-hidden h-full flex flex-col">
                    <motion.div
                      className="aspect-video overflow-hidden relative"
                      layoutId={`project-image-${project.id}`}
                    >
                      <motion.div variants={imageVariants}>
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                        variants={overlayVariants}
                      >
                        <motion.div
                          className="text-white text-sm font-semibold flex items-center gap-2 px-4 py-2 rounded-full border border-white/50"
                          variants={ctaVariants}
                        >
                          <ExternalLink size={16} />
                          View Project
                        </motion.div>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="p-6 flex-grow"
                      layoutId={`project-content-${project.id}`}
                    >
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {project.shortDescription}
                      </p>
                    </motion.div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
