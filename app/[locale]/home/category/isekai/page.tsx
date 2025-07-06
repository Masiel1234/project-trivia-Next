'use client'
import React, { useEffect, useState } from 'react';
import Background from '@/components/background/Background'; 
import Quiz from '@/components/quiz/Quiz'; 
import isekaiData from '@/data/question-isekai.json'
import ButtonLeave from '@/components/button/ButtonLeave';
import type { Question } from '@/components/quiz/Question';
import { useTranslations } from 'next-intl';

const Isekai: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const  t  = useTranslations('isekaiPage');

  useEffect(() => {
    const formattedQuestions: Question[] = isekaiData.map((q, index) => ({
      id: index,
      question: q.question, 
      options: q.options,   
      correctAnswerIndex: q.correct
    }));
    setQuestions(formattedQuestions);
  }, []); 

  return (
    <Background variant="isekai">  
    <ButtonLeave/>
      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
         <h2 className="text-4xl font-extrabold text-black text-center mb-8 drop-shadow-lg">{t('title')}</h2>
        {questions.length > 0 ? (
          <Quiz questions={questions} />
        ) : (
          <p className="text-white text-lg">{t('loadingQuestions')}</p>
        )}
      </div>
    
    </Background>
  );
};
export default Isekai;