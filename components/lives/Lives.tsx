'use client';
import Image from "next/image";
import heartLive from "@/public/images/angel_12751712.png";
import loseLife from "@/public/images/angel_12751777.png";
import { useLives } from "./LivesContext";

const Lives = () => {
  const { lives } = useLives();
  const totalLives = 5;

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 p-2">
      {[...Array(totalLives)].map((_, i) =>
        i < lives ? (
          <Image
            key={i}
            src={heartLive}
            alt={`Vida ${i + 1}`}
            width={48}
            height={48}
            className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 animate-bounce transition-all"
          />
        ) : (
          <Image
            key={i}
            src={loseLife}
            alt={`Vida perdida ${i + 1}`}
            width={48}
            height={48}
            className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 opacity-70 transition-all"
          />
        )
      )}
    </div>
  );
};

export default Lives;
