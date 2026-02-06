import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TrustScoreProps {
  score: number; // 0-100
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  animated?: boolean;
}

export const TrustScore = ({
  score,
  size = "md",
  showLabel = true,
  animated = true,
}: TrustScoreProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return { color: "hsl(142 76% 45%)", label: "Verified Authentic" };
    if (score >= 50) return { color: "hsl(38 92% 50%)", label: "Suspicious" };
    return { color: "hsl(0 84% 60%)", label: "Likely Deepfake" };
  };

  const { color, label } = getScoreColor(score);

  const sizes = {
    sm: { width: 80, strokeWidth: 6, fontSize: "text-lg" },
    md: { width: 120, strokeWidth: 8, fontSize: "text-2xl" },
    lg: { width: 180, strokeWidth: 10, fontSize: "text-4xl" },
  };

  const { width, strokeWidth, fontSize } = sizes[size];
  const radius = (width - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = ((100 - score) / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width, height: width }}>
        {/* Background circle */}
        <svg width={width} height={width} className="transform -rotate-90">
          <circle
            cx={width / 2}
            cy={width / 2}
            r={radius}
            fill="none"
            stroke="hsl(217 33% 15%)"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <motion.circle
            cx={width / 2}
            cy={width / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: animated ? progress : progress }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              filter: `drop-shadow(0 0 10px ${color})`,
            }}
          />
        </svg>
        
        {/* Score text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className={cn("font-display font-bold", fontSize)}
            style={{ color }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {animated ? (
              <Counter value={score} />
            ) : (
              score
            )}
          </motion.span>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            Trust Score
          </span>
        </div>
      </div>

      {showLabel && (
        <motion.div
          className={cn(
            "px-3 py-1 rounded-full text-sm font-medium",
            score >= 80 && "bg-success/20 text-success",
            score >= 50 && score < 80 && "bg-warning/20 text-warning",
            score < 50 && "bg-destructive/20 text-destructive"
          )}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {label}
        </motion.div>
      )}
    </div>
  );
};

const Counter = ({ value }: { value: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {value}
      </motion.span>
    </motion.span>
  );
};

export default TrustScore;
