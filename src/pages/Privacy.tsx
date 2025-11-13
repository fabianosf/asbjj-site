import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Política de Privacidade
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                    1. Introdução
                  </h2>
                  <p>
                    A ASBJJ está comprometida em proteger a privacidade e segurança
                    dos dados pessoais de nossos alunos, visitantes e usuários do nosso website. Esta
                    Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos
                    suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados
                    (LGPD - Lei nº 13.709/2018).
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                    2. Informações que Coletamos
                  </h2>
                  <p>Podemos coletar as seguintes informações:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Nome completo</li>
                    <li>Endereço de e-mail</li>
                    <li>Número de telefone</li>
                    <li>Endereço residencial</li>
                    <li>Data de nascimento</li>
                    <li>Informações de saúde relevantes (quando necessário para a prática segura)</li>
                    <li>Fotografias e vídeos de eventos e aulas (com consentimento prévio)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                    3. Como Usamos suas Informações
                  </h2>
                  <p>Utilizamos suas informações pessoais para:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Processar matrículas e gerenciar sua conta de aluno</li>
                    <li>Agendar aulas e enviar lembretes</li>
                    <li>Processar pagamentos de mensalidades</li>
                    <li>Comunicar informações importantes sobre horários, eventos e mudanças</li>
                    <li>Garantir a segurança e adequação das atividades físicas</li>
                    <li>Melhorar nossos serviços e atendimento</li>
                    <li>Cumprir obrigações legais e regulatórias</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                    4. Compartilhamento de Informações
                  </h2>
                  <p>
                    Não vendemos, alugamos ou comercializamos suas informações pessoais. Podemos
                    compartilhar suas informações apenas nas seguintes situações:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Com prestadores de serviços essenciais (processamento de pagamentos)</li>
                    <li>Quando exigido por lei ou ordem judicial</li>
                    <li>Para proteção de direitos, propriedade ou segurança da academia</li>
                    <li>Com seu consentimento explícito</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                    5. Segurança dos Dados
                  </h2>
                  <p>
                    Implementamos medidas de segurança técnicas e organizacionais apropriadas para
                    proteger suas informações pessoais contra acesso não autorizado, perda, destruição
                    ou alteração. Isso inclui:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Criptografia de dados sensíveis</li>
                    <li>Acesso restrito a informações pessoais</li>
                    <li>Treinamento regular de nossa equipe sobre proteção de dados</li>
                    <li>Backups regulares e seguros</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                    6. Seus Direitos (LGPD)
                  </h2>
                  <p>De acordo com a LGPD, você tem o direito de:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Confirmar a existência de tratamento de seus dados</li>
                    <li>Acessar seus dados pessoais</li>
                    <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                    <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
                    <li>Solicitar a portabilidade de seus dados</li>
                    <li>Revogar o consentimento</li>
                    <li>
                      Obter informações sobre as entidades públicas e privadas com as quais
                      compartilhamos dados
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                    7. Retenção de Dados
                  </h2>
                  <p>
                    Mantemos suas informações pessoais pelo tempo necessário para cumprir os propósitos
                    descritos nesta política, a menos que um período de retenção mais longo seja
                    exigido ou permitido por lei.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                    8. Cookies e Tecnologias Similares
                  </h2>
                  <p>
                    Nosso website pode usar cookies para melhorar a experiência do usuário. Você pode
                    configurar seu navegador para recusar cookies, mas isso pode afetar a
                    funcionalidade do site.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                    9. Menores de Idade
                  </h2>
                  <p>
                    Para alunos menores de 18 anos, coletamos e processamos dados apenas com o
                    consentimento expresso dos pais ou responsáveis legais.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                    10. Alterações nesta Política
                  </h2>
                  <p>
                    Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre
                    mudanças significativas por e-mail ou através de aviso em nosso website.
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                    11. Contato
                  </h2>
                  <p>
                    Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de
                    Privacidade, entre em contato:
                  </p>
                  <div className="bg-secondary p-6 rounded-lg mt-4">
                    <p className="font-semibold text-foreground">ASBJJ</p>
                    <p>
                      Endereço: Blvd. 28 de Setembro, 227 - Vila Isabel
                      <br />
                      Rio de Janeiro, RJ - CEP 20551031
                    </p>
                    <p>Telefone: +55 21 96537-1514</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
