
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Users, Shield, Anchor, Building2 } from 'lucide-react';
import { SECURITY_ORGANS, ARMED_FORCES, POLICE_NATURE_ORGANS, AUDIENCE_ROLES } from '../constants';

export const Audience: React.FC = () => {
  return (
    <section id="publico" className="w-full relative bg-tactical-midnight py-24 overflow-hidden border-t border-white/5">
      
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-blue/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-2 block">Público Alvo</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-6">
            Para quem é o COMPRASEG?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent mx-auto"></div>
        </div>

        {/* --- GRID PRINCIPAL (3 COLUNAS) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
            {/* CARD 1: SEGURANÇA PÚBLICA (AZUL) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col h-full bg-tactical-dark/40 border border-brand-blue/30 rounded-2xl overflow-hidden hover:border-brand-blue/60 transition-colors shadow-lg group"
            >
                <div className="p-8 border-b border-white/5 bg-brand-blue/5">
                    <div className="w-12 h-12 bg-brand-blue text-white rounded-lg flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                        <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">Segurança Pública</h3>
                    <p className="text-gray-400 text-sm leading-relaxed text-justify">
                        O COMPRASEG é destinado principalmente para os órgãos de segurança pública enumerados do artigo 144 da Constituição Federal.
                    </p>
                </div>
                <div className="p-6 flex-1 bg-black/20">
                    <ul className="space-y-3">
                        {SECURITY_ORGANS.map((org, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                                <div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div>
                                <span className="text-sm font-medium uppercase tracking-wide">{org.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            {/* CARD 2: FORÇAS ARMADAS (DOURADO) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col h-full bg-tactical-dark/40 border border-brand-gold/30 rounded-2xl overflow-hidden hover:border-brand-gold/60 transition-colors shadow-lg group"
            >
                <div className="p-8 border-b border-white/5 bg-brand-gold/5">
                    <div className="w-12 h-12 bg-brand-gold text-black rounded-lg flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                        <Anchor className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">Forças Armadas</h3>
                    <p className="text-gray-400 text-sm leading-relaxed text-justify">
                        Indicado para Marinha, Exército e Aeronáutica, em razão dos volumes de compras semelhantes (armamentos, munições, viaturas, uniformes e equipamentos de proteção).
                    </p>
                </div>
                <div className="p-6 flex-1 bg-black/20">
                    <ul className="space-y-3">
                        {ARMED_FORCES.map((org, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
                                <span className="text-sm font-medium uppercase tracking-wide">{org.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            {/* CARD 3: NATUREZA POLICIAL (PRATA/CINZA) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col h-full bg-tactical-dark/40 border border-gray-500/30 rounded-2xl overflow-hidden hover:border-gray-400/60 transition-colors shadow-lg group"
            >
                <div className="p-8 border-b border-white/5 bg-gray-500/5">
                    <div className="w-12 h-12 bg-gray-700 text-white rounded-lg flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(107,114,128,0.4)]">
                        <Building2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">Natureza Policial</h3>
                    <p className="text-gray-400 text-sm leading-relaxed text-justify">
                        Indicado para órgãos que realizam atividades de natureza policial e contratações de equipamentos de uso policial, no Legislativo e Judiciário.
                    </p>
                </div>
                <div className="p-6 flex-1 bg-black/20">
                    <ul className="space-y-3">
                        {POLICE_NATURE_ORGANS.map((org, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                                <span className="text-sm font-medium uppercase tracking-wide">{org.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

        </div>

        {/* --- FAIXA DE CARGOS --- */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full bg-gradient-to-r from-tactical-dark to-tactical-midnight border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-blue"></div>
            
            <div className="flex flex-col lg:flex-row gap-10 items-start relative z-10">
                <div className="lg:w-1/4">
                     <div className="flex items-center gap-3 mb-4">
                        <Users className="w-6 h-6 text-brand-blue" />
                        <span className="text-brand-blue font-bold tracking-widest uppercase text-xs">Público Alvo</span>
                     </div>
                     <h3 className="text-3xl font-display font-bold text-white uppercase leading-none">
                        Cargos &<br/>Funções
                     </h3>
                </div>
                
                <div className="lg:w-3/4 grid md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                    {AUDIENCE_ROLES.map((role, idx) => (
                        <div key={idx} className="flex items-start gap-3 group">
                            <Check className="w-4 h-4 text-brand-blue mt-1 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                            <span className="text-gray-400 text-sm group-hover:text-white transition-colors">{role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};
