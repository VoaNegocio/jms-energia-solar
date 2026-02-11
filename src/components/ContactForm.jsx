import React from 'react';
import { Send, User, ShieldCheck } from 'lucide-react';

export default function ContactForm() {
    return (
        <section id="contato" className="py-24 bg-jms-primary relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-jms-accent/10 rounded-full blur-[100px] -top-20 -right-20 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">

                    {/* Left Side: Copy */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Faça sua análise <br />
                            <span className="text-jms-accent">gratuita agora</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Fale diretamente com um de nossos engenheiros pelo WhatsApp e receba uma simulação personalizada.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-white/80">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                                    <User className="w-6 h-6 text-jms-accent" />
                                </div>
                                <div>
                                    <p className="font-bold text-white">Atendimento Humano</p>
                                    <p className="text-sm">Nada de robôs. Engenheiros reais.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-white/80">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                                    <ShieldCheck className="w-6 h-6 text-jms-accent" />
                                </div>
                                <div>
                                    <p className="font-bold text-white">Privacidade Garantida</p>
                                    <p className="text-sm">Seus dados são protegidos.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: CTA Button */}
                    <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-2xl p-8 md:p-10 relative text-center">
                        <h3 className="text-2xl font-bold text-jms-primary mb-6">Comece sua economia</h3>
                        <p className="text-gray-600 mb-8">
                            Clique no botão abaixo para iniciar o atendimento via WhatsApp.
                        </p>

                        <a
                            href="https://wa.me/5528999491901?text=Ol%C3%A1!%20Vim%20pelo%20an%C3%BAncio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20energia%20solar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-jms-accent hover:bg-jms-accent-hover text-white font-bold py-4 rounded-xl shadow-lg shadow-jms-accent/30 hover:shadow-jms-accent/50 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group inline-flex"
                        >
                            FALAR COM ESPECIALISTA
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
