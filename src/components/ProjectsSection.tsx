import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";

import featherLogo from "../assets/feather-logo.png";
import faceScanLogo from "../assets/face-scan-logo.png";
import doctorLogo from "../assets/doctor-logo.png";
import rcLogo from "../assets/rc-logo.png";
import darulNikahLogo from "../assets/dar-ul-nikah.png";

const projects = [
  {
    title: "OptiWrite",
    subtitle: "AI SEO SaaS Platform",
    description: "Full-stack web application enabling content creators to generate SEO-optimized content with AI-powered tone, grammar, and keyword optimization.",
    techStack: ["React.js", "Spring Boot", "MySQL", "OpenAI API", "NLP"],
    image: featherLogo,
    metrics: [{ value: "40%", label: "Readability Boost" }, { value: "Real-time", label: "SERP Analysis" }],
    status: "Completed",
    featured: true,
    github: "https://github.com/arshsnaz/OptiWrite",
    demo: "https://arshsnaz.github.io/OptiWrite",
  },
  {
    title: "AttendAI",
    subtitle: "AI-Based Attendance System",
    description: "Real-time attendance tracking system using facial recognition with 95% accuracy and secure role-based authentication.",
    techStack: ["Java & OpenCV", "Spring Boot API", "React.js"],
    image: faceScanLogo,
    metrics: [{ value: "95%", label: "Accuracy" }, { value: "90%", label: "Error Reduction" }],
    status: "Completed",
    featured: false,
    live: "https://arshsnaz.github.io/AttendAI/",
  },
  {
    title: "Doctor Appointment",
    subtitle: "Healthcare Booking System",
    description: "Team-built healthcare platform for seamless doctor appointments with scheduling and notification features.",
    techStack: ["MongoDB", "Express.js", "React.js"],
    image: doctorLogo,
    metrics: [{ value: "Team", label: "Collaboration" }, { value: "MERN", label: "Full Stack" }],
    status: "Completed",
    featured: false,
    live: "https://zohairfanali.github.io/DoctorAppointment/",
  },
  {
    title: "Raunak Furniture",
    subtitle: "E-Commerce Platform",
    description: "Business-driven e-commerce with product catalog, shopping cart, and order management for real commercial use.",
    techStack: ["React.js", "Spring Boot", "MySQL"],
    image: rcLogo,
    metrics: [{ value: "Real", label: "Business Use" }, { value: "Secure", label: "Payments" }],
    status: "Completed",
    featured: false,
    live: "https://arshsnaz.github.io/RaunakFurniture/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
              Featured Work
            </span>
            <h2 className="section-heading mb-6">
              Projects That <span className="text-primary">Matter</span>
            </h2>
            <p className="section-subheading mx-auto">
              From AI-powered SaaS to production e-commerce — real solutions for real problems
            </p>
          </div>

          {/* Featured Project - Full Width Flex Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="highlight-card p-8 md:p-10 mb-8 max-w-6xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Left - Icon & Status */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center border-2 border-primary/30 overflow-hidden shadow-sm">
                  <img loading="lazy" src={projects[0].image} alt="OptiWrite Logo" className="w-full h-full object-contain p-2" />
                </div>
                <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-primary text-primary-foreground">
                  COMPLETED
                </span>
              </div>

              {/* Right - Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  OptiWrite
                </h3>
                <p className="text-lg text-primary font-semibold mb-4">AI SEO SaaS Platform</p>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  Full-stack web application enabling content creators to generate SEO-optimized content with AI-powered tone, grammar, and keyword optimization. Features competitor analysis with real-time SERP insights.
                </p>

                {/* Metrics - Flex Row */}
                <div className="flex gap-8 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-primary">40%</div>
                    <div className="text-sm text-muted-foreground">Readability Boost</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">Real-time</div>
                    <div className="text-sm text-muted-foreground">SERP Analysis</div>
                  </div>
                </div>

                {/* Tech + Actions - Flex Wrap */}
                <div className="flex flex-wrap items-center gap-3">
                  {["React.js", "Spring Boot", "MySQL", "OpenAI API", "NLP"].map((tech) => (
                    <span key={tech} className="tech-chip">{tech}</span>
                  ))}
                  <div className="flex gap-2 ml-auto">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/80 text-foreground font-medium text-sm border border-border">
                      <Sparkles size={16} className="text-primary" /> Proprietary Startup
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Projects - 3 Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="premium-card p-6 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-border shadow-sm">
                    <img loading="lazy" src={project.image} alt={`${project.title} Logo`} className="w-full h-full object-contain p-1.5" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-muted-foreground border border-border">
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                <p className="text-primary font-medium text-sm mb-3">{project.subtitle}</p>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

                {/* Metrics */}
                <div className="flex gap-6 mb-4">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-lg font-bold text-foreground">{m.value}</div>
                      <div className="text-xs text-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium rounded bg-secondary text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
                    <ExternalLink size={14} /> Live
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Client Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 max-w-6xl mx-auto"
          >
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
                Freelance Work
              </span>
              <h3 className="section-heading mb-6">
                Client <span className="text-primary">Projects</span>
              </h3>
              <p className="section-subheading mx-auto">
                Delivering high-quality, professional solutions for businesses and organizations
              </p>
            </div>

            {/* Dar-Ul-Nikah - Full Width Featured Card (same as OptiWrite) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="highlight-card p-8 md:p-10"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left - Logo & Status */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center border-2 border-primary/30 overflow-hidden shadow-sm">
                    <img loading="lazy" src={darulNikahLogo} alt="Dar-Ul-Nikah Logo" className="w-full h-full object-contain p-2" />
                  </div>
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-primary text-primary-foreground">
                    COMPLETED
                  </span>
                </div>

                {/* Right - Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Dar-Ul-Nikah
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-4">Confidential Matchmaking Platform</p>
                  <p className="text-muted-foreground mb-6 max-w-2xl">
                    Secure, privacy-first matchmaking platform featuring encrypted profile sharing, verified submissions, and a controlled communication flow to ensure user data protection.
                  </p>

                  {/* Metrics - Flex Row */}
                  <div className="flex gap-8 mb-6">
                    <div>
                      <div className="text-3xl font-bold text-primary">100%</div>
                      <div className="text-sm text-muted-foreground">Data Privacy</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">Secure</div>
                      <div className="text-sm text-muted-foreground">Communication</div>
                    </div>
                  </div>

                  {/* Tech + Actions - Flex Wrap */}
                  <div className="flex flex-wrap items-center gap-3">
                    {["Java & Spring Boot", "React.js", "Privacy-First", "Verified Profiles", "Secure Matchmaking", "Access Control"].map((tech) => (
                      <span key={tech} className="tech-chip">{tech}</span>
                    ))}
                    <div className="flex gap-2 ml-auto">
                      <a href="https://www.darulnikah.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
                        <ExternalLink size={16} /> Live Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
