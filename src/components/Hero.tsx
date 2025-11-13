import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jiujitsu.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Praticantes de Jiu-Jitsu treinando"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/65" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Jiu-Jitsu: Disciplina, Força e Comunidade
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
            Transforme-se através da Arte Suave. Desenvolva autodefesa, condicionamento físico e
            disciplina em um ambiente acolhedor para todas as idades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="cta" size="lg" className="text-lg h-14" asChild>
              <Link to="/contato">
                Agende sua Aula Experimental Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg h-14 border-2 border-white text-white hover:bg-white hover:text-black" asChild>
              <Link to="/modalidades">Conheça Nossas Modalidades</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
