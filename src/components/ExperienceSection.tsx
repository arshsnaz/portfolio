import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin, TrendingUp, FileText, ExternalLink } from "lucide-react";

const achievements = [
  { metric: "28%", label: "Data Retrieval Boost", desc: "Optimized full-stack apps with React.js & Spring Boot" },
  { metric: "35%", label: "Latency Reduction", desc: "Implemented RESTful APIs for seamless integration" },
  { metric: "40%", label: "Deployment Savings", desc: "Low-code workflows accelerating delivery" },
  { metric: "30%", label: "Productivity Gain", desc: "Agile team ensuring timely sprints" },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
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
              Experience
            </span>
            <h2 className="section-heading mb-6">
              Professional <span className="text-primary">Journey</span>
            </h2>
            <p className="section-subheading mx-auto">
              Hands-on experience building production-ready software in agile environments
            </p>
          </div>

          {/* Experience Card - Large Flex Box */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="highlight-card p-8 md:p-10"
            >
              {/* Header - Flex Between */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 border-2 border-primary/30">
                    <Building2 size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                      Software Developer Intern
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      Jazar Technology Pvt Ltd
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 bg-background px-3 py-1.5 rounded-lg">
                    <Calendar size={16} className="text-primary" />
                    June 2025 – Dec 2025
                  </div>
                  <div className="flex items-center gap-2 bg-background px-3 py-1.5 rounded-lg">
                    <MapPin size={16} className="text-primary" />
                    Hybrid – Pune, Maharashtra
                  </div>
                </div>
              </div>

              {/* Tech Stack - Flex Wrap */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["React.js", "Spring Boot 3", "MySQL", "REST APIs", "Agile/Scrum"].map((tech) => (
                  <span key={tech} className="tech-chip">{tech}</span>
                ))}
              </div>

              {/* Achievements - 2x2 Grid Flex */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {achievements.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex gap-4 p-5 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-2xl font-bold text-primary">{item.metric}</span>
                      </div>
                      <div className="text-sm font-semibold text-foreground mb-1">{item.label}</div>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Offer Letter Section */}
              <motion.a
                href="https://drive.google.com/file/d/10Qj59EQ-pgzQ6GidfZRQkxRSKTNje7_y/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-primary/5 border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <FileText size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-foreground">Offer Letter</div>
                  <p className="text-xs text-muted-foreground">View official offer letter</p>
                </div>
                <ExternalLink size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
