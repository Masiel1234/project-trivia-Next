'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

interface Props {
  year: string;
  currentPage: number;
  type: string;
}

export function Paginacion({ year, currentPage, type }: Props) {
  const router = useRouter();
  const t = useTranslations();
  const goToPage = (page: number) => {
    router.push(`/blog/animes/${year}/${page}?type=${type}`);
  };

  return (
    <div className="flex justify-center gap-4 mt-10">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
       {t('blog.button_pagination.previous')}
      </button>
      <span className="px-4 py-2 text-gray-700 font-semibold">{t('blog.button_pagination.num_page')} {currentPage}</span>
      <button
        onClick={() => goToPage(currentPage + 1)}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        {t('blog.button_pagination.next')}
      </button>
    </div>
  );
}
