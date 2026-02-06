import { motion } from "framer-motion";
import {
  Shield,
  Brain,
  Users,
  Award,
  Heart,
  Lock,
  Globe,
  Book,
  Code,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";

const team = [
  {
    name: "Shashwat",
    role: "Project Lead | Technical Coordinator | System Architect",
    bio: "Designed the system architecture for the website and coordinated between frontend, backend, and research modules.",
  },
  {
    name: "Shreya",
    role: "AI Model Integration | System Engineer",
    bio: "Integrated the deepfake detection model with the web platform. Ensured smooth communication between the detection engine and user interface.",
  },
  {
    name: "Janhavi",
    role: "Frontend Developer | UI/UX Designer",
    bio: "Led the design and development of the website's frontend, creating an intuitive and visually appealing user experience.",
  },
  {
    name: "Ishani",
    role: "Backend Developer | Database Manager",
    bio: "Developed the backend infrastructure, including API endpoints and database management for user data and detection results.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "Every decision is made with security and privacy at the forefront.",
  },
  {
    icon: Heart,
    title: "Ethical AI",
    description:
      "We're committed to responsible AI development and deployment.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "Fighting misinformation and protecting trust worldwide.",
  },
  {
    icon: Users,
    title: "Human-Centered",
    description:
      "Technology should empower people, not replace human judgment.",
  },
];

const datasets = [
  "FaceForensics++",
  "Celeb-DF",
  "DeeperForensics-1.0",
  "DFDC (Facebook)",
  "KoDF",
  "FakeAVCeleb",
];

const research = [
  {
    title: "Multi-Modal Deepfake Detection",
    venue: "CVPR 2024",
    link: "#",
  },
  {
    title: "Audio-Visual Synchrony for Detection",
    venue: "NeurIPS 2023",
    link: "#",
  },
  {
    title: "GAN Fingerprint Analysis",
    venue: "ICCV 2023",
    link: "#",
  },
];

const ethics = [
  "We never use our technology for surveillance or mass monitoring",
  "All data is processed with explicit consent and deleted promptly",
  "We actively work with policymakers on synthetic media legislation",
  "Our technology is designed to protect, not to create deepfakes",
  "We provide free access to journalists and fact-checkers",
  "Regular third-party audits ensure our systems remain unbiased",
];

export const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">VeriSight AI</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to restore trust in digital media by building 
            the world's most accurate deepfake detection platform.
          </p>
        </motion.div>

        {/* Mission */}
        <section className="mb-20">
          <GlassCard className="p-8 md:p-12" glow="cyan">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-4 rounded-full bg-primary/10 w-fit mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground mb-4">
                  In an era where AI can create convincing fake media in seconds, 
                  the ability to verify authenticity is more critical than ever.
                </p>
                <p className="text-muted-foreground">
                  VeriSight AI was founded in 2022 by a team of AI researchers 
                  and security experts who saw the growing threat of deepfakes 
                  to individuals, businesses, and democratic institutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { value: "50M+", label: "Scans performed" },
                  { value: "500+", label: "Enterprise clients" },
                  { value: "40+", label: "Countries served" },
                  { value: "99.7%", label: "Detection accuracy" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-lg bg-muted/30 text-center"
                  >
                    <p className="text-2xl font-display font-bold gradient-text">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </GlassCard>
        </section>

        {/* Values */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <GlassCard
                key={value.title}
                className="p-6 text-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              <Users className="inline w-8 h-8 text-primary mr-2" />
              Leadership <span className="gradient-text">Team</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <GlassCard
                key={member.name}
                className="p-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold gradient-text">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </motion.div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Research & Datasets */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Datasets */}
            <GlassCard className="p-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Book className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-display font-bold">
                    Training Datasets
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  Our models are trained on the most comprehensive deepfake datasets 
                  available, ensuring broad coverage across manipulation techniques.
                </p>
                <div className="flex flex-wrap gap-2">
                  {datasets.map((dataset) => (
                    <span
                      key={dataset}
                      className="px-3 py-1 rounded-full bg-muted/50 text-sm"
                    >
                      {dataset}
                    </span>
                  ))}
                </div>
              </motion.div>
            </GlassCard>

            {/* Research */}
            <GlassCard className="p-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-display font-bold">
                    Published Research
                  </h3>
                </div>
                <div className="space-y-4">
                  {research.map((paper) => (
                    <a
                      key={paper.title}
                      href={paper.link}
                      className="block p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-medium text-sm">{paper.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {paper.venue}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0" />
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            </GlassCard>
          </div>
        </section>

        {/* Ethics & Privacy */}
        <section className="mb-20">
          <GlassCard className="p-8 md:p-12" glow="purple">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-display font-bold">
                    Ethics & Privacy
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  We believe that powerful AI technology comes with great responsibility. 
                  Our commitment to ethical AI guides everything we do.
                </p>
                <ul className="space-y-3">
                  {ethics.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  { title: "SOC 2 Type II", desc: "Certified annually" },
                  { title: "GDPR Compliant", desc: "Full EU compliance" },
                  { title: "ISO 27001", desc: "Information security" },
                  { title: "CCPA Compliant", desc: "California privacy" },
                ].map((cert) => (
                  <div
                    key={cert.title}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30"
                  >
                    <Shield className="w-8 h-8 text-success" />
                    <div>
                      <p className="font-semibold">{cert.title}</p>
                      <p className="text-sm text-muted-foreground">{cert.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </GlassCard>
        </section>

        {/* API Docs CTA */}
        <section className="mb-20">
          <GlassCard className="p-8 text-center">
            <Code className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold mb-2">
              Developer API
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Integrate deepfake detection into your applications with our 
              RESTful API. Comprehensive documentation and SDKs available.
            </p>
            <div className="flex justify-center gap-4">
              <GlowButton variant="primary">
                View API Docs
                <ExternalLink className="w-4 h-4" />
              </GlowButton>
              <GlowButton variant="outline">
                Get API Key
              </GlowButton>
            </div>
          </GlassCard>
        </section>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <GlassCard className="p-8 max-w-2xl mx-auto" glow="cyan">
            <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold mb-2">
              Get in Touch
            </h3>
            <p className="text-muted-foreground mb-6">
              Have questions? Want to partner with us? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <GlowButton>
                Contact Sales
              </GlowButton>
              <GlowButton variant="outline">
                Press Inquiries
              </GlowButton>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
