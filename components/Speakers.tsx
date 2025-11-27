import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPEAKERS } from '../constants';
import { ChevronRight, X, User } from 'lucide-react';
import { Speaker } from '../types';

export const Speakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <section id="palestrantes" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white uppercase">
            Palestrantes <span className="text-brand-blue">Confirmados</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            As maiores referências nacionais em licitações e segurança pública.
          </p>
        </div>

        {/* GRID DE PALESTRANTES */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SPEAKERS.map((speaker, idx) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedSpeaker(speaker)}
              className="group relative bg-tactical-dark rounded-xl overflow-hidden aspect-[4/5] cursor-pointer border border-white/5 hover:border-brand-blue/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300"
            >
              <img 
                src={speaker.image} 
                alt={speaker.name} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tactical-midnight via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="h-0.5 w-8 bg-brand-blue mb-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-lg font-display font-bold text-white uppercase leading-tight mb-1">{speaker.name}</h3>
                {speaker.role && (
                   <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">{speaker.role}</p>
                )}
                <div className="flex items-center text-xs text-brand-blue font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                   Ver currículo <ChevronRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL DE BIOGRAFIA (DOSSIÊ TÁTICO) */}
      <AnimatePresence>
        {selectedSpeaker && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            {/* Backdrop (Fundo Escuro) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpeaker(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-tactical-midnight border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-brand-blue text-white rounded-full transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Coluna Imagem */}
              <div className="md:w-2/5 relative min-h-[300px] md:min-h-full">
                <img 
                  src={selectedSpeaker.image} 
                  alt={selectedSpeaker.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-tactical-midnight to-transparent md:bg-gradient-to-r"></div>
              </div>

              {/* Coluna Texto */}
              <div className="md:w-3/5 p-8 flex flex-col overflow-y-auto bg-tactical-dark/50">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-brand-blue" />
                    <span className="text-brand-blue text-xs font-bold uppercase tracking-widest">Currículo</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white uppercase leading-none mb-2">
                    {selectedSpeaker.name}
                  </h3>
                  {selectedSpeaker.role && (
                    <p className="text-gray-400 font-medium border-l-2 border-brand-gold pl-3">
                      {selectedSpeaker.role}
                    </p>
                  )}
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base pr-2 custom-scrollbar">
                  {selectedSpeaker.bio ? (
                    selectedSpeaker.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))
                  ) : (
                    <p>Informações curriculares em breve.</p>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                   <button 
                     onClick={() => setSelectedSpeaker(null)}
                     className="px-6 py-2 border border-white/20 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wide rounded transition-colors"
                   >
                     Fechar
                   </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};