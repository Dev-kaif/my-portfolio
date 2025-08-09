"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MotionSplitText from "@/components/animated/MotionSplit";
import { motion } from "motion/react";
import { calmEase, faqs } from "@/lib/Constant";

export function FAQ() {
  return (
    <section id="faq" className="max-w-4xl mx-auto px-6 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: calmEase }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <MotionSplitText
            text="Frequently&nbsp;Asked&nbsp;Questions"
            splitType="chars"
            duration={0.3}
            stagger={0.05}
            yOffset={40}
            className="text-3xl md:text-4xl tracking-wide font-medium font-feredoka text-center mb-12"
          />
        </div>
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
  );
}
