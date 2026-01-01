import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, GraduationCap, Code2, Users, Medal } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "TCS CodeVita Season 13",
    subtitle: "Global Rank 9,043 / 537,000+",
    highlight: "Top 2%",
  },
  {
    icon: Code2,
    title: "400+ DSA Problems",
    subtitle: "LeetCode & GeeksForGeeks",
    highlight: "Top 5%",
  },
  {
    icon: Users,
    title: "Google Developer Student Club",
    subtitle: "UI/UX Lead (2024–2025)",
    highlight: "Leadership",
  },
  {
    icon: Award,
    title: "Full Stack Java Developer",
    subtitle: "Udemy Certification (2025)",
    highlight: "Certified",
  },
];

const education = [
  { degree: "B.Tech – CSE", school: "N.K. Orchid College, Solapur", year: "2026", score: "CGPA: 7.5" },
  { degree: "HSC (PCMB)", school: "SSA High School & College of Science, Solapur", year: "2022", score: "77.67%" },
  { degree: "SSC", school: "SSA High School, Solapur", year: "2020", score: "86%" },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 md:py-32 bg-background">
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
              Recognition
            </span>
            <h2 className="section-heading mb-6">
              Achievements & <span className="text-primary">Education</span>
            </h2>
            <p className="section-subheading mx-auto">
              Milestones that reflect dedication, growth, and a passion for excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Achievements - 3 Columns */}
            <div className="lg:col-span-3 space-y-4">
              {/* Unique Flex - Horizontal Cards */}
              {achievements.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="premium-card p-5 flex items-center gap-5"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={26} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground truncate">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 flex-shrink-0">
                    {item.highlight}
                  </span>
                </motion.div>
              ))}

              {/* Sports Achievement */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="premium-card p-5 flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Medal size={26} className="text-orange-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground">Sports Coordinator</h3>
                  <p className="text-sm text-muted-foreground">Volleyball - 3 Years Leadership</p>
                </div>
                <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-orange-100 text-orange-600 flex-shrink-0">
                  Teamwork
                </span>
              </motion.div>
            </div>

            {/* Education - 2 Columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="highlight-card p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <GraduationCap size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Education</h3>
                </div>

                {/* Timeline */}
                <div className="relative space-y-6">
                  <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-primary/30" />

                  {education.map((edu, index) => (
                    <div key={edu.degree} className="relative pl-10">
                      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        index === 0 ? "border-primary bg-primary/20" : "border-border bg-background"
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${index === 0 ? "bg-primary" : "bg-muted-foreground"}`} />
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{edu.school}</p>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-muted-foreground">{edu.year}</span>
                          <span className="font-semibold text-primary">{edu.score}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
