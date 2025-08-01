'use client';

import Button from '@/components/button/Buttons/Button';
import { EditProfileForm } from '@/components/profile/EditProfileForm';
import { useUserForm } from '@/hooks/user/useUserForm';
import { useTranslations } from 'next-intl';

export default function EditProfilePage() {
  const { user, form, handleChange, handleSubmit } = useUserForm();
  const t = useTranslations('profile');

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6 relative">
        <Button variant="return" to="/profile" />
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {t('edit.title')}
        </h1>
        <EditProfileForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
