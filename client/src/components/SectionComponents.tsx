import { Link } from "wouter";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

// Fade-in animation wrapper
export function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// CTA Button
export function CTAButton({ href = "/probetraining", children = "Kostenloses Probetraining sichern", variant = "primary" }: {
  href?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}) {
  const base = "inline-flex items-center justify-center px-6 py-3 font-heading font-bold text-base rounded-md transition-all duration-300";
  const variants = {
    primary: "bg-[#FF6B6B] text-white hover:bg-[#FF6B6B] glow-cyan hover:scale-105",
    secondary: "bg-tkd-cyan text-tkd-navy hover:opacity-90 glow-cyan hover:scale-105",
    outline: "border-2 border-tkd-cyan text-tkd-cyan hover:bg-tkd-cyan hover:text-tkd-navy",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}

// Diagonal SVG Divider
export function DiagonalDivider({ color = "tkd-navy", flip = false }: { color?: string; flip?: boolean }) {
  const colorMap: Record<string, string> = {
    "tkd-navy": "#0d1b2e",
    "tkd-navy-light": "#142640",
    "tkd-cyan": "#00e5ff",
    "secondary": "#142640",
  };
  const fill = colorMap[color] || color;

  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
        <path d="M1200 120L0 16.48V0h1200v120z" fill={fill} />
      </svg>
    </div>
  );
}

// Section Heading
export function SectionHeading({ title, subtitle, light = false, center = true }: {
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 lg:mb-14 ${center ? "text-center" : ""}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold ${light ? "text-white" : "text-gray-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg md:text-xl max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-white/70" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 w-16 h-1 bg-tkd-cyan rounded-full ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

export function MediaPlaceholder({ label = "Bild folgt", className = "" }: { label?: string; className?: string }) {
  return (
    <img
      src="/files/jessis-standardbild-platzhalter_9b4b263e.jpg"
      alt={label}
      className={`block object-cover ${className}`}
    />
  );
}
