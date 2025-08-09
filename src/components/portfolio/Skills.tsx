"use client";
import Image from "next/image";
import MotionSplitText from "@/components/animated/MotionSplit";
import { motion } from "motion/react";
import { calmEase, skills } from "@/lib/Constant";

export function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: calmEase }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <MotionSplitText
            text="Skills&nbsp;&amp;&nbsp;Technologies"
            splitType="chars"
            duration={0.3}
            stagger={0.05}
            yOffset={40}
            className="text-3xl md:text-4xl tracking-wide font-medium font-feredoka text-center mb-12"
          />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col h-32 items-center justify-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.04,
                ease: "easeOut",
              }}
            >
              <Image
                src={skill.logo}
                alt={skill.name}
                width={60}
                height={60}
                className="mb-2 h-10 md:h-16"
              />
              <span className="text-sm font-medium text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
