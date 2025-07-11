import { getAnimeDetails } from "@/services/blog_Services/animeServiceId";
import { AnimeDetail } from "@/components/blog/AnimeDetail";
export default async function AnimeDetailPage({ params }: { params: { id: string } }) {
  const anime = await getAnimeDetails(params.id);
  return <AnimeDetail anime={anime}/>
}
