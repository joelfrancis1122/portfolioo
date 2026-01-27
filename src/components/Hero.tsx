import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

// Spotlight Component (Aceternity UI)
const Spotlight = ({ 
  className,
  fill = "white"
}: { 
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      className={`animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] opacity-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

// Text Reveal Effect (Aceternity UI inspired)
const TextReveal = ({ 
  text, 
  className = "",
  delay = 0 
}: { 
  text: string;
  className?: string;
  delay?: number;
}) => {
  const words = text.split(" ");
  
  return (
    <span className={className}>
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.6,
            delay: delay + idx * 0.08,
            ease: [0.23, 1, 0.32, 1]
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

// Animated Background Grid
const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e7e5e410_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e410_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-soft-light">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.80" 
              numOctaves="4" 
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
};

// Mouse follower effect (subtle)
const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px circle at ${cursorXSpring}px ${cursorYSpring}px, rgba(232, 219, 206, 0.08), transparent 40%)`,
      }}
    />
  );
};

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-[#faf9f7]"
    >
      {/* Background Effects */}
      <BackgroundGrid />
      <MouseFollower />
      
      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#d4c5b5"
      />

      <motion.div
        style={{ opacity, y, scale }}
        className="w-full max-w-6xl mx-auto relative z-10"
      >
        {/* Decorative line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="w-16 h-[1px] bg-stone-300 mb-12 origin-left"
        />

        {/* Small intro text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-stone-500"></span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-light">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name with gradient */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-stone-400 font-light block mb-4">
              Hi, I'm
            </span>
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl lg:text-[8rem] font-light tracking-tight text-stone-900 leading-[0.9] mb-2">
            <TextReveal text="Joel Francis." delay={0.4} />
          </h1>
        </div>

        {/* Main tagline with staggered reveal */}
        <div className="space-y-4 mb-16 max-w-4xl">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-stone-800 leading-[1.3]">
            <TextReveal 
              text="Full Stack Developer who builds scalable web applications from scratch." 
              delay={1.0}
            />
          </p>

          <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-2xl">
            <TextReveal 
              text="I think in products, not just code. End-to-end solutions with clean architecture." 
              delay={1.5}
            />
          </p>
        </div>

        {/* CTA with hover effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="flex items-center gap-6"
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-stone-50 text-sm uppercase tracking-[0.2em] font-light overflow-hidden transition-all duration-300 hover:bg-stone-800"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            <span className="relative">View My Work</span>
            <ArrowDown className="w-4 h-4 relative group-hover:translate-y-1 transition-transform" />
          </a>

          {/* Secondary link */}
          <motion.a
            href="#about"
            whileHover={{ x: 4 }}
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-stone-600 hover:text-stone-900 font-light transition-colors"
          >
            <span>Learn More</span>
            <span className="w-8 h-[1px] bg-stone-400 group-hover:w-12 transition-all duration-300"></span>
          </motion.a>
        </motion.div>

        {/* Skills tags - floating in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="mt-20 flex flex-wrap gap-3"
        >
          {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'].map((skill, idx) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: 2.4 + idx * 0.1,
                duration: 0.5,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="px-4 py-2 text-[10px] tracking-[0.2em] uppercase bg-stone-100 text-stone-600 border border-stone-200 font-light"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400 font-light">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatDelay: 0.5
          }}
          className="w-[1px] h-16 bg-gradient-to-b from-stone-400 to-transparent"
        />
      </motion.div>

      {/* Decorative corner element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 1.2 }}
        className="absolute top-12 right-12 w-24 h-24 border-t border-r border-stone-200/60 hidden lg:block"
      />

      <style>{`
        @keyframes spotlight {
          0% {
            opacity: 0;
            transform: translate(-72%, -62%) scale(0.5);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -40%) scale(1);
          }
        }
        
        .animate-spotlight {
          animation: spotlight 2s ease 0.5s 1 forwards;
        }
      `}</style>
    </section>
  );
};