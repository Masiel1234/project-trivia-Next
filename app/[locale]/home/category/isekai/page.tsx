'use client'
import React, { useEffect, useState } from 'react';
import BackgroundIsekai from '@/components/background/BackgroundIsekai'; 
import Quiz from '@/components/quiz/Quiz'; 
import isekaiData from '@/data/question-isekai.json'
import ButtonLeave from '@/components/button/ButtonLeave';
import LanguageSelector from '@/components/button/LanguageSelector';
import type { Question } from '@/components/quiz/Question';
import { useTranslation } from 'react-i18next';

const Isekai: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const { t } = useTranslation ();

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
    <BackgroundIsekai>
      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
         <LanguageSelector/>
         <h2 className="text-4xl font-extrabold text-black text-center mb-8 drop-shadow-lg">{t('isekaiPage.title')}</h2>
        {questions.length > 0 ? (
          <Quiz questions={questions} />
        ) : (
          <p className="text-white text-lg">{t('isekaiPage.loadingQuestions')}</p>
        )}
      </div>
      <ButtonLeave/>
    </BackgroundIsekai>
  );
};

export default Isekai;