import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  const links = [
    { label: "Email", href: "mailto:joelfrancis9398@gmail.com", icon: Mail },
    { label: "GitHub", href: "https://github.com/joelfrancis1122", icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com/in/joelfrancis1122", icon: Linkedin },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32 px-6"
    >
      {/* Noise background (online image) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Spotlight glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center z-0">
        <div className="h-[500px] w-[500px] rounded-full bg-white/10 blur-[120px] -translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="max-w-2xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-sm uppercase tracking-[0.35em] text-muted-foreground block mb-6">
              Contact
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 leading-tight">
              Let’s Work
              <br />
              Together
            </h2>

            <p className="text-lg text-muted-foreground font-light mb-14">
              Have a project in mind or looking for a developer?
              I’m open to opportunities and collaborations.
            </p>
          </motion.div>

          {/* Premium CTA */}
          <motion.a
            href="mailto:joelfrancis9398@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative inline-flex items-center gap-3 px-10 py-4 text-sm uppercase tracking-widest rounded-full overflow-hidden mb-16"
          >
            {/* Gradient border */}
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur-sm" />
            <span className="absolute inset-[1px] bg-background rounded-full" />

            <span className="relative flex items-center gap-3">
              <Mail className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              Send me an email
            </span>
          </motion.a>

          {/* Premium divider */}
          <div className="h-px w-full mb-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-8"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                <link.icon className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
