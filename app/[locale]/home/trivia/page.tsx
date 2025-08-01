"use client";
import { useTranslations } from "next-intl";
import Background from "@/components/background/Background";
import ButtonLeave from "@/components/button/ButtonLeave";
import TriviaCard from "@/components/triviaApi/TriviaCard";
import Lives from "@/components/lives/Lives";
import TriviaFeedback from "@/components/triviaApi/TriviaFeedback";
import { useTriviaQuestion } from "@/hooks/triviaApi/useTriviaQuestion";
import { useGameLogic } from "@/hooks/triviaApi/useGameLogic";

export default function TriviaPage() {
  const t = useTranslations();
  const { pregunta, isLoading, recargar } = useTriviaQuestion();
  const { respuestaUsuario, respuestaCorrecta, seleccionarRespuesta, reset } =
    useGameLogic();

  const manejarRespuesta = (letra: string) => {
    if (pregunta) {
      seleccionarRespuesta(letra, pregunta.respuestaCorrecta);
    }
  };

  const siguientePregunta = () => {
    reset();
    recargar();
  };

  return (
    <Background variant="index">
      <div className="relative min-h-screen flex flex-col justify-start items-center px-4 pt-6 sm:pt-10">
        <div className="absolute top-4 right-4 z-50">
          <ButtonLeave title={t("buttonLeave.Leave_Game")} />
        </div>
        <div className="w-full flex justify-center mb-6">
          <Lives />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center drop-shadow-md mb-10 px-4">
          {t("trivia.title")}
        </h1>

        <div className="w-full max-w-3xl mx-auto">
          {isLoading && (
            <p className="text-white text-lg text-center">
              {t("trivia.loading")}
            </p>
          )}

          {!isLoading && pregunta && (
            <>
              <TriviaCard
                pregunta={pregunta.pregunta}
                opciones={pregunta.opciones}
                onRespuesta={manejarRespuesta}
                letraCorrecta={pregunta.respuestaCorrecta} 
                mostrarRespuesta={respuestaUsuario !== null} 
              />

              {respuestaUsuario && respuestaCorrecta !== null && (
                <TriviaFeedback
                  isCorrect={respuestaCorrecta}
                  correctLetter={pregunta.respuestaCorrecta}
                  correctText={pregunta.textoRespuestaCorrecta}
                  onNext={siguientePregunta}
                />
              )}
            </>
          )}
        </div>
      </div>
    </Background>
  );
}
