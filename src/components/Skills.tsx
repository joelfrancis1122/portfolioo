import { motion } from "framer-motion";

const topSkills = [
  {
    title: "Frontend",
    description: "Interfaces, motion, and interaction",
    bg: "#FFF86B",
    skills: ["React.js", "TypeScript", "Redux", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    description: "APIs, auth, and data flow",
    bg: "#FF4D4D",
    skills: ["Node.js", "Express.js", "MongoDB", "JWT", "OAuth"],
  },
];

const bottomSkills = [
  {
    title: "Cloud & DevOps",
    description: "Hosting, scaling, deployment",
    bg: "#5d9862",
    skills: ["AWS EC2", "S3", "Nginx", "PM2"],
  },
  {
    title: "Payments & APIs",
    description: "External services & integrations",
    bg: "#fea2e4",
    skills: ["Stripe", "Razorpay", "TMDB API", "YouTube API"],
  },
  {
    title: "Workflow",
    description: "How I actually build products",
    bg: "#0A84FF",
    skills: ["Git", "Clean Architecture", "Production Mindset"],
  },
];

export const Skills = () => {
  return (
    <section className="py-36 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-sm uppercase tracking-[0.35em] text-muted-foreground block mb-6">
            Skills
          </span>
          <h2 className="text-5xl md:text-6xl font-display mb-4">
            What I Work With
          </h2>
          <p className="text-muted-foreground font-light max-w-xl">
            Technologies I’ve used in real production systems — not theory.
          </p>
        </motion.div>

        {/* TOP ROW — 2 BIG BOXES */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {topSkills.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ backgroundColor: item.bg }}
              className="rounded-2xl p-10 min-h-[300px] flex flex-col justify-between text-black"
            >
              <div>
                <h3 className="text-3xl font-display mb-2">
                  {item.title}
                </h3>
                <p className="text-sm opacity-80">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full bg-black/15"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM ROW — 3 SMALLER BOXES */}
        <div className="grid md:grid-cols-3 gap-6">
          {bottomSkills.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.08 }}
              style={{ backgroundColor: item.bg }}
              className="rounded-2xl p-8 min-h-[220px] flex flex-col justify-between text-white"
            >
              <div>
                <h3 className="text-2xl font-display mb-1">
                  {item.title}
                </h3>
                <p className="text-sm opacity-80">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full bg-black/15"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
