"use client";

import { useTranslations } from "next-intl";
import { useLives } from "@/components/lives/LivesContext";
import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import type { Question } from "../../types/question/Question";

interface Props {
  question: Question;
  selectedOptionIndex: number | null;
  showAnswer: boolean;
  onOptionClick: (index: number) => void;
}

const QuestionCard: React.FC<Props> = ({
  question,
  selectedOptionIndex,
  showAnswer,
  onOptionClick,
}) => {
  const t = useTranslations();
  const router = useRouter();
  const { loseLife, isGameOver } = useLives();

  const hasLostLifeRef = useRef(false);
  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  useEffect(() => {
    if (isGameOver) {
      router.push("/home/game_over");
    }
  }, [isGameOver, router]);

  useEffect(() => {
    hasLostLifeRef.current = false;
    setFocusedIndex(0);
  }, [question]);

  useEffect(() => {
    optionRefs.current[focusedIndex]?.focus();
  }, [focusedIndex]);

  const handleOptionClick = (index: number) => {
    if (showAnswer || isGameOver) return;

    onOptionClick(index);

    const isCorrect = index === question.correctAnswerIndex;
    if (!isCorrect && !hasLostLifeRef.current) {
      loseLife();
      hasLostLifeRef.current = true;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOptionClick(index);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev + 1) % question.options.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) =>
        prev === 0 ? question.options.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
     <section aria-labelledby="question-title">
  <h2
    id="question-title"
    className="text-2xl font-semibold mb-6 text-gray-800"
  >
    {t(question.question)}
  </h2>

  <ul className="space-y-3" aria-label="Lista de opciones de respuesta">
    {question.options.map((option, index) => {
      const isCorrect = index === question.correctAnswerIndex;
      const isSelected = index === selectedOptionIndex;

      let style =
        "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200";

      if (showAnswer) {
        style = isCorrect
          ? "bg-green-200 text-green-800 border border-green-400"
          : isSelected
          ? "bg-red-200 text-red-800 border border-red-400"
          : "bg-gray-100 text-gray-700 border border-gray-200";
      } else if (isSelected) {
        style = "bg-pink-100 text-pink-800 border border-blue-300";
      }

      return (
        <li
          key={index}
          ref={(el) => {
            optionRefs.current[index] = el;
          }}
          role="button"
          aria-label={`Opción ${index + 1}: ${t(option)}`}
          aria-pressed={isSelected}
          aria-disabled={showAnswer || isGameOver}
          tabIndex={0}
          onClick={() => handleOptionClick(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={`p-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-200 ${style} ${
            isGameOver ? "opacity-50 cursor-not-allowed" : ""
          }`}
          style={{
            pointerEvents: showAnswer || isGameOver ? "none" : "auto",
          }}
        >
          {t(option)}
        </li>
      );
    })}
  </ul>
</section>

    </>
  );
};

export default QuestionCard;
