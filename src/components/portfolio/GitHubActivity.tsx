"use client";
import GitHubCalendar from "react-github-calendar";
import { Card } from "@/components/ui/card";
import MotionSplitText from "@/components/animated/MotionSplit";
import { calmEase } from "@/lib/Constant";
import { motion } from "motion/react";

interface GitHubActivityProps {
  darkMode: boolean;
}

export function GitHubActivity({ darkMode }: GitHubActivityProps) {
  return (
    <section id="github" className="max-w-7xl mx-auto px-6 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: calmEase }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <MotionSplitText
            text="My&nbsp;Year&nbsp;in&nbsp;Code"
            splitType="chars"
            duration={0.3}
            stagger={0.05}
            yOffset={40}
            className="text-3xl md:text-4xl tracking-wide font-medium font-feredoka text-center mb-12"
          />
        </div>
        <Card className="p-8 text-center">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 min-h-[200px] flex items-center justify-center">
            <GitHubCalendar
              colorScheme={darkMode ? "dark" : "light"}
              username="Dev-kaif"
              blockSize={16}
              blockMargin={4}
              fontSize={14}
            />
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
