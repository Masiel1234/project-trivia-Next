'use client'

import React, { useEffect, useState } from 'react';
import Quiz from '@/components/quiz/Quiz'; 
import seinenData from '@/data/question-seinen.json'; 
import Background from '@/components/background/Background';
import ButtonLeave from '@/components/button/ButtonLeave';
import { useTranslations } from 'next-intl';
import type {Question} from "@/components/quiz/Question";
const Seinen: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const  t  = useTranslations();

  useEffect(() => {
   const formattedQuestions: Question[] = seinenData.map((q, index) => ({
      id: index,
      question: q.question, 
      options: q.options,   
      correctAnswerIndex: q.correct
    }));
    setQuestions(formattedQuestions)
  }, []); 

  return (
    <Background variant='seinen'>
      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">  
        <ButtonLeave/>
        <h2 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-lg">{t('seinenPage.title')}</h2>
        {questions.length > 0 ? (
          <Quiz questions={questions} />
        ) : (
          <p className="text-white text-lg">{t('seinenPage.loadingQuestions')}</p>
        )}
      </div>
    </Background>
  );
};

export default Seinen;