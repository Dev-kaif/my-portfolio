/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { Moon, Sun, Github, Linkedin, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import CurvedLoop from "@/components/animated/CurevedLoop";
import XformerlyTwitter from "@/components/Svg/X";
import { FloatingDock } from "@/components/animated/Dock";
import Lenis from "lenis";
import { calmEase, gentleSpring, projects, navItems } from "@/lib/Constant";

// Import all the new section components
import { Hero } from "@/components/portfolio/Hero";
import { Experience } from "@/components/portfolio/Experience";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { GitHubActivity } from "@/components/portfolio/GitHubActivity";
import { Projects } from "@/components/portfolio/Projects";
import { FAQ } from "@/components/portfolio/FAQ";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
// Import placeholder components you might create

import { useIsDesktop } from "@/hooks/useIsDesktop";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { ProjectModal } from "@/components/portfolio/ProjectModal";

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress: pageScrollYProgress } = useScroll();
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight / 2);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleProjectClick = (project: any) => setSelectedProject(project);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const navVariants = {
    top: {
      width: "100%",
      top: "0px",
      paddingLeft: "4rem",
      paddingRight: "4rem",
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
      borderRadius: "0px",
      backgroundColor: darkMode
        ? "rgba(13, 17, 23, 0)"
        : "rgba(249, 250, 251, 0)",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      border: "1px solid rgba(0, 0, 0, 0)",
    },
    scrolled: {
      width: "60%",
      top: "1.5rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      borderRadius: "9999px",
      backgroundColor: darkMode
        ? "rgba(13, 17, 23, 0.8)"
        : "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      border: `1px solid ${
        darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)"
      }`,
    },
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "dark bg-[#0D1117] text-[#E5E7EB]"
          : "bg-[#F9FAFB] text-[#1F2937]"
      }`}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#3B82F6] origin-[0%]"
        style={{ scaleX: pageScrollYProgress }}
      />
      <div className="inset-0 fixed ">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#F9FAFB] dark:bg-[#0D1117] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {isDesktop ? (
        <motion.header
          className="fixed left-0 right-0 mx-auto z-50 flex justify-center items-center bg"
          variants={navVariants}
          animate={isScrolled ? "scrolled" : "top"}
          transition={{ duration: 0.5, ease: calmEase }}
        >
          <div className="flex items-center space-x-8">
            {[
              "Experience",
              "About",
              "Testimonials",
              "Skills",
              "GitHub",
              "Projects",
              "FAQ",
              "Contact",
            ].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium hover:text-[#3B82F6] transition-colors relative group whitespace-nowrap"
                onClick={(e: any) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase().replace(" ", "-"));
                }}
                // IMPROVEMENT: Added a gentle spring transition to the hover effect.
                whileHover={{ y: -2 }}
                transition={gentleSpring}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-300 dark:border-gray-600">
              <motion.a
                href="https://github.com/Dev-kaif"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                // IMPROVEMENT: Added spring transition for a more "alive" feel.
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={gentleSpring}
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohammadkaif123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                // IMPROVEMENT: Added spring transition.
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={gentleSpring}
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://x.com/dev_kaif_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 dark:bg-gray-100 rounded-full transition-colors"
                // IMPROVEMENT: Added spring transition.
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={gentleSpring}
              >
                <XformerlyTwitter className="w-4 h-3" />
              </motion.a>
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                // IMPROVEMENT: Added spring transition.
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={gentleSpring}
              >
                {darkMode ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </motion.button>
            </div>
          </div>
        </motion.header>
      ) : (
        <FloatingDock
          items={navItems}
          mobileClassName="fixed bottom-10 left-8 z-50 " // Position for mobile
        />
      )}

      <main>
        <Hero />
        <section id="Curve" className="-mt-80 -mb-72 md:-mb-20 relative">
          <CurvedLoop
            marqueeText="Full Stack ✦ NEXT JS ✦ Typescript ✦ Gen AI ✦ Devops ✦"
            speed={3}
            curveAmount={300}
            className="dark:!fill-white font-mono"
          />
        </section>
        <Experience />
        <About />
        <Testimonials />
        <Skills />
        <GitHubActivity darkMode={darkMode} />
        <Projects projects={projects} onProjectClick={handleProjectClick} />
        <FAQ />
        <Contact />
        <Footer />
      </main>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className="fixed bottom-8 right-8 z-40 bg-[#3B82F6] hover:bg-[#2563EB] text-white p-3 rounded-full shadow-lg transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={gentleSpring}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
