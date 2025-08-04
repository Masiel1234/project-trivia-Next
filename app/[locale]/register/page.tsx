"use client";

import { useState } from 'react';
import { useRouter } from "next/navigation";
import Background from "@/components/background/Background";
import { supabaseBrowser } from '@/utils/auth/supabaseBrowser';
import LanguageSelector from "@/components/button/LanguageSelector";

const Register: React.FC = () => {
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    const { error } = await supabaseBrowser().auth.signUp({ email, password });
    if (error) alert(error.message);
    else {
      alert('Revisa tu correo para confirmar el registro');
      router.push('/login');
    }
  };

  return (
    <Background variant="home">
      <div className="absolute top-6 right-6 z-10">
        <LanguageSelector />
      </div>
       <div>
      <h2>Registro</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Registrar</button>
    </div>
    </Background>
  );
};

export default Register;
