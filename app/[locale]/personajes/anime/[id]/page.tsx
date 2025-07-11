import { Suspense } from 'react';
import PersonajeCardWithModal from '@/components/personjes/PersonajeCardWithModal';

interface Character {
  character: {
    mal_id: number;
    name: string;
    images: {
      jpg: { image_url: string };
    };
  };
  role: string;
}

async function getCharacters(id: string): Promise<Character[]> {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`, {
    cache: 'no-store',
  });
  const data = await res.json();
  return data.data || [];
}

export default async function PersonajesPage({ params }: { params: { id: string } }) {
  const characters = await getCharacters(params.id);

  return (
    <section className="p-10 min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-pink-200">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-rose-700 tracking-wide">
        Personajes del Anime
      </h1>

      {characters.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Este anime no tiene personajes registrados.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {characters.map((char) => (
            <Suspense fallback={<p>Cargando personaje...</p>} key={char.character.mal_id}>
              <PersonajeCardWithModal char={char} />
            </Suspense>
          ))}
        </div>
      )}
    </section>
  );
}
