import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLives } from '@/components/lives/LivesContext';

export function useGameLogic() {
  const [respuestaUsuario, setRespuestaUsuario] = useState<string | null>(null);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState<boolean | null>(null);
  const router = useRouter();
  const { loseLife, isGameOver } = useLives();

  const seleccionarRespuesta = (letra: string, correcta: string) => {
    setRespuestaUsuario(letra);
    const acierto = letra === correcta;
    setRespuestaCorrecta(acierto);
    if (!acierto) loseLife();
  };

  useEffect(() => {
    if (isGameOver) {
      router.push('/home/game_over');
    }
  }, [isGameOver, router]);

  const reset = () => {
    setRespuestaUsuario(null);
    setRespuestaCorrecta(null);
  };

  return {
    respuestaUsuario,
    respuestaCorrecta,
    seleccionarRespuesta,
    reset,
  };
}
