import { useEffect, useState } from 'react';
import { getTriviaQuestion, TriviaResponse } from '@/services/trivia_services/triviaService';

export function useTriviaQuestion() {
  const [pregunta, setPregunta] = useState<TriviaResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPregunta = async () => {
    setIsLoading(true);
    const trivia = await getTriviaQuestion();
    setPregunta(trivia);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPregunta();
  }, []);

  return {
    pregunta,
    isLoading,
    recargar: fetchPregunta,
  };
}
