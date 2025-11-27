
import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldAlert } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-tactical-midnight/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* 1. LOGO AREA */}
            {/* flex-shrink-0 impede que a logo amasse. whitespace-nowrap impede quebra de linha. */}
            <div 
              className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" 
              onClick={() => window.scrollTo(0,0)}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-brand-blue/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <ShieldAlert className="h-9 w-9 md:h-11 md:w-11 text-brand-blue relative z-10" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-2xl md:text-3xl tracking-tighter text-white leading-none whitespace-nowrap">
                  COMPRA<span className="text-brand-blue">SEG</span>
                </span>
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400 leading-tight whitespace-nowrap ml-0.5">
                  Segurança Pública
                </span>
              </div>
            </div>

            {/* 2. DESKTOP NAVIGATION */}
            {/* Visível APENAS em telas muito grandes (2XL+) para evitar sobreposição. */}
            {/* Gap-8 (32px) e px-10 (40px) dão espaço sem estourar o layout. */}
            <nav className="hidden 2xl:flex items-center gap-8 px-10">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-2 py-1 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors group/link whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover/link:w-full"></span>
                </a>
              ))}
            </nav>

            {/* 3. ACTIONS AREA (CTA + Mobile Toggle) */}
            <div className="flex items-center gap-6 flex-shrink-0">
              
              {/* CTA Button - Desktop */}
              <a 
                href="#investimento"
                className="hidden sm:inline-flex items-center px-8 py-3 bg-brand-blue hover:bg-blue-600 text-white font-bold text-xs md:text-sm uppercase tracking-wider rounded-lg border border-blue-400/30 shadow-[0_0_20px_rgba(37,99,235,0.25)] transition-all transform hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] whitespace-nowrap flex-shrink-0"
              >
                Inscreva-se
              </a>

              {/* Mobile Menu Toggle - Visible on screens smaller than 2XL */}
              <div className="2xl:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-300 hover:text-white p-2 rounded-md hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
                  aria-label="Menu principal"
                >
                  {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- MOBILE DRAWER (GAVETA LATERAL) --- */}
      
      {/* Overlay Escuro */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm transition-opacity duration-300 2xl:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Conteúdo da Gaveta */}
      <div 
        className={`fixed inset-y-0 right-0 z-[70] w-80 bg-tactical-midnight border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out 2xl:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-tactical-dark/50">
          <div className="flex items-center gap-2">
             <ShieldAlert className="h-6 w-6 text-brand-blue" />
             <span className="font-display font-bold text-xl text-white tracking-tight">MENU</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded transition-all"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2 custom-scrollbar">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-4 rounded-lg text-sm font-bold uppercase tracking-wide text-gray-300 hover:text-white hover:bg-white/5 transition-all border border-transparent hover:border-brand-blue/30 group"
            >
              {item.label}
              <span className="text-brand-blue opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
            </a>
          ))}
        </div>

        <div className="p-6 border-t border-white/5 bg-tactical-dark/30">
          <a 
            href="#investimento"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full py-4 bg-brand-blue text-white font-bold uppercase tracking-widest rounded-lg hover:bg-blue-600 transition-colors shadow-lg border border-blue-400/20"
          >
            Garantir Vaga
          </a>
        </div>
      </div>
    </>
  );
};
