"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import PhoneMockup from "./ui/PhoneMockup";

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockup (left on desktop) */}
          <motion.div
            className="relative flex justify-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

            <PhoneMockup
              imageSrc="/global-ranking.png"
              imageAlt="I Can app global rankings showing athlete leaderboard with streaks and scores"
            />
          </motion.div>

          {/* Text content (right on desktop) */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeading
              badge="Community"
              title="Train Together"
              subtitle="Connect with teammates, view each other's streaks, and stay motivated together. Accountability drives consistency."
              align="left"
            />

            <div className="space-y-6">
              {[
                {
                  title: "Global Rankings",
                  desc: "Compete with athletes worldwide. Climb the leaderboard by maintaining your streak and improving your performance score.",
                },
                {
                  title: "Share Progress",
                  desc: "Celebrate milestones, share insights, and keep each other accountable on the journey.",
                },
                {
                  title: "Group Challenges",
                  desc: "Join team challenges to push each other and build collective discipline.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="rounded-xl bg-background-secondary border border-border p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <h4 className="text-sm font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
