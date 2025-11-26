import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-primary-600' : 'text-slate-900 group-hover:text-primary-600'}`}>
          {question}
        </span>
        {isOpen ? <ChevronUp className="text-primary-600" /> : <ChevronDown className="text-slate-400" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Vocês aceitam convênios?",
      answer: "Sim, aceitamos os principais convênios do mercado, como Unimed, Bradesco Saúde, SulAmérica, Amil, entre outros. Entre em contato para verificar a cobertura do seu plano específico."
    },
    {
      question: "Preciso de pedido médico para os exames?",
      answer: "Para a maioria dos exames realizados via convênio, o pedido médico é obrigatório. Para atendimentos particulares, podemos realizar uma avaliação inicial com o Dr. Luiz Scalfi para definir os exames necessários."
    },
    {
      question: "Como funciona o retorno?",
      answer: "O retorno para apresentação de exames solicitados em consulta tem um prazo de até 30 dias, sem custo adicional, conforme as normas do Conselho Federal de Medicina e operadoras de saúde."
    },
    {
      question: "Vocês atendem emergências?",
      answer: "A Clínica Dr. Luiz Scalfi é voltada para consultas ambulatoriais e exames agendados. Em caso de dor no peito súbita e forte, falta de ar intensa ou desmaios, dirija-se imediatamente a um pronto-socorro hospitalar."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Dúvidas Frequentes</h2>
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};