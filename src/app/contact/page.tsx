"use client";

import { motion } from "framer-motion";
import { Mail, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Nav bar */}
      <nav className="border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="I Can logo"
                width={36}
                height={36}
              />
              <span className="text-lg font-bold text-white">I Can</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <motion.div
          className="w-full max-w-lg text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20">
            <Mail className="h-7 w-7 text-accent" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get in Touch
          </h1>

          <p className="mt-4 text-text-secondary leading-relaxed">
            Have a question, feedback, or partnership inquiry? We&apos;d love to
            hear from you.
          </p>

          <motion.a
            href="mailto:contact@alsancar.co.uk"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-[0_0_24px_rgba(66,170,177,0.3)] transition-all hover:bg-accent-highlight hover:shadow-[0_0_32px_rgba(66,170,177,0.5)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="h-5 w-5" />
            contact@alsancar.co.uk
          </motion.a>

          <p className="mt-6 text-sm text-text-secondary">
            We typically respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
