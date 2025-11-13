import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logoImage}
                alt="ASBJJ Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-display font-bold text-lg">ASBJJ</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Transforme sua vida através da disciplina, respeito e a arte suave do Jiu-Jitsu. Uma
              comunidade para todas as idades.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/sobre"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/modalidades"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Modalidades
                </Link>
              </li>
              <li>
                <Link
                  to="/horarios"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Horários
                </Link>
              </li>
              <li>
                <Link
                  to="/galeria"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  to="/privacidade"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Blvd. 28 de Setembro, 227 - Vila Isabel
                  <br />
                  Rio de Janeiro, RJ - CEP 20551031
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+5521965371514"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  (21) 96537-1514
                </a>
              </li>
            </ul>
            <div className="flex flex-col space-y-2 mt-4">
              <a
                href="https://www.instagram.com/alexandresalgadobjj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm flex items-center space-x-2"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/alexandre.salgado1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors text-sm flex items-center space-x-2"
              >
                <Facebook className="h-5 w-5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Fabiano Sousa de Freitas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
