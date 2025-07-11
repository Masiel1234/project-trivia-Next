'use client';
import Link from 'next/link';

const years = [2020, 2021, 2022, 2023, 2024, 2025];

export default function TimelineYears() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-6">
      {years.map((year) => (
        <Link
          key={year}
          href={`/blog/animes/${year}/1`}
          className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold hover:bg-blue-200 transition"
        >
          {year}
        </Link>
      ))}
    </div>
  );
}
