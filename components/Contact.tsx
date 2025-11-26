import React from 'react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Entre em Contato</h2>
              <p className="text-lg text-slate-600">
                Estamos prontos para atender você. Agende sua consulta ou tire suas dúvidas através dos nossos canais.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 text-primary-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">WhatsApp</h3>
                  <p className="text-slate-600 text-lg mt-1">(14) 99792-7271</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 text-primary-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">E-mail</h3>
                  <p className="text-slate-600 mt-1">contato@drluizscalfi.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 text-primary-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Endereço</h3>
                  <p className="text-slate-600 mt-1">Avenida dos Coroados, 425</p>
                  <p className="text-slate-600">Xingu, Lins - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 text-primary-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Horário de Funcionamento</h3>
                  <p className="text-slate-600 mt-1">Segunda a Sexta: 08h às 18h</p>
                  <p className="text-slate-600">Sábado: 08h às 12h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 md:p-8 bg-white border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Envie uma mensagem</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Nome Completo</label>
                  <input 
                    id="name"
                    type="text" 
                    className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Telefone</label>
                  <input 
                    id="phone"
                    type="tel" 
                    className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">E-mail (Opcional)</label>
                <input 
                  id="email"
                  type="email" 
                  className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Como podemos ajudar?</label>
                <textarea 
                  id="message"
                  className="w-full h-32 p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Gostaria de agendar uma consulta..."
                ></textarea>
              </div>

              <Button fullWidth size="lg" type="submit">
                Enviar Mensagem
              </Button>
              <p className="text-xs text-slate-500 text-center mt-4">
                Ao enviar, você concorda com nossa política de privacidade. Se preferir, nos chame no WhatsApp.
              </p>
            </form>
          </Card>

        </div>
      </div>
    </section>
  );
};