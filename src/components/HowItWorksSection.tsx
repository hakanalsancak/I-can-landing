"use client";

import { motion } from "framer-motion";
import { ClipboardList, Sparkles, TrendingUp } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Log Your Performance",
    description:
      "Record your training and reflections in seconds. Answer simple questions about what you did well and what to improve.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Get AI Insights",
    description:
      "Your AI coach analyzes your responses and delivers personalized feedback to help you grow.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Improve Every Day",
    description:
      "Build discipline, track your consistency, and become a better athlete one day at a time.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-background-secondary/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How It Works"
          title="Simple as 1, 2, 3"
          subtitle="Getting started takes less than a minute. Here's how athletes use I Can to level up."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
            >
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[calc(100%-20%)] h-px bg-gradient-to-r from-accent/30 to-transparent" />
              )}

              {/* Step number */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20">
                <step.icon className="h-7 w-7 text-accent" />
              </div>

              <span className="text-xs font-bold tracking-widest text-accent uppercase">
                Step {step.number}
              </span>
              <h3 className="mt-2 text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
