import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Tactical Blue Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Imagem de Policial Tático */}
        <img 
          src="https://images.unsplash.com/photo-1628891388656-655f4142646c?q=80&w=2670&auto=format&fit=crop" 
          alt="Policial Tático Operação" 
          className="w-full h-full object-cover object-top opacity-60 grayscale-[20%] contrast-125"
        />
        
        {/* Camada de Cor Predominante (Azul Escuro Tático) */}
        <div className="absolute inset-0 bg-tactical-midnight/80 mix-blend-multiply"></div>
        
        {/* Camada de Brilho Azul (Highlights) */}
        <div className="absolute inset-0 bg-brand-blue/30 mix-blend-overlay"></div>
        
        {/* Gradiente de Fundo para o Corpo do Site (Fade out bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-tactical-midnight/90 via-tactical-midnight/40 to-tactical-midnight"></div>
        
        {/* Glow Central para focar no Texto */}
        <div className="absolute inset-0 bg-hero-glow mix-blend-screen opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          
          <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-white mb-2 leading-none tracking-tight drop-shadow-2xl">
            COMPRA<span className="text-brand-blue">SEG</span>
          </h1>
          <p className="font-display text-xl md:text-2xl text-gray-400 uppercase tracking-[0.2em] mb-8 drop-shadow-lg">
            Compras da Segurança Pública
          </p>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md">
            O COMPRASEG é um congresso de licitações e contratos especializado em temas de segurança pública, com o objetivo de aperfeiçoar a qualidade das aquisições de materiais e contratações de serviços específicos das polícias e corpo de bombeiros militar.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12 py-6 px-8 bg-tactical-dark/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-brand-blue" />
              <div className="text-left">
                <span className="block text-white font-bold uppercase">12 a 14 de Maio</span>
                <span className="text-sm text-gray-400">2026</span>
              </div>
            </div>
            <div className="w-px h-10 bg-white/10 hidden md:block"></div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-brand-blue" />
              <div className="text-left">
                <span className="block text-white font-bold uppercase">Florianópolis</span>
                <span className="text-sm text-gray-400">Santa Catarina</span>
              </div>
            </div>
             <div className="w-px h-10 bg-white/10 hidden md:block"></div>
             <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-brand-blue" />
              <div className="text-left">
                <span className="block text-white font-bold uppercase">08h às 18h</span>
                <span className="text-sm text-gray-400">Imersão Completa</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a 
              href="#investimento"
              className="px-10 py-5 bg-brand-blue hover:bg-blue-700 text-white font-bold text-lg uppercase tracking-wide rounded-lg shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:scale-105 border border-blue-400/30"
            >
              Inscreva-se Agora
            </a>
            <a 
              href="#sobre"
              className="px-10 py-5 bg-black/30 backdrop-blur-sm border border-gray-500 hover:border-white text-gray-200 hover:text-white font-bold text-lg uppercase tracking-wide rounded-lg transition-all hover:bg-white/10"
            >
              Saiba Mais
            </a>
          </div>

        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/30 cursor-pointer hover:text-white transition-colors"
        onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth'})}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};