import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground font-light"
          >
            © {currentYear} Joel Francis.
          </motion.span>
          
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-muted-foreground/50"
          >
            Open to opportunities
          </motion.span>
        </div>
      </div>
    </footer>
  );
};
