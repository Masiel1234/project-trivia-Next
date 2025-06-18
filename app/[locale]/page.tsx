'use client';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '@/components/button/LanguageSelector'

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <main className="p-6 text-center">
      <LanguageSelector />
      <h1 className="text-4xl">{t('title')}</h1>
    </main>
  );
}
