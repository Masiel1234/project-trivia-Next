"use client";
import React, { useEffect, useState } from "react";
import Background from "@/components/background/Background";
import Quiz from "@/components/quiz/Quiz";
import isekaiData from "@/data/question-isekai.json";
import Lives from "@/components/lives/Lives";
import ButtonLeave from "@/components/LeaveQuizAlert";
import type { Question } from "@/types/question/Question";
import { useTranslations } from "next-intl";
import { formatQuestions } from "@/utils/questions";

const Isekai: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const t = useTranslations("isekaiPage");

  useEffect(() => {
    setQuestions(formatQuestions(isekaiData));
  }, []);

  return (
    <Background variant="isekai">
      <div
        className="relative min-h-screen flex flex-col justify-start items-center px-4 pt-6 sm:pt-10"
        role="main"
        aria-label="Pantalla principal del juego tipo isekai"
      >
        <div className="absolute top-4 right-4 z-50">
          <ButtonLeave aria-label="Botón para salir del juego" />
        </div>

        <div
          className="w-full flex justify-center mb-6"
          aria-label="Vidas"
        >
          <Lives />
        </div>

        <section aria-labelledby="isekai-title">
          <h2
            id="isekai-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center drop-shadow-md mb-10 px-4"
          >
            {t("title")}
          </h2>
        </section>

        <div
          className="w-full max-w-3xl mx-auto"
          aria-label="Zona del cuestionario"
        >
          {questions.length > 0 ? (
            <Quiz
              questions={questions}
              aria-label="Cuestionario de preguntas"
            />
          ) : (
            <p
              aria-live="polite"
              className="text-white text-lg text-center"
              role="status"
            >
              {t("loadingQuestions")}
            </p>
          )}
        </div>
      </div>
    </Background>
  );
};
export default Isekai;
