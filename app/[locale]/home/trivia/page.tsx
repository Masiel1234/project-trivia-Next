'use client';

import { useTranslations } from 'next-intl';
import Background from '@/components/background/Background';
import ButtonLeave from '@/components/button/ButtonLeave';
import TriviaCard from '@/components/triviaApi/TriviaCard';
import TriviaFeedback from '@/components/triviaApi/TriviaFeedback';
import { useTriviaQuestion } from '@/hooks/triviaApi/useTriviaQuestion';
import { useGameLogic } from '@/hooks/triviaApi/useGameLogic';

export default function TriviaPage() {
  const t = useTranslations();
  const { pregunta, isLoading, recargar } = useTriviaQuestion();
  const {
    respuestaUsuario,
    respuestaCorrecta,
    seleccionarRespuesta,
    reset,
  } = useGameLogic();

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
      <div className="max-w-4xl w-full mx-auto px-4 py-8 flex flex-col items-center">
        <ButtonLeave title={t('buttonLeave.Leave_Game')} />
        <h1 className="text-3xl font-bold text-center mb-4">{t('trivia.title')}</h1>
        {isLoading && <p>{t('trivia.loading')}</p>}

        {!isLoading && pregunta && (
          <>
            <TriviaCard
              pregunta={pregunta.pregunta}
              opciones={pregunta.opciones}
              respuestaCorrecta={pregunta.respuestaCorrecta}
              onRespuesta={manejarRespuesta}
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
    </Background>
  );
}
