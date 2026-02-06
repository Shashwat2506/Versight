import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WaveformVisualProps {
  className?: string;
  bars?: number;
  isPlaying?: boolean;
  variant?: "default" | "gradient" | "glow";
}

export const WaveformVisual = ({
  className,
  bars = 40,
  isPlaying = true,
  variant = "gradient",
}: WaveformVisualProps) => {
  const getBarColor = (index: number, variant: string) => {
    if (variant === "gradient") {
      const hue = 185 + (index / bars) * 85; // Cyan to purple
      return `hsl(${hue} 100% 50%)`;
    }
    return "hsl(185 100% 50%)";
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-[2px] h-20",
        className
      )}
    >
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className={cn(
            "w-1 rounded-full",
            variant === "glow" && "shadow-[0_0_5px_currentColor]"
          )}
          style={{
            backgroundColor: getBarColor(i, variant),
          }}
          animate={
            isPlaying
              ? {
                  height: [
                    `${20 + Math.random() * 30}%`,
                    `${50 + Math.random() * 50}%`,
                    `${20 + Math.random() * 30}%`,
                  ],
                }
              : { height: "20%" }
          }
          transition={{
            duration: 0.5 + Math.random() * 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.02,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default WaveformVisual;
