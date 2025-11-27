
import React from 'react';
import { motion } from 'framer-motion';

interface TapeDividerProps {
  text: string;
  angle?: number; // em graus (ex: -2, 3)
  color?: 'gold' | 'blue';
  direction?: 'left' | 'right';
  className?: string;
}

export const TapeDivider: React.FC<TapeDividerProps> = ({ 
  text, 
  angle = -2, 
  color = 'gold', 
  direction = 'left',
  className = ''
}) => {
  
  const bgColor = color === 'gold' ? 'bg-brand-gold/10' : 'bg-brand-blue/15';
  const borderColor = color === 'gold' ? 'border-brand-gold/30' : 'border-brand-blue/30';
  const textColor = color === 'gold' ? 'text-brand-gold' : 'text-brand-blue';
  
  const moveConfig = direction === 'left' 
    ? { x: ["0%", "-50%"] } 
    : { x: ["-50%", "0%"] };

  return (
    <div className={`relative w-full overflow-hidden py-20 pointer-events-none select-none z-20 ${className}`}>
       {/* 
         W-[200%] e -ML-[50%] para garantir largura extrema.
         A rotação em um elemento muito largo exige altura vertical no pai (py-20) para não cortar as pontas.
       */}
       <div 
         className={`w-[200%] -ml-[50%] h-[50px] flex items-center justify-center border-y backdrop-blur-[2px] ${bgColor} ${borderColor} shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
         style={{ transform: `rotate(${angle}deg)` }}
       >
         <motion.div 
            animate={moveConfig}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap min-w-full"
         >
            {/* Repetição aumentada para 20x para garantir que o texto cubra toda a largura de 200% */}
            {Array(20).fill(null).map((_, i) => (
                <span key={i} className={`${textColor} font-display font-bold text-lg md:text-xl mx-8 tracking-[0.25em] uppercase flex items-center`}>
                  {text} <span className="mx-6 opacity-40 text-sm">//</span>
                </span>
            ))}
         </motion.div>
       </div>
    </div>
  );
};
