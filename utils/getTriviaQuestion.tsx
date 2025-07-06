// utils/getTriviaQuestion.js
import he from 'he';

export interface TriviaResponse {
  pregunta: string;
  opciones: { [key: string]: string };
  respuestaCorrecta: string;
  textoRespuestaCorrecta: string;
}

const OTDB_URL =
  'https://opentdb.com/api.php?amount=50&category=31&difficulty=medium&type=multiple';

export async function getTriviaQuestion(): Promise<TriviaResponse | null> {
  try {
    // Para el fetch del lado del cliente, no necesitamos 'next: { revalidate: ... }'
    // Si queremos asegurar que siempre sea una petición fresca, podemos usar cache: 'no-store'
    // o simplemente no pasar opciones de caché, ya que los navegadores suelen cachear.
    const fetchRes = await fetch(OTDB_URL);

    if (!fetchRes.ok) {
      console.error(`Error al obtener datos de OTDB: ${fetchRes.status} ${fetchRes.statusText}`);
      throw new Error(`Error al obtener datos externos: ${fetchRes.statusText}`);
    }

    const data = await fetchRes.json();
    const trivia = data.results?.[0];

    if (!trivia || !trivia.question || !trivia.correct_answer) {
      console.warn("No se encontró una pregunta de trivia válida.");
      return null;
    }

    const allOptions = [...trivia.incorrect_answers, trivia.correct_answer];
    const decodedOptions = allOptions.map((op) => he.decode(op));
    const shuffledOptions = decodedOptions.sort(() => Math.random() - 0.5);

    const letras = ['A', 'B', 'C', 'D'];
    const correctOptionIndex = shuffledOptions.indexOf(he.decode(trivia.correct_answer));
    const letraCorrecta = letras[correctOptionIndex];

    return {
      pregunta: he.decode(trivia.question),
      opciones: {
        A: shuffledOptions[0] || '',
        B: shuffledOptions[1] || '',
        C: shuffledOptions[2] || '',
        D: shuffledOptions[3] || '',
      },
      respuestaCorrecta: letraCorrecta, // Esta es la letra (A, B, C, D)
      textoRespuestaCorrecta: he.decode(trivia.correct_answer), // Este es el texto original
    };
  } catch (err) {
    console.error('Error al obtener pregunta de trivia:', err);
    return null;
  }
}