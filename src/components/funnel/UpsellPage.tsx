import { motion } from "framer-motion";
import { Star, Check, Gift, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FunnelHeader } from "./FunnelHeader";

interface UpsellPageProps {
  onAccept: () => void;
  onDecline: () => void;
}

export const UpsellPage = ({ onAccept, onDecline }: UpsellPageProps) => {
  const completeBenefits = [
    "Método Russo incluso",
    "Tudo do Plano Fornecedores Iniciais incluso",
    "69 fornecedores exclusivos validados",
    "Pacote essencial de templates",
    "Roteiros curtos para vídeos simples",
    "Montagem de ofertas que convertem",
    "Criação e otimização de anúncios",
    "Captação e validação de contas",
    "Técnicas de bundles e upsells",
    "Como usar streaming para vendas",
    "Pós-venda e retenção profissional"
  ];

  return (
    <div className="min-h-screen bg-background pb-32">
      <FunnelHeader />

      <main className="px-4 py-6">
        <div className="container max-w-md mx-auto space-y-6">
          {/* Celebration Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block mb-4"
            >
              <Gift className="w-16 h-16 text-success mx-auto" />
            </motion.div>
            <h1 className="text-2xl font-extrabold text-foreground mb-2">
              🎉 PARABÉNS! 🎉
            </h1>
            <p className="text-lg text-foreground font-semibold">
              Você ganhou um desconto EXCLUSIVO!
            </p>
          </motion.div>

          {/* Exclusive Offer Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative bg-gradient-to-br from-primary/10 to-success/10 border-2 border-primary rounded-2xl p-6"
          >
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-destructive text-destructive-foreground text-xs font-bold px-4 py-1 rounded-full animate-pulse">
                OFERTA ÚNICA
              </span>
            </div>

            <div className="text-center pt-2 mb-4">
              <h2 className="font-bold text-foreground text-xl mb-2">
                Método GGMAX Completo
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Aproveite agora e leve o método completo com desconto especial!
              </p>
              
              <div className="flex items-center justify-center gap-3">
                <span className="text-xl text-muted-foreground line-through">R$ 149,90</span>
                <span className="text-lg text-muted-foreground line-through">R$ 49,90</span>
              </div>
              
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mt-2"
              >
                <span className="text-5xl font-extrabold text-primary">R$ 39,90</span>
              </motion.div>
              
              <p className="text-sm text-success font-semibold mt-2">
                Economia de R$ 110,00!
              </p>
            </div>

            {/* Benefits List */}
            <ul className="space-y-2 text-sm mb-4">
              {completeBenefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-start gap-2 text-foreground"
                >
                  <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Rating */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-warning" fill="currentColor" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">+2.847 alunos satisfeitos</p>
          </div>
        </div>
      </main>

      {/* Sticky CTAs */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t border-border p-4 z-20">
        <div className="container max-w-md mx-auto space-y-3">
          <Button
            onClick={onAccept}
            size="lg"
            className="w-full py-6 text-lg font-bold rounded-xl shadow-glow"
          >
            <Zap className="w-5 h-5 mr-2" />
            SIM! QUERO POR R$ 39,90
          </Button>
          
          <button
            onClick={onDecline}
            className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            Não, obrigado. Continuar com Fornecedores Iniciais
            <ArrowRight className="w-4 h-4 inline ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
