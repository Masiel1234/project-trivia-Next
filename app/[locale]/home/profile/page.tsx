'use client';
import { useEffect, useState } from 'react';
import { supabaseBrowser } from '@/utils/auth/supabaseBrowser';
import { useRouter } from 'next/navigation';
import type { User } from '@supabase/supabase-js';

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabaseBrowser().auth.getUser();
      if (error || !data.user) {
        router.push('/login');
        return;
      }
      setUser(data.user);
      setUsername(data.user.user_metadata?.username ?? '');
    };

    getUser();
  }, [router]);

  const handleUpdate = async () => {
    const { error } = await supabaseBrowser().auth.updateUser({
      data: { username },
    });
    if (error) alert(error.message);
    else alert('Perfil actualizado');
  };

const handleLogout = async () => {
  await supabaseBrowser().auth.signOut();
  router.replace('/login'); // reemplaza en la pila de navegación
  router.refresh(); // fuerza recarga y evita datos de sesión en caché
};


  if (!user) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Perfil</h2>
      <p>Email: {user.email}</p>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleUpdate}>Actualizar</button>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}
