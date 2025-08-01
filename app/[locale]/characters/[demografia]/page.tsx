import { notFound } from 'next/navigation';
import Button from '@/components/button/Buttons/Button';
import AnimeCard from '@/components/characters/AnimeCard';
import Pagination from '@/components/characters/Pagination';
import { getAnimesByDemografia, DEMOGRAFIA_IDS } from '@/services/logic_characters/fetchAnime';
import { buildPageArray } from '@/services/logic_characters/pagination';
import { getTranslations } from 'next-intl/server';

export default async function DemografiaPage({
  params,
  searchParams,
}: {
  params: { demografia: string };
  searchParams: { page?: string };
}) { 
  const t = await getTranslations('characters')
  const slug = params.demografia.toLowerCase().replace(/\s+/g, '-');
  if (!DEMOGRAFIA_IDS[slug]) notFound();

  const currentPage = Number(searchParams.page) || 1;
  const { animes, lastPage } = await getAnimesByDemografia(slug, currentPage);
  const pageNumbers = buildPageArray(currentPage, lastPage);
 

  return (
    <section className="p-10 min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100">
      <Button name="" to="" variant="return" />
      <h1 className="text-4xl font-extrabold text-center mb-10 text-indigo-800 capitalize tracking-wide">
        {t('demografia.title_h1')}<span className="text-purple-700">{slug}</span>
      </h1>

      {animes.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
         {t('demografia.error_p')}
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {animes.map((anime) => (
              <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
          </div>
          <Pagination
            slug={slug}
            currentPage={currentPage}
            lastPage={lastPage}
            pageNumbers={pageNumbers}
          />
        </>
      )}
    </section>
  );
}
