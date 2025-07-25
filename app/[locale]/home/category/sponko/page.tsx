'use client'

import React, { useEffect, useState } from 'react';
import Quiz from '@/components/quiz/Quiz'; 
import SpokonData from '@/data/question-spokon.json'; 
import Background from '@/components/background/Background';
import { useTranslations } from 'next-intl';
import ButtonLeave from '@/components/button/ButtonLeave';
import LanguageSelector from '@/components/button/LanguageSelector';
import type { Question } from '@/types/question/Question';

const Spokon: React.FC = () => {
  const  t  = useTranslations();
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
   const formattedQuestions: Question[] = SpokonData.map((q, index) => ({
      id: index,
      question: q.question, 
      options: q.options,   
      correctAnswerIndex: q.correct
    }));
    setQuestions(formattedQuestions)
  }, []);

  return (
    <Background variant='sponko'>
     <ButtonLeave/>
     <LanguageSelector/>
      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
        <h2 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-lg">{t('spokonPage.title')}</h2>
        {questions.length > 0 ? (
          <Quiz questions={questions} />
        ) : (
          <p className="text-white text-lg">{t('spokonPage.loadingQuestions')}</p>
        )}
      </div>
    </Background>
  );
};

export default Spokon;