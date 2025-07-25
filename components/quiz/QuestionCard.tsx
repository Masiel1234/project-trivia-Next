'use client';

import { useTranslations } from 'next-intl';
import { useLives } from '@/components/lives/LivesContext';
import { useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';
import type { Question } from '../../types/question/Question';

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
  useEffect(() => {
    if (isGameOver) {
      router.push('/home/game_over');
    }
  }, [isGameOver, router]);

  // 🟩 Reiniciar el control cada vez que cambia la pregunta
  useEffect(() => {
    hasLostLifeRef.current = false;
  }, [question]);

  // ✅ Manejo de clic en opciones
  const handleOptionClick = (index: number) => {
    if (showAnswer || isGameOver) return;

    onOptionClick(index);

    const isCorrect = index === question.correctAnswerIndex;

    if (!isCorrect && !hasLostLifeRef.current) {
      loseLife();
      hasLostLifeRef.current = true;
    }
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        {t(question.question)}
      </h2>

      <ul className="space-y-3">
        {question.options.map((option, index) => {
          const isCorrect = index === question.correctAnswerIndex;
          const isSelected = index === selectedOptionIndex;

          let style =
            'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200';

          if (showAnswer) {
            style = isCorrect
              ? 'bg-green-200 text-green-800 border border-green-400'
              : isSelected
              ? 'bg-red-200 text-red-800 border border-red-400'
              : 'bg-gray-100 text-gray-700 border border-gray-200';
          } else if (isSelected) {
            style =
              'bg-blue-100 text-pink-800 border border-blue-300';
          }

          return (
            <li
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`p-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out ${style} ${
                isGameOver ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              style={{
                pointerEvents: showAnswer || isGameOver ? 'none' : 'auto',
              }}
            >
              {t(option)}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QuestionCard;
