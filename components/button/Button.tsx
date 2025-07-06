'use client';

import React from 'react';
import { Link } from '@/i18n/navigation';
import { GoArrowLeft } from 'react-icons/go';

interface ButtonProps {
  name: string;
  to: string;
  variant?: 'primary' | 'secondary' | 'third' | 'return';
}

const Button: React.FC<ButtonProps> = ({ name, to, variant = 'primary' }) => {
  const baseStyles =
    'px-10 py-2 rounded text-center font-bold relative inset-x-0 bottom-0';
  const variantStyles = {
    primary: 'bg-pink-300 text-black text-xl font-bold px-8 py-2 rounded-full',
    secondary: 'text-white underline text-sm mt-2',
    third: 'bg-blue-400 text-black text-xl font-bold px-8 py-2 rounded-full',
    return:
      'fixed top-4 left-4 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-pink-700 transition-all duration-300 ease-in-out',
  };
  if (variant === 'return') {
    return (
      <button data-testId="button" className={variantStyles.return} onClick={() => history.back()}>
        <GoArrowLeft className="w-5 h-5" />
      </button>
    );
  }

  return (
    <Link href={to} className={`${baseStyles} ${variantStyles[variant]}`}>
      {name}
    </Link>
  );
};

export default Button;
