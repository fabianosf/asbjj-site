import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Users, Award } from "lucide-react";
import { siteConfig } from "@/config/seo";
import anaImage from "@/assets/ana.jpg";
import mestreImage from "@/assets/mestre.jpg";
import elesImage from "@/assets/eles.jpg";

const About = () => {
  const team = [
    {
      name: "Professor Alexandre Salgado",
      belt: "Faixa Preta 4º Grau",
      specialty: "Competição e Autodefesa",
      experience: "+20 anos de experiência, Campeão Brasileiro\nCampeão Mundial",
      image: mestreImage,
    },
    {
      name: "Professora Anna Carolina",
      belt: "Faixa Preta 3º Grau",
      specialty: "Jiu-Jitsu Feminino e Kids",
      experience: "+15 anos de experiência, Campeã Mundial",
      image: anaImage,
    },
    {
      name: "Professores Alexandre Salgado e Anna Carolina",
      belt: "Faixa Preta 3º Grau",
      specialty: "Competição e Fundamentos",
      experience: "",
      image: elesImage,
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Disciplina",
      description: "Cultivamos a disciplina através da prática consistente e respeito aos fundamentos.",
    },
    {
      icon: Heart,
      title: "Respeito",
      description: "Promovemos um ambiente de respeito mútuo, humildade e companheirismo.",
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Construímos uma família unida onde todos crescem e evoluem juntos.",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Buscamos a excelência técnica e pessoal em cada treino e desafio.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO {...siteConfig.pages.about} canonical={`${siteConfig.url}/sobre`} />
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Sobre Nossa Academia
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Mais do que uma academia de Jiu-Jitsu no Rio de Janeiro, somos uma família dedicada à filosofia e prática do Jiu-Jitsu. Localizada em Vila Isabel, a ASBJJ é referência em ensino de Jiu-Jitsu na Zona Norte do Rio de Janeiro.
            </p>
          </div>
        </section>

        {/* Nossa História */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-8 text-foreground">
                Nossa História
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Fundada em 2005, nossa academia nasceu do sonho de criar um espaço onde pessoas de
                  todas as idades pudessem descobrir o poder transformador do Jiu-Jitsu Brasileiro. Ao
                  longo de quase duas décadas, formamos centenas de alunos, desde iniciantes até
                  competidores de alto nível.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Nossa filosofia vai além da técnica: acreditamos que o Jiu-Jitsu é uma jornada de
                  autodescoberta, disciplina e crescimento pessoal. Cada treino é uma oportunidade de
                  superar limites e construir caráter.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Com uma equipe de instrutores altamente qualificados e uma comunidade acolhedora,
                  continuamos a honrar as tradições do Jiu-Jitsu enquanto inovamos em nossos métodos
                  de ensino para atender às necessidades de cada aluno.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12 text-center text-foreground">
              Nossos Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-accent-foreground" />
                      </div>
                      <h3 className="font-display font-bold text-xl mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Nossa Equipe */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12 text-center text-foreground">
              Conheça Nossa Equipe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-52 h-52 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-1 text-center">
                      {member.name}
                    </h3>
                    <p className="text-gold font-semibold text-center mb-2">{member.belt}</p>
                    <p className="text-accent font-medium text-center mb-3">{member.specialty}</p>
                    {member.experience && (
                      <p className="text-muted-foreground text-sm text-center whitespace-pre-line">
                        {member.experience}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-display font-bold text-2xl mb-4 text-primary">Missão</h3>
                  <p className="text-muted-foreground">
                    Proporcionar ensino de excelência em Jiu-Jitsu, formando não apenas atletas, mas
                    cidadãos disciplinados, respeitosos e confiantes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-display font-bold text-2xl mb-4 text-primary">Visão</h3>
                  <p className="text-muted-foreground">
                    Ser referência em ensino de Jiu-Jitsu, reconhecida pela qualidade técnica e pelo
                    impacto positivo na vida de nossos alunos.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-display font-bold text-2xl mb-4 text-primary">Valores</h3>
                  <p className="text-muted-foreground">
                    Disciplina, respeito, humildade, perseverança, trabalho em equipe e busca
                    contínua pela excelência.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
