import { motion } from "framer-motion";
import { Star, Check, MessageCircle, TrendingUp, Users, Shield, Zap, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SalesPageProps {
  points: number;
  onContinue: () => void;
}

const testimonials = [
  {
    name: "Lucas M.",
    message: "Fiz R$ 2.800 na primeira semana! Os fornecedores são incríveis.",
    revenue: "R$ 8.400/mês",
  },
  {
    name: "Ana Paula",
    message: "Nunca pensei que vender contas fosse tão lucrativo. Obrigada GGMAX!",
    revenue: "R$ 5.200/mês",
  },
  {
    name: "Pedro H.",
    message: "Saí do CLT graças ao método. Agora trabalho do celular.",
    revenue: "R$ 12.000/mês",
  },
];

const benefits = [
  { icon: Users, text: "Acesso a +50 fornecedores validados" },
  { icon: Shield, text: "Contas 100% seguras e verificadas" },
  { icon: TrendingUp, text: "Margem de lucro de 200% a 500%" },
  { icon: Zap, text: "Suporte 24h via WhatsApp" },
  { icon: Gift, text: "Bônus: Scripts de venda prontos" },
];

export const SalesPage = ({ points, onContinue }: SalesPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-4 px-4 border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="container max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">GG</span>
            </div>
            <span className="font-bold text-foreground">MAX</span>
          </div>
          <div className="flex items-center gap-1 bg-warning/10 px-3 py-1 rounded-full">
            <Star className="w-4 h-4 text-warning" fill="currentColor" />
            <span className="text-sm font-bold text-warning">{points} GG Points</span>
          </div>
        </div>
      </header>

      <main className="pb-32">
        {/* Hero Section */}
        <section className="px-4 py-8 bg-gradient-to-b from-primary/5 to-background">
          <div className="container max-w-md mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <span className="inline-block px-3 py-1 bg-success/10 text-success text-sm font-medium rounded-full">
                Baseado nas suas respostas
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                Você tem o perfil ideal para o{" "}
                <span className="text-primary">Método GGMAX</span>
              </h1>
              <p className="text-muted-foreground">
                O método que já transformou +2.847 pessoas em vendedores profissionais de contas de jogos.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Is Section */}
        <section className="px-4 py-8">
          <div className="container max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 shadow-soft space-y-4"
            >
              <h2 className="text-xl font-bold text-foreground">
                O que é o Método GGMAX?
              </h2>
              <p className="text-muted-foreground">
                É o <strong className="text-foreground">Método Russo</strong> adaptado para o Brasil. Uma estratégia comprovada de compra e venda de contas de jogos que permite faturar de R$ 3.000 a R$ 15.000 por mês trabalhando apenas pelo celular.
              </p>
              <p className="text-muted-foreground">
                Com o <strong className="text-foreground">GGMAX</strong>, você recebe acesso a fornecedores secretos, contas verificadas e todo o suporte para começar a vender hoje mesmo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-4 py-8 bg-secondary/30">
          <div className="container max-w-md mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-foreground mb-6 text-center"
            >
              O que você vai receber:
            </motion.h2>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-soft"
                >
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-success" />
                  </div>
                  <span className="font-medium text-foreground">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 py-8">
          <div className="container max-w-md mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold text-foreground mb-6 text-center"
            >
              Resultados dos Alunos
            </motion.h2>

            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-4 shadow-soft"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-success" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-foreground">{testimonial.name}</span>
                        <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full font-medium">
                          {testimonial.revenue}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">{testimonial.message}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-warning" fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Avaliação <strong className="text-foreground">4.9/5</strong> baseada em 847 reviews
              </p>
            </motion.div>
          </div>
        </section>

        {/* Points CTA */}
        <section className="px-4 py-8">
          <div className="container max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-6 text-center text-primary-foreground"
            >
              <Gift className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">
                Missão Cumprida!
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Você acumulou <strong>{points} GG Points</strong> e desbloqueou um desconto exclusivo!
              </p>
              <div className="bg-primary-foreground/10 rounded-xl p-4 mb-4">
                <p className="text-sm mb-1">Troque seus pontos por:</p>
                <p className="text-2xl font-extrabold">70% DE DESCONTO</p>
              </div>
              <Button
                onClick={onContinue}
                size="lg"
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 py-6 text-lg font-bold rounded-xl"
              >
                Resgatar Recompensa
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};
