"use client";

import { motion } from "framer-motion";
import { Check, Brain, Sparkles, TrendingUp } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const highlights = [
  "Analyzes your daily performance patterns",
  "Delivers personalized coaching insights",
  "Identifies strengths and areas for growth",
];

const features = [
  {
    icon: Brain,
    title: "Pattern Recognition",
    desc: "Your AI coach spots trends in your training logs that you might miss — like how sleep or mood affect your game.",
  },
  {
    icon: Sparkles,
    title: "Actionable Feedback",
    desc: "Receive clear, specific advice after every session so you know exactly what to work on next.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    desc: "Watch your mental and physical metrics improve over time with weekly and monthly coaching summaries.",
  },
];

export default function AICoachSection() {
  return (
    <section id="ai-coach" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeading
              badge="AI-Powered"
              title="Your Personal AI Coach"
              subtitle="After every session, your AI coach analyzes your reflections and delivers insights that a personal performance coach would — helping you improve focus, discipline, and consistency."
              align="left"
            />

            <div className="space-y-4">
              {highlights.map((text, i) => (
                <motion.div
                  key={text}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <span className="text-text-secondary">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature cards replacing phone mockup */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="group rounded-2xl border border-border bg-background-secondary p-5 transition-all duration-300 hover:border-accent/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
