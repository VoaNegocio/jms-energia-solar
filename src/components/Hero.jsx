import React from 'react';
import { ChevronRight, Shield, Zap, TrendingUp } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero_background.png"
                    alt="Instalação de painéis solares em casa moderna ao entardecer"
                    className="w-full h-full object-cover"
                />
                {/* Overlays for readability */}
                <div className="absolute inset-0 bg-jms-primary/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-jms-primary via-transparent to-jms-primary/60"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-jms-accent animate-pulse"></span>
                        <span className="text-xs md:text-sm font-medium text-gray-200 tracking-wide uppercase">
                            Consultoria Especializada em Energia Solar
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Transforme sua conta de energia em <span className="text-jms-accent text-glow">previsibilidade</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Energia solar com projeto consultivo, clareza técnica e economia real.
                        Entenda exatamente quanto vai economizar antes de instalar.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <a
                            href="#contato"
                            className="group bg-jms-accent hover:bg-jms-accent-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-jms-accent/30 hover:shadow-jms-accent/50 hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Quero análise gratuita
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#como-funciona"
                            className="group bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all backdrop-blur-sm flex items-center justify-center"
                        >
                            Como funciona
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        <div className="flex items-center gap-3 text-left">
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                <Shield className="w-5 h-5 text-jms-accent" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">Quase 10 anos</p>
                                <p className="text-gray-400 text-xs">de mercado</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-left">
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                <Zap className="w-5 h-5 text-jms-accent" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">Projeto sob medida</p>
                                <p className="text-gray-400 text-xs">sem superdimensionamento</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-left">
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                <TrendingUp className="w-5 h-5 text-jms-accent" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">Atendimento humano</p>
                                <p className="text-gray-400 text-xs">suporte real</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
