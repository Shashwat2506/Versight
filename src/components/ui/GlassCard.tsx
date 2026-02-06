import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "cyan" | "purple" | "pink" | "none";
  variant?: "default" | "darker" | "lighter";
}

export const GlassCard = ({
  children,
  className,
  hover = true,
  glow = "none",
  variant = "default",
  ...props
}: GlassCardProps) => {
  const glowStyles = {
    cyan: "hover:shadow-[0_0_30px_hsl(185_100%_50%/0.2)]",
    purple: "hover:shadow-[0_0_30px_hsl(270_95%_60%/0.2)]",
    pink: "hover:shadow-[0_0_30px_hsl(330_90%_60%/0.2)]",
    none: "",
  };

  const variantStyles = {
    default: "bg-card/60",
    darker: "bg-background/80",
    lighter: "bg-card/80",
  };

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-xl backdrop-blur-xl border border-border/50",
        variantStyles[variant],
        hover && "transition-all duration-300 hover:border-primary/40",
        glowStyles[glow],
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
