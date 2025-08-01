import { getAnimeDetails } from "@/services/blog_Services/animeServiceId";
import { AnimeDetail } from "@/components/blog/AnimeDetail";
import type { BlogAnimeId } from "@/types/blog/blog_anime_id";

interface PageProps {
  params: { id: string };
}

export default async function AnimeDetailPage({ params }: PageProps) {
  const { id } = params;
  const anime: BlogAnimeId = await getAnimeDetails(id);

  return (
    <section className="p-10 min-h-screen bg-white">
      <AnimeDetail anime={anime} />
    </section>
  );
}
