'use client'
import { createContext, useContext, useEffect, useState } from "react";

interface LivesContextType {
  lives: number;
  loseLife: () => void;
  resetLives: () => void;
  isGameOver: boolean;
}

const LivesContext = createContext<LivesContextType | undefined>(undefined);

export const LivesProvider = ({ children }: { children: React.ReactNode }) => {
  const [lives, setLives] = useState(5);
  const [isGameOver, setIsGameOver] = useState(false);

  const loseLife = () => {
    setLives((prev) => {
      const updated = Math.max(prev - 1, 0);
      if (updated === 0) {
        setIsGameOver(true);
      }
      return updated;
    });
  };

  const resetLives = () => {
    setLives(5);
    setIsGameOver(false);
  };

  useEffect(() => {
    const time = setInterval(() => {
      resetLives();
    }, 30000); 

    return () => clearInterval(time);
  }, []);

  return (
    <LivesContext.Provider value={{ lives, loseLife, resetLives, isGameOver }}>
      {children}
    </LivesContext.Provider>
  );
};

export const useLives = () => {
  const context = useContext(LivesContext);
  if (!context) throw new Error('useLives must be used inside LivesProvider');
  return context;
};
