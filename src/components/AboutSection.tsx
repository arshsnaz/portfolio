import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cloud, Database, Cpu, Zap, Target } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Java Full Stack", description: "Spring Boot, React, REST APIs" },
  { icon: Cloud, label: "Cloud Native", description: "AWS, Docker, Microservices" },
  { icon: Database, label: "Data Systems", description: "MySQL, Hibernate, HQL" },
  { icon: Cpu, label: "AI / ML", description: "NLP, Computer Vision, Deep Learning" },
  { icon: Zap, label: "Performance", description: "Scalable & Fault-Tolerant Systems" },
  { icon: Target, label: "Problem Solver", description: "400+ DSA Problems Solved" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
              About Me
            </span>
            <h2 className="section-heading mb-6">
              Crafting <span className="text-primary">Scalable Solutions</span>
            </h2>
            <p className="section-subheading mx-auto">
              Passionate about building distributed systems that solve real-world problems at scale
            </p>
          </div>

          {/* Unique Flex Box - Zigzag Layout */}
          <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 space-y-6"
            >
              <div className="premium-card p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  I'm a <span className="text-foreground font-semibold">Software Development Engineer</span> with deep expertise in{" "}
                  <span className="text-primary font-semibold">Java Full Stack development</span>, specializing in building 
                  enterprise-grade applications that are scalable, secure, and performant.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  My foundation in <span className="text-foreground font-semibold">Data Structures & Algorithms</span>, 
                  combined with hands-on experience in <span className="text-primary font-semibold">Spring Boot</span>,{" "}
                  <span className="text-primary font-semibold">React</span>, and <span className="text-primary font-semibold">AWS</span>, 
                  enables me to architect solutions that handle millions of requests.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently exploring the intersection of <span className="text-primary font-semibold">AI/ML</span> and 
                  traditional software engineering, building intelligent systems that automate complex workflows.
                </p>
              </div>

              {/* Stats - Horizontal Flex */}
              <div className="flex flex-wrap gap-4">
                <div className="stat-card flex-1 min-w-[120px]">
                  <div className="text-3xl font-bold text-primary">400+</div>
                  <div className="text-sm text-muted-foreground mt-1">DSA Problems</div>
                </div>
                <div className="stat-card flex-1 min-w-[120px]">
                  <div className="text-3xl font-bold text-primary">9K</div>
                  <div className="text-sm text-muted-foreground mt-1">Global Rank</div>
                </div>
                <div className="stat-card flex-1 min-w-[120px]">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground mt-1">Projects</div>
                </div>
              </div>
            </motion.div>

            {/* Feature Cards - Vertical Flex */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-1 grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                  className="flex-box-feature"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
