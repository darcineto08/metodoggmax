import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, Shield } from "lucide-react";

interface VerificationLoaderProps {
  onComplete: () => void;
}

const verificationSteps = [
  { id: 1, label: "Conectando ao servidor...", duration: 1500 },
  { id: 2, label: "Verificando idade...", duration: 1200 },
  { id: 3, label: "Validando objetivo...", duration: 1500 },
  { id: 4, label: "Calculando desconto...", duration: 1000 },
  { id: 5, label: "Aprovado! ✓", duration: 800 },
];

export const VerificationLoader = ({ onComplete }: VerificationLoaderProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let totalTime = 0;
    const stepDuration = verificationSteps.map((step) => step.duration);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 60);

    // Step progression
    stepDuration.forEach((duration, index) => {
      setTimeout(() => {
        setCurrentStep(index);
      }, totalTime);
      totalTime += duration;
    });

    // Complete
    setTimeout(() => {
      onComplete();
    }, totalTime + 500);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      <div className="container max-w-md mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
          className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <Shield className="w-12 h-12 text-primary" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-foreground mb-2"
        >
          Verificando seus dados
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-8"
        >
          Aguarde enquanto validamos seu desconto...
        </motion.p>

        {/* Progress Bar */}
        <div className="bg-secondary rounded-full h-3 overflow-hidden mb-8">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Steps */}
        <div className="space-y-3 text-left">
          {verificationSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: index <= currentStep ? 1 : 0.3,
                x: 0,
              }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                index < currentStep
                  ? "bg-success/10"
                  : index === currentStep
                  ? "bg-primary/10"
                  : "bg-secondary/50"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index < currentStep
                    ? "bg-success text-success-foreground"
                    : index === currentStep
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {index < currentStep ? (
                  <Check className="w-4 h-4" />
                ) : index === currentStep ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <span className="text-xs font-medium">{step.id}</span>
                )}
              </div>
              <span
                className={`font-medium ${
                  index <= currentStep ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {step.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
