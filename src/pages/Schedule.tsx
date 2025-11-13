import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

const Schedule = () => {
  const schedule = [
    {
      day: "Segunda-feira",
      classes: [
        { time: "07:00", modality: "Kimono - Todos os Níveis", level: "Todos os Níveis" },
        { time: "11:30", modality: "Kimono - Todos os Níveis", level: "Todos os Níveis" },
        { time: "18:00", modality: "Kimono - Todos os Níveis", level: "Todos os Níveis" },
        { time: "18:00", modality: "Kimono - Iniciantes", level: "Iniciante" },
        { time: "19:20", modality: "Kimono - Infanto Juvenil", level: "Infantil" },
        { time: "20:20", modality: "Kimono - Todos os Níveis", level: "Todos os Níveis" },
      ],
    },
    {
      day: "Terça-feira",
      classes: [
        { time: "11:30", modality: "Kimono - Todos os Níveis", level: "Todos os Níveis" },
        { time: "18:00", modality: "No Gi - Avançado", level: "Avançado" },
        { time: "18:00", modality: "Kimono - Todos os Níveis", level: "Todos os Níveis" },
        { time: "19:00", modality: "Infantil - Kimono", level: "Infantil" },
        { time: "20:00", modality: "Kimono - Todos os Níveis", level: "Todos os Níveis" },
      ],
    },
    {
      day: "Quarta-feira",
      classes: [
        { time: "07:00", modality: "Open Mat - Kimono", level: "Todos os Níveis" },
        { time: "11:30", modality: "Kimono - Todos os Níveis", level: "Todos os Níveis" },
        { time: "18:00", modality: "Kimono - Avançados", level: "Avançado" },
        { time: "18:00", modality: "Iniciantes", level: "Iniciante" },
        { time: "20:00", modality: "Treino Feminino", level: "Todos os Níveis" },
      ],
    },
    {
      day: "Quinta-feira",
      classes: [
        { time: "11:30", modality: "Todos os Níveis", level: "Todos os Níveis" },
        { time: "18:00", modality: "Iniciantes - Kimono", level: "Iniciante" },
        { time: "18:00", modality: "No Gi - Avançados", level: "Avançado" },
        { time: "19:00", modality: "Infantil 1 e 2", level: "Infantil" },
        { time: "20:00", modality: "Kimono - Todos os Níveis", level: "Todos os Níveis" },
      ],
    },
    {
      day: "Sexta-feira",
      classes: [
        { time: "07:00", modality: "Open Mat", level: "Todos os Níveis" },
        { time: "18:00", modality: "Open Mat", level: "Todos os Níveis" },
        { time: "18:00", modality: "Iniciantes", level: "Iniciante" },
        { time: "18:00", modality: "Avançados", level: "Avançado" },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Iniciante":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Avançado":
        return "bg-red-dark/20 text-red-dark dark:bg-red-dark/30 dark:text-red-dark-foreground";
      case "Infantil":
        return "bg-gold/20 text-gold-foreground dark:bg-gold/30";
      default:
        return "bg-accent/20 text-accent dark:bg-accent/30 dark:text-accent-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Grade de Horários
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Confira nossos horários e encontre a aula perfeita para sua rotina. Oferecemos turmas
              para todos os níveis e idades.
            </p>
          </div>
        </section>

        {/* Info Adicional */}
        <section className="py-8 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
              <div className="flex items-center space-x-2">
                <Clock className="h-6 w-6 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Horário de Funcionamento</p>
                  <p className="text-sm text-muted-foreground">Segunda a Sexta - 07:00 às 21:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground text-xs font-bold">i</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Domingo: Fechado (eventos especiais podem ocorrer)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabela de Horários */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {schedule.map((day, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="bg-primary text-primary-foreground px-6 py-4">
                    <h2 className="font-display font-bold text-2xl">{day.day}</h2>
                  </div>
                  <div className="divide-y divide-border">
                    {day.classes.map((classItem, classIndex) => (
                      <div
                        key={classIndex}
                        className="px-6 py-4 hover:bg-secondary/50 transition-colors"
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2 min-w-[130px]">
                              <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="font-semibold text-foreground">{classItem.time}</span>
                            </div>
                            <span className="text-foreground font-medium">{classItem.modality}</span>
                          </div>
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(
                              classItem.level
                            )}`}
                          >
                            {classItem.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Observações */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-display font-bold text-2xl mb-6 text-foreground">
                Informações Importantes
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Aula Experimental:</strong> Primeira aula
                    gratuita para novos alunos. Basta entrar em contato para agendar.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Equipamento:</strong> Kimono é obrigatório
                    após a aula experimental. Temos parceiros para aquisição com desconto.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Open Mat:</strong> Aulas de prática livre aos
                    sábados, com supervisão dos professores.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Reposição:</strong> Alunos podem repor aulas
                    em outros horários, sujeito à disponibilidade de espaço.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
              Encontrou o Horário Ideal?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Entre em contato e agende sua aula experimental gratuita. Estamos prontos para recebê-lo!
            </p>
            <Button variant="cta" size="lg" className="text-lg h-14" asChild>
              <Link to="/contato">Agende Agora</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;
