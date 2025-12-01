import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/config/seo";
import { MapPin, Phone, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzzyzylg";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: `Nova mensagem de contato - ${formData.name}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve. Obrigado!",
        });
        // Limpar formulário
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Erro ao enviar mensagem");
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO {...siteConfig.pages.contact} canonical={`${siteConfig.url}/contato`} />
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Tire suas dúvidas, agende sua aula experimental gratuita ou venha nos visitar. Estamos
              prontos para recebê-lo!
            </p>
          </div>
        </section>

        {/* Contato e Formulário */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Informações de Contato */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display font-bold text-3xl mb-6 text-foreground">
                    Informações de Contato
                  </h2>
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-6 w-6 text-accent-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">Endereço</h3>
                            <p className="text-muted-foreground">
                              Blvd. 28 de Setembro, 227
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                            <Phone className="h-6 w-6 text-accent-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">Telefone</h3>
                            <p className="text-muted-foreground">
                              <a
                                href="tel:+5521965371514"
                                className="hover:text-accent transition-colors"
                              >
                                +55 21 96537-1514
                              </a>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                            <Instagram className="h-6 w-6 text-accent-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">Instagram</h3>
                            <p className="text-muted-foreground">
                              <a
                                href="https://www.instagram.com/alexandresalgadobjj/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-accent transition-colors"
                              >
                                https://www.instagram.com/alexandresalgadobjj/
                              </a>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                            <Facebook className="h-6 w-6 text-accent-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">Facebook</h3>
                            <p className="text-muted-foreground">
                              <a
                                href="https://www.facebook.com/alexandre.salgado1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-accent transition-colors"
                              >
                                https://www.facebook.com/alexandre.salgado1
                              </a>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                            <Clock className="h-6 w-6 text-accent-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">Horário de Atendimento</h3>
                            <p className="text-muted-foreground">
                              Segunda a Sexta: 07:00 às 21:00
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                </div>
              </div>

              {/* Formulário de Contato */}
              <div>
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="font-display font-bold text-2xl mb-6 text-foreground">
                      Envie sua Mensagem
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Seu nome completo"
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(11) 98765-4321"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Mensagem *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Conte-nos como podemos ajudá-lo. Gostaria de agendar uma aula experimental?"
                          required
                          rows={6}
                          className="mt-1"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        variant="cta" 
                        size="lg" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        Responderemos sua mensagem em até 24 horas úteis.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Áreas Atendidas */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4 text-foreground">
                Atendemos Toda a Zona Norte do Rio de Janeiro
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nossa localização em Vila Isabel é estratégica e de fácil acesso para alunos de diversos bairros da Zona Norte.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {["Tijuca", "Vila Isabel", "Maracanã", "Grajaú", "Méier"].map((bairro) => (
                  <div
                    key={bairro}
                    className="bg-secondary p-4 rounded-lg border border-border"
                  >
                    <p className="font-semibold text-foreground">{bairro}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                E também atendemos Andaraí, Praça da Bandeira, Engenho Novo e toda a região próxima.
              </p>
            </div>
          </div>
        </section>

        {/* Mapa */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-display font-bold text-3xl mb-8 text-center text-foreground">
              Nossa Localização
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps?q=Blvd.+28+de+Setembro,+227,+Vila+Isabel,+Rio+de+Janeiro&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Academia"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Botão Flutuante WhatsApp */}
      <a
        href="https://wa.me/5521965371514"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group animate-bounce hover:animate-none"
        aria-label="Fale conosco no WhatsApp"
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-400"></span>
          </span>
        </div>
        <span className="font-semibold hidden sm:inline-block group-hover:scale-105 transition-transform">
          Fale conosco
        </span>
      </a>
    </div>
  );
};

export default Contact;
