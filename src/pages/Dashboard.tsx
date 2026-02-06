import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Image,
  Video,
  Music,
  Clock,
  BarChart3,
  Eye,
  Lightbulb,
  RefreshCw,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import UploadZone from "@/components/ui/UploadZone";
import TrustScore from "@/components/ui/TrustScore";
import WaveformVisual from "@/components/ui/WaveformVisual";
import HeatmapOverlay from "@/components/ui/HeatmapOverlay";
import ScanAnimation from "@/components/ui/ScanAnimation";

type ScanStatus = "idle" | "scanning" | "complete";

interface ScanResult {
  trustScore: number;
  deepfakeProbability: number;
  confidence: number;
  mediaType: "image" | "video" | "audio";
  anomalies: string[];
  processingTime: number;
}

const mockResults: ScanResult[] = [
  {
    trustScore: 23,
    deepfakeProbability: 87,
    confidence: 94,
    mediaType: "image",
    anomalies: [
      "Facial landmark inconsistency detected",
      "Unnatural eye blinking pattern",
      "GAN artifacts in hair region",
      "Frequency domain anomalies",
    ],
    processingTime: 1.8,
  },
  {
    trustScore: 92,
    deepfakeProbability: 8,
    confidence: 96,
    mediaType: "video",
    anomalies: [],
    processingTime: 4.2,
  },
  {
    trustScore: 67,
    deepfakeProbability: 33,
    confidence: 78,
    mediaType: "audio",
    anomalies: [
      "Voice frequency irregularities",
      "Potential audio splicing detected",
    ],
    processingTime: 2.1,
  },
];

export const Dashboard = () => {
  const [scanStatus, setScanStatus] = useState<ScanStatus>("idle");
  const [result, setResult] = useState<ScanResult | null>(null);
  const [showHeatmap, setShowHeatmap] = useState(true);

  const handleUpload = (file: File) => {
    setScanStatus("scanning");
    setResult(null);

    // Simulate scanning
    setTimeout(() => {
      const randomResult =
        mockResults[Math.floor(Math.random() * mockResults.length)];
      setResult(randomResult);
      setScanStatus("complete");
    }, 3000);
  };

  const resetScan = () => {
    setScanStatus("idle");
    setResult(null);
  };

  const getStatusIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-5 h-5 text-success" />;
    if (score >= 50)
      return <AlertTriangle className="w-5 h-5 text-warning" />;
    return <XCircle className="w-5 h-5 text-destructive" />;
  };

  const getMediaIcon = (type: string) => {
    switch (type) {
      case "image":
        return Image;
      case "video":
        return Video;
      case "audio":
        return Music;
      default:
        return Image;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
            Detection <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-muted-foreground">
            Upload any image, video, or audio file for deepfake analysis
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="wait">
              {scanStatus === "idle" && (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <GlassCard className="p-6">
                    <UploadZone onUpload={handleUpload} />
                  </GlassCard>
                </motion.div>
              )}

              {scanStatus === "scanning" && (
                <motion.div
                  key="scanning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <GlassCard className="p-12">
                    <div className="relative">
                      <ScanAnimation variant="radial" />
                      <div className="flex flex-col items-center justify-center py-12 relative z-10">
                        <motion.div
                          className="p-6 rounded-full bg-primary/20 mb-6"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Shield className="w-12 h-12 text-primary" />
                        </motion.div>
                        <h3 className="text-xl font-display font-bold mb-2">
                          Analyzing Media
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Running AI models to detect manipulations...
                        </p>

                        {/* Scan progress steps */}
                        <div className="space-y-3 w-full max-w-sm">
                          {[
                            "Extracting features",
                            "Analyzing facial landmarks",
                            "Frequency domain analysis",
                            "Neural network inference",
                          ].map((step, index) => (
                            <motion.div
                              key={step}
                              className="flex items-center gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.5 }}
                            >
                              <motion.div
                                className="w-2 h-2 rounded-full bg-primary"
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: index * 0.2,
                                }}
                              />
                              <span className="text-sm text-muted-foreground">
                                {step}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        <WaveformVisual className="mt-8" bars={50} />
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              )}

              {scanStatus === "complete" && result && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Main result card */}
                  <GlassCard className="p-6 relative overflow-hidden">
                    {showHeatmap && result.mediaType === "image" && (
                      <HeatmapOverlay
                        showOverlay={result.trustScore < 50}
                        anomalies={
                          result.trustScore < 50
                            ? [
                                { x: 35, y: 30, intensity: 0.9, label: "GAN artifacts" },
                                { x: 65, y: 45, intensity: 0.7, label: "Facial inconsistency" },
                              ]
                            : []
                        }
                      />
                    )}

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      {/* Media preview placeholder */}
                      <div className="relative w-full lg:w-64 aspect-square rounded-lg bg-muted/50 flex items-center justify-center overflow-hidden">
                        {(() => {
                          const MediaIcon = getMediaIcon(result.mediaType);
                          return <MediaIcon className="w-16 h-16 text-muted-foreground" />;
                        })()}
                        <ScanAnimation variant="horizontal" isScanning={false} />
                      </div>

                      {/* Results */}
                      <div className="flex-1 space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {getStatusIcon(result.trustScore)}
                            <div>
                              <p className="font-semibold">
                                {result.trustScore >= 80
                                  ? "Verified Authentic"
                                  : result.trustScore >= 50
                                  ? "Requires Review"
                                  : "Likely Deepfake"}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Processed in {result.processingTime}s
                              </p>
                            </div>
                          </div>
                          <GlowButton
                            variant="outline"
                            size="sm"
                            onClick={resetScan}
                          >
                            <RefreshCw className="w-4 h-4" />
                            New Scan
                          </GlowButton>
                        </div>

                        <div className="flex justify-center">
                          <TrustScore score={result.trustScore} size="lg" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-lg bg-muted/30">
                            <div className="flex items-center gap-2 mb-1">
                              <BarChart3 className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                Deepfake Probability
                              </span>
                            </div>
                            <p
                              className={`text-2xl font-bold ${
                                result.deepfakeProbability > 50
                                  ? "text-destructive"
                                  : "text-success"
                              }`}
                            >
                              {result.deepfakeProbability}%
                            </p>
                          </div>
                          <div className="p-4 rounded-lg bg-muted/30">
                            <div className="flex items-center gap-2 mb-1">
                              <Eye className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                Model Confidence
                              </span>
                            </div>
                            <p className="text-2xl font-bold text-primary">
                              {result.confidence}%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>

                  {/* Anomalies */}
                  {result.anomalies.length > 0 && (
                    <GlassCard className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-warning" />
                        <h3 className="font-semibold">Detected Anomalies</h3>
                      </div>
                      <div className="space-y-3">
                        {result.anomalies.map((anomaly, index) => (
                          <motion.div
                            key={anomaly}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20"
                          >
                            <XCircle className="w-4 h-4 text-destructive shrink-0" />
                            <span className="text-sm">{anomaly}</span>
                          </motion.div>
                        ))}
                      </div>
                    </GlassCard>
                  )}

                  {/* Controls */}
                  <GlassCard className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Show Heatmap Overlay
                      </span>
                      <button
                        onClick={() => setShowHeatmap(!showHeatmap)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          showHeatmap
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {showHeatmap ? "Enabled" : "Disabled"}
                      </button>
                    </div>
                  </GlassCard>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick stats */}
            <GlassCard className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Recent Activity
              </h3>
              <div className="space-y-3">
                {[
                  { type: "Image", status: "authentic", time: "2m ago" },
                  { type: "Video", status: "deepfake", time: "15m ago" },
                  { type: "Audio", status: "suspicious", time: "1h ago" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                  >
                    <div className="flex items-center gap-3">
                      {item.type === "Image" && (
                        <Image className="w-4 h-4 text-muted-foreground" />
                      )}
                      {item.type === "Video" && (
                        <Video className="w-4 h-4 text-muted-foreground" />
                      )}
                      {item.type === "Audio" && (
                        <Music className="w-4 h-4 text-muted-foreground" />
                      )}
                      <span className="text-sm">{item.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          item.status === "authentic"
                            ? "bg-success/20 text-success"
                            : item.status === "deepfake"
                            ? "bg-destructive/20 text-destructive"
                            : "bg-warning/20 text-warning"
                        }`}
                      >
                        {item.status}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Tips */}
            <GlassCard className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-primary" />
                Detection Tips
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  Higher resolution media yields more accurate results
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  Videos should be at least 5 seconds for analysis
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  Clear audio without background noise improves detection
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
