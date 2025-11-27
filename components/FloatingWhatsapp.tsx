import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsapp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5511977363640" 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-green-500/30 flex items-center justify-center animate-bounce-slow"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};