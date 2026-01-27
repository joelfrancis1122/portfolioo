import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedText = ({
  children,
  delay = 0,
  className = "",
}: AnimatedTextProps) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
        viewport={{ once: true }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

interface AnimatedLettersProps {
  text: string;
  className?: string;
  letterClassName?: string;
}

export const AnimatedLetters = ({
  text,
  className = "",
  letterClassName = "",
}: AnimatedLettersProps) => {
  const letters = text.split("");

  return (
    <div className={`flex flex-wrap ${className}`}>
      {letters.map((letter, index) => (
        <div key={index} className="overflow-hidden">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.03,
            }}
            viewport={{ once: true }}
            className={`inline-block ${letterClassName} ${letter === " " ? "w-4" : ""}`}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        </div>
      ))}
    </div>
  );
};
