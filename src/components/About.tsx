import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [120, -50]);

  const traits = [
    {
      title: "Full Product Thinking",
      description: "I don't just write code — I think about the entire user journey, business logic, and scalability from day one."
    },
    {
      title: "Builder Mentality",
      description: "I love taking ideas from zero to production. Creating complete systems excites me more than isolated features."
    },
    {
      title: "Scale-First Approach",
      description: "Whether it's auth systems, payment flows, or real-time features — I architect for growth, not just MVP."
    }
  ];

  return (
    <section ref={containerRef} className="bg-[#0e0e0e] text-white py-32" id="about">
      <div className="max-w-7xl mx-auto ">

        <motion.div style={{ y: textY }} className="space-y-16">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
<div className="flex items-baseline gap-6">

            <h2 className="lg:text-6xl font-display mb-8 px-5 sm:px-8 md:px-0 text-xl md:text-2xl">
         About
            </h2>
            <span className="text-md  tracking-[0.3em] text-whites block mb-6">
              mee..
            </span>
            </div>
          </motion.div>

          {/* Role statement */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.1 }}
  className="max-w-4xl"
>
<p className="px-5 sm:px-8 md:px-0 text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-white">
  <span className="font-medium">Joel Francis</span>{" "}
  <span className="pronoun">(HE/HIM)</span>{" "}
  is a Full Stack Developer specializing in MERN stack with a focus on building
  complete, production-ready applications. From authentication systems to
  payment integrations, I handle the full spectrum.
</p>

</motion.div>

          {/* Thinking traits */}
          <div className="grid md:grid-cols-3 gap-8 pt-8 px-5 sm:px-8 md:px-0 text-xl md:text-2xl">
            {traits.map((trait, index) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="space-y-4"
              >
                <div className="text-xs text-muted-foreground uppercase tracking-widest">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-display">{trait.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {trait.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* What excites me
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8 border-t border-border/30"
          >
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground block mb-6">
              What Excites Me
            </span>
            <p className="text-lg text-muted-foreground font-light max-w-2xl">
              Building systems from scratch and watching them scale. There's nothing 
              like taking a complex problem — whether it's streaming music to thousands 
              or handling secure payments — and creating a robust solution that just works.
            </p>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};
