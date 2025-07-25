'use client'

import { useEffect, useState } from 'react';
import Quiz from '@/components/quiz/Quiz'; 
import ShojoData from '@/data/question-shojo.json'; 
import Background from '@/components/background/Background';
import { useTranslations } from 'next-intl';
import ButtonLeave from '@/components/button/ButtonLeave';
import type { Question } from '@/types/question/Question';
const Shojo: React.FC = () => {
  const  t  = useTranslations();  
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
    <Background variant='shojo'>
      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4"> 
         <ButtonLeave/>
         <h2 className="text-4xl font-extrabold text-black text-center mb-8 drop-shadow-lg">{t('shojoPage.title')}</h2>
        {questions.length > 0 ? (
          <Quiz questions={questions} />
        ) : (
          <p className="text-white text-lg">{t('shojoPage.loadingQuestions')}</p>
        )}
      </div>
    </Background>
  );
};

export default Shojo;