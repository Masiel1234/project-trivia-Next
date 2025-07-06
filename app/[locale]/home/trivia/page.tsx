// app/trivia/page.js (or pages/trivia.js if using Pages Router)
'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl'; // Make sure next-intl is correctly configured
import { getTriviaQuestion, TriviaResponse } from '@/utils/getTriviaQuestion'; // Adjusted import path
import TriviaCard from '@/components/TriviaCard'; // Adjusted import path

// Assuming you have these components. If not, you might need to mock them or create them.
import Background from '@/components/background/Background';
import ButtonLeave from '@/components/button/ButtonLeave';


export default function TriviaPage() {
  const t = useTranslations(); // Assumes next-intl is set up

  // State to hold the current trivia question data
  const [preguntaData, setPreguntaData] = useState<TriviaResponse | null>(null);
  // State to store the user's selected answer (e.g., "A", "B")
  const [respuestaUsuario, setRespuestaUsuario] = useState<string | null>(null);
  // State to store whether the user's answer was correct or not
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  // State to show loading status
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // State for potential errors
  const [error, setError] = useState<string | null>(null);


  const cargarPregunta = async () => {
    setIsLoading(true); // Start loading
    setError(null);     // Clear previous errors
    setRespuestaUsuario(null); // Reset user answer for new question
    setIsAnswerCorrect(null); // Reset correctness for new question

    try {
      const data = await getTriviaQuestion(); // Call our utility function
      if (data) {
        setPreguntaData(data);
      } return null;
    } 
    finally {
      setIsLoading(false); // End loading
    }
  };

  // Load question on component mount
  useEffect(() => {
    cargarPregunta();
  }, []); // Empty dependency array means this runs once after the initial render

  const handleRespuesta = (opcionSeleccionada: string) => {
    setRespuestaUsuario(opcionSeleccionada);

    if (preguntaData) {
      if (opcionSeleccionada === preguntaData.respuestaCorrecta) {
        setIsAnswerCorrect(true);
      } else {
        setIsAnswerCorrect(false);
      }
    }
  };

  return (
    // Assuming Background component is correctly set up
    <Background variant='index'>
      {/* Assuming ButtonLeave component is correctly set up and uses next-intl */}
      <ButtonLeave title={t('buttonLeave.Leave_Game')} />

      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
        <h1 className="text-3xl font-bold text-center text-black-700">
          {t('trivia.title')}
        </h1>

        {isLoading && <p className="text-lg mt-4">Cargando pregunta...</p>}
        {error && <p className="text-red-500 text-lg mt-4">{error}</p>}

        {preguntaData && !isLoading && (
          <>
            <TriviaCard
              pregunta={preguntaData.pregunta}
              opciones={preguntaData.opciones}
              onRespuesta={handleRespuesta}
            />

            {respuestaUsuario && ( // Only show feedback if an answer has been selected
              <div className="mt-6 text-center">
                {isAnswerCorrect !== null && ( // Ensure isAnswerCorrect has been set
                  isAnswerCorrect ? (
                    <p className="text-green-600 text-lg font-semibold mb-4">
                      ✅ {t('trivia.correct')}
                    </p>
                  ) : (
                    <p className="text-red-600 text-lg font-semibold mb-4">
                      ❌ {t('trivia.incorrect')}
                      <br />
                      {t('trivia.correct_answer')}: {preguntaData.respuestaCorrecta} ({preguntaData.textoRespuestaCorrecta}).
                    </p>
                  )
                )}

                <button
                  onClick={cargarPregunta}
                  className="w-full px-4 py-2 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition duration-300"
                >
                  {t('trivia.next_question')}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </Background>
  );
}