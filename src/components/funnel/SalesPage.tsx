import { motion } from "framer-motion";
import { Star, Check, Users, Shield, Zap, Gift, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import resultado1 from "@/assets/resultado1.png";
import resultado2 from "@/assets/resultado2.png";
import resultado3 from "@/assets/resultado3.png";
import resultado4 from "@/assets/resultado4.png";

interface SalesPageProps {
  points: number;
  onContinue: () => void;
}

const resultImages = [resultado1, resultado2, resultado3, resultado4];

const benefits = [{
  icon: Users,
  text: "Acesso a +50 fornecedores validados"
}, {
  icon: Shield,
  text: "Contas 100% seguras e verificadas"
}, {
  icon: Zap,
  text: "Montagem de ofertas, preços e títulos que convertem"
}, {
  icon: Gift,
  text: "Técnicas de bundles, upsells e aumento de ticket médio"
}, {
  icon: Star,
  text: "Bônus: 10 produtos campeões de vendas"
}];
export const SalesPage = ({
  points,
  onContinue
}: SalesPageProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % resultImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + resultImages.length) % resultImages.length);
  };
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-4 px-4 border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="container max-w-md mx-auto flex items-end justify-between">
          
          <div className="gap-1 bg-warning/10 px-3 py-1 rounded-full flex items-center justify-start">
            <Star className="w-4 h-4 text-warning" fill="currentColor" />
            <span className="text-sm font-bold text-warning">{points} GG Points</span>
          </div>
        </div>
      </header>

      <main className="pb-32">
        {/* Hero Section */}
        <section className="px-4 py-8 bg-gradient-to-b from-primary/5 to-background">
          <div className="container max-w-md mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="space-y-4">
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
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="bg-card rounded-2xl p-6 shadow-soft space-y-4">
              <h2 className="text-xl font-bold text-foreground">
                O que é o Método GGMAX?
              </h2>
              <p className="text-muted-foreground">
                É o <strong className="text-foreground">Método Russo</strong> adaptado para o Brasil. Um método criado para ajudar qualquer pessoa a vender com eficiência dentro da GGMAX que permite faturar de R$ 2.000 a R$ 10.000 por mês trabalhando apenas pelo celular.
              </p>
              <p className="text-muted-foreground">
                Com o <strong className="text-foreground">Método GGMAX</strong>, você recebe acesso a fornecedores secretos, contas verificadas, aprende na prática a montar anúncios completos e muito mais. O objetivo do método é simplificar todo o processo de vender na GGMAX com estratégias testadas e comprovadas, permitindo que qualquer pessoa alcance resultados reais mesmo começando do zero.    


 



              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-4 py-8 bg-secondary/30">
          <div className="container max-w-md mx-auto">
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-xl font-bold text-foreground mb-6 text-center">
              O que você vai receber:
            </motion.h2>
            <div className="space-y-3">
              {benefits.map((benefit, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-soft">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-success" />
                  </div>
                  <span className="font-medium text-foreground">{benefit.text}</span>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Results Carousel */}
        <section className="px-4 py-8">
          <div className="container max-w-md mx-auto">
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-xl font-bold text-foreground mb-6 text-center">
              Resultados dos Alunos
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-card rounded-2xl p-4 shadow-soft"
            >
              <div className="relative overflow-hidden rounded-xl">
                <motion.img
                  key={currentImage}
                  src={resultImages[currentImage]}
                  alt={`Resultado de aluno ${currentImage + 1}`}
                  className="w-full h-auto rounded-xl"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Navigation */}
              <div className="flex items-center justify-between mt-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevImage}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                
                <div className="flex gap-2">
                  {resultImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImage ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextImage}
                  className="rounded-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Points CTA */}
        <section className="px-4 py-8">
          <div className="container max-w-md mx-auto">
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-6 text-center text-primary-foreground">
              <Gift className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">
                Missão Cumprida!
              </h3>
              <p className="mb-4 text-primary-foreground font-semibold">
                Você acumulou <strong>{points} GG Points</strong> e desbloqueou um desconto exclusivo!
              </p>
              <div className="bg-primary-foreground/10 rounded-xl p-4 mb-4">
                <p className="text-sm mb-1">Troque seus pontos por:</p>
                <p className="text-2xl font-extrabold">70% DE DESCONTO</p>
              </div>
              <Button onClick={onContinue} size="lg" className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 py-6 text-lg font-bold rounded-xl">
                Resgatar Recompensa
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>;
};