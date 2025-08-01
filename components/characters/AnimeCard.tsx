'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface Props {
  anime: {
    mal_id: number;
    title: string;
    images: { jpg: { image_url: string } };
  };
}

export default function AnimeCard ({ anime }: Props){ 
  const t = useTranslations("characters");
  return(
  <Link
    href={`/characters/anime/${anime.mal_id}`}
    className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 overflow-hidden flex flex-col"
  >
    <Image
      src={anime.images.jpg.image_url}
      alt={anime.title}
      width={300}
      height={300}
      className="w-full h-80 object-cover"
    />
    <div className="p-5 flex flex-col justify-between flex-1">
      <h2 className="text-lg font-semibold text-gray-800 line-clamp-3 mb-4">
        {anime.title}
      </h2>
      <p className="text-sm text-blue-600 font-medium mt-auto">{t('demografia.next')}</p>
    </div>
  </Link>
  )
};

