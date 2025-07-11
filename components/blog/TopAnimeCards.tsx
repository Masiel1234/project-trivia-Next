'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface Anime {
  mal_id: number;
  title: string;
  synopsis: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
}

interface Props {
  animes: Anime[];
}

export default function TopAnimeCards({ animes }: Props) {
  const t = useTranslations('blog');
  return (
    <div className="max-w-6xl mx-auto mb-16">
      <h2 className="text-2xl font-bold text-center mb-6">{t('title_h2')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {animes.map((anime) => (
          <Link
            key={anime.mal_id}
            href={`/blog/${anime.mal_id}`}
            className="bg-white rounded-xl shadow hover:shadow-xl transition block overflow-hidden"
          >
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{anime.title}</h3>
              <p className="text-gray-600 text-sm mt-2">
                {anime.synopsis.slice(0, 100)}...
              </p>
              <p className="mt-2 text-xs text-blue-500 underline">{t('see_more')}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
