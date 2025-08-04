import { getAnimesByDemografia, DEMOGRAFIA_IDS } from '../services/logic_characters/fetchAnime'; // ajusta ruta según tu estructura
import type { Anime } from '../services/logic_characters/fetchAnime';

describe('getAnimesByDemografia', () => {
  const mockAnime: Anime = {
    mal_id: 1,
    title: 'Naruto',
    images: {
      jpg: {
        image_url: 'https://example.com/naruto.jpg',
      },
    },
  };

  test('retorna los animes correctamente cuando el género existe', async () => {
    const mockResponse = {
      data: [mockAnime],
      pagination: { last_visible_page: 5, has_next_page: true },
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await getAnimesByDemografia('shounen', 1);

    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.jikan.moe/v4/anime?genres=${DEMOGRAFIA_IDS.shounen}&limit=10&page=1`,
      { cache: 'no-store' }
    );

    expect(result).toEqual({
      animes: [mockAnime],
      lastPage: 5,
    });
  });

  test('retorna arreglo vacío y página 1 si el género no existe', async () => {
    const result = await getAnimesByDemografia('inexistente', 1);

    expect(result).toEqual({
      animes: [],
      lastPage: 1,
    });

    expect(global.fetch).not.toHaveBeenCalled();
  });

  test('retorna la página actual si falta el campo pagination', async () => {
    const mockResponse = {
      data: [mockAnime],
      pagination: undefined,
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await getAnimesByDemografia('shounen', 3);

    expect(result).toEqual({
      animes: [mockAnime],
      lastPage: 3,
    });
  });

  test('maneja errores de red y retorna error (opcional)', async () => {
    const errorMock = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    (global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'));

    await expect(getAnimesByDemografia('shounen', 1)).rejects.toThrow('Network error');

    errorMock.mockRestore();
  });
});
