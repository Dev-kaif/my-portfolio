"use client";
import { MapPin } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { calmEase } from "@/lib/Constant";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section
      id="hero"
      className="max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32 relative"
    >
      <div className="text-center">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl mb-6 tracking-wide font-medium font-feredoka"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: calmEase, delay: 0.2 }}
        >
          MOHAMMAD KAIF
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: calmEase, delay: 0.3 }}
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
          transition={{ duration: 0.9, ease: calmEase, delay: 0.4 }}
        >
          A Computer Science student who enjoys building practical, impactful
          software with a focus on user experience and automation.
        </motion.p>
        <motion.div
          className="flex gap-1 text-base items-center justify-center my-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: calmEase, delay: 0.5 }}
        >
          <MapPin size={18} className="mr-2" />
          <div>Navi Mumbai, India</div>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: calmEase, delay: 0.6 }}
        >
          <Button
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:shadow-lg"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
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
  );
}
