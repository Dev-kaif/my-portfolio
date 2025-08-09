import React from "react";
import { EasingDefinition, motion, type Variants } from "motion/react";

// Define the types for the component's props
interface MotionSplitTextProps {
  // The text to be animated
  text: string;
  // Optional className for styling
  className?: string;
  // The type of split, either 'chars' or 'words'
  splitType?: "chars" | "words";
  // The duration of each character/word animation
  duration?: number;
  // The stagger delay between each character/word
  stagger?: number;
  // The vertical offset to animate from
  yOffset?: number;
  // The easing function to use for the animation
  ease?: EasingDefinition;
}

const MotionSplitText: React.FC<MotionSplitTextProps> = ({
  text,
  className = "",
  splitType = "chars",
  duration = 0.5,
  stagger = 0.025,
  yOffset = 20,
  ease = [0.23, 1, 0.32, 1], // Default to your "calmEase"
}) => {
  // Memoize the variants to avoid recalculating on every render
  const containerVariants: Variants = React.useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: stagger,
        },
      },
    }),
    [stagger]
  );

  const childVariants: Variants = React.useMemo(
    () => ({
      hidden: {
        y: yOffset,
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: duration,
          ease: ease,
        },
      },
    }),
    [yOffset, duration, ease]
  );

  // Split the text into an array of characters or words
  const elements = React.useMemo(() => {
    return splitType === "words" ? text.split(" ") : text.split("");
  }, [text, splitType]);

  return (
    <motion.div
      className={className}
      style={{ display: "inline-block", overflow: "hidden" }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          style={{ display: "inline-block" }}
        >
          {/* Add a non-breaking space after each word for proper spacing */}
          {element + (splitType === "words" ? "\u00A0" : "")}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default MotionSplitText;
