'use client';
import Link from 'next/link';

interface Props {
  slug: string;
  currentPage: number;
  lastPage: number;
  pageNumbers: number[];
}

const Pagination = ({ slug, currentPage, lastPage, pageNumbers }: Props) => (
  <div className="flex justify-center flex-wrap gap-3 mt-14">
    {currentPage > 1 && (
      <Link
        href={`/characters/${slug}?page=${currentPage - 1}`}
        className="px-4 py-2 bg-gray-300 rounded-xl text-gray-700 hover:bg-gray-400 transition"
      >
        ← Anterior
      </Link>
    )}

    {pageNumbers.map((num) => (
      <Link
        key={num}
        href={`/characters/${slug}?page=${num}`}
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
        href={`/characters/${slug}?page=${currentPage + 1}`}
        className="px-4 py-2 bg-gray-300 rounded-xl text-gray-700 hover:bg-gray-400 transition"
      >
        Siguiente →
      </Link>
    )}
  </div>
);

export default Pagination;
