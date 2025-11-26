import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

export const About: React.FC = () => {
  return (
    <section id="doctor" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
             <div className="mb-6">
               <span className="text-primary-800 font-bold uppercase tracking-widest text-xs">Conheça seu médico</span>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2 mb-6">Dr. Luiz Scalfi</h2>
               <p className="text-sm text-slate-500 mb-4">CRM 167593 | RQE 94822 | RQE 72188</p>
               <p className="text-xl text-slate-600 font-light leading-relaxed mb-6">
                 "Na Clínica Dr. Luiz Scalfi, unimos precisão técnica, empatia e responsabilidade no cuidado com cada paciente."
               </p>
             </div>

             <div className="space-y-4 mb-8">
               <p className="text-slate-600 leading-relaxed">
                 Especialista dedicado ao cuidado do coração, oferecendo consultas em Cardiologia e Clínica Médica com tecnologia avançada e atendimento humanizado.
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                 <div className="flex items-start gap-3">
                   <CheckCircle2 className="text-primary-700 mt-1 shrink-0" size={20} />
                   <span className="text-slate-700 text-sm">Especialista em Ecocardiografia pela USP</span>
                 </div>
                 <div className="flex items-start gap-3">
                   <CheckCircle2 className="text-primary-700 mt-1 shrink-0" size={20} />
                   <span className="text-slate-700 text-sm">Especialista em Cardiologia Clínica pela UNESP</span>
                 </div>
                 <div className="flex items-start gap-3">
                   <CheckCircle2 className="text-primary-700 mt-1 shrink-0" size={20} />
                   <span className="text-slate-700 text-sm">Residência em Clínica Médica - Hospital Alípio Corrêa Neto</span>
                 </div>
                 <div className="flex items-start gap-3">
                   <CheckCircle2 className="text-primary-700 mt-1 shrink-0" size={20} />
                   <span className="text-slate-700 text-sm">Ecocardiograma 3D e Strain Miocárdico</span>
                 </div>
               </div>
             </div>

             <Button className="bg-slate-900 text-white rounded-sm px-8 uppercase tracking-wide text-xs font-bold h-12">
               Ver Currículo Completo
             </Button>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              {/* Moldura simples e elegante estilo corporate */}
              <div className="border-8 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1770&auto=format&fit=crop" 
                  alt="Dr. Luiz Scalfi" 
                  className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-800 text-white p-6 hidden md:block">
                <p className="text-3xl font-serif font-bold">25+</p>
                <p className="text-xs uppercase tracking-widest mt-1">Anos de Experiência</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};