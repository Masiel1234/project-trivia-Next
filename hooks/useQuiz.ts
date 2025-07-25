import { useEffect , useState } from "react";
import type { Question } from "../types/question/Question";

export const useQuiz = (questions: Question[])=>{
      const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
      const [currentIndex, setCurrentIndex] = useState<number>(0);
      const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
      const [showAnswer, setShowAnswer] = useState<boolean>(false);
      const [showCongrats, setShowCongrats] = useState<boolean>(false);

      useEffect(()=>{
        if (questions.length) {
            const shuffled = [...questions].sort(() => Math.random() - 0.5);
            setShuffledQuestions(shuffled);
            setCurrentIndex(0);
            setSelectedOptionIndex(null);
            setShowAnswer(false);
            setShowCongrats(false);
        }
      }, [questions]);
      
      const handleOptionClick = (index: number) =>{
        if (!showAnswer) {
            setSelectedOptionIndex(index);
            setShowAnswer(true);
        }
      };
      const handleNext = () => {
        if (currentIndex + 1 < shuffledQuestions.length) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOptionIndex(null);
            setShowAnswer(false);            
        }else{
            setShowCongrats(true);
        }
      };
      return{
        shuffledQuestions,
        currentIndex,
        selectedOptionIndex,
        showAnswer,
        showCongrats,
        currentQuestion: shuffledQuestions[currentIndex],
        handleOptionClick,
        handleNext,
      };
};