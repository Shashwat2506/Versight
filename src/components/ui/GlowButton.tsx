import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlowButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

export const GlowButton = ({
  children,
  variant = "primary",
  size = "md",
  glow = true,
  className,
  ...props
}: GlowButtonProps) => {
  const variants = {
    primary: cn(
      "bg-gradient-to-r from-primary to-cyber-purple text-primary-foreground",
      glow && "shadow-[0_0_20px_hsl(185_100%_50%/0.3)] hover:shadow-[0_0_30px_hsl(185_100%_50%/0.5)]"
    ),
    secondary: cn(
      "bg-secondary text-secondary-foreground border border-border",
      glow && "hover:shadow-[0_0_20px_hsl(185_100%_50%/0.2)]"
    ),
    outline: cn(
      "bg-transparent border border-primary/50 text-primary",
      "hover:bg-primary/10 hover:border-primary",
      glow && "hover:shadow-[0_0_20px_hsl(185_100%_50%/0.3)]"
    ),
    ghost: "bg-transparent text-foreground hover:bg-muted",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 font-medium rounded-lg",
        "transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default GlowButton;
