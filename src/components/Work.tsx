import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import image1 from "../../public/image1.png";
import image2 from "../../public/image2.png";

interface Project {
  title: string;
  category: string;
  problem: string;
  approach: string;
  role: string;
  outcome: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "XTAZE",
    image: image1,
    category: "Music Streaming Platform",
    problem: "Artists lack control and clear analytics on music platforms.",
    approach: "Built a MERN app with User, Artist, and Admin roles, secure auth, subscriptions, and cloud storage.",
    role: "Full Stack Developer — built backend APIs, payments, and frontend UI.",
    outcome: "Streaming platform with role-based access, artist analytics, admin controls, and premium downloads.",
    technologies: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "Stripe", "Redux", "AWS S3", "JWT"],
    liveLink: "https://xtaze.fun/",
    githubLink: "https://github.com/joelfrancis1122/Xtaze",
  },
  {
    title: "BOOKSAW",
    image: image2,
    category: "E-Commerce Book Store",
    problem: "Need for a smooth e-commerce flow with payments and admin control.",
    approach: "Built a server-rendered app with EJS, integrated payments, and an admin dashboard.",
    role: "Sole Developer — handled backend, frontend, and deployment.",
    outcome: "Live bookstore with orders, payments, admin analytics, and AWS deployment.",
    technologies: ["Node.js", "Express", "EJS", "MongoDB", "Razorpay", "AWS EC2", "Nginx", "PM2"],
    liveLink: "https://booksaw.xtaze.fun/",
    githubLink: "https://github.com/joelfrancis1122/BOOKSAW",
  },
];

const miniProjects = [
  {
    title: "User Management System",
    description: "MERN stack auth system with profile management and role-based access.",
    tech: "MongoDB · Express · React · Redux · Node.js",
    link: "https://github.com/joelfrancis1122/WebApplication",
  },
  {
    title: "Netflix Clone",
    description: "Real-time streaming UI using TMDB API.",
    tech: "React · TMDB API",
    link: "https://github.com/joelfrancis1122/Netflix-Clone",
  },
  {
    title: "OLX Clone",
    description: "Buy/sell marketplace with Firebase and Firestore.",
    tech: "React · Firebase · Firestore",
    link: "https://github.com/joelfrancis1122/olx-clone",
  },
  {
    title: "Discord Store Landing",
    description: "Responsive landing page for Discord promotions.",
    tech: "HTML · CSS · JavaScript · Tailwind",
    link: "https://store-mirage.vercel.app/",
  },
];

// Subtle 3D Tilt Card - Only on hover, minimal performance impact
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3; // Reduced from 10 to 3
    const rotateY = ((x - centerX) / centerX) * 3;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform,
        transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      {children}
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle parallax - reduced range for performance
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className="mb-40 last:mb-0"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* Image Side */}
        <TiltCard className="relative group">
          <motion.div style={{ y: imageY }} className="relative">
            {/* Simple shadow on hover */}
            <div className="absolute -inset-4 bg-stone-200/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative aspect-[4/3] bg-stone-100 rounded-2xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
  className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </TiltCard>

        {/* Content Side */}
        <div className="space-y-8">
          {/* Project Number & Category */}
          <div className="flex items-center gap-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 font-light">
              Project {String(index + 1).padStart(2, '0')}
            </span>
            <span className="h-[1px] w-12 bg-stone-300"></span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-light">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-5xl lg:text-6xl font-light tracking-tight text-stone-900 leading-[1.1]">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-base leading-relaxed text-stone-600 font-light max-w-lg">
            {project.outcome}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-[9px] tracking-[0.15em] uppercase rounded-full bg-stone-100 text-stone-600 border border-stone-200 font-light transition-colors hover:bg-stone-200 hover:border-stone-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-3 py-1.5 text-[9px] tracking-[0.15em] uppercase text-stone-400 font-light">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-8 pt-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm tracking-wide text-stone-900 font-light hover:text-stone-600 transition-colors"
              >
                <span>View Live</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm tracking-wide text-stone-900 font-light hover:text-stone-600 transition-colors"
              >
                <span>View Code</span>
                <Github className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export const Work = () => (
  <section id="work" className="py-32 px-6 bg-[#fafaf8]">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="mb-32"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 block mb-6 font-light">
          Selected Work
        </span>
        <h2 className="text-7xl lg:text-8xl font-light tracking-tight text-stone-900 leading-[1.1]">
          Projects
        </h2>
        <p className="mt-8 text-lg text-stone-600 font-light max-w-2xl leading-relaxed">
          Not just what I built, but how I think.
        </p>
      </motion.div>

      {/* Main Projects */}
      <div className="mb-40">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      {/* Mini Projects */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="pt-20 border-t border-stone-200"
      >
        <div className="mb-16">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 block mb-4 font-light">
            Other Work
          </span>
          <h3 className="text-5xl font-light tracking-tight text-stone-900">
            Mini Projects
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {miniProjects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.1,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="group block p-8 bg-white rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-xl font-light text-stone-900 group-hover:text-stone-700 transition-colors">
                  {p.title}
                </h4>
                <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-stone-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              
              <p className="text-sm text-stone-600 font-light mb-5 leading-relaxed">
                {p.description}
              </p>
              
              <span className="text-[9px] tracking-[0.15em] uppercase text-stone-400 font-light">
                {p.tech}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);