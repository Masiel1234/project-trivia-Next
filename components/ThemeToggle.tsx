'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const isDarkStored = storedTheme === 'dark';

    if (isDarkStored) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const currentlyDark = html.classList.contains('dark');

    if (currentlyDark) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 z-50 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white shadow transition-all"
    >
      {isDark ? '☀️ Claro' : '🌙 Oscuro'}
    </button>
  );
}
