import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LandingPage } from "./LandingPage";
import { QuizWizard } from "./QuizWizard";
import { SalesPage } from "./SalesPage";
import { VerificationLoader } from "./VerificationLoader";
import { CheckoutPage } from "./CheckoutPage";

export type FunnelStep = "landing" | "quiz" | "sales" | "verification" | "checkout";

export interface QuizAnswers {
  age: string;
  objective: string;
  triedBefore: string;
  obstacle: string;
  investment: string;
}

export const FunnelContainer = () => {
  const [currentStep, setCurrentStep] = useState<FunnelStep>("landing");
  const [points, setPoints] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    age: "",
    objective: "",
    triedBefore: "",
    obstacle: "",
    investment: "",
  });

  const addPoints = (amount: number) => {
    setPoints((prev) => prev + amount);
  };

  const goToStep = (step: FunnelStep) => {
    setCurrentStep(step);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {currentStep === "landing" && (
          <motion.div
            key="landing"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <LandingPage onStart={() => goToStep("quiz")} />
          </motion.div>
        )}

        {currentStep === "quiz" && (
          <motion.div
            key="quiz"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <QuizWizard
              points={points}
              addPoints={addPoints}
              answers={answers}
              setAnswers={setAnswers}
              onComplete={() => goToStep("sales")}
            />
          </motion.div>
        )}

        {currentStep === "sales" && (
          <motion.div
            key="sales"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <SalesPage points={points} onContinue={() => goToStep("verification")} />
          </motion.div>
        )}

        {currentStep === "verification" && (
          <motion.div
            key="verification"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <VerificationLoader onComplete={() => goToStep("checkout")} />
          </motion.div>
        )}

        {currentStep === "checkout" && (
          <motion.div
            key="checkout"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <CheckoutPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
