import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import GlowButton from "../ui/GlowButton";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Education", path: "/education" },
  { name: "Trust", path: "/trust" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-4 mt-4">
        <div className="max-w-7xl mx-auto px-6 py-4 rounded-2xl bg-background/60 backdrop-blur-xl border border-border/50">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                className="relative p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20"
                whileHover={{ scale: 1.05 }}
              >
                <Shield className="w-6 h-6 text-primary" />
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 hsl(185 100% 50% / 0)",
                      "0 0 0 8px hsl(185 100% 50% / 0.1)",
                      "0 0 0 0 hsl(185 100% 50% / 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <span className="font-display text-xl font-bold gradient-text">
                VeriSight AI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/dashboard">
                <GlowButton size="sm">
                  <Zap className="w-4 h-4" />
                  Start Scanning
                </GlowButton>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-4 mt-2"
          >
            <div className="p-4 rounded-2xl bg-background/95 backdrop-blur-xl border border-border/50 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                  <GlowButton className="w-full">
                    <Zap className="w-4 h-4" />
                    Start Scanning
                  </GlowButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
