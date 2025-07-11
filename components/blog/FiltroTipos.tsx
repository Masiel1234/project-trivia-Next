'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

interface Props {
  year: string;
  page: string;
  selected: string;
}

const types = ['All', 'TV', 'Movie', 'OVA'];

export function FiltroTipos({ year, page, selected }: Props) {
  const router = useRouter();
  const t = useTranslations('blog');
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value;
    router.push(`/blog/animes/${year}/${page}?type=${newType}`);
  };

  return (
    <div className="flex justify-center mb-6">
      <select
      title='select'
        className="px-4 py-2 border border-gray-300 rounded"
        value={selected}
        onChange={handleChange}
      >
        {types.map((type) => (
          <option key={type} value={type}>
            {type === 'All' ? t('filtro_title') : type}
          </option>
        ))}
      </select>
    </div>
  );
}
