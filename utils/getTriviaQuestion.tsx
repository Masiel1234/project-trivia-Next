import he from 'he';

export interface TriviaResponse {
  pregunta: string;
  opciones: { [key: string]: string };
  respuestaCorrecta: string;
  textoRespuestaCorrecta: string;
}

const url =
  'https://opentdb.com/api.php?amount=50&category=31&difficulty=medium&type=multiple';

export async function getTriviaQuestion(): Promise<TriviaResponse | null> {
  try {
    const fetchRes = await fetch(url);
    const data = await fetchRes.json();
    const trivia = data.results?.[0];
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
      respuestaCorrecta: letraCorrecta,
      textoRespuestaCorrecta: he.decode(trivia.correct_answer),
    };
  } catch (err) {
    console.error('Error al obtener pregunta de trivia:', err);
    return null;
  }
}