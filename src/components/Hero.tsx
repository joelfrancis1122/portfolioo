import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
    >
      <motion.div
        style={{ opacity, y }}
        className="w-full max-w-5xl mx-auto"
      >
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Hi, I'm
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display mt-2">
            Joel Francis.
          </h1>
        </motion.div>

        {/* What you do - 1 clear line */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-4 max-w-3xl"
        >
          Full Stack Developer who builds scalable web applications from scratch.
        </motion.p>

        {/* What makes you different - 1 short line */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground font-light mb-12 max-w-2xl"
        >
          I think in products, not just code. End-to-end solutions with clean architecture.
        </motion.p>

        {/* Single main action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#work"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm uppercase tracking-widest hover:bg-foreground/90 transition-all duration-300 group"
          >
            View My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

      {/* Minimal scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};
