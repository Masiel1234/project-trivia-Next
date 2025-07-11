import { BlogAnimeId } from '@/types/blog_anime_id';

export async function getAnimeDetails(id: string): Promise<BlogAnimeId> {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const data = await res.json();
  return data.data;
}
