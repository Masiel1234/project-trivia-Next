'use client';
import { useState, useRef, useEffect } from 'react';


interface Props {
  pregunta: string;
  opciones: Record<string, string>;
  onRespuesta: (opcion: string) => void;
  letraCorrecta: string; 
  mostrarRespuesta: boolean; 
}

export default function TriviaCard({
  pregunta,
  opciones,
  onRespuesta,
  letraCorrecta,
  mostrarRespuesta,
}: Props) {
  const [seleccion, setSeleccion] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);

  const letras = Object.keys(opciones);

  useEffect(() => {
    setSeleccion(null);
    setFocusedIndex(0);
  }, [pregunta]);

  useEffect(() => {
    optionRefs.current[focusedIndex]?.focus();
  }, [focusedIndex]);

  const handleClick = (letra: string) => {
    if (mostrarRespuesta) return;
    setSeleccion(letra);
    onRespuesta(letra);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(letras[index]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev + 1) % letras.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev === 0 ? letras.length - 1 : prev - 1));
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
        {pregunta}
      </h2>
      <ul className="space-y-3">
        {letras.map((letra, index) => {
          const texto = opciones[letra];
          const isSelected = seleccion === letra;
          const isCorrect = letra === letraCorrecta;

          let style =
            'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200';

          if (mostrarRespuesta) {
            style = isCorrect
              ? 'bg-green-200 text-green-800 border border-green-400'
              : isSelected
              ? 'bg-red-200 text-red-800 border border-red-400'
              : 'bg-gray-100 text-gray-700 border border-gray-200';
          } else if (isSelected) {
            style = 'bg-pink-100 text-pink-800 border border-pink-400';
          }

          return (
            <li
              key={letra}
              ref={(el) =>{
                optionRefs.current[index] = el;
              }}
              role="button"
              tabIndex={0}
              onClick={() => handleClick(letra)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`p-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-200 ${style}`}
              style={{
                pointerEvents: mostrarRespuesta ? 'none' : 'auto',
              }}
            >
              <span className="font-bold">{letra}.</span> {texto}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
