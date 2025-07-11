'use client';

import Button from '@/components/button/Button'
import { useTranslations } from 'next-intl';
export default function GameOver() {
  const  t  = useTranslations('game_over'); 

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-400 to-black text-white p-6">
      <h1 className="text-5xl font-bold mb-6">{t('game_over_title')}</h1>
      <div className="flex gap-6">
       
        <Button
          to='/home'
          name={t('game_over_return')}
          variant='primary'
          />  
      </div>
    </section>
  );
}
