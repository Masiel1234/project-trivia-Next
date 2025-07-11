import { useState, useEffect } from 'react';
import { getTriviaQuestion, TriviaResponse } from '@/utils/getTriviaQuestion';

export function useTriviaQuestion() {
  const [pregunta, setPregunta] = useState<TriviaResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const cargarPregunta = async () => {
    setIsLoading(true);
    const data = await getTriviaQuestion();
    if (data) setPregunta(data);
    setIsLoading(false);
  };

  useEffect(() => {
    cargarPregunta();
  }, []);

  return {
    pregunta,
    isLoading,
    recargar: cargarPregunta,
  };
}
