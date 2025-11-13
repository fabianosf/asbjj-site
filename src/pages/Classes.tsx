import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ModalityCard from "@/components/ModalityCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import kidsImage from "@/assets/kids-class.jpg";
import womensImage from "@/assets/womens-class.jpg";
import adultImage from "@/assets/adult-class.jpg";

const Classes = () => {
  const modalities = [
    {
      title: "Jiu-Jitsu Adulto",
      description: "Programa completo para adultos iniciantes e avançados.",
      imageSrc: adultImage,
      features: [
        "Técnicas de autodefesa eficazes",
        "Condicionamento físico completo",
        "Preparação para competições",
        "Desenvolvimento de disciplina mental",
      ],
    },
    {
      title: "Jiu-Jitsu Kids",
      description: "Aulas especiais para crianças de 4 a 12 anos em ambiente seguro e divertido.",
      imageSrc: kidsImage,
      features: [
        "Desenvolvimento motor e coordenação",
        "Disciplina e respeito desde cedo",
        "Autoconfiança e autoestima",
        "Bullying prevention e autodefesa",
      ],
    },
    {
      title: "Jiu-Jitsu Feminino",
      description: "Turmas exclusivas focadas no empoderamento feminino através da arte suave.",
      imageSrc: womensImage,
      features: [
        "Ambiente acolhedor e seguro",
        "Autodefesa específica para mulheres",
        "Fortalecimento físico e mental",
        "Comunidade de apoio e sororidade",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Nossas Modalidades
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Programas especializados para todas as idades e níveis de experiência. Encontre a
              modalidade perfeita para você.
            </p>
          </div>
        </section>

        {/* Modalidades Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {modalities.map((modality, index) => (
                <ModalityCard key={index} {...modality} />
              ))}
            </div>
          </div>
        </section>

        {/* Por Que o Jiu-Jitsu? */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12 text-center text-foreground">
              Por Que Praticar Jiu-Jitsu?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-foreground text-2xl font-bold">🛡️</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Autodefesa</h3>
                <p className="text-muted-foreground">
                  Aprenda técnicas eficazes para se defender em situações reais.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-foreground text-2xl font-bold">💪</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Condicionamento</h3>
                <p className="text-muted-foreground">
                  Melhore sua força, flexibilidade e resistência cardiovascular.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-foreground text-2xl font-bold">🧠</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Disciplina Mental</h3>
                <p className="text-muted-foreground">
                  Desenvolva foco, controle emocional e resiliência.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-foreground text-2xl font-bold">🤝</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Comunidade</h3>
                <p className="text-muted-foreground">
                  Faça parte de uma família unida e apoiadora.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
              Pronto para Começar sua Jornada?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Agende sua aula experimental gratuita e descubra como o Jiu-Jitsu pode transformar sua
              vida.
            </p>
            <Button variant="cta" size="lg" className="text-lg h-14" asChild>
              <Link to="/contato">Agende sua Aula Experimental Gratuita</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Classes;
