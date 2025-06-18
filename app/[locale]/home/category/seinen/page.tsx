'use client'

import React, { useEffect, useState } from 'react';
import Quiz from '@/components/quiz/Quiz'; 
import seinenData from '@/data/question-seinen.json'; 
import BackgroundSeinen from '@/components/background/BackgroundSeinen';
import ButtonLeave from '@/components/button/ButtonLeave';
import LanguageSelector from '@/components/button/LanguageSelector';
import { useTranslation } from 'react-i18next';
import type {Question} from "@/components/quiz/Question";
const Seinen: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const { t } = useTranslation ();

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
    <BackgroundSeinen>
      <ButtonLeave/>
      <LanguageSelector/>
      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
        <h2 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-lg">{t('seinenPage.title')}</h2>
        {questions.length > 0 ? (
          <Quiz questions={questions} />
        ) : (
          <p className="text-white text-lg">{t('seinenPage.loadingQuestions')}</p>
        )}
      </div>
    </BackgroundSeinen>
  );
};

export default Seinen;