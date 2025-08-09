"use client";
import { Github, Linkedin } from "lucide-react";
import XformerlyTwitter from "@/components/Svg/X";
import { calmEase, gentleSpring } from "@/lib/Constant";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-16 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: calmEase }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl tracking-wide font-medium font-feredoka mb-8">
            Let&lsquo;s Connect
          </h2>
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="https://github.com/Dev-kaif"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-[#3B82F6] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={gentleSpring}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mohammadkaif123"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-[#3B82F6] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={gentleSpring}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://x.com/dev_kaif_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-[#3B82F6] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={gentleSpring}
            >
              <XformerlyTwitter className="w-6 h-5" />
            </motion.a>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            <a
              href="https://github.com/Dev-kaif/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3B82F6] transition-colors"
            >
              Built & Designed by Mohammad Kaif
            </a>
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © 2025 Mohammad Kaif
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
