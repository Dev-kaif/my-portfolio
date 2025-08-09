"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import MotionSplitText from "@/components/animated/MotionSplit";
import GooeySvgFilter from "@/components/animated/Googe";
import { useScreenSize } from "@/hooks/useScreenSize";
import { calmEase, WORK_EXPERIENCE as workExperience } from "@/lib/Constant";

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: calmEase,
    },
  },
};

export function Experience() {
  const [activeExperienceTab, setActiveExperienceTab] = useState(0);
  const screenSize = useScreenSize();

  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-20 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: calmEase }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <MotionSplitText
            text="Work&nbsp;Experience"
            splitType="chars"
            duration={0.3}
            stagger={0.05}
            yOffset={40}
            className="text-4xl tracking-wide font-medium font-feredoka text-center mb-12"
          />
        </div>
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
              {workExperience.map((_, index) => (
                <div key={index} className="relative flex-1 h-12">
                  {activeExperienceTab === index && (
                    <motion.div
                      layoutId="active-experience-tab"
                      className="absolute inset-0 bg-gray-200/80 dark:bg-gray-800/80"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
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
              {workExperience.map((job, index) => (
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
                  transition={{ duration: 0.4, ease: calmEase }}
                  className="p-6 md:p-8"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {workExperience[activeExperienceTab].company}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {workExperience[activeExperienceTab].role}
                  </p>
                  <motion.ul
                    className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300"
                    variants={listContainerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {workExperience[activeExperienceTab].achievements.map(
                      (item, idx) => (
                        <motion.li key={idx} variants={listItemVariants}>
                          {item}
                        </motion.li>
                      )
                    )}
                  </motion.ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
