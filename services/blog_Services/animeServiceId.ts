import { BlogAnimeId } from '@/types/blog/blog_anime_id';

export async function getAnimeDetails(id: string): Promise<BlogAnimeId> {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch anime details: ${res.status}`);
  }

  const data = await res.json();

  if (!data?.data) {
    throw new Error('Invalid response structure from API');
  }

  return data.data;
}
