"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "large";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer";

  const sizeStyles =
    size === "large" ? "px-8 py-4 text-lg" : "px-6 py-3 text-sm";

  const variantStyles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-highlight shadow-[0_0_24px_rgba(66,170,177,0.3)] hover:shadow-[0_0_32px_rgba(66,170,177,0.5)]"
      : "border border-border text-text-secondary hover:text-white hover:border-accent/50 bg-transparent";

  const combinedStyles = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.a href={href} className={combinedStyles} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedStyles}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
