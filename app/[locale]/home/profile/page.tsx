'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  if (!user) {
    return (
      <main className="p-6 text-center">
        <h2 className="text-xl font-bold mb-2">No has iniciado sesión</h2>
        <Link href="/login" className="text-blue-600 underline">
          Ir al login
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Perfil</h1>
      <p className="mb-2">Nombre: {user.name}</p>
      <p className="mb-4">Correo: {user.email}</p>
      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Cerrar sesión
      </button>
    </main>
  );
}
