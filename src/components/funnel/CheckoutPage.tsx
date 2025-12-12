import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Check, Shield, Clock, CreditCard, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { FunnelHeader } from "./FunnelHeader";
export const CheckoutPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 10,
    seconds: 0
  });
  const [selectedPlan, setSelectedPlan] = useState<"basic" | "complete">("complete");
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return {
            ...prev,
            seconds: prev.seconds - 1
          };
        } else if (prev.minutes > 0) {
          return {
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59
          };
        } else if (prev.hours > 0) {
          return {
            hours: prev.hours - 1,
            minutes: 59,
            seconds: 59
          };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const today = new Date();
  const formattedDate = today.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
  const handlePurchase = () => {
    toast({
      title: "Redirecionando para pagamento...",
      description: "Você será direcionado para finalizar sua compra."
    });
  };
  const basicBenefits = ["Acesso imediato a 35 fornecedores", "12 fornecedores de Roblox / moedas digitais", "12 gift cards & keys internacionais", "6 fornecedores BR confiáveis", "5 fornecedores de contas / streaming / serviços digitais", "Suporte básico inicial por 7 dias"];
  const completeBenefits = ["Método Russo incluso", "Tudo do Plano Fornecedores Iniciais incluso", "69 fornecedores exclusivos validados (Roblox, Gift Cards, Keys Premium, Fornecedores BR & internacionais)", "Pacote essencial de templates (anúncios, mensagens, pós-venda)", "Roteiros curtos para vídeos simples (exemplo prático)", "Introdução & segurança", "Montagem de ofertas, preços e títulos que convertem", "Criação e otimização de anúncios com exemplos reais", "Captação e validação de contas (TikTok, Instagram, Roblox)", "Técnicas de bundles, upsells e aumento de ticket médio", "Como usar streaming para multiplicar vendas", "Pós-venda, retenção e mensagens profissionais"];
  return <div className="min-h-screen bg-background pb-32">
      <FunnelHeader />

      <main className="px-4 py-6">
        <div className="container max-w-md mx-auto space-y-6">
          {/* Urgency Timer */}
          <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-destructive mb-2">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Oferta válida até {formattedDate}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-foreground">
              <span className="bg-card px-3 py-1 rounded-lg">{String(timeLeft.hours).padStart(2, "0")}</span>
              <span>:</span>
              <span className="bg-card px-3 py-1 rounded-lg">{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span>:</span>
              <span className="bg-card px-3 py-1 rounded-lg">{String(timeLeft.seconds).padStart(2, "0")}</span>
            </div>
          </motion.div>

          {/* Success Badge */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} className="bg-success/10 border border-success/20 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-success">
              <Check className="w-5 h-5" />
              <span className="font-semibold">Desconto de 70% aplicado!</span>
            </div>
          </motion.div>

          {/* Plan Options */}
          <div className="space-y-4">
            {/* Basic Plan */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1
          }} onClick={() => setSelectedPlan("basic")} className={`bg-card rounded-2xl p-5 cursor-pointer transition-all border-2 ${selectedPlan === "basic" ? "border-primary shadow-glow" : "border-border hover:border-primary/50"}`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-foreground text-lg">Fornecedores Iniciais</h3>
                  <p className="text-sm text-muted-foreground text-left">​</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold text-foreground">R$ 9,90</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                {basicBenefits.map((benefit, index) => <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>)}
              </ul>
            </motion.div>

            {/* Complete Plan */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} onClick={() => setSelectedPlan("complete")} className={`relative bg-card rounded-2xl p-5 cursor-pointer transition-all border-2 ${selectedPlan === "complete" ? "border-primary shadow-glow" : "border-border hover:border-primary/50"}`}>
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-success text-success-foreground text-xs font-bold px-3 py-1 rounded-full">
                  MAIS VENDIDO
                </span>
              </div>

              <div className="flex items-start justify-between mb-3 pt-2">
                <div>
                  <h3 className="font-bold text-foreground text-lg">Método GGMAX Completo</h3>
                  <p className="text-sm text-muted-foreground"> ​
                </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground line-through">R$ 149,90</p>
                  <p className="text-3xl font-extrabold text-primary">R$ 49,90</p>
                </div>
              </div>

              <ul className="space-y-2 text-sm">
                {completeBenefits.map((benefit, index) => <li key={index} className="flex items-start gap-2 text-foreground">
                    <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>)}
              </ul>
            </motion.div>
          </div>

          {/* Trust Badges */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3
        }} className="flex items-center justify-center gap-4 py-4">
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <Shield className="w-4 h-4" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <CreditCard className="w-4 h-4" />
              <span>Pix ou Cartão</span>
            </div>
          </motion.div>

          {/* Rating */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 text-warning" fill="currentColor" />)}
            </div>
            <p className="text-xs text-muted-foreground">+2.847 alunos satisfeitos</p>
          </div>
        </div>
      </main>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t border-border p-4 z-20">
        <div className="container max-w-md mx-auto">
          <Button onClick={handlePurchase} size="lg" className="w-full py-6 text-lg font-bold rounded-xl shadow-glow">
            <Zap className="w-5 h-5 mr-2" />
            {selectedPlan === "complete" ? "GARANTIR POR R$ 49,90" : "GARANTIR POR R$ 9,90"}
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Pagamento único • Acesso imediato
          </p>
        </div>
      </div>
    </div>;
};