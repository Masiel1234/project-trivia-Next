'use client'
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useQuiz } from '@/hooks/useQuiz';
import type { Question } from "../../types/question/Question";
import QuestionCard from './QuestionCard';
import Feedback from './Feedback';
import Congrats from './Congrats';

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const  t  = useTranslations('quiz');

  const{
    shuffledQuestions,
    currentQuestion,
    selectedOptionIndex,
    showAnswer,
    showCongrats,
    handleOptionClick,
    handleNext,
  } = useQuiz(questions);

  if (!shuffledQuestions.length) {
    return <p className="text-white text-lg">{t('noQuestionsAvailable')}</p>
  }
  
  if (showCongrats) {
    return <Congrats onReturn={()=> (<Link href="/home"/>)}/>;    
  }

  return (
    <div className="quiz-container p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <QuestionCard
        question={currentQuestion}
        selectedOptionIndex={selectedOptionIndex}
        showAnswer={showAnswer}
        onOptionClick={handleOptionClick}
      />
      {showAnswer && (
        <Feedback
          question={currentQuestion}
          selectedOptionIndex={selectedOptionIndex}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default Quiz;