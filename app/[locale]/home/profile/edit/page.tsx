'use client';
import Button from '@/components/button/Buttons/Button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string; photo?: string } | null>(null);
  const [form, setForm] = useState({ name: '', email: '', photo: '' });

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

  if (!user) return null;

  return (
    <div>
        <Button name='' to='' variant='return'></Button>
    <main className="max-w-md mx-auto p-6 bg-white shadow rounded mt-10">
      <h1 className="text-2xl font-bold mb-4">Editar Perfil</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Nombre</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Correo</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">URL de imagen</label>
          <input
            type="text"
            name="photo"
            value={form.photo}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {form.photo && (
          <img
            src={form.photo}
            alt="Vista previa"
            className="w-24 h-24 rounded-full mt-2 object-cover"
          />
        )}

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded font-bold"
        >
          Guardar cambios
        </button>
      </form>
    </main>
</div>
  );
}
