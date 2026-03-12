import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logoLight from "../assets/ac-logo.png";
import logoDark from "../assets/ac-logo-dark.png";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace(/.*\#/, "");
    
    setTimeout(() => {
      const elem = document.getElementById(targetId);
      if (elem) {
        const headerOffset = 80;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        window.history.pushState(null, "", href);
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" aria-label="Abubakar Chanda Home" className="flex-shrink-0 relative">
          <img src={logoLight} width="150" height="56" alt="Abubakar Chanda Light Mode Logo" className="h-14 w-auto object-contain block dark:hidden" />
          <img src={logoDark} width="150" height="56" alt="Abubakar Chanda Dark Mode Logo" className="h-14 w-auto object-contain hidden dark:block" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <div className="md:hidden"><ThemeToggle /></div>
          <button
            aria-label="Toggle Mobile Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border mt-2"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-foreground hover:text-primary transition-colors py-2 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-4 px-5 py-3 text-center font-semibold rounded-lg bg-primary text-primary-foreground"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
