'use client'

import React, { useEffect, useState } from 'react';
import Quiz from '@/components/quiz/Quiz'; 
import ShonenData from '@/data/question-shonen.json'; 
import BackgroundShonen from '@/components/background/BackgroundShonen';
import { useTranslation } from 'react-i18next';
import ButtonLeave from '@/components/button/ButtonLeave';
import type { Question } from '@/components/quiz/Question';

const Shonen: React.FC = () => {
  const { t } = useTranslation ();
  const [questions, setQuestions] = useState<Question[]>([]);

   useEffect(() => {
    const formattedQuestions: Question[] = ShonenData.map((q, index) => ({
      id: index,
      question: q.question, 
      options: q.options,   
      correctAnswerIndex: q.correct
    }));
    setQuestions(formattedQuestions)
  }, []);
  return (
    <BackgroundShonen>
      <ButtonLeave/>
      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
        <h2 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-lg">{t('shonenPage.title')}</h2>
        {questions.length > 0 ? (
          <Quiz questions={questions} />
        ) : (
          <p className="text-white text-lg">{t('shonenPage.loadingQuestions')}</p>
        )}
      </div>
    </BackgroundShonen>
  );
};

export default Shonen;