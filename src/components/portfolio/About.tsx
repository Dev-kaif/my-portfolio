"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import MotionSplitText from "@/components/animated/MotionSplit";
import TextHighlighter from "@/components/animated/textHighlighter";
import { calmEase } from "@/lib/Constant";

export function About() {
  const aboutSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutSectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      id="about"
      ref={aboutSectionRef}
      className="max-w-7xl mx-auto px-6 py-20 relative"
    >
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex justify-center"
          style={{ y: imageY }}
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8, ease: calmEase }}
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
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8, ease: calmEase }}
        >
          <MotionSplitText
            text="About&nbsp;Me"
            splitType="chars"
            duration={0.3}
            stagger={0.05}
            yOffset={40}
            className="text-3xl md:text-4xl tracking-wide font-medium font-feredoka mb-6"
          />
          <div className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            <TextHighlighter
              className="rounded-[0.3em] px-px mx-1 dark:text-black"
              highlightColor="#F2AD91"
            >
              a Computer Science student at Mumbai University
            </TextHighlighter>
            who enjoys building practical, impactful software. I&lsquo;ve
            explored AI using tools like Gemini, worked on full-stack apps with
            React, Next.js, and TypeScript, and recently started diving into
            DevOps and Cloud.
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
