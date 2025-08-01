import { Anime } from "../../types/blog/blog_anime"

export async function getTopAnimes(): Promise<Anime[]> {
  const res = await fetch('https://api.jikan.moe/v4/top/anime?limit=10', {
    next: { revalidate: 3600 }, 
  });
  const data = await res.json();
  return data.data;
}