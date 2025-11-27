import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Coffee, Book, Package } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="investimento" className="w-full relative bg-tactical-dark/40 backdrop-blur-md border-y border-white/10 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Content Container */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Header / Pricing Left Side */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <div className="mb-8">
                    <span className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-2 block">Oportunidade</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-4">
                        Investimento
                    </h2>
                    <p className="text-gray-400 text-lg">Garanta sua vaga na imersão definitiva de compras públicas.</p>
                </div>

                <div className="bg-tactical-midnight/50 border border-white/10 rounded-2xl p-8 inline-block w-full max-w-lg relative overflow-hidden group hover:border-brand-blue/30 transition-colors shadow-2xl">
                    <div className="absolute top-0 right-0 bg-brand-blue text-white text-[10px] font-bold uppercase py-1 px-4 rounded-bl-lg tracking-widest">
                        Lote Oficial
                    </div>

                    <h3 className="text-2xl font-bold text-white uppercase mb-2">Passaporte Completo</h3>
                    <p className="text-gray-400 text-sm mb-6">Acesso total aos 3 dias de evento</p>
                    
                    <div className="flex items-baseline justify-center lg:justify-start gap-1 mb-8">
                        <span className="text-gray-500 text-xl">R$</span>
                        <span className="text-6xl font-display font-bold text-white tracking-tighter group-hover:text-brand-blue transition-colors duration-500">5.400</span>
                        <span className="text-gray-500 text-xl">,00</span>
                    </div>

                    <a 
                        href="#contato" 
                        className="block w-full py-4 bg-brand-blue hover:bg-blue-600 text-white font-bold text-center uppercase tracking-widest rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all transform hover:scale-[1.02]"
                    >
                        Inscrever Agora
                    </a>
                    <p className="text-xs text-center text-gray-500 mt-4 uppercase tracking-wide">
                        Desconto especial para grupos acima de 4 servidores
                    </p>
                </div>
            </div>

            {/* Features Right Side */}
            <div className="lg:w-1/2 w-full">
                <div className="grid sm:grid-cols-2 gap-8">
                    <div className="col-span-full">
                         <h4 className="text-white text-xl font-bold uppercase mb-6 flex items-center gap-3">
                            <Shield className="w-6 h-6 text-brand-blue" /> 
                            Incluso na Inscrição
                        </h4>
                    </div>

                    <ul className="space-y-8">
                        <li className="flex items-start gap-4 group">
                            <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                                <Coffee className="w-5 h-5 text-green-500" />
                            </div>
                            <div>
                                <strong className="block text-white uppercase text-sm tracking-wide mb-1">Alimentação</strong>
                                <span className="text-gray-400 text-sm leading-relaxed">Coffee break durante a manhã e tarde nos 3 dias do evento.</span>
                            </div>
                        </li>
                         <li className="flex items-start gap-4 group">
                            <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                                <Book className="w-5 h-5 text-green-500" />
                            </div>
                            <div>
                                <strong className="block text-white uppercase text-sm tracking-wide mb-1">Livro Exclusivo</strong>
                                <span className="text-gray-400 text-sm leading-relaxed">Livro Temas de Contratações da Segurança Pública, que será publicado especialmente para o COMPRASEG.</span>
                            </div>
                        </li>
                    </ul>

                    <ul className="space-y-8">
                        <li className="flex items-start gap-4 group">
                            <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                                <Package className="w-5 h-5 text-green-500" />
                            </div>
                            <div>
                                <strong className="block text-white uppercase text-sm tracking-wide mb-1">Kit do Participante</strong>
                                <ul className="text-gray-400 text-sm leading-relaxed list-disc list-inside mt-1">
                                    <li>Mochila</li>
                                    <li>Garrafa térmica</li>
                                    <li>Caderno de anotações</li>
                                    <li>Caneta</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};