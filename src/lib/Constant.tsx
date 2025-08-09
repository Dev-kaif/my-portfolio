import { type EasingDefinition, type Transition } from "motion/react";
import {
  Home,
  Zap,
  Briefcase,
  Mail,
  User,
  Quote,
  HelpCircle,
  ClipboardList,
} from "lucide-react";
import React from "react";

// --- ANIMATION CONSTANTS ---
export const calmEase: EasingDefinition = [0.23, 1, 0.32, 1];
export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
};

// --- DATA CONSTANTS ---
export const projects = [
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

export const WORK_EXPERIENCE = [
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

export const skills = [
  { name: "TypeScript", logo: "/SVG/typescript.svg" },
  { name: "JavaScript", logo: "/SVG/javascript.svg" },
  { name: "Python", logo: "/SVG/python.svg" },
  { name: "HTML5", logo: "/SVG/html5.svg" },
  { name: "CSS", logo: "/SVG/css_old.svg" },
  { name: "Bash", logo: "/SVG/bash.svg" },
  { name: "Next.js", logo: "/SVG/nextjs_icon_dark.svg" },
  { name: "React", logo: "/SVG/react_dark.svg" },
  { name: "Tailwind CSS", logo: "/SVG/tailwindcss.svg" },
  { name: "Tanstack Query", logo: "/SVG/tanstack.png" },
  { name: "vite", logo: "/SVG/vitejs.svg" },
  { name: "Node.js", logo: "/SVG/nodejs.svg" },
  { name: "NestJS", logo: "/SVG/nestjs.svg" },
  { name: "Express", logo: "/SVG/expressjs_dark.svg" },
  { name: "FastAPI", logo: "/SVG/fastapi.svg" },
  { name: "tRPC", logo: "/SVG/Trpc--Streamline-Svg-Logos.svg" },
  { name: "WebSocket", logo: "/SVG/websocket.svg" },
  { name: "Socket IO", logo: "/SVG/socketio-light.svg" },
  { name: "Inngest", logo: "/SVG/inngest-light.svg" },
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
  { name: "Docker", logo: "/SVG/docker.svg" },
  { name: "CI/CD", logo: "/SVG/ci-cd-svgrepo-com.svg" },
  { name: "Nginx", logo: "/SVG/nginx-icon.svg" },
  { name: "AWS", logo: "/SVG/aws_light.svg" },
  { name: "Vercel", logo: "/SVG/vercel.svg" },
  { name: "Render", logo: "/SVG/render-seeklogo.svg" },
  { name: "Linux", logo: "/SVG/linux.svg" },
  { name: "TurboRepo", logo: "/SVG/turborepo.svg" },
  { name: "Clerk", logo: "/SVG/clerk-wordmark-light.svg" },
  { name: "V0", logo: "/SVG/v0_light.svg" },
  { name: "Cursor", logo: "/SVG/cursor_light.svg" },
  { name: "Bolt", logo: "/SVG/bolt-new.svg" },
  { name: "Lovable", logo: "/SVG/lovable.svg" },
];

export const faqs = [
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

const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  sectionId: string
) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const navItems = [
  {
    title: "Home",
    href: "hero",
    icon: <Home className="h-full w-full" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      scrollToSection(e, "hero"),
  },
  {
    title: "Experience",
    href: "experience",
    icon: <ClipboardList className="h-full w-full" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      scrollToSection(e, "experience"),
  },
  {
    title: "About",
    href: "about",
    icon: <User className="h-full w-full" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      scrollToSection(e, "about"),
  },
  {
    title: "Testimonials",
    href: "testimonials",
    icon: <Quote className="h-full w-full" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      scrollToSection(e, "testimonials"),
  },
  {
    title: "Skills",
    href: "skills",
    icon: <Zap className="h-full w-full" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      scrollToSection(e, "skills"),
  },
  {
    title: "Projects",
    href: "projects",
    icon: <Briefcase className="h-full w-full" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      scrollToSection(e, "projects"),
  },
  {
    title: "FAQ",
    href: "faq",
    icon: <HelpCircle className="h-full w-full" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      scrollToSection(e, "faq"),
  },
  {
    title: "Contact",
    href: "contact",
    icon: <Mail className="h-full w-full" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      scrollToSection(e, "contact"),
  },
];
