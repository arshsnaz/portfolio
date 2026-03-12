import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, ExternalLink, Sparkles, Instagram, Facebook } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 bg-background">
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl" 
        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary/15 rounded-full blur-3xl" 
        animate={{ y: [0, -40, 0], scale: [1, 1.3, 1] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary rounded-full" 
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }} 
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-accent rounded-full" 
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-10"
      >
        {/* Unique Flex Box Layout - Two Column Hero */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          {/* Left Column - Profile */}
          <motion.div 
            variants={itemVariants} 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="profile-ring relative group">
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-secondary relative z-10 border-4 border-background">
                <img src={profilePhoto} width="224" height="224" alt="Abubakar Chanda Profile Photo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="eager" fetchPriority="high" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/30">
                <Sparkles size={16} />
                Available for Full-Time Roles
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 text-foreground">
              Abubakar <span className="text-primary">Chanda</span>
            </motion.h1>

            {/* Title */}
            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-semibold text-muted-foreground mb-2">
              Software Development Engineer
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-primary font-medium mb-6">
              Java Full Stack Developer
            </motion.p>

            {/* Tagline */}
            <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground max-w-xl mb-8">
              Building scalable, fault-tolerant, AI-powered web applications with expertise in 
              distributed systems and cloud architecture
            </motion.p>

            {/* Tech Stack - Unique Flex Box */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
              {["Java 17", "Spring Boot", "React", "AWS", "AI / ML", "DSA"].map((tech) => (
                <span key={tech} className="skill-badge">
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons - Flex Row */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="btn-hero-primary flex items-center gap-2"
              >
                <ExternalLink size={18} />
                View Projects
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="btn-hero-secondary flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1DhZb5HRiPz13NDJ2DOCZ86wLnWRKjgFg/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-hero-secondary flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-3">
              <a 
                href="https://github.com/arshsnaz/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all border border-border hover:border-primary/30"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/abubakarchanda/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all border border-border hover:border-primary/30"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/arshsnaz/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all border border-border hover:border-primary/30"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100082444805847" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all border border-border hover:border-primary/30"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://x.com/arshsnaz" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="X (Twitter) Profile"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all border border-border hover:border-primary/30"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
