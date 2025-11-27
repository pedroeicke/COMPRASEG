import React from 'react';
import { motion } from 'framer-motion';

const IMAGES = [
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop", // Conference hall
  "https://images.unsplash.com/photo-1582195570073-1961e63789f2?q=80&w=2670&auto=format&fit=crop", // Tactical gear / Focus
  "https://images.unsplash.com/photo-1505373877841-8d43f7d6d2d8?q=80&w=2670&auto=format&fit=crop", // Audience writing
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2670&auto=format&fit=crop", // Meeting / Handshake
  "https://images.unsplash.com/photo-1576089235406-dbbf596cea39?q=80&w=2670&auto=format&fit=crop", // Tech / Security
  "https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=2636&auto=format&fit=crop", // Networking
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-12 bg-transparent overflow-hidden border-y border-white/5 relative">
      <div className="absolute inset-0 bg-tactical-dark/30 backdrop-blur-sm z-0"></div>
      
      <div className="relative z-10 mb-8 max-w-7xl mx-auto px-4">
        <span className="text-brand-blue font-bold tracking-widest uppercase text-xs block mb-1">Imersão Completa</span>
        <h3 className="text-2xl font-display font-bold text-white uppercase">A Experiência CompraSeg</h3>
      </div>

      <div className="relative flex overflow-x-hidden z-10">
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 30 
          }}
          style={{ width: "fit-content" }}
        >
          {/* Duplicate list for seamless infinite scroll */}
          {[...IMAGES, ...IMAGES].map((src, idx) => (
            <div 
              key={idx} 
              className="relative w-[300px] h-[200px] md:w-[400px] md:h-[260px] flex-shrink-0 rounded-xl overflow-hidden border border-white/10 group grayscale hover:grayscale-0 transition-all duration-500"
            >
              <img 
                src={src} 
                alt="Evento CompraSeg" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay opacity-50 group-hover:opacity-0 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-tactical-midnight via-transparent to-transparent opacity-60"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};