import { FiltroTipos } from '@/components/blog/FiltroTipos';
import { Paginacion } from '@/components/blog/Paginacion';
import { AnimeCard } from '@/components/blog/AnimeCard';
import { getAnimesByYearPage } from '@/services/blog_Services/animeServiceYears';
import { getTranslations } from 'next-intl/server';

export default async function AnimesByYearPage({
  params,
  searchParams,
}: {
  params: { year: string; page: string };
  searchParams?: { type?: string };
}) {
 const { year, page } = params;
  const type = searchParams?.type ?? 'All';

  const [animes, t] = await Promise.all([
    getAnimesByYearPage(year, page, type),
    getTranslations('blog'),
  ]);
  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold mb-4 text-center">
       {t('title_h2')} {year}
      </h1>

      <FiltroTipos year={year} page={page} selected={type} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {animes.map((anime) => (
          <AnimeCard
            key={anime.mal_id}
            id={anime.mal_id}
            title={anime.title}
            synopsis={anime.synopsis}
            imageUrl={anime.images.jpg.image_url}
            seeMoreText={t('see_more')}
          />
        ))}
      </div>
      <Paginacion
        year={year}
        currentPage={parseInt(page)}
        type={type}
      />
    </section>
  );
}
