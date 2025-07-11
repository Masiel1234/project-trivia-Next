
import TimelineYears from '@/components/blog/TimelineYears';
import TopAnimeCards from '@/components/blog/TopAnimeCards'; 
import { getTranslations } from 'next-intl/server';

interface Anime {
  mal_id: number;
  title: string;
  synopsis: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  type: string;
  episodes: number;
  score: number;
}


async function getTopAnimes(): Promise<Anime[]> {
  const res = await fetch('https://api.jikan.moe/v4/top/anime?limit=', {
    next: { revalidate: 3600 }, 
  });
  const data = await res.json();
  return data.data;
}

export default async function LineaDeTiempoPage() {
  const topAnimes = await getTopAnimes();
  const t = await getTranslations('blog');
  return (
    <section className="p-10 min-h-screen bg-gradient-to-r from-yellow-50 via-red-50 to-pink-50">
      <h1 className="text-4xl font-bold text-center mb-6">{t("title_h1")}</h1>
      <p className="text-center text-gray-700 mb-10">
       {t('text_p')}
      </p>
      <TimelineYears />
      <TopAnimeCards animes={topAnimes} />
      
    </section>
  );
}
