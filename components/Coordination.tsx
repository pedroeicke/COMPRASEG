import React from 'react';
import { motion } from 'framer-motion';
import { COORDINATORS } from '../constants';

export const Coordination: React.FC = () => {
  return (
    <section id="coordenacao" className="py-24 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-2 block">Liderança</span>
          <h2 className="text-4xl font-display font-bold text-white uppercase">
            Coordenação Técnica
          </h2>
        </div>

        <div className="space-y-24">
          {COORDINATORS.map((coord, idx) => (
            <motion.div
              key={coord.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="lg:w-1/3 w-full">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                  <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay z-10"></div>
                  <img 
                    src={coord.image} 
                    alt={coord.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-tactical-midnight to-transparent z-20">
                     <h3 className="text-2xl font-display font-bold text-white uppercase">{coord.name}</h3>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3 w-full">
                <div className="glass-panel p-8 rounded-2xl">
                  <div className="space-y-6">
                    {coord.bio.map((paragraph, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5 flex-shrink-0"></div>
                        <p className="text-gray-300 text-lg leading-relaxed">{paragraph}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};