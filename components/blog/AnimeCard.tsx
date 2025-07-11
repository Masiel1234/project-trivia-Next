import Link from 'next/link';
import { AnimeImage } from './AnimeImage';

interface Props {
  id: number;
  title: string;
  synopsis: string;
  imageUrl: string;
  seeMoreText: string;
}

export  const AnimeCard = ({ id, title, synopsis, imageUrl, seeMoreText }: Props)=>{
    return(
    <Link
      href={`/blog/${id}`}
      className="bg-white rounded-xl shadow hover:shadow-xl transition block overflow-hidden"
    >
      <AnimeImage
        src={imageUrl}
        alt={title}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">
          {synopsis ? `${synopsis.slice(0, 100)}...` : 'Sin sinopsis disponible'}
        </p>
        <p className="mt-2 text-xs text-blue-500 underline">{seeMoreText}</p>
      </div>
    </Link>);
};
