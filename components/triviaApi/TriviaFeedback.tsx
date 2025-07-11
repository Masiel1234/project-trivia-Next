'use client';

import { useTranslations } from "next-intl";
interface Props {
  isCorrect: boolean;
  correctLetter: string;
  correctText: string;
  onNext: () => void;
}
const TriviaFeedback = ({ isCorrect, correctLetter, correctText, onNext }: Props) => {
 const t = useTranslations();
 return( 
    <div className="mt-6 text-center">
    <p className={`text-lg font-semibold mb-4 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
      {isCorrect ? '✅ ' + t('trivia.correct') : `❌ ${t('trivia.incorrect')} (${correctLetter}) ${correctText}`}
    </p>
    <button
      onClick={onNext}
      className="mt-2 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
    >
      {t('trivia.next_question')}
    </button>
  </div>
 );
};


export default TriviaFeedback ;