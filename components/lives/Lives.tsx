'use client'
import Image from "next/image";
import heartLive from "@/public/images/angel_12751712.png"
import loseLife  from "@/public/images/angel_12751777.png"
import { useLives } from "./LivesContext"
const Lives = () => {
    const { lives } = useLives();
    const totalLives = 5;
    return(
        <div className="flex justify-center flex-wrap gap-2 sm:gap-3 md:gap-4">
            {[...Array(totalLives)].map((_,i)=>
            i < lives ? (
            <Image
            key={i}
            src={heartLive}
            alt={`Vida ${i + 1}`}
            width={32}
            height={32}
            className="w-10 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-all animate-bounce"
          />
        ) : (
          <Image
            key={i}
            src={loseLife}
            alt={`Vida perdida ${i + 1}`}
            width={32}
            height={32}
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-all"
          />
        )
            )}
        </div>
    );
};
export default Lives;