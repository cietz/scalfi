import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5514997927271?text=Olá! Gostaria de agendar uma consulta." 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 flex items-center justify-center"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="text-green-500" />
      <span className="absolute right-full mr-3 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
        Agende pelo WhatsApp
      </span>
    </a>
  );
};