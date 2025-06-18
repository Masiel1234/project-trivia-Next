'use client'

import { useEffect, useState } from 'react';
import Quiz from '@/components/quiz/Quiz'; 
import ShojoData from '@/data/question-shojo.json'; 
import BackgroundShojo from '@/components/background/BackgroundShojo';
import { useTranslation } from 'react-i18next';
import ButtonLeave from '@/components/button/ButtonLeave';
import LanguageSelector from '@/components/button/LanguageSelector';
import type { Question } from '@/components/quiz/Question';
const Shojo: React.FC = () => {
  const { t } = useTranslation ();  
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const formattedQuestions: Question[] = ShojoData.map((q, index) => ({
      id: index,
      question: q.question, 
      options: q.options,   
      correctAnswerIndex: q.correct
    }));
    setQuestions(formattedQuestions)
  }, []);

  return (
    <BackgroundShojo>
     <ButtonLeave/>
     <LanguageSelector/>
      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4"> 
        <h2 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-lg">{t('shojoPage.title')}</h2>
        {questions.length > 0 ? (
          <Quiz questions={questions} />
        ) : (
          <p className="text-white text-lg">{t('shojoPage.loadingQuestions')}</p>
        )}
      </div>
    </BackgroundShojo>
  );
};

export default Shojo;