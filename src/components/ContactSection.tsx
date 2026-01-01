import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Code2, Send, MapPin, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactLinks = [
  { icon: Mail, label: "Email", value: "abubakarchanda3@gmail.com", href: "mailto:abubakarchanda3@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9356724732", href: "tel:+919356724732" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/abubakarchanda", href: "https://www.linkedin.com/in/abubakarchanda/" },
  { icon: Github, label: "GitHub", value: "github.com/arshsnaz", href: "https://github.com/arshsnaz/" },
  { icon: Code2, label: "LeetCode", value: "leetcode.com/abubakarchanda", href: "https://leetcode.com/u/abubakarchanda/" },
  { icon: Instagram, label: "Instagram", value: "instagram.com/arshsnaz", href: "https://www.instagram.com/arshsnaz/" },
  { icon: Facebook, label: "Facebook", value: "facebook.com/abubakar", href: "https://www.facebook.com/profile.php?id=100082444805847" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xqaqvlbe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
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
              Get in Touch
            </span>
            <h2 className="section-heading mb-6">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="section-subheading mx-auto">
              Ready to discuss opportunities or just want to say hello? I'd love to hear from you.
            </p>
          </div>

          {/* Two Column Flex Layout */}
          <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto">
            {/* Contact Info - Vertical Stack */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1"
            >
              <div className="highlight-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin size={20} className="text-primary" />
                  <span className="text-muted-foreground font-medium">Solapur, Maharashtra, India</span>
                </div>

                {/* Contact Links - Vertical Flex */}
                <div className="space-y-3">
                  {contactLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <link.icon size={18} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">{link.label}</div>
                        <div className="text-foreground font-medium text-sm truncate group-hover:text-primary transition-colors">
                          {link.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex-1"
            >
              <form onSubmit={handleSubmit} className="premium-card p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      minLength={2}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject *</label>
                  <input
                    type="text"
                    required
                    minLength={5}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    minLength={10}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;