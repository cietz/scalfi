import React from "react";
import { Button } from "./ui/Button";
import { ArrowRight, Activity, ShieldCheck, Clock } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-white overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 hidden lg:block"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[600px]">
          {/* Content Left */}
          <div className="flex-1 flex flex-col justify-center py-16 lg:py-24 lg:pr-16 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border-l-4 border-primary-700 text-primary-900 text-xs font-bold uppercase tracking-widest">
              <span>Dr. Luiz Scalfi - Cardiologista</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
              Cuidado do{" "}
              <span className="text-primary-800 italic">coração</span> com
              precisão e empatia.
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-light max-w-lg">
              Unimos precisão técnica, tecnologia avançada e atendimento
              humanizado para cuidar da sua saúde cardiovascular em Lins/SP.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary-900 hover:bg-slate-900 text-white rounded-sm h-14 px-8 uppercase tracking-wide text-sm font-semibold shadow-lg"
              >
                Agendar Consulta
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-800 hover:bg-slate-50 rounded-sm h-14 px-8 uppercase tracking-wide text-sm font-semibold"
              >
                Nossos Especialistas
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap gap-8 text-slate-500">
              <div className="flex items-center gap-3">
                <Activity className="text-primary-700" size={24} />
                <span className="text-sm font-medium text-slate-900">
                  Tecnologia <br />
                  Diagnóstica
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-primary-700" size={24} />
                <span className="text-sm font-medium text-slate-900">
                  Atendimento <br />
                  Ágil
                </span>
              </div>
            </div>
          </div>

          {/* Image Right - Corporate Style */}
          <div className="flex-1 relative lg:-mr-6 h-[400px] lg:h-auto">
            <div className="absolute inset-0 bg-slate-900/10"></div>
            <img
              src="/Screenshot_1.png"
              alt="Dr. Luiz Scalfi - Cardiologista"
              className="w-full h-full object-cover"
            />
            {/* Overlay Info Box */}
            <div className="absolute bottom-0 left-0 bg-white p-6 shadow-none lg:shadow-xl border-t-4 border-primary-700 max-w-xs hidden md:block">
              <p className="font-serif text-lg font-bold text-slate-900">
                "Cada batimento importa."
              </p>
              <p className="text-slate-600 text-sm mt-2">
                Dedicados a salvar vidas e melhorar a qualidade de vida através
                da inovação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
