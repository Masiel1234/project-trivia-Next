import Image from 'next/image';
import { BlogAnimeId } from '@/types/blog/blog_anime_id';
import { useTranslations } from 'next-intl';

interface Props {
  anime: BlogAnimeId;
}

export const AnimeDetail = ({ anime }: Props) => {
    const  t = useTranslations();
  return (
    <section className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{anime.title}</h1>

      <Image
        src={anime.images.jpg.image_url}
        alt={anime.title}
        width={800}
        height={600}
        className="w-full h-auto rounded-lg mb-6 shadow"
      />

      <div className="space-y-2 text-gray-800">
        <p><strong>{t('blog.anime.detail_p1')}</strong> {anime.year}</p>
        <p><strong>{t('blog.anime.detail_p2')}</strong> {anime.type}</p>
        <p><strong>{t('blog.anime.detail_p3')}</strong> {anime.episodes}</p>
        <p><strong>{t('blog.anime.detail_p4')}</strong> {anime.score}</p>
        <p><strong>{t('blog.anime.detail_p5')}</strong> {anime.synopsis}</p>
      </div>
    </section>
  );
};
