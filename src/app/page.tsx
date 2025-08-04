/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  ExternalLink,
  ArrowUp,
  X,
  Home,
  Zap,
  Briefcase,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { useIsDesktop } from "@/hooks/useIsDesktop"; // Corrected import path
import CurvedLoop from "@/components/animated/CurevedLoop";
import { Typewriter } from "react-simple-typewriter";
import TextHighlighter from "@/components/animated/textHighlighter";
import { cn } from "@/lib/utils";
import GooeySvgFilter from "@/components/animated/Googe";
import { useScreenSize } from "@/hooks/useScreenSize";
import GitHubCalendar from "react-github-calendar";
import XformerlyTwitter from "@/components/Svg/X";
import { FloatingDock } from "@/components/animated/Dock";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [filter, setFilter] = useState("all"); // State for the project filter
  const isDesktop = useIsDesktop();
  const screenSize = useScreenSize();
  const [activeExperienceTab, setActiveExperienceTab] = useState(0);

  const highlightClass = "rounded-[0.3em] px-px mx-1 dark:text-black";
  const highlightColor = "#F2AD91";

  // Combined effect for all scroll-based logic
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight / 2);
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "case-studies", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(
          section === "home" ? "hero" : section
        );
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect for locking body scroll when modal is open
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

  // Effect for toggling dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Data for Projects, Skills, FAQs
  const projects = [
    {
      id: 9,
      title: "SketchWiz",
      shortDescription:
        "A collaborative sketching tool with infinite canvas and real-time drawing.",
      fullDescription:
        "A collaborative sketching tool with infinite canvas, real-time drawing, and smooth zoom/pan interactions.",
      image: "/projects/SketchWiz.png",
      video: "/placeholder.svg?text=SketchWiz+Demo",
      link: "https://sketch-wiz-web.vercel.app/",
      github: "https://github.com/Dev-kaif/SketchWiz",
      tags: [
        "Turborepo",
        "WebSockets",
        "Next.js",
        "Node.js",
        "Express",
        "Tailwind CSS",
        "Google Gemini AI",
        "Prisma ORM",
        "PostgreSQL",
      ],
      type: "fullstack",
    },
    {
      id: 6,
      title: "GreenWatt",
      shortDescription:
        "AI-powered energy dashboard that helps households reduce electricity bills and carbon footprint.",
      fullDescription:
        "GreenWatt is an AI-powered energy dashboard that helps households reduce electricity bills and carbon footprint through personalized insights and semantic search and AI based energy-saving tips.",
      image: "/projects/GreenWatt.png",
      video: "/placeholder.svg?text=GreenWatt+Demo",
      link: "https://green-watt.vercel.app/",
      github: "https://github.com/Dev-kaif/GreenWatt",
      tags: [
        "Node.js",
        "Express",
        "NeonDB",
        "Prisma",
        "ReactJs",
        "Tailwind CSS",
        "Framer Motion",
        "Langchain",
        "Gemini",
      ],
      type: "fullstack",
    },
    {
      id: 7,
      title: "WorkNest",
      shortDescription:
        "Employee Management System to manage employee tasks, track statuses, and handle shifts.",
      fullDescription:
        "Employee Management System Manage employee tasks, track task statuses, handle shifts with start/end times, and empower employees to update their work and shift status.",
      image: "/projects/worknest.png",
      video: "/placeholder.svg?text=WorkNest+Demo",
      link: "https://employee-management-sys-lime.vercel.app",
      github: "https://github.com/Dev-kaif/Employee-Management-Sys",
      tags: [
        "Node.js",
        "Express",
        "MongoDB",
        "NextJs",
        "Tailwind CSS",
        "Framer Motion",
        "Node-cron",
      ],
      type: "fullstack",
    },
    {
      id: 8,
      title: "Curated Crate",
      shortDescription:
        "A modern e-commerce platform for creating and purchasing personalized gift boxes.",
      fullDescription:
        "Curated Crate is a modern e-commerce platform for creating and purchasing personalized gift boxes. It allows users to select from a variety of artisanal products to build their own unique crate or choose from pre-designed themed boxes.",
      image: "/projects/curated-crate.png",
      video: "/placeholder.svg?text=Curated+Crate+Demo",
      link: "https://curated-crate.vercel.app",
      github: "https://github.com/Dev-kaif/Curated-Crate",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "Mongoose",
        "NextAuth.js",
        "Framer Motion",
      ],
      type: "fullstack",
    },
    {
      id: 2,
      title: "Zentry Clone",
      shortDescription:
        "Recreation of the Zentry website with modern UI components and responsive design.",
      fullDescription:
        "Recreation of the Zentry website with modern UI components and responsive design.",
      image: "/projects/zentry.png",
      video: "/placeholder.svg?text=Zentry+Demo",
      link: "https://zentry-clone-delta.vercel.app/",
      github: "https://github.com/Dev-kaif/Zentry",
      tags: ["React", "GSAP", "Styled Components", "Tailwind CSS"],
      type: "frontend",
    },
    {
      id: 4,
      title: "Obsy Agency",
      shortDescription:
        "A creative agency website with stunning animations and interactive elements.",
      fullDescription:
        "A creative agency website with stunning animations and interactive elements.",
      image: "/projects/obsy.png",
      video: "/placeholder.svg?text=Obsy+Agency+Demo",
      link: "https://dev-kaif.github.io/Obys-Agency/",
      github: "https://github.com/Dev-kaif/Obys-Agency",
      tags: ["HTML", "CSS", "JavaScript", "GSAP"],
      type: "frontend",
    },
    {
      id: 5,
      title: "LuxeHaven",
      shortDescription:
        "A streamlined system for managing hotel bookings, guests, rooms, and staff operations efficiently.",
      fullDescription:
        "A streamlined system for managing hotel bookings, guests, rooms, and staff operations efficiently.",
      image: "/projects/hotel.png",
      video: "/placeholder.svg?text=LuxeHaven+Demo",
      link: "https://hotel-management-three-ebon.vercel.app/",
      github: "https://github.com/Dev-kaif/Hotel-Management",
      tags: ["Node.js", "Express", "MongoDB", "React"],
      type: "fullstack",
    },
  ];

  const WORK_EXPERIENCE = [
    {
      tabTitle: "Feb - Apr 2025",
      company: "ScrollConnect",
      role: "Web Developer Intern",
      achievements: [
        "Worked with a cross-functional team to build a scalable event platform for students.",
        "Gained over 2000 users within the first two months, validating platform demand.",
      ],
    },
    {
      tabTitle: "June - July 2025",
      company: "AiExecute",
      role: "Web Development Intern",
      achievements: [
        "Developed and deployed full-stack web projects for client needs using React, Node.js, and MongoDB.",
        "Built responsive UIs, integrated APIs, and ensured smooth delivery of production-ready features.",
      ],
    },
  ];

  const skills = [
    // --- Languages ---
    { name: "TypeScript", logo: "/SVG/typescript.svg" },
    { name: "JavaScript", logo: "/SVG/javascript.svg" },
    { name: "Python", logo: "/SVG/python.svg" },
    { name: "HTML5", logo: "/SVG/html5.svg" },
    { name: "CSS", logo: "/SVG/css_old.svg" },
    { name: "Bash", logo: "/SVG/bash.svg" },

    // --- Frontend Development ---
    { name: "Next.js", logo: "/SVG/nextjs_icon_dark.svg" },
    { name: "React", logo: "/SVG/react_dark.svg" },
    { name: "Tailwind CSS", logo: "/SVG/tailwindcss.svg" },
    { name: "Tanstack Query", logo: "/SVG/tanstack.png" },
    { name: "vite", logo: "/SVG/vitejs.svg" },

    // --- Backend Development ---
    { name: "Node.js", logo: "/SVG/nodejs.svg" },
    { name: "NestJS", logo: "/SVG/nestjs.svg" },
    { name: "Express", logo: "/SVG/expressjs_dark.svg" },
    { name: "FastAPI", logo: "/SVG/fastapi.svg" },
    { name: "tRPC", logo: "/SVG/Trpc--Streamline-Svg-Logos.svg" },
    { name: "WebSocket", logo: "/SVG/websocket.svg" },
    { name: "Socket IO", logo: "/SVG/socketio-light.svg" },
    { name: "Inngest", logo: "/SVG/inngest-light.svg" },

    // --- Databases & ORMs ---
    { name: "PostgreSQL", logo: "/SVG/postgresql.svg" },
    { name: "MongoDB", logo: "/SVG/mongodb.svg" },
    { name: "mySQL", logo: "/SVG/mysql.svg" },
    { name: "NeonDB", logo: "/SVG/neon.svg" },
    { name: "Firebase", logo: "/SVG/firebase.svg" },
    { name: "Supabase", logo: "/SVG/supabase.svg" },
    { name: "Neo4j", logo: "/SVG/neo4j-icon.svg" },
    { name: "Pinecone", logo: "/SVG/Pinecone-Icon--Streamline-Svg-Logos.svg" },
    { name: "QuadrantDB", logo: "/SVG/Qdrant-Icon--Streamline-Svg-Logos.svg" },
    { name: "Prisma ORM", logo: "/SVG/prisma.svg" },
    { name: "Drizzel", logo: "/SVG/drizzle-orm_light.svg" },

    // --- AI / Machine Learning ---
    { name: "LangChain", logo: "/SVG/Langchain--Streamline-Simple-Icons.svg" },
    { name: "LangGraph", logo: "/SVG/langgraph.png" },
    { name: "LangFuse", logo: "/SVG/langfuse-icon-seeklogo.svg" },
    { name: "RAG", logo: "/SVG/Rag--Streamline-Carbon.svg" },
    { name: "Hugging Face", logo: "/SVG/hugging_face.svg" },
    { name: "OpenAI", logo: "/SVG/openai.svg" },
    { name: "Claude", logo: "/SVG/claude-ai-icon.svg" },
    { name: "Deepseek", logo: "/SVG/deepseek.svg" },
    { name: "Qwen", logo: "/SVG/qwen_light.svg" },
    { name: "OpenRouter", logo: "/SVG/openrouter_light.svg" },

    // --- DevOps & Deployment ---
    { name: "Docker", logo: "/SVG/docker.svg" },
    { name: "CI/CD", logo: "/SVG/ci-cd-svgrepo-com.svg" },
    { name: "Nginx", logo: "/SVG/nginx-icon.svg" },
    { name: "AWS", logo: "/SVG/aws_light.svg" },
    { name: "Vercel", logo: "/SVG/vercel.svg" },
    { name: "Render", logo: "/SVG/render-seeklogo.svg" },
    { name: "Linux", logo: "/SVG/linux.svg" },
    { name: "TurboRepo", logo: "/SVG/turborepo.svg" },

    // --- Other Tools & Services ---
    { name: "Clerk", logo: "/SVG/clerk-wordmark-light.svg" },
    { name: "V0", logo: "/SVG/v0_light.svg" },
    { name: "Cursor", logo: "/SVG/cursor_light.svg" },
    { name: "Bolt", logo: "/SVG/bolt-new.svg" },
    { name: "Lovable", logo: "/SVG/lovable.svg" },
  ];

  const faqs = [
    {
      question: "What is your current availability?",
      answer:
        "I'm currently available for freelance projects and open to full-time opportunities. I can dedicate 20-30 hours per week to new projects while maintaining my studies.",
    },
    {
      question: "What are you most passionate about in development?",
      answer:
        "I'm passionate about building practical, impactful software that solves real-world problems. I particularly enjoy working with AI integration, full-stack development, and creating smooth user experiences.",
    },
    {
      question: "What was your primary role in the projects listed?",
      answer:
        "In most projects, I served as the lead developer, handling both frontend and backend development. I was responsible for architecture decisions, UI/UX implementation, database design, and deployment.",
    },
    {
      question: "Do you work with teams or prefer solo projects?",
      answer:
        "I enjoy both! I've successfully delivered solo projects but also thrive in collaborative environments. I believe the best solutions often come from diverse perspectives and team collaboration.",
    },
    {
      question: "What's your approach to learning new technologies?",
      answer:
        "I learn best by doing—debugging, building, and shipping. I start with documentation, build small projects, and then apply the technology to solve real problems. This hands-on approach helps me understand both the capabilities and limitations of new tools.",
    },
  ];

  const scrollToSection2 = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navItems = [
    {
      title: "Home",
      href: "#hero", // This will scroll to the element with id="home"
      icon: (
        <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: (e: any) => scrollToSection2(e, "#hero"),
    },
    {
      title: "Skills",
      href: "#skills",
      icon: (
        <Zap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: (e: any) => scrollToSection2(e, "#skills"),
    },
    {
      title: "Projects",
      href: "#projects",
      icon: (
        <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: (e: any) => scrollToSection2(e, "#projects"),
    },
    {
      title: "Contact",
      href: "#contact",
      icon: (
        <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: (e: any) => scrollToSection2(e, "#contact"),
    },
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(
      sectionId === "home" ? "hero" : sectionId
    );
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
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

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.type === filter;
  });

  const filterOptions = ["all", "frontend", "fullstack"];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "dark bg-[#0D1117] text-[#E5E7EB]"
          : "bg-[#F9FAFB] text-[#1F2937]"
      }`}
    >
      <div className="inset-0 fixed ">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#F9FAFB] dark:bg-[#0D1117] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Conditional Rendering of Navigation */}
      {isDesktop ? (
        <motion.header
          className="fixed left-0 right-0 mx-auto z-50 flex justify-center items-center"
          variants={navVariants}
          animate={isScrolled ? "scrolled" : "top"}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
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
                whileHover={{ y: -2 }}
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
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohammadkaif123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://x.com/dev_kaif_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 dark:bg-gray-100 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <XformerlyTwitter className="w-4 h-3" />
              </motion.a>
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
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

      {/* Hero Section */}
      <section
        id="hero"
        className="max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32 relative"
      >
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl mb-6 tracking-wide font-medium font-feredoka"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            MOHAMMAD KAIF
            {/* <div className="text-black/90 font-normal text-sm md:text-base mt-2 tracking-wide">
              Crafting beautiful full-stack web experiences with precision and
              passion.
            </div> */}
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typewriter
              words={[
                "Full Stack Developer",
                "React/Next.js Developer",
                "Open Source Contributor",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A Computer Science student who enjoys building practical, impactful
            software with a focus on user experience and automation.
          </motion.p>
          <motion.div
            className="flex gap-1 text-base items-center justify-center my-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MapPin size={18} className="mr-2" />
            <div>Navi Mumbai, India</div>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:shadow-lg"
              onClick={() => scrollToSection("case-studies")}
            >
              View My Work
            </Button>
            <a
              href="/Mohammad_Kaif_Resume.pdf"
              download="Mohammad_Kaif_Resume.pdf"
            >
              <Button
                variant="outline"
                className="border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 bg-transparent"
              >
                Download Resume
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
      <section id="Curve" className="-mt-80 -mb-72 md:-mb-20  relative">
        <CurvedLoop
          marqueeText="Full Stack ✦ NEXT JS ✦ Typescript ✦ Gen AI ✦ Devops ✦ Full Stack ✦ NEXT JS ✦ Typescript ✦  Gen AI ✦ Devops ✦"
          speed={3}
          curveAmount={300}
          className="dark:!fill-white font-mono"
          interactive={false}
        />
      </section>

      <section
        id="experience"
        className="max-w-7xl mx-auto px-6 py-20 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl tracking-wide font-medium font-feredoka text-center mb-12">
            Work Experience
          </h2>
          <div className="relative w-full max-w-4xl mx-auto">
            <GooeySvgFilter
              id="gooey-experience-filter"
              strength={screenSize.lessThan("md") ? 8 : 12}
            />
            <div
              className="absolute inset-0"
              style={{ filter: "url(#gooey-experience-filter)" }}
            >
              <div className="flex w-full">
                {WORK_EXPERIENCE.map((_, index) => (
                  <div key={index} className="relative flex-1 h-12">
                    {activeExperienceTab === index && (
                      <motion.div
                        layoutId="active-experience-tab"
                        className="absolute inset-0 bg-gray-200/80 dark:bg-gray-800/80"
                        transition={{
                          type: "spring",
                          bounce: 0.1,
                          duration: 0.5,
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="w-full h-[250px] md:h-[220px] bg-gray-200/80 dark:bg-gray-800/80" />
            </div>
            <div className="relative z-10">
              <div className="flex w-full">
                {WORK_EXPERIENCE.map((job, index) => (
                  <button
                    key={job.company}
                    onClick={() => setActiveExperienceTab(index)}
                    className="relative flex-1 h-12"
                  >
                    <span
                      className={`w-full h-full flex items-center justify-center font-semibold transition-colors ${
                        activeExperienceTab === index
                          ? "text-gray-900 dark:text-gray-100"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {job.tabTitle}
                    </span>
                  </button>
                ))}
              </div>
              <div className="w-full h-[250px] md:h-[220px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeExperienceTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 md:p-8"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {WORK_EXPERIENCE[activeExperienceTab].company}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {WORK_EXPERIENCE[activeExperienceTab].role}
                    </p>
                    <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                      {WORK_EXPERIENCE[activeExperienceTab].achievements.map(
                        (item, idx) => (
                          <li key={idx}>{item}</li>
                        )
                      )}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 relative">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#3B82F6]">
              <Image
                src="/pfp.jpeg"
                alt="Mohammad Kaif"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl tracking-wide font-medium font-feredoka mb-6">
              About Me
            </h2>
            <div className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              <TextHighlighter
                className={highlightClass}
                // transition={transition}
                highlightColor={highlightColor}
                // useInViewOptions={inViewOptions}
              >
                a Computer Science student at Mumbai University
              </TextHighlighter>
              who enjoys building practical, impactful software. I&lsquo;ve
              explored AI using tools like Gemini, worked on full-stack apps
              with React, Next.js, and TypeScript, and recently started diving
              into DevOps and Cloud. I&apos;m drawn to both backend systems and
              creating smooth user experiences, with a strong interest in
              automation and applied AI. I learn best by doing—debugging,
              building, shipping—and I enjoy solving real-world problems through
              code, whether solo or in a team.
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="max-w-7xl mx-auto px-6 py-20 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl tracking-wide font-medium font-feredoka text-center mb-12">
            Testimonials
          </h2>
          <Card className="max-w-4xl mx-auto p-8 border-l-4 border-l-[#3B82F6]">
            <blockquote className="text-xl md:text-2xl italic mb-6 text-center">
              &ldquo;Mohammad&lsquo;s work on our project was exceptional. His
              attention to detail and ability to deliver complex features on
              time made him an invaluable team member.&quot;
            </blockquote>
            <div className="text-center">
              <p className="font-semibold text-lg">Client Name</p>
              <p className="text-gray-600 dark:text-gray-400">
                Position, Company
              </p>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl tracking-wide font-medium font-feredoka text-center mb-12">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col h-32 items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={60}
                  height={60}
                  className="mb-2 group-hover:scale-110 transition-transform duration-300 h-10 md:h-16"
                />
                <span className="text-sm font-medium text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* GitHub Activity Section */}
      <section id="github" className="max-w-7xl mx-auto px-6 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl tracking-wide font-medium font-feredoka text-center mb-12">
            My Year in Code
          </h2>
          <Card className="p-8 text-center">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 min-h-[200px] flex items-center justify-center">
              <GitHubCalendar
                colorScheme="light"
                username="Dev-kaif"
                blockSize={16}
                blockMargin={4}
                fontSize={14}
              />
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Case Studies Section */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl tracking-wide font-medium font-feredoka text-center mb-12">
            My Projects
          </h2>

          {/* Animated Filter Component */}
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
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
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
                  className="group cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                  layoutId={`project-card-${project.id}`}
                  data-cursor-text="View Project"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden border-2 border-transparent group-hover:border-[#3B82F6] transition-all duration-300 h-full flex flex-col">
                    <motion.div
                      className="aspect-video overflow-hidden"
                      layoutId={`project-image-${project.id}`}
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
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
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl tracking-wide font-medium font-feredoka text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 dark:border-gray-800 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-[#3B82F6] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl tracking-wide font-medium font-feredoka text-center mb-12">
            Get In Touch
          </h2>
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input className="w-full" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  className="w-full min-h-[120px]"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 text-lg font-medium">
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-16 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl tracking-wide font-medium font-feredoka mb-8">
              Let&lsquo;s Connect
            </h2>
            <div className="flex justify-center space-x-6 mb-8">
              <motion.a
                href="https://github.com/Dev-kaif"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-[#3B82F6] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohammadkaif123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-[#3B82F6] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://x.com/dev_kaif_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-100 dark:bg-gray-100 rounded-full hover:bg-[#3B82F6] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <XformerlyTwitter className="w-6 h-5" />
              </motion.a>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              <a
                href="https://github.com/Dev-kaif/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3B82F6] transition-colors"
              >
                Built & Designed by Mohammad Kaif
              </a>
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © 2025 Mohammad Kaif
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="absolute inset-0 m-auto w-[90vw] h-[80vh] bg-white dark:bg-gray-900 rounded-lg overflow-hidden"
              layoutId={`project-card-${selectedProject.id}`}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
              transition={{
                duration: 0.65,
                ease: [0.65, 0, 0.35, 1],
              }}
              onClick={(e: any) => e.stopPropagation()}
            >
              <div className="h-full w-full flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
                  <motion.div
                    className="h-full w-full"
                    layoutId={`project-image-${selectedProject.id}`}
                    transition={{
                      duration: 0.65,
                      ease: [0.65, 0, 0.35, 1],
                    }}
                  >
                    <Image
                      src={selectedProject.video || "/placeholder.svg"}
                      alt={`${selectedProject.title} Demo`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-6 left-6 right-6 flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <Button
                      asChild
                      className="flex-1 bg-[#3B82F6] hover:bg-[#2563EB] text-white"
                    >
                      <a
                        href={selectedProject.link}
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
                        href={selectedProject.github}
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
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-bold">
                      {selectedProject.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">
                        Project Overview
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {selectedProject.fullDescription}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tech: string) => (
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
        )}
      </AnimatePresence>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className="fixed bottom-8 right-8 z-40 bg-[#3B82F6] hover:bg-[#2563EB] text-white p-3 rounded-full shadow-lg transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
