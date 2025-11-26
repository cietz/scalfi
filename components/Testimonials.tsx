import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "A atenção aos detalhes e o cuidado demonstrado pelo Dr. Roberto e sua equipe são incomparáveis. Sinto que estou nas melhores mãos possíveis.",
      author: "Maria Helena S.",
      type: "Paciente desde 2018"
    },
    {
      text: "Instalações de classe mundial e um atendimento extremamente pontual. A clareza no diagnóstico me trouxe muita tranquilidade.",
      author: "João Carlos M.",
      type: "Check-up Cardiológico"
    },
    {
      text: "Profissionalismo exemplar. A tecnologia utilizada na clínica para os exames é impressionante e o ambiente é muito acolhedor.",
      author: "Ana Lúcia R.",
      type: "Tratamento de Hipertensão"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Histórias de Pacientes</h2>
          <div className="w-16 h-1 bg-primary-800 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <Quote className="text-primary-200 mb-6" size={48} />
              <p className="text-lg text-slate-700 italic mb-6 font-light leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <p className="font-bold text-slate-900 font-serif">{review.author}</p>
                <p className="text-xs text-primary-700 uppercase tracking-widest mt-1 font-semibold">{review.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};