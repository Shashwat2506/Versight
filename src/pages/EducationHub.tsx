import { motion } from "framer-motion";
import {
  Brain,
  Shield,
  AlertTriangle,
  History,
  Eye,
  Video,
  Mic,
  Image,
  Users,
  Scale,
  Lock,
  Cpu,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import WaveformVisual from "@/components/ui/WaveformVisual";

const topics = [
  {
    icon: Brain,
    title: "What are Deepfakes?",
    description:
      "Deepfakes are synthetic media created using deep learning AI. They can replace faces, voices, or create entirely fake content that appears authentic.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Cpu,
    title: "How AI Generates Fake Media",
    description:
      "Using GANs (Generative Adversarial Networks) and diffusion models, AI learns from millions of real examples to generate convincing synthetic content.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Shield,
    title: "How Detection Works",
    description:
      "Our AI analyzes subtle artifacts, inconsistencies in facial movements, audio frequencies, and temporal anomalies that humans can't perceive.",
    color: "text-success",
    bgColor: "bg-success/10",
  },
];

const risks = [
  {
    icon: Users,
    title: "Identity Fraud",
    description:
      "Criminals use deepfakes to impersonate executives and authorize fraudulent transactions.",
    stat: "$25M+",
    statLabel: "Lost to CEO fraud in 2023",
  },
  {
    icon: Scale,
    title: "Political Manipulation",
    description:
      "Fake videos of politicians making controversial statements can sway elections and public opinion.",
    stat: "96%",
    statLabel: "Of people can't detect deepfakes",
  },
  {
    icon: Lock,
    title: "Privacy Violations",
    description:
      "Non-consensual synthetic content exploits individuals' likenesses for harassment.",
    stat: "500K+",
    statLabel: "Victims annually",
  },
];

const timeline = [
  {
    year: "2014",
    title: "GANs Invented",
    description: "Ian Goodfellow introduces Generative Adversarial Networks",
  },
  {
    year: "2017",
    title: "'Deepfake' Term Coined",
    description: "Reddit user creates face-swapping videos",
  },
  {
    year: "2019",
    title: "Voice Cloning Emerges",
    description: "AI can clone voices from just 5 seconds of audio",
  },
  {
    year: "2022",
    title: "Diffusion Models",
    description: "Stable Diffusion and DALL-E make image generation mainstream",
  },
  {
    year: "2023",
    title: "Video Generation",
    description: "Real-time video deepfakes become possible",
  },
  {
    year: "2024",
    title: "Detection Arms Race",
    description: "Advanced detection methods combat increasingly sophisticated fakes",
  },
];

const mediaTypes = [
  {
    icon: Image,
    title: "Image Deepfakes",
    techniques: [
      "Face swapping",
      "Age/gender transformation",
      "Full synthetic generation",
      "Background manipulation",
    ],
  },
  {
    icon: Video,
    title: "Video Deepfakes",
    techniques: [
      "Lip-sync manipulation",
      "Body puppet control",
      "Real-time face replacement",
      "Video synthesis",
    ],
  },
  {
    icon: Mic,
    title: "Audio Deepfakes",
    techniques: [
      "Voice cloning",
      "Text-to-speech synthesis",
      "Accent manipulation",
      "Emotional tone transfer",
    ],
  },
];

export const EducationHub = () => {
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
            Deepfake <span className="gradient-text">Education Hub</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understanding synthetic media is the first step in protecting yourself 
            and your organization from AI-generated threats.
          </p>
        </motion.div>

        {/* Topics Grid */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <GlassCard
                key={topic.title}
                className="p-6"
                glow="cyan"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`p-3 rounded-lg ${topic.bgColor} w-fit mb-4`}>
                    <topic.icon className={`w-6 h-6 ${topic.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{topic.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </motion.div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Media Types */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              Types of <span className="gradient-text">Synthetic Media</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {mediaTypes.map((type, index) => (
              <GlassCard
                key={type.title}
                className="p-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{type.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {type.techniques.map((technique) => (
                      <div
                        key={technique}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/30"
                      >
                        <Eye className="w-4 h-4 text-muted-foreground shrink-0" />
                        <span className="text-sm">{technique}</span>
                      </div>
                    ))}
                  </div>

                  {type.title === "Audio Deepfakes" && (
                    <div className="mt-6">
                      <WaveformVisual bars={25} variant="gradient" />
                    </div>
                  )}
                </motion.div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Real-world Risks */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              <AlertTriangle className="inline w-8 h-8 text-warning mr-2" />
              Real-World <span className="gradient-text">Risks</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {risks.map((risk, index) => (
              <GlassCard
                key={risk.title}
                className="p-6"
                glow="purple"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-3 rounded-lg bg-warning/10 w-fit mb-4">
                    <risk.icon className="w-6 h-6 text-warning" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{risk.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {risk.description}
                  </p>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-2xl font-bold gradient-text">{risk.stat}</p>
                    <p className="text-xs text-muted-foreground">
                      {risk.statLabel}
                    </p>
                  </div>
                </motion.div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              <History className="inline w-8 h-8 text-primary mr-2" />
              Evolution of <span className="gradient-text">Deepfakes</span>
            </h2>
          </motion.div>

          <GlassCard className="p-8">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary" />

              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Year bubble */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(185_100%_50%)]" />

                    {/* Content */}
                    <div
                      className={`ml-12 md:ml-0 md:w-5/12 p-4 rounded-lg bg-muted/30 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      <span className="text-primary font-display font-bold">
                        {event.year}
                      </span>
                      <h4 className="font-semibold mt-1">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <GlassCard className="p-8 max-w-2xl mx-auto" glow="cyan">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold mb-2">
              Ready to Protect Yourself?
            </h3>
            <p className="text-muted-foreground mb-6">
              Try our detection tools and stay one step ahead of synthetic media threats.
            </p>
            <a
              href="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium transition-all hover:shadow-[0_0_20px_hsl(185_100%_50%/0.3)]"
            >
              Start Free Scan
            </a>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationHub;
