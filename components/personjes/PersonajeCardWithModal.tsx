'use client';

import { useState } from 'react';

interface CharacterSimple {
  mal_id: number;
  name: string;
  images: {
    jpg: { image_url: string };
  };
}

interface CharacterDetail {
  mal_id: number;
  name: string;
  about: string;
  images: {
    jpg: { image_url: string };
  };
}

interface VoiceActor {
  person: {
    name: string;
    url: string;
    images: {
      jpg: { image_url: string };
    };
  };
  language: string;
}

interface Props {
  char: {
    character: CharacterSimple;
    role: string;
  };
}

/* --- obtener detalle del personaje --- */
async function getCharacterDetail(id: number): Promise<CharacterDetail | null> {
  const res = await fetch(`https://api.jikan.moe/v4/characters/${id}`, {
    cache: 'no-store',
  });
  const { data } = await res.json();
  return data ?? null;
}

/* --- obtener voces del personaje --- */
async function getCharacterVoices(id: number): Promise<VoiceActor[]> {
  const res = await fetch(`https://api.jikan.moe/v4/characters/${id}/voices`, {
    cache: 'no-store',
  });
  const { data } = await res.json();
  return data || [];
}

export default function PersonajeCardWithModal({ char }: Props) {
  const [selected, setSelected] = useState<CharacterDetail | null>(null);
  const [voices, setVoices] = useState<VoiceActor[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = async () => {
    const detail = await getCharacterDetail(char.character.mal_id);
    const voiceActors = await getCharacterVoices(char.character.mal_id);
    if (detail) {
      setSelected(detail);
      setVoices(voiceActors);
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setSelected(null);
    setVoices([]);
    setIsOpen(false);
  };

  const preferredVoice =
    voices.find((v) => v.language === 'Japanese') ?? voices[0];

  return (
    <>
      {/* Card del personaje */}
      <div
        onClick={openModal}
        className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col overflow-hidden"
      >
        <img
          src={char.character.images.jpg.image_url}
          alt={char.character.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4 flex flex-col flex-1 justify-between text-center">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-2 mb-1">
            {char.character.name}
          </h3>
          <p className="text-sm text-rose-500 font-medium">{char.role}</p>
        </div>
      </div>

      {/* Modal */}
      {isOpen && selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-2xl w-full rounded-xl shadow-xl relative animate-fadeIn max-h-[90vh] overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>

            <div className="p-6 overflow-y-auto h-full">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src={selected.images.jpg.image_url}
                  alt={selected.name}
                  className="w-48 h-64 object-cover rounded-lg shadow"
                />

                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold text-rose-700 mb-2">
                    {selected.name}
                  </h2>
                  <p className="text-gray-700 text-sm whitespace-pre-line mb-4 max-h-52 overflow-y-auto pr-2">
                    {selected.about || 'Sin descripción.'}
                  </p>

                  {preferredVoice && (
                    <div className="mt-4">
                      <h3 className="text-indigo-600 font-medium mb-2">
                        Seiyuu:
                      </h3>
                      <div className="flex items-center gap-3 justify-center md:justify-start">
                        <img
                          src={preferredVoice.person.images.jpg.image_url}
                          alt={preferredVoice.person.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <a
                          href={preferredVoice.person.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-800 hover:underline text-sm"
                        >
                          {preferredVoice.person.name} ({preferredVoice.language})
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
