"use client";

import { useEffect, useState } from "react";
import Quiz from "@/components/quiz/Quiz";
import ShojoData from "@/data/question-shojo.json";
import Lives from "@/components/lives/Lives";
import Background from "@/components/background/Background";
import { useTranslations } from "next-intl";
import ButtonLeave from "@/components/LeaveQuizAlert";
import type { Question } from "@/types/question/Question";
import { formatQuestions } from "@/utils/questions";
const Shojo: React.FC = () => {
  const t = useTranslations();
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    setQuestions(formatQuestions(ShojoData));
  }, []);

  return (
    <Background variant="shojo">
      <div className="relative min-h-screen flex flex-col justify-start items-center px-4 pt-6 sm:pt-10">
        <div className="w-full flex justify-center mb-6">
          <Lives />
        </div>
        <div className="absolute top-4 right-4 z-50">
          <ButtonLeave />
        </div>
         <section aria-labelledby="isekai-title">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center drop-shadow-md mb-10 px-4">
          {t("shojoPage.title")}
        </h2>
        </section>
         <div className="w-full max-w-3xl mx-auto">
        {questions.length > 0 ? (
          <Quiz questions={questions} />
        ) : (
          <p className="text-white text-lg text-center">
            {t("shojoPage.loadingQuestions")}
          </p>
        )}
        </div>
      </div>
    </Background>
  );
};

export default Shojo;
