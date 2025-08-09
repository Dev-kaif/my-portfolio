"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";
import { calmEase } from "@/lib/Constant";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Stop propagation to prevent the modal from closing when clicking inside it
  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-[90vw] max-w-4xl h-[80vh] bg-white dark:bg-gray-900 rounded-lg overflow-hidden"
        layoutId={`project-card-${project.id}`}
        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
        transition={{
          duration: 0.6,
          ease: [0.65, 0, 0.35, 1],
        }}
        onClick={handleModalContentClick}
      >
        <div className="h-full w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
            <motion.div
              className="h-full w-full"
              layoutId={`project-image-${project.id}`}
              transition={{
                duration: 0.6,
                ease: [0.65, 0, 0.35, 1],
              }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} Demo`}
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute bottom-6 left-6 right-6 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: calmEase }}
            >
              <Button
                asChild
                className="flex-1 bg-[#3B82F6] hover:bg-[#2563EB] text-white"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Site
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white bg-transparent"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="w-full md:w-1/2 p-8 overflow-y-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: calmEase }}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold">{project.title}</h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Project Overview</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
