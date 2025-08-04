import { getTriviaQuestion } from '../services/trivia_services/triviaService'; 

const mockApiResponse = {
  results: [
    {
      question: '¿Quién es el protagonista de Naruto?',
      correct_answer: 'Naruto Uzumaki',
      incorrect_answers: ['Sasuke Uchiha', 'Kakashi Hatake', 'Itachi Uchiha'],
    },
  ],
};

describe('getTriviaQuestion', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('debe devolver una pregunta correctamente mapeada', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockApiResponse),
    }) as jest.Mock;

    const result = await getTriviaQuestion();

    expect(result).not.toBeNull();
    expect(result?.pregunta).toBe('¿Quién es el protagonista de Naruto?');
    expect(result?.opciones).toBeDefined();
    expect(Object.keys(result!.opciones)).toHaveLength(4);
    expect(result?.respuestaCorrecta).toMatch(/[A-D]/);
    expect(result?.textoRespuestaCorrecta).toBe('Naruto Uzumaki');
  });

  it('debe devolver null si fetch falla', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Network error')) as jest.Mock;

    const result = await getTriviaQuestion();
    expect(result).toBeNull();
  });

  it('debe devolver null si el resultado está vacío', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ results: [] }),
    }) as jest.Mock;

    const result = await getTriviaQuestion();
    expect(result).toBeNull();
  });
});
