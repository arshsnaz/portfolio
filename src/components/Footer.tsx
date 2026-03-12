import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Mail, Heart } from "lucide-react";
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/arshsnaz", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/abubakarchanda", label: "LinkedIn" },
    { icon: Code2, href: "https://leetcode.com/abubakarchanda", label: "LeetCode" },
    { icon: Mail, href: "mailto:abubakarchanda3@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-6 md:py-8 bg-card/30 backdrop-blur-xl border-t border-white/10 dark:border-white/5 relative overflow-hidden">
      {/* Subtle Premium Blur Effect inside footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container max-w-6xl mx-auto px-6">
        {/* Three Column Flex Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <a href="#" aria-label="Back to top" className="flex-shrink-0 relative mb-1">
              <img src={logoLight} alt="Abubakar Chanda Logo" width="120" height="40" loading="lazy" className="h-8 w-auto object-contain block dark:hidden opacity-90 hover:opacity-100 transition-opacity" />
              <img src={logoDark} alt="Abubakar Chanda Logo" width="120" height="40" loading="lazy" className="h-8 w-auto object-contain hidden dark:block opacity-90 hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-xs text-muted-foreground flex items-center gap-1 font-medium">
              Built with <Heart size={12} className="text-red-500 animate-pulse" /> by Abubakar Chanda
            </p>
            <p className="text-[11px] text-muted-foreground/70 tracking-wide">© {currentYear} All rights reserved.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-5 text-sm"
          >
            {["About", "Skills", "Experience", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:-translate-y-0.5"
              >
                {link}
              </a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2.5"
          >
            {socialLinks.map((link) => (
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/20 backdrop-blur-sm"
              >
                <link.icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
