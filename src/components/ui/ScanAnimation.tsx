import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScanAnimationProps {
  isScanning?: boolean;
  className?: string;
  variant?: "vertical" | "horizontal" | "radial";
}

export const ScanAnimation = ({
  isScanning = true,
  className,
  variant = "vertical",
}: ScanAnimationProps) => {
  if (!isScanning) return null;

  if (variant === "radial") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-primary/30"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "horizontal") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        <motion.div
          className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent"
          initial={{ left: "-5%" }}
          animate={{ left: "105%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-primary/20 to-transparent"
          initial={{ left: "-20%" }}
          animate={{ left: "100%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    );
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ top: "-5%" }}
        animate={{ top: "105%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute left-0 right-0 h-20 bg-gradient-to-b from-primary/20 to-transparent"
        initial={{ top: "-20%" }}
        animate={{ top: "100%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default ScanAnimation;
