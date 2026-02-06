import { Link } from "react-router-dom";
import { Shield, Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Pricing", path: "/pricing" },
    { name: "API Docs", path: "/about" },
    { name: "Enterprise", path: "/pricing" },
  ],
  Resources: [
    { name: "Education Hub", path: "/education" },
    { name: "Trust & Verification", path: "/trust" },
    { name: "Research", path: "/about" },
    { name: "Blog", path: "/about" },
  ],
  Company: [
    { name: "About Us", path: "/about" },
    { name: "Ethics", path: "/about" },
    { name: "Privacy Policy", path: "/about" },
    { name: "Terms of Service", path: "/about" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-sm">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="font-display text-xl font-bold gradient-text">
                VeriSight AI
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
              Detect the truth in a world of AI illusions. Enterprise-grade deepfake 
              detection powered by cutting-edge AI technology.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 VeriSight AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
