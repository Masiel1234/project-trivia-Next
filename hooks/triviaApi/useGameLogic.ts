import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLives } from '@/components/lives/LivesContext';

export function useGameLogic() {
  const [respuestaUsuario, setRespuestaUsuario] = useState<string | null>(null);
  const [esCorrecta, setEsCorrecta] = useState<boolean | null>(null);
  const router = useRouter();
  const { loseLife, isGameOver } = useLives();

  const seleccionarRespuesta = (opcion: string, correcta: string) => {
    const esAcertada = opcion === correcta;
    setRespuestaUsuario(opcion);
    setEsCorrecta(esAcertada);
    if (!esAcertada) loseLife();
  };

  useEffect(() => {
    if (isGameOver) router.push('/home/game_over');
  }, [isGameOver, router]);

  const reset = () => {
    setRespuestaUsuario(null);
    setEsCorrecta(null);
  };

  return {
    respuestaUsuario,
    respuestaCorrecta: esCorrecta,
    seleccionarRespuesta,
    reset,
  };
}
