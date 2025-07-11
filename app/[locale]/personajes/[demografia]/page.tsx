/* /app/personajes/[demografia]/page.tsx */
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/button/Button';
import LanguageSelector from '@/components/button/LanguageSelector';
interface Anime {
  mal_id: number;
  title: string;
  images: { jpg: { image_url: string } };
}

/* IDs de demografía importantes */
const DEMOGRAFIA_IDS: Record<string, number> = {
  shounen: 27,
  seinen: 42,
  shoujo: 25,
  josei: 43,
  romance: 22,
  action: 1,
  comedy: 4,
  fantasy: 10,
};

type ApiResult = {
  data: Anime[];
  pagination: { last_visible_page: number; has_next_page: boolean };
};

/* ---------- helpers ---------- */
async function getAnimesByDemografia(
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

function buildPageArray(current: number, last: number, delta = 2): number[] {
  const range: number[] = [];
  const left = Math.max(1, current - delta);
  const right = Math.min(last, current + delta);

  if (left > 1) range.push(1);
  for (let i = left; i <= right; i++) range.push(i);
  if (right < last) range.push(last);

  return range;
}

/* ---------- page component ---------- */
export default async function DemografiaPage({
  params,
  searchParams,
}: {
  params: { demografia: string };
  searchParams: { page?: string };
}) {
  /* normalizamos el slug */
  const slug = params.demografia.toLowerCase().replace(/\s+/g, '-');
  if (!DEMOGRAFIA_IDS[slug]) notFound();

  const currentPage = Number(searchParams.page) || 1;
  const { animes, lastPage } = await getAnimesByDemografia(slug, currentPage);
  const pageNumbers = buildPageArray(currentPage, lastPage);

  return (
  <section className="p-10 min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100">
  <LanguageSelector/>
  <Button name='' to='' variant='return'/>
  <h1 className="text-4xl font-extrabold text-center mb-10 text-indigo-800 capitalize tracking-wide">
    Animes de demografía: <span className="text-purple-700">{slug}</span>
  </h1>

  {animes.length === 0 ? (
    <p className="text-center text-gray-600 text-lg">
      No se encontraron animes para esta demografía.
    </p>
  ) : (
    <>
      {/* ---------- Grid de animes ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {animes.map((anime) => (
          <Link
            key={anime.mal_id}
            href={`/personajes/anime/${anime.mal_id}`}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 overflow-hidden flex flex-col"
          >
            <Image
    width={300}
    height={300}
              src={anime.images.jpg.image_url}
              alt={anime.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-5 flex flex-col justify-between flex-1">
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-3 mb-4">
                {anime.title}
              </h2>
              <p className="text-sm text-blue-600 font-medium mt-auto">
                Ver personajes →
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* ---------- Paginación enumerada ---------- */}
      <div className="flex justify-center flex-wrap gap-3 mt-14">
        {currentPage > 1 && (
          <Link
            href={`/personajes/${slug}?page=${currentPage - 1}`}
            className="px-4 py-2 bg-gray-300 rounded-xl text-gray-700 hover:bg-gray-400 transition"
          >
            ← Anterior
          </Link>
        )}

        {pageNumbers.map((num) => (
          <Link
            key={num}
            href={`/personajes/${slug}?page=${num}`}
            className={`px-4 py-2 rounded-xl transition font-semibold ${
              num === currentPage
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
            }`}
          >
            {num}
          </Link>
        ))}

        {currentPage < lastPage && (
          <Link
            href={`/personajes/${slug}?page=${currentPage + 1}`}
            className="px-4 py-2 bg-gray-300 rounded-xl text-gray-700 hover:bg-gray-400 transition"
          >
            Siguiente →
          </Link>
        )}
      </div>
    </>
  )}
</section>


  );
}
