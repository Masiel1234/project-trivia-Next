export interface Anime {
  mal_id: number;
  title: string;
  images: { jpg: { image_url: string } };
}

type ApiResult = {
  data: Anime[];
  pagination: { last_visible_page: number; has_next_page: boolean };
};

export const DEMOGRAFIA_IDS: Record<string, number> = {
  shounen: 27,
  seinen: 42,
  shoujo: 25,
  josei: 43,
  romance: 22,
  action: 1,
  comedy: 4,
  fantasy: 10,
};

export async function getAnimesByDemografia(
  demografia: string,
  page: number
): Promise<{ animes: Anime[]; lastPage: number }> {
  const genreId = DEMOGRAFIA_IDS[demografia];
  if (!genreId) return { animes: [], lastPage: 1 };

  const res = await fetch(
    `https://api.jikan.moe/v4/anime?genres=${genreId}&limit=10&page=${page}`,
    { cache: 'no-store' }
  );
  const json = (await res.json()) as ApiResult;

  return {
    animes: json.data,
    lastPage: json.pagination?.last_visible_page ?? page,
  };
}
