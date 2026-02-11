import React from 'react';
import { ChevronRight, Shield, Zap, TrendingUp } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero_day_energy.webp"
                    alt="Casa moderna com energia solar durante o dia"
                    className="w-full h-full object-cover object-center"
                />
                {/* Overlays for readability */}
                <div className="absolute inset-0 bg-black/30 md:bg-black/10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20 md:to-white/20"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 md:pt-40">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-jms-accent animate-pulse"></span>
                        <span className="text-xs md:text-sm font-medium text-gray-900 tracking-wide uppercase">
                            Consultoria Especializada em Energia Solar
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
                        Transforme sua conta de energia em <span className="block mt-2"><span className="text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 bg-[length:200%_auto] animate-shimmer [filter:drop-shadow(0_0_15px_rgba(249,115,22,0.8))_drop-shadow(0_0_50px_rgba(249,115,22,0.5))] font-extrabold pb-2">previsibilidade</span></span>
                    </h1>

                    {/* Subheadline */}
                    {/* Subheadline with Glassmorphism */}
                    <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="bg-white/70 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-lg max-w-2xl mx-auto">
                            <p className="text-lg md:text-xl text-black font-bold drop-shadow-md leading-relaxed">
                                Energia solar com projeto consultivo, clareza técnica e economia real.
                                Entenda exatamente quanto vai economizar antes de instalar.
                            </p>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <a
                            href="https://wa.me/5528999491901?text=Ol%C3%A1!%20Vim%20pelo%20an%C3%BAncio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20energia%20solar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-jms-accent hover:bg-jms-accent-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-jms-accent/30 hover:shadow-jms-accent/50 hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Quero análise gratuita
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#como-funciona"
                            className="group bg-white/50 hover:bg-white/80 border border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all backdrop-blur-sm flex items-center justify-center hover:shadow-lg"
                        >
                            Como funciona
                        </a>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 animate-fade-in-up max-w-5xl mx-auto" style={{ animationDelay: '0.5s' }}>
                    <div className="flex items-center gap-4 text-left p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-black/50 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-jms-accent/20 border border-jms-accent/30 flex items-center justify-center shrink-0">
                            <Shield className="w-6 h-6 text-jms-accent" />
                        </div>
                        <div>
                            <p className="text-white font-bold text-base">Quase 10 anos</p>
                            <p className="text-gray-300 text-sm">de mercado</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-left p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-black/50 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-jms-accent/20 border border-jms-accent/30 flex items-center justify-center shrink-0">
                            <Zap className="w-6 h-6 text-jms-accent" />
                        </div>
                        <div>
                            <p className="text-white font-bold text-base">Projeto sob medida</p>
                            <p className="text-gray-300 text-sm">sem superdimensionamento</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-left p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-black/50 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-jms-accent/20 border border-jms-accent/30 flex items-center justify-center shrink-0">
                            <TrendingUp className="w-6 h-6 text-jms-accent" />
                        </div>
                        <div>
                            <p className="text-white font-bold text-base">Atendimento humano</p>
                            <p className="text-gray-300 text-sm">suporte real</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
