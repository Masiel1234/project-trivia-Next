import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const categories= [
  {
    name: 'Shounen',
    slug: 'shounen',
    icon: '/icons/shounen.jpeg',
  },
  {
    name: 'Seinen',
    slug: 'seinen',
    icon: '/icons/seinen.jpeg',
  },
  {
    name: 'Shoujo',
    slug: 'shoujo',
    icon: '/icons/shoujo.jpeg',
  },
  {
    name: 'Josei',
    slug: 'josei',
    icon: '/icons/josei.jpeg',
  },
  {
    name: 'Romance',
    slug: 'romance',
    icon: '/icons/romance.jpeg',
  },
  {
    name: 'Action',
    slug: 'action',
    icon: '/icons/action.jpeg',
  },
  {
    name: 'Comedy',
    slug: 'comedy',
    icon: '/icons/comedy.jpeg',
  },
  {
    name: 'Fantasy',
    slug: 'fantasy',
    icon: '/icons/fantasy.jpeg',
  },
];

export default function PersonajesHome() {
  const t = useTranslations('characters')
  return (
    <section className="p-10 min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100">
    <h1 className="text-4xl font-bold text-center mb-6">{t('title_h1')}</h1>
      <p className="text-center mb-8 text-gray-700">
       {t('text_p')}
      </p>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto p-6">
  {categories.map((cat) => (
    <Link
      key={cat.slug}
      href={`/characters/${cat.slug}`}
      className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 text-center"
    >
      <Image
        src={cat.icon}
        alt={cat.name}
        width={160}
        height={160}
        className="mx-auto mb-4 rounded-full object-contain"
      />
      <h3 className="text-xl font-bold text-indigo-700">{cat.name}</h3>
    </Link>
  ))}
</div>

    </section>
  );
}
