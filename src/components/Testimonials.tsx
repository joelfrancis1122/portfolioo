import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "It only serves to show what sort of person a man must be who can't even get testimonials. No, if a man brings references, it proves nothing. If he can't, it proves a great deal.",
    author: "Oscar Wilde",
    role: "Writer",
  },
];

export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="py-32 overflow-hidden" id="testimonials">
      {/* Marquee heading */}
      <motion.div style={{ x }} className="mb-20">
        <div className="flex whitespace-nowrap gap-8 text-7xl md:text-8xl lg:text-9xl font-display text-muted/30">
          <span>CATCH ME • CATCH ME • CATCH ME • CATCH ME •</span>
          <span>CATCH ME • CATCH ME • CATCH ME • CATCH ME •</span>
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto px-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display leading-tight mb-12">
              {testimonial.quote}
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-muted" />
              <div className="text-left">
                <div className="text-sm font-medium">{testimonial.author}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
