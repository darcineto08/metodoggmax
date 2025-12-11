import { motion } from "framer-motion";
import { Gamepad2, TrendingUp, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
interface LandingPageProps {
  onStart: () => void;
}
export const LandingPage = ({
  onStart
}: LandingPageProps) => {
  return <div className="min-h-screen flex flex-col">
      {/* Header */}
      

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="container max-w-md mx-auto text-center space-y-6">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5
        }} className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
            <Gamepad2 className="w-10 h-10 text-primary" />
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            <span className="inline-block px-3 py-1 bg-success/10 text-success text-sm font-medium rounded-full mb-4">
              Método Exclusivo 2026
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
              Domine a GG Max e Transforme Isso em Sua{" "}
              <span className="text-primary">Nova Fonte de Renda</span>
            </h1>
          </motion.div>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="text-muted-foreground text-base sm:text-lg px-2">
            Descubra o <strong className="font-bold text-slate-950">Método russo</strong> e aprenda a vender na GGMAX de forma profissional, com fornecedores validados e suporte completo.
          </motion.p>

          {/* Features */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} className="grid grid-cols-3 gap-3 pt-4">
            <div className="bg-card p-3 rounded-xl shadow-soft">
              <TrendingUp className="w-6 h-6 text-primary mx-auto mb-1" />
              <p className="text-xs font-medium text-foreground">Alta Lucratividade</p>
            </div>
            <div className="bg-card p-3 rounded-xl shadow-soft">
              <Zap className="w-6 h-6 text-warning mx-auto mb-1" />
              <p className="text-xs font-medium text-foreground">Vendas Rápidas</p>
            </div>
            <div className="bg-card p-3 rounded-xl shadow-soft">
              <Shield className="w-6 h-6 text-success mx-auto mb-1" />
              <p className="text-xs font-medium text-foreground">100% Seguro</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} className="pt-6">
            <Button onClick={onStart} size="lg" className="w-full text-sm sm:text-lg font-bold py-6 rounded-xl shadow-glow animate-pulse hover:animate-none transition-all">
              QUERO ACESSAR O MÉTODO GGMAX
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              ⚡ Responda o quiz e ganhe até 70% de desconto
            </p>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 px-4 text-center">
        <p className="text-xs text-muted-foreground">
          +2.847 alunos já transformaram suas vidas
        </p>
      </footer>
    </div>;
};