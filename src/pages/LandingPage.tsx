import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  Scan,
  Brain,
  Lock,
  Zap,
  ArrowRight,
  Play,
  CheckCircle2,
  TrendingUp,
  Eye,
  FileWarning,
  Users,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import TrustScore from "@/components/ui/TrustScore";
import WaveformVisual from "@/components/ui/WaveformVisual";
import ScanAnimation from "@/components/ui/ScanAnimation";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Detection",
    description:
      "Advanced neural networks analyze facial movements, audio patterns, and visual artifacts in real-time.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption with SOC 2 Type II compliance. Your data never leaves our secure infrastructure.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Get comprehensive analysis in seconds. Our models process media at unprecedented speeds.",
  },
  {
    icon: TrendingUp,
    title: "99.7% Accuracy",
    description:
      "Industry-leading detection rates verified by independent security researchers worldwide.",
  },
];

const stats = [
  { value: "50M+", label: "Scans Performed" },
  { value: "99.7%", label: "Detection Accuracy" },
  { value: "<2s", label: "Average Scan Time" },
  { value: "500+", label: "Enterprise Clients" },
];

const useCases = [
  {
    icon: Users,
    title: "Identity Verification",
    description: "Protect against synthetic identity fraud in KYC processes.",
  },
  {
    icon: FileWarning,
    title: "Media Authentication",
    description: "Verify authenticity of evidence for legal proceedings.",
  },
  {
    icon: Eye,
    title: "Content Moderation",
    description: "Detect manipulated content before it spreads.",
  },
];

export const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm text-primary">
                  Now with Video Deepfake Detection
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                Detect the{" "}
                <span className="gradient-text">Truth</span>
                <br />
                in a World of{" "}
                <span className="text-primary glow-text-cyan">AI Illusions</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">
                VeriSight AI uses cutting-edge deep learning to detect deepfakes, 
                AI-generated images, and manipulated media with enterprise-grade accuracy.
                Protect your organization from synthetic media threats.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/dashboard">
                  <GlowButton size="lg">
                    <Scan className="w-5 h-5" />
                    Start Free Scan
                  </GlowButton>
                </Link>
                <Link to="/education">
                  <GlowButton variant="outline" size="lg">
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </GlowButton>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                {["SOC 2 Certified", "GDPR Compliant", "ISO 27001"].map(
                  (badge) => (
                    <div
                      key={badge}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      {badge}
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Right - Hero visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <GlassCard className="p-8 relative overflow-visible" hover={false}>
                <ScanAnimation isScanning={true} />
                
                {/* Mock scan interface */}
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Shield className="w-8 h-8 text-primary" />
                      <div>
                        <p className="font-medium">Scan Complete</p>
                        <p className="text-sm text-muted-foreground">
                          sample_image.jpg
                        </p>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-success/20 text-success text-sm font-medium">
                      Authentic
                    </div>
                  </div>

                  <div className="flex justify-center py-4">
                    <TrustScore score={94} size="lg" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/30">
                      <p className="text-sm text-muted-foreground">
                        Deepfake Probability
                      </p>
                      <p className="text-2xl font-bold text-success">6%</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <p className="text-sm text-muted-foreground">
                        Confidence Level
                      </p>
                      <p className="text-2xl font-bold text-primary">98%</p>
                    </div>
                  </div>

                  <WaveformVisual bars={30} variant="gradient" />
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 p-3 rounded-xl bg-card border border-border shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Brain className="w-6 h-6 text-accent" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 p-3 rounded-xl bg-card border border-border shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <Lock className="w-6 h-6 text-success" />
                </motion.div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border/50 bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-display font-bold gradient-text">
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Enterprise-Grade <span className="gradient-text">Detection</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built for organizations that can't afford to be fooled by synthetic media.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <GlassCard
                key={feature.title}
                className="p-6"
                glow="cyan"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-card/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Protect Your Organization from{" "}
                <span className="gradient-text">Synthetic Threats</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                From financial institutions to media companies, organizations trust 
                VeriSight AI to protect against the growing threat of AI-generated fraud.
              </p>

              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 h-fit">
                      <useCase.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{useCase.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {useCase.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8">
                <div className="aspect-video rounded-lg bg-muted/50 flex items-center justify-center relative overflow-hidden">
                  <ScanAnimation variant="horizontal" />
                  <div className="text-center z-10">
                    <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Watch how it works</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-12" glow="cyan">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Ready to Detect the Truth?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Start with our free tier and upgrade as you scale. No credit card required.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/dashboard">
                  <GlowButton size="lg">
                    Get Started Free
                    <ArrowRight className="w-5 h-5" />
                  </GlowButton>
                </Link>
                <Link to="/pricing">
                  <GlowButton variant="outline" size="lg">
                    View Pricing
                  </GlowButton>
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
