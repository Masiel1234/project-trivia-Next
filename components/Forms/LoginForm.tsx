'use client';

import { useState } from 'react';

interface LoginFormProps {
  onSubmit: (credentials: { email: string; password: string }) => Promise<void>;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await onSubmit({ email, password });
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError('Ocurrió un error inesperado');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        className="input"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="btn btn-primary">Iniciar sesión</button>
    </form>
  );
}
