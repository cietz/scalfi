import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    "Consultas em Cardiologia",
    "Consultas em Clínica Médica",
    "Eletrocardiograma (ECG)",
    "Teste Ergométrico",
    "MAPA - Monitorização Ambulatorial da Pressão Arterial",
    "Holter 24h",
    "Ecocardiograma Transtorácico",
    "Ecocardiograma com Estresse",
    "Ecocardiograma Transesofágico 3D",
    "Strain Miocárdico - Diagnóstico Precoce",
    "Check-up Cardiológico Completo"
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Centros de Excelência</h2>
            <p className="text-lg text-slate-600 font-light">
              Oferecemos uma gama completa de serviços de diagnóstico e tratamento para apoiar a saúde do seu coração em todas as fases da vida.
            </p>
          </div>
          <a href="#" className="text-primary-800 font-bold uppercase text-sm tracking-widest hover:underline flex items-center gap-2">
            Ver todos os serviços <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group border border-slate-200 p-8 hover:border-primary-700 hover:shadow-lg transition-all duration-300 bg-white">
              <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-primary-800 transition-colors font-serif">
                {service}
              </h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                Diagnóstico e tratamento especializado com protocolos internacionais de segurança.
              </p>
              <span className="inline-flex items-center text-primary-700 text-sm font-bold uppercase tracking-wide group-hover:translate-x-1 transition-transform">
                Saiba Mais <ArrowRight size={14} className="ml-2" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};