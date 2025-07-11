'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl'; 

interface Props {
  pregunta: string;
  opciones: { [key: string]: string };
  respuestaCorrecta: string;
  onRespuesta: (opcion: string) => void;
}

export default function TriviaCard({
  pregunta,
  opciones,
  onRespuesta,
}: Props) {

  const t = useTranslations(); 
  const [opcionSeleccionada, setOpcionSeleccionada] = useState<string | null>(null);

  const manejarRespuesta = (opcion: string) => {
    if (opcionSeleccionada !== null) return;
    setOpcionSeleccionada(opcion);
    onRespuesta(opcion);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-6 text-center">{pregunta}</h2>
      <div className="grid gap-4">
        {Object.entries(opciones).map(([letra, texto]) => {
          const mostrarResultado = opcionSeleccionada !== null;
          return (
            <button
              key={letra}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200"
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
