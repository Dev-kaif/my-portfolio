"use client";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import MotionSplitText from "@/components/animated/MotionSplit";
import { calmEase } from "@/lib/Constant";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="max-w-7xl mx-auto px-6 py-20 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: calmEase }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <MotionSplitText
            text="Testimonials"
            splitType="chars"
            duration={0.3}
            stagger={0.05}
            yOffset={40}
            className="text-3xl md:text-4xl tracking-wide font-medium font-feredoka text-center mb-12"
          />
        </div>
        <Card className="max-w-4xl mx-auto p-8 border-l-4 border-l-[#3B82F6]">
          <blockquote className="text-xl md:text-2xl italic mb-6 text-center">
            &ldquo;Mohammad&lsquo;s work on our project was exceptional. His
            attention to detail and ability to deliver complex features on time
            made him an invaluable team member.&quot;
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
  );
}
