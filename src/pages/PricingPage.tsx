import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Check,
  Zap,
  Shield,
  Building2,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";

const plans = [
  {
    name: "Free",
    description: "For individuals exploring deepfake detection",
    price: "$0",
    period: "forever",
    features: [
      "5 scans per day",
      "Basic trust score",
      "Image analysis only",
      "Standard processing speed",
      "Community support",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    description: "For professionals and small teams",
    price: "$49",
    period: "per month",
    features: [
      "Unlimited scans",
      "Advanced trust score",
      "Image + Video + Audio",
      "Priority processing",
      "Heatmap visualizations",
      "Detailed forensic reports",
      "Email support",
      "API access (1000 calls/mo)",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations requiring maximum security",
    price: "Custom",
    period: "contact us",
    features: [
      "Unlimited everything",
      "Law-enforcement grade verification",
      "On-premise deployment option",
      "Custom model training",
      "Real-time video streaming",
      "Dedicated account manager",
      "24/7 priority support",
      "Unlimited API access",
      "SOC 2 compliance reports",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "How accurate is the deepfake detection?",
    answer:
      "Our system achieves 99.7% accuracy on standard benchmarks. However, accuracy can vary depending on the quality and type of media being analyzed.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "We support all major image formats (JPG, PNG, WebP), video formats (MP4, MOV, AVI), and audio formats (MP3, WAV, M4A).",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. All uploads are encrypted in transit and at rest. We're SOC 2 Type II certified and GDPR compliant. Media is automatically deleted after processing unless you choose to save it.",
  },
  {
    question: "Can I use the API for commercial purposes?",
    answer:
      "Yes, Pro and Enterprise plans include API access for commercial use. See our API documentation for rate limits and terms.",
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer:
      "Yes. Our Enterprise plan includes custom model training, on-premise deployment, and dedicated support. Contact our sales team for details.",
  },
];

export const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly"
  );
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs. Start free and upgrade as you grow.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 p-1 rounded-lg bg-muted/50">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                billingPeriod === "annual"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-success/20 text-success px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard
                className={`p-8 h-full flex flex-col relative ${
                  plan.popular ? "border-primary/50" : ""
                }`}
                glow={plan.popular ? "cyan" : "none"}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    {plan.name === "Free" && (
                      <Sparkles className="w-5 h-5 text-muted-foreground" />
                    )}
                    {plan.name === "Pro" && (
                      <Zap className="w-5 h-5 text-primary" />
                    )}
                    {plan.name === "Enterprise" && (
                      <Building2 className="w-5 h-5 text-accent" />
                    )}
                    <h3 className="text-xl font-display font-bold">{plan.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-display font-bold">
                    {billingPeriod === "annual" && plan.price !== "$0" && plan.price !== "Custom"
                      ? `$${Math.floor(parseInt(plan.price.slice(1)) * 0.8)}`
                      : plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground ml-2">
                      /{billingPeriod === "annual" ? "month, billed annually" : plan.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link to={plan.name === "Enterprise" ? "/about" : "/dashboard"}>
                  <GlowButton
                    variant={plan.popular ? "primary" : "outline"}
                    className="w-full"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </GlowButton>
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              Compare <span className="gradient-text">Features</span>
            </h2>
          </motion.div>

          <GlassCard className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center">Free</th>
                    <th className="px-6 py-4 text-center bg-primary/5">Pro</th>
                    <th className="px-6 py-4 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30">
                  {[
                    ["Daily scans", "5", "Unlimited", "Unlimited"],
                    ["Image analysis", "✓", "✓", "✓"],
                    ["Video analysis", "—", "✓", "✓"],
                    ["Audio analysis", "—", "✓", "✓"],
                    ["Heatmap overlay", "—", "✓", "✓"],
                    ["API access", "—", "1000/mo", "Unlimited"],
                    ["Custom training", "—", "—", "✓"],
                    ["SLA guarantee", "—", "—", "✓"],
                  ].map(([feature, free, pro, enterprise], i) => (
                    <tr key={i}>
                      <td className="px-6 py-4 text-muted-foreground">
                        {feature}
                      </td>
                      <td className="px-6 py-4 text-center">{free}</td>
                      <td className="px-6 py-4 text-center bg-primary/5 text-primary font-medium">
                        {pro}
                      </td>
                      <td className="px-6 py-4 text-center">{enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </section>

        {/* FAQs */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <GlassCard className="overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      className="text-muted-foreground"
                    >
                      ▼
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-muted-foreground pl-14">
                      {faq.answer}
                    </div>
                  </motion.div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
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
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team can build a tailored solution for your organization's specific needs.
            </p>
            <Link to="/about">
              <GlowButton>
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </GlowButton>
            </Link>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;
