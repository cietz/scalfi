import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t-4 border-primary-800">
      {/* Top Footer - Accreditations */}
     

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-6">
            <div>
              <div className="text-white font-serif text-2xl font-bold">Clínica Dr. Luiz Scalfi</div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary-500">Cardiologia & Clínica Médica</div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Dedicados a fornecer o mais alto padrão de atendimento cardiovascular em um ambiente seguro, compassivo e tecnologicamente avançado.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Acesso Rápido</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-2"><ArrowRight size={12}/> Corpo Clínico</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-2"><ArrowRight size={12}/> Especialidades</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-2"><ArrowRight size={12}/> Convênios Aceitos</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-2"><ArrowRight size={12}/> Portal do Paciente</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center gap-2"><ArrowRight size={12}/> Segunda Opinião</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-500 shrink-0 mt-1" />
                <span>Avenida dos Coroados, 425<br/>Xingu, Lins - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary-500 shrink-0" />
                <span>(14) 99792-7271</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary-500 shrink-0" />
                <span>contato@drluizscalfi.com.br</span>
              </li>
            </ul>
          </div>

         
        </div>
      </div>

      <div className="bg-slate-950 py-6 border-t border-slate-900">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Clínica Dr. Luiz Scalfi. Todos os direitos reservados. CRM 167593.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Acessibilidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};