import React from 'react';
import { Award, HeartPulse, Microscope, Users } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: HeartPulse,
      title: "Cuidado Especializado",
      desc: "Líderes no tratamento de condições complexas do coração e sistema vascular."
    },
    {
      icon: Microscope,
      title: "Diagnóstico Avançado",
      desc: "Laboratório próprio com equipamentos de última geração para resultados precisos."
    },
    {
      icon: Users,
      title: "Abordagem Multidisciplinar",
      desc: "Uma equipe completa focada no seu bem-estar físico e mental."
    },
    {
      icon: Award,
      title: "Reconhecimento",
      desc: "Premiados pela excelência em atendimento e segurança do paciente."
    }
  ];

  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800 border border-slate-800">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-slate-900 p-8 hover:bg-slate-800 transition-colors duration-300 group">
              <feature.icon className="w-10 h-10 text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <h3 className="text-xl font-serif font-medium text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};