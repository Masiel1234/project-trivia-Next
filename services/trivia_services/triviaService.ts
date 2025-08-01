import * as he from 'he';

export interface TriviaResponse {
  pregunta: string;
  opciones: Record<string, string>;
  respuestaCorrecta: string;
  textoRespuestaCorrecta: string;
}

interface OpenTriviaItem {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const TRIVIA_URL =
  'https://opentdb.com/api.php?amount=5&category=31&difficulty=medium&type=multiple';

let cache: TriviaResponse[] = [];

function mapToTrivia(trivia: OpenTriviaItem): TriviaResponse | null {
  if (
    !trivia?.question ||
    !trivia.correct_answer ||
    !Array.isArray(trivia.incorrect_answers)
  ) {
    return null;
  }

  const opcionesDecodificadas = [
    ...trivia.incorrect_answers,
    trivia.correct_answer,
  ].map((opcion: string) => he.decode(opcion));

  const opcionesAleatorias = opcionesDecodificadas.sort(() => Math.random() - 0.5);
  const letras = ['A', 'B', 'C', 'D'];

  const opciones: Record<string, string> = {};
  letras.forEach((letra, i) => {
    opciones[letra] = opcionesAleatorias[i] || '';
  });

  const indiceCorrecta = opcionesAleatorias.indexOf(he.decode(trivia.correct_answer));

  return {
    pregunta: he.decode(trivia.question),
    opciones,
    respuestaCorrecta: letras[indiceCorrecta],
    textoRespuestaCorrecta: he.decode(trivia.correct_answer),
  };
}

export async function getTriviaQuestion(): Promise<TriviaResponse | null> {
  if (cache.length > 0) return cache.pop()!;

  try {
    const res = await fetch(TRIVIA_URL);
    const data = await res.json();

    if (!Array.isArray(data.results) || data.results.length === 0) return null;

    const preguntas = data.results
      .map(mapToTrivia)
      .filter((item: TriviaResponse | null): item is TriviaResponse => item !== null);

    if (preguntas.length === 0) return null;

    cache = preguntas;
    return cache.pop()!;
  } catch (err) {
    console.error('Error al obtener pregunta:', err);
    return null;
  }
}
