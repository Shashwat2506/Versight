import { motion } from "framer-motion";
import {
  Shield,
  Brain,
  Eye,
  Database,
  Cpu,
  Lock,
  CheckCircle,
  ArrowRight,
  Layers,
  Fingerprint,
  Sparkles,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import TrustScore from "@/components/ui/TrustScore";

const pipelineSteps = [
  {
    icon: Database,
    title: "Data Ingestion",
    description:
      "Media is securely uploaded and preprocessed. Metadata is extracted for forensic analysis.",
  },
  {
    icon: Layers,
    title: "Feature Extraction",
    description:
      "Multi-scale feature extraction identifies facial landmarks, frequency patterns, and temporal signals.",
  },
  {
    icon: Brain,
    title: "Neural Network Analysis",
    description:
      "Ensemble of specialized models analyze different aspects: visual, audio, and behavioral patterns.",
  },
  {
    icon: Eye,
    title: "Anomaly Detection",
    description:
      "Advanced algorithms identify subtle inconsistencies invisible to the human eye.",
  },
  {
    icon: Fingerprint,
    title: "Trust Score Computation",
    description:
      "Final authenticity score is computed with confidence intervals and explainability data.",
  },
];

const models = [
  {
    name: "FaceForensics++",
    type: "Vision Transformer",
    accuracy: "99.3%",
    description: "Facial manipulation detection",
  },
  {
    name: "AudioDeepFake Detector",
    type: "WaveNet Architecture",
    accuracy: "98.7%",
    description: "Voice clone detection",
  },
  {
    name: "Temporal Consistency Net",
    type: "3D CNN + LSTM",
    accuracy: "97.9%",
    description: "Video sequence analysis",
  },
  {
    name: "Frequency Domain Analyzer",
    type: "Spectral CNN",
    accuracy: "96.5%",
    description: "GAN artifact detection",
  },
];

const trustFactors = [
  {
    icon: Eye,
    name: "Visual Consistency",
    weight: "30%",
    description: "Facial landmarks, lighting, shadows, and reflections",
  },
  {
    icon: Sparkles,
    name: "Artifact Analysis",
    weight: "25%",
    description: "GAN fingerprints, compression artifacts, and noise patterns",
  },
  {
    icon: Cpu,
    name: "Temporal Coherence",
    weight: "25%",
    description: "Frame-to-frame consistency and motion patterns",
  },
  {
    icon: Lock,
    name: "Metadata Integrity",
    weight: "20%",
    description: "EXIF data, encoding signatures, and provenance",
  },
];

export const TrustPage = () => {
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
            Trust & <span className="gradient-text">Verification</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understand how VeriSight AI computes trust scores and provides 
            explainable, transparent verification results.
          </p>
        </motion.div>

        {/* Trust Score Demo */}
        <section className="mb-20">
          <GlassCard className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  How Trust Score Works
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our trust score is a composite metric derived from multiple 
                  specialized detection models. Each model analyzes different 
                  aspects of the media to provide a comprehensive assessment.
                </p>
                <div className="space-y-4">
                  {trustFactors.map((factor, index) => (
                    <motion.div
                      key={factor.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                        <factor.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium">{factor.name}</span>
                          <span className="text-primary font-semibold">
                            {factor.weight}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {factor.description}
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
                className="flex justify-center"
              >
                <div className="relative">
                  <TrustScore score={87} size="lg" />
                  {/* Orbiting elements */}
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 p-2 rounded-lg bg-card border border-border"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ transformOrigin: "50% 150px" }}
                  >
                    <Eye className="w-4 h-4 text-primary" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </section>

        {/* Forensics Pipeline */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              Forensics <span className="gradient-text">Pipeline</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every piece of media goes through our comprehensive analysis pipeline
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="grid md:grid-cols-5 gap-6">
              {pipelineSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <GlassCard className="p-6 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-4 rounded-full bg-primary/10 mb-4 relative">
                        <step.icon className="w-6 h-6 text-primary" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </GlassCard>

                  {/* Arrow */}
                  {index < pipelineSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-primary/50" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Models */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              Model <span className="gradient-text">Transparency</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our detection system uses state-of-the-art models trained on 
              millions of authentic and synthetic samples
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {models.map((model, index) => (
              <GlassCard
                key={model.name}
                className="p-6"
                glow="cyan"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{model.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {model.type}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-success">
                        {model.accuracy}
                      </span>
                      <p className="text-xs text-muted-foreground">Accuracy</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {model.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm text-muted-foreground">
                      Validated on benchmark datasets
                    </span>
                  </div>
                </motion.div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Explainability */}
        <section>
          <GlassCard className="p-8 md:p-12" glow="purple">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-4 rounded-full bg-accent/10 w-fit mb-6">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Explainable AI
                </h2>
                <p className="text-muted-foreground mb-6">
                  We believe in transparent AI. Every detection result includes 
                  detailed explanations of what our models found and why they 
                  flagged specific areas of concern.
                </p>
                <ul className="space-y-3">
                  {[
                    "Heatmap visualizations of suspicious regions",
                    "Confidence intervals for each finding",
                    "Natural language explanations",
                    "Audit trails for compliance",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-xl bg-muted/30 relative overflow-hidden">
                  {/* Mock explainability visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-48">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="absolute inset-0 rounded-full border border-primary/30"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.6,
                          }}
                        />
                      ))}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Brain className="w-16 h-16 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Mock attention points */}
                  {[
                    { x: 20, y: 30 },
                    { x: 70, y: 40 },
                    { x: 45, y: 70 },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-6 h-6 rounded-full bg-accent/50"
                      style={{ left: `${point.x}%`, top: `${point.y}%` }}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
};

export default TrustPage;
