'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export interface UserForm {
  name: string;
  email: string;
  photo?: string;
}

export const useUserForm = () => {
  const [user, setUser] = useState<UserForm | null>(null);
  const [form, setForm] = useState<UserForm>({ name: '', email: '', photo: '' });
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) {
      const parsed = JSON.parse(data);
      setUser(parsed);
      setForm(parsed);
    } else {
      router.push('/login');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(form));
    router.push('/home/profile');
  };

  return { user, form, handleChange, handleSubmit };
};
