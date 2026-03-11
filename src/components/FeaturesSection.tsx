"use client";

import {
  ClipboardCheck,
  Brain,
  BarChart3,
  Wind,
  Users,
  Flame,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import FeatureCard from "./ui/FeatureCard";

const features = [
  {
    icon: ClipboardCheck,
    title: "Daily Performance Tracking",
    description:
      "Athletes log their training and performance in seconds. Quick daily reflections that build powerful habits.",
  },
  {
    icon: Brain,
    title: "AI Coaching Insights",
    description:
      "Personalized feedback generated from your performance reflections. Like having a coach in your pocket.",
  },
  {
    icon: BarChart3,
    title: "Performance Reports",
    description:
      "Weekly and monthly insights showing your progress, patterns, strengths, and areas for improvement.",
  },
  {
    icon: Wind,
    title: "Mental Training Tools",
    description:
      "Breathing exercises and mindset tools to help you stay focused and perform under pressure.",
  },
  {
    icon: Users,
    title: "Friends & Motivation",
    description:
      "Stay accountable by connecting with teammates and seeing each other's streaks and progress.",
  },
  {
    icon: Flame,
    title: "Streak Tracking",
    description:
      "Build discipline with daily logging streaks. Track your consistency and watch your commitment grow.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Features"
          title="Everything You Need to Perform Better"
          subtitle="Powerful tools designed specifically for athletes who take their performance seriously."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
