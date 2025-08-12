'use client';

import InputField from '@/components/input/InputField';
import { useTranslations } from 'next-intl';
import { UserForm } from '@/hooks/user/useUserForm';

interface Props {
  form: UserForm;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const EditProfileForm = ({ form, handleChange, handleSubmit }: Props) => {
  const t = useTranslations('profile');

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          {t('name')}
        </label>
        <InputField
          type="text"
          name="name"
          placeholder={t('name')}
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          {t('email')}
        </label>
        <InputField
          type="email"
          name="email"
          placeholder={t('email')}
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition duration-300"
      >
        {t('edit.save_changes')}
      </button>
    </form>
  );
};
