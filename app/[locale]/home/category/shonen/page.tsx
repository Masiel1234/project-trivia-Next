'use client'

import React, { useEffect, useState } from 'react';
import Quiz from '@/components/quiz/Quiz'; 
import ShonenData from '@/data/question-shonen.json'; 
import Background from '@/components/background/Background';
import { useTranslations } from 'next-intl';
import ButtonLeave from '@/components/button/ButtonLeave';
import type { Question } from '@/components/quiz/Question';

const Shonen: React.FC = () => {
  const  t  = useTranslations();
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
    <Background variant='shonen'>
      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
          <ButtonLeave/><h2 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-lg">{t('shonenPage.title')}</h2>
        {questions.length > 0 ? (
          <Quiz questions={questions} />
        ) : (
          <p className="text-white text-lg">{t('shonenPage.loadingQuestions')}</p>
        )}
      </div>
    </Background>
  );
};

export default Shonen;