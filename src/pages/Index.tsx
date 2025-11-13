import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ModalityCard from "@/components/ModalityCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Heart, Users, Trophy, Calendar, Star } from "lucide-react";
import kidsImage from "@/assets/kids-class.jpg";
import womensImage from "@/assets/womens-class.jpg";
import adultImage from "@/assets/adult-class.jpg";

const Index = () => {
  const modalities = [
    {
      title: "Jiu-Jitsu Adulto",
      description: "Programa completo para adultos iniciantes e avançados.",
      imageSrc: adultImage,
      features: [
        "Técnicas de autodefesa eficazes",
        "Condicionamento físico completo",
        "Preparação para competições",
      ],
    },
    {
      title: "Jiu-Jitsu Kids",
      description: "Aulas especiais para crianças em ambiente seguro e divertido.",
      imageSrc: kidsImage,
      features: [
        "Desenvolvimento motor e coordenação",
        "Disciplina e respeito desde cedo",
        "Autoconfiança e autoestima",
      ],
    },
    {
      title: "Jiu-Jitsu Feminino",
      description: "Turmas exclusivas focadas no empoderamento feminino.",
      imageSrc: womensImage,
      features: [
        "Ambiente acolhedor e seguro",
        "Autodefesa específica para mulheres",
        "Comunidade de apoio e sororidade",
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Autodefesa Eficaz",
      description: "Aprenda técnicas comprovadas de autodefesa para situações reais da vida.",
    },
    {
      icon: Heart,
      title: "Saúde e Bem-Estar",
      description: "Melhore seu condicionamento físico, flexibilidade e saúde cardiovascular.",
    },
    {
      icon: Users,
      title: "Comunidade Unida",
      description: "Faça parte de uma família de praticantes comprometidos e apoiadores.",
    },
    {
      icon: Trophy,
      title: "Disciplina Mental",
      description: "Desenvolva foco, resiliência e controle emocional através da prática.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Sobre a Academia */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
              Mais do que Luta, um Estilo de Vida
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Somos uma academia dedicada ao ensino de Jiu-Jitsu Brasileiro com excelência técnica e
              respeito aos valores tradicionais. Nossa missão é formar não apenas atletas, mas
              indivíduos disciplinados, confiantes e resilientes através da arte suave.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/sobre">Conheça Nossa História</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/horarios">Ver Horários</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-foreground">
              Nossas Modalidades
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Programas especializados para todas as idades e níveis de experiência
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {modalities.map((modality, index) => (
              <ModalityCard key={index} {...modality} />
            ))}
          </div>
          <div className="text-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/modalidades">Explorar Todas as Modalidades</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Por Que o Jiu-Jitsu */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-foreground">
              Por Que Praticar Jiu-Jitsu?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforme sua vida através dos benefícios comprovados da arte suave
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              O Que Nossos Alunos Dizem
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Histórias reais de transformação através do Jiu-Jitsu
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-primary-foreground/90 mb-4 italic leading-relaxed">
                "Desde que comecei na academia, minha vida mudou completamente. Encontrei não apenas
                uma arte marcial, mas uma família e um propósito."
              </p>
              <p className="font-semibold">Carlos Santos</p>
              <p className="text-sm text-primary-foreground/70">Aluno há 3 anos</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-primary-foreground/90 mb-4 italic leading-relaxed">
                "Minha filha está adorando! Ela desenvolveu muito a coordenação, disciplina e
                autoconfiança. Os professores são incríveis."
              </p>
              <p className="font-semibold">Ana Silva</p>
              <p className="text-sm text-primary-foreground/70">Mãe de aluna</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-primary-foreground/90 mb-4 italic leading-relaxed">
                "O Jiu-Jitsu feminino aqui é incrível! Ambiente acolhedor, seguro e empoderante. Fiz
                amigas para a vida toda."
              </p>
              <p className="font-semibold">Mariana Costa</p>
              <p className="text-sm text-primary-foreground/70">Aluna há 2 anos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Calendar className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
              Pronto para Começar sua Jornada?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Não espere mais para transformar sua vida. Agende agora sua aula experimental gratuita
              e descubra o poder do Jiu-Jitsu. Sem compromisso, sem taxa de matrícula na primeira
              visita.
            </p>
            <Button variant="cta" size="lg" className="text-lg h-14" asChild>
              <Link to="/contato">Agende sua Aula Experimental Gratuita</Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Resposta em até 24 horas • Agende o melhor horário para você
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
