"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const testimonials = [
  {
    quote:
      "I Can helps me stay consistent with my training and focus on improving every day. The AI feedback feels like having a real coach.",
    name: "Marcus Johnson",
    sport: "Basketball",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    quote:
      "The streak tracking keeps me accountable. I haven't missed a day of logging in 45 days. My performance has never been better.",
    name: "Isabella Rodriguez",
    sport: "Soccer",
    gradient: "from-pink-400 to-rose-600",
  },
  {
    quote:
      "The mental training tools changed everything for me. I perform so much better under pressure now. This app is a game changer.",
    name: "James Chen",
    sport: "Tennis",
    gradient: "from-amber-400 to-orange-600",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-background-secondary/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by Athletes"
          subtitle="Hear from athletes who are already using I Can to improve their performance."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="relative rounded-2xl border border-border bg-background-secondary p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <Quote className="h-8 w-8 text-accent/20 mb-4" />
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`h-10 w-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center shrink-0`}
                >
                  <span className="text-sm font-bold text-white">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-text-secondary">{t.sport}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
