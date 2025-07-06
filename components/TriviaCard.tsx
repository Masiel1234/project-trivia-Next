'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl'; // opcional

interface Props {
  pregunta: string;
  opciones: { [key: string]: string };
  respuestaCorrecta: string;
  onRespuesta: (opcion: string) => void;
}

export default function TriviaCard({
  pregunta,
  opciones,
  respuestaCorrecta,
  onRespuesta,
}: Props) {
  const t = useTranslations(); // opcional
  const [opcionSeleccionada, setOpcionSeleccionada] = useState<string | null>(null);

  const manejarRespuesta = (opcion: string) => {
    if (opcionSeleccionada !== null) return; // prevenir múltiples clics
    setOpcionSeleccionada(opcion);
    onRespuesta(opcion);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-6 text-center">{pregunta}</h2>

      <div className="grid gap-4">
        {Object.entries(opciones).map(([letra, texto]) => {
          const esSeleccionada = opcionSeleccionada === letra;
          const esCorrecta = letra === respuestaCorrecta;
          const mostrarResultado = opcionSeleccionada !== null;

          let clases = 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200';

          if (mostrarResultado) {
            clases = esCorrecta 
            ? ' bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200'
            : esSeleccionada 
            ? 'bg-green-200 text-green-800 border border-green-400'
            : 'bg-red-200 text-red-800 border border-red-400';
          } else {
            clases += 'bg-gray-100 text-gray-700 border border-gray-200';
          }

          return (
            <button
              key={letra}
              className={clases}
              onClick={() => manejarRespuesta(letra)}
              disabled={mostrarResultado}
              title={t('buttonLeave.Leave_Game')}
            >
              <span className="text-lg">{letra}.</span> {texto}
            </button>
          );
        })}
      </div>
    </div>
  );
}
