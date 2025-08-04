"use client";

import Background from "@/components/background/Background";
import LanguageSelector from "@/components/button/LanguageSelector";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabaseBrowser } from '@/utils/auth/supabaseBrowser';

const Login: React.FC = () => {
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const { data, error } = await supabaseBrowser().auth.signInWithPassword({ email, password });

    if (error) {
      alert(error.message);
    } else if (data.session) {
      // Espera un momento para asegurar que el cookie de sesión se establezca
      setTimeout(() => {
        router.push('/home'); // o '/' si quieres ir al home
      }, 200); // 200ms de delay opcional
    }
  };

  
  return (
    <Background variant="home">
      <div className="h-screen w-screen flex items-center justify-center bg-transparent px-2">
        <div className="absolute top-6 right-6 z-10">
          <LanguageSelector />
        </div>
        <div>
      <h2>Iniciar Sesión</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
      </div>
    </Background>
  );
};

export default Login;
