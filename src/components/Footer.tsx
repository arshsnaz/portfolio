import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/abubakarchanda", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/abubakarchanda", label: "LinkedIn" },
    { icon: Code2, href: "https://leetcode.com/abubakarchanda", label: "LeetCode" },
    { icon: Mail, href: "mailto:abubakarchanda3@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        {/* Three Column Flex Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <a href="#" className="text-2xl font-bold text-primary">AC</a>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart size={14} className="text-red-500" /> by Abubakar Chanda
            </p>
            <p className="text-xs text-muted-foreground">© {currentYear} All rights reserved.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            {["About", "Skills", "Experience", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link}
              </a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2.5 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-border hover:border-primary/30"
              >
                <link.icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
