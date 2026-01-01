import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Database, Cloud, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Java 17", "Python", "JavaScript", "SQL", "C"],
  },
  {
    title: "Frameworks",
    icon: Server,
    skills: ["Spring Boot", "React.js", "Hibernate", "JSP/Servlets", "Spring Security"],
  },
  {
    title: "APIs & Auth",
    icon: Database,
    skills: ["RESTful APIs", "JWT", "OAuth2", "Swagger", "JDBC/HQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "GitHub", "Postman"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["Natural Language Processing", "Machine Learning", "Deep Learning", "OpenAI API"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["IntelliJ IDEA", "VS Code", "MySQL", "Figma", "Eclipse"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30">
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
              Technical Skills
            </span>
            <h2 className="section-heading mb-6">
              Tools & <span className="text-primary">Technologies</span>
            </h2>
            <p className="section-subheading mx-auto">
              A comprehensive stack for building modern, scalable applications
            </p>
          </div>

          {/* Skills Grid - Masonry Style Flex */}
          <div className="flex-box-masonry max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="premium-card p-6"
              >
                {/* Card Header - Flex Row */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>

                {/* Skills - Flex Wrap */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
