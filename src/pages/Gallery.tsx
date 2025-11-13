import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-jiujitsu.jpg";
import galleryHeroImage from "@/assets/gallery-aula-progresso.jpg";
import professorImage from "@/assets/professor.jpg";
import criancasImage from "@/assets/criancas.jpg";
import tatameImage from "@/assets/tatame.jpg";
import tatame2Image from "@/assets/tatame2.jpg";
import nogiImage from "@/assets/nogi.jpg";
import kidsImage from "@/assets/kids-class.jpg";
import womensImage from "@/assets/womens-class.jpg";
import adultImage from "@/assets/adult-class.jpg";

const Gallery = () => {
  const images = [
    { src: galleryHeroImage, alt: "Aula de Jiu-Jitsu em progresso" },
    { src: tatameImage, alt: "Tatame 1" },
    { src: nogiImage, alt: "Aula de No-Gi" },
    { src: womensImage, alt: "Turma feminina de Jiu-Jitsu" },
    { src: tatame2Image, alt: "Tatame 2" },
    { src: adultImage, alt: "Turma do Jiu-Jitsu" },
    { src: kidsImage, alt: "Kids aprendendo Jiu-Jitsu" },
    { src: criancasImage, alt: "Turma infantil de Jiu-Jitsu" },
    { src: professorImage, alt: "Comunidade unida no tatame" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Galeria de Fotos
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Momentos especiais capturados no tatame. Conheça nossa comunidade, eventos e o dia a
              dia da academia.
            </p>
          </div>
        </section>

        {/* Galeria Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer aspect-square"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-primary-foreground font-medium p-4">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos em Galeria */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12 text-center text-foreground">
              Depoimentos de Alunos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Desde que comecei na academia, minha vida mudou completamente. Encontrei não apenas
                  uma arte marcial, mas uma família e um propósito. A técnica dos professores é
                  excepcional!"
                </p>
                <p className="font-semibold text-foreground">- Carlos Santos</p>
                <p className="text-sm text-muted-foreground">Aluno há 3 anos</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Minha filha está adorando as aulas kids! Ela desenvolveu muito a coordenação,
                  disciplina e autoconfiança. Os professores são pacientes e dedicados."
                </p>
                <p className="font-semibold text-foreground">- Ana Silva</p>
                <p className="text-sm text-muted-foreground">Mãe de aluna</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "O Jiu-Jitsu feminino aqui é incrível! Ambiente acolhedor, seguro e empoderante.
                  Aprendi muito sobre autodefesa e fiz amigas para a vida toda."
                </p>
                <p className="font-semibold text-foreground">- Mariana Costa</p>
                <p className="text-sm text-muted-foreground">Aluna há 2 anos</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
              Venha Fazer Parte da Nossa História
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Esses momentos podem ser seus também. Agende sua aula experimental e comece sua jornada
              no Jiu-Jitsu.
            </p>
            <Button variant="cta" size="lg" className="text-lg h-14" asChild>
              <Link to="/contato">Agende sua Aula Experimental</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
