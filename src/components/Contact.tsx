import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

export const Contact = () => {
  const links = [
    { label: "Email", href: "mailto:joelfrancis9398@gmail.com", icon: Mail },
    { label: "GitHub", href: "https://github.com/joelfrancis1122", icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com/in/joelfrancis1122", icon: Linkedin },
  ];

  return (
    <section className="py-32 px-6" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground block mb-6">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              Let's Work
              <br />
              Together
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-12">
              Have a project in mind or looking for a developer? 
              I'm open to opportunities and collaborations.
            </p>
          </motion.div>

          {/* Email CTA */}
          <motion.a
            href="mailto:your.email@example.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm uppercase tracking-widest hover:bg-foreground/90 transition-all duration-300 mb-12"
          >
            <Mail className="w-4 h-4" />
            Send me an email
          </motion.a>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </a>
            ))}
         
          </motion.div>
        </div>
      </div>
    </section>
  );
};
