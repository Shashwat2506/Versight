import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeatmapOverlayProps {
  className?: string;
  showOverlay?: boolean;
  anomalies?: Array<{ x: number; y: number; intensity: number; label?: string }>;
}

export const HeatmapOverlay = ({
  className,
  showOverlay = true,
  anomalies = [
    { x: 30, y: 40, intensity: 0.9, label: "Facial artifacts" },
    { x: 70, y: 35, intensity: 0.7, label: "Lighting inconsistency" },
    { x: 50, y: 60, intensity: 0.5, label: "Edge distortion" },
  ],
}: HeatmapOverlayProps) => {
  if (!showOverlay) return null;

  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(hsl(185 100% 50% / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(185 100% 50% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Anomaly hotspots */}
      {anomalies.map((anomaly, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${anomaly.x}%`,
            top: `${anomaly.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
        >
          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              width: 60 + anomaly.intensity * 40,
              height: 60 + anomaly.intensity * 40,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(circle, hsl(0 84% 60% / ${anomaly.intensity * 0.5}) 0%, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Center point */}
          <motion.div
            className="relative w-4 h-4 rounded-full bg-destructive"
            style={{
              boxShadow: `0 0 10px hsl(0 84% 60%), 0 0 20px hsl(0 84% 60% / 0.5)`,
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {/* Crosshair */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-[1px] bg-destructive/50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-[1px] bg-destructive/50" />
          </motion.div>

          {/* Label */}
          {anomaly.label && (
            <motion.div
              className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded bg-destructive/90 text-xs text-destructive-foreground"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.8 }}
            >
              {anomaly.label}
            </motion.div>
          )}
        </motion.div>
      ))}

      {/* Corner brackets */}
      <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-primary/50" />
      <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-primary/50" />
      <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-primary/50" />
      <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-primary/50" />
    </div>
  );
};

export default HeatmapOverlay;
