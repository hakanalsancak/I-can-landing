"use client";

import { motion } from "framer-motion";
import WaitlistForm from "./ui/WaitlistForm";

export default function CTASection() {
  return (
    <section id="waitlist" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative rounded-3xl border border-border bg-background-secondary p-12 sm:p-16 lg:p-20 text-center overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Background glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-accent/15 blur-[120px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[300px] h-[200px] rounded-full bg-accent/5 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-accent-highlight/5 blur-[80px] pointer-events-none" />

          <div className="relative">
            <motion.span
              className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-accent/10 text-accent border border-accent/20"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Coming Soon
            </motion.span>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Be the First to Train Smarter
            </motion.h2>

            <motion.p
              className="mt-4 text-lg text-text-secondary max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Join the waitlist to get early access when I Can launches.
              We&apos;ll send you an email the moment it&apos;s ready.
            </motion.p>

            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <WaitlistForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
