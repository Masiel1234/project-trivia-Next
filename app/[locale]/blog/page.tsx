
import TimelineYears from '@/components/blog/TimelineYears';
import TopAnimeCards from '@/components/blog/TopAnimeCards'; 
import { getTranslations } from 'next-intl/server';
import { getTopAnimes } from '@/services/blog_Services/animeServiceTop';



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
