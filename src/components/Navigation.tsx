import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Início" },
    { to: "/sobre", label: "Sobre Nós" },
    { to: "/modalidades", label: "Modalidades" },
    { to: "/horarios", label: "Horários" },
    { to: "/galeria", label: "Galeria" },
    { to: "/contato", label: "Contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logoImage}
              alt="ASBJJ Logo"
              className="h-14 w-14 object-contain"
            />
            <span className="font-display font-bold text-xl text-foreground hidden sm:inline">
              ASBJJ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive(link.to)
                    ? "text-accent font-semibold"
                    : "text-foreground hover:text-accent hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contato">Agende sua Aula</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-md text-base font-medium transition-colors",
                    isActive(link.to)
                      ? "text-accent bg-secondary font-semibold"
                      : "text-foreground hover:text-accent hover:bg-secondary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button variant="cta" size="lg" className="w-full" asChild>
                  <Link to="/contato" onClick={() => setIsOpen(false)}>
                    Agende sua Aula
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
