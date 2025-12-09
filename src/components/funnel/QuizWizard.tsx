import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { SuccessModal } from "./SuccessModal";
import { QuizAnswers } from "./FunnelContainer";

interface QuizWizardProps {
  points: number;
  addPoints: (amount: number) => void;
  answers: QuizAnswers;
  setAnswers: React.Dispatch<React.SetStateAction<QuizAnswers>>;
  onComplete: () => void;
}

const questions = [
  {
    id: "age",
    type: "number",
    question: "Qual a sua idade?",
    placeholder: "Digite sua idade",
    points: 10,
  },
  {
    id: "objective",
    type: "textarea",
    question: "Qual é o seu principal objetivo?",
    placeholder: "Ex: Ganhar dinheiro extra, ter independência financeira...",
    points: 10,
  },
  {
    id: "triedBefore",
    type: "radio",
    question: "Você já tentou vender uma conta de jogo antes?",
    options: [
      { value: "sim", label: "Sim, já vendi" },
      { value: "tentei", label: "Tentei, mas não consegui" },
      { value: "nao", label: "Nunca tentei" },
    ],
    points: 10,
  },
  {
    id: "obstacle",
    type: "radio",
    question: "O que te impede de começar hoje?",
    options: [
      { value: "conhecimento", label: "Falta de conhecimento" },
      { value: "fornecedores", label: "Não sei onde encontrar fornecedores" },
      { value: "medo", label: "Medo de ser enganado" },
      { value: "tempo", label: "Falta de tempo" },
    ],
    points: 15,
  },
  {
    id: "investment",
    type: "radio",
    question: "Quanto você estaria disposto a investir para ter resultados?",
    options: [
      { value: "menos50", label: "Menos de R$ 50" },
      { value: "50a100", label: "Entre R$ 50 e R$ 100" },
      { value: "mais100", label: "Mais de R$ 100" },
    ],
    points: 15,
  },
];

export const QuizWizard = ({
  points,
  addPoints,
  answers,
  setAnswers,
  onComplete,
}: QuizWizardProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const totalQuestions = questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = () => {
    if (!currentAnswer.trim()) return;

    setAnswers((prev) => ({
      ...prev,
      [question.id]: currentAnswer,
    }));

    setShowModal(true);
    addPoints(question.points);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentAnswer("");

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setIsAnalyzing(true);
      setTimeout(() => {
        onComplete();
      }, 2500);
    }
  };

  if (isAnalyzing) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-md mx-auto text-center space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto"
          >
            <Star className="w-10 h-10 text-success" fill="currentColor" />
          </motion.div>
          <h2 className="text-2xl font-bold text-foreground">Análise Concluída!</h2>
          <p className="text-muted-foreground">
            Preparando suas recomendações personalizadas...
          </p>
          <div className="flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-primary rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, delay: i * 0.2, repeat: Infinity }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-4 px-4 border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="container max-w-md mx-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-muted-foreground">
              Progresso: {currentQuestion + 1}/{totalQuestions}
            </span>
            <div className="flex items-center gap-1 bg-warning/10 px-3 py-1 rounded-full">
              <Star className="w-4 h-4 text-warning" fill="currentColor" />
              <span className="text-sm font-bold text-warning">{points} GG Points</span>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </header>

      {/* Question */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="container max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-foreground text-center">
                {question.question}
              </h2>

              <div className="bg-card rounded-2xl p-6 shadow-soft">
                {question.type === "number" && (
                  <Input
                    type="number"
                    placeholder={question.placeholder}
                    value={currentAnswer}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    className="text-lg py-6"
                    min="1"
                    max="100"
                  />
                )}

                {question.type === "textarea" && (
                  <Textarea
                    placeholder={question.placeholder}
                    value={currentAnswer}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    className="min-h-[120px] text-base resize-none"
                  />
                )}

                {question.type === "radio" && question.options && (
                  <RadioGroup
                    value={currentAnswer}
                    onValueChange={setCurrentAnswer}
                    className="space-y-3"
                  >
                    {question.options.map((option) => (
                      <div
                        key={option.value}
                        className={`flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          currentAnswer === option.value
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setCurrentAnswer(option.value)}
                      >
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label
                          htmlFor={option.value}
                          className="flex-1 cursor-pointer font-medium"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
              </div>

              <Button
                onClick={handleAnswer}
                disabled={!currentAnswer.trim()}
                size="lg"
                className="w-full py-6 text-lg font-bold rounded-xl"
              >
                Continuar
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <SuccessModal
        isOpen={showModal}
        onClose={handleModalClose}
        points={question.points}
      />
    </div>
  );
};
