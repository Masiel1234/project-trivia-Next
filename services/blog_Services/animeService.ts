import { Blog_anime } from '@/types/blog_anime';

export async function getAnimesByYearPage(year: string, page: string, type: string): Promise<Blog_anime[]> {
  const typeQuery = type !== 'All' ? `&type=${type}` : '';
  const res = await fetch(
    `https://api.jikan.moe/v4/anime?sfw&start_date=${year}-01-01&end_date=${year}-12-31&order_by=start_date&sort=desc&page=${page}&limit=12${typeQuery}`
  );
  const data = await res.json();
  return data.data;
}