"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import MotionSplitText from "@/components/animated/MotionSplit";
import { calmEase } from "@/lib/Constant";

export function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">(
    "idle"
  );

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formStatus !== "idle") return;

    setFormStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setFormStatus("success");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setFormStatus("idle");
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: calmEase }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <MotionSplitText
            text="Get&nbsp;In&nbsp;Touch"
            splitType="chars"
            duration={0.3}
            stagger={0.05}
            yOffset={40}
            className="text-3xl md:text-4xl tracking-wide font-medium font-feredoka text-center mb-12"
          />
        </div>
        <Card className="p-8">
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input required className="w-full" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  required
                  type="email"
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea
                required
                className="w-full min-h-[120px]"
                placeholder="Tell me about your project..."
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 text-lg font-medium transition-all duration-300 flex items-center justify-center"
              disabled={formStatus !== "idle"}
            >
              <AnimatePresence mode="wait">
                {formStatus === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    Send Message
                  </motion.span>
                )}
                {formStatus === "sending" && (
                  <motion.div
                    key="sending"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="flex items-center gap-2"
                  >
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </motion.div>
                )}
                {formStatus === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </form>
        </Card>
      </motion.div>
    </section>
  );
}
