import React from 'react';
import { ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-tactical-midnight py-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4 text-gray-600 hover:text-brand-blue transition-colors cursor-default">
            <ShieldAlert className="h-6 w-6" />
            <span className="font-display font-bold text-xl tracking-tight text-white">COMPRASEG</span>
        </div>
        <p className="text-gray-600 text-sm text-center">
          © 2026 COMPRASEG. Todos os direitos reservados.
        </p>
        <p className="text-gray-700 text-xs mt-2 text-center uppercase tracking-wide">
          Evento oficial de capacitação para Segurança Pública. 
          <span className="hidden sm:inline mx-2 text-gray-800">|</span> 
          <br className="sm:hidden" />
          Site feito por <a href="https://www.pastelapps.dev" target="_blank" rel="noreferrer" className="font-bold hover:text-brand-blue transition-colors">Pastel Apps</a>
        </p>
      </div>
    </footer>
  );
};