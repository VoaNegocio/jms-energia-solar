import React from 'react';
import { Home, Building2, ArrowRight } from 'lucide-react';

export default function Segments() {
    return (
        <section id="segmentos" className="py-24 bg-jms-primary relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/50 skew-x-12 translate-x-32 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Residencial ou Empresa
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        O critério técnico é o mesmo: excelência. <br />
                        Mas o impacto financeiro atendemos de forma personalizada.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Residential Card */}
                    <div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-default">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src="/residential.png"
                                alt="Energia Solar Residencial"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-jms-primary via-jms-primary/80 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="w-14 h-14 bg-jms-accent rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-jms-accent/30 transform group-hover:-translate-y-2 transition-transform duration-300">
                                <Home className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-4">Para Residências</h3>
                            <p className="text-gray-300 text-lg mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                                Mais tranquilidade, proteção contra aumentos tarifários e previsibilidade no orçamento familiar. Transforme seu telhado em um ativo financeiro.
                            </p>

                            <div className="flex items-center gap-2 text-jms-accent font-bold tracking-wide uppercase text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                Simular para minha casa
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>

                    {/* Commercial Card */}
                    <div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-default">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src="/commercial.png"
                                alt="Energia Solar Empresarial"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-jms-primary via-jms-primary/80 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-6 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                                <Building2 className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-4">Para Empresas</h3>
                            <p className="text-gray-300 text-lg mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                                Redução de custo fixo, aumento de margem de lucro e planejamento financeiro de longo prazo. O ROI que seu negócio precisa.
                            </p>

                            <div className="flex items-center gap-2 text-white font-bold tracking-wide uppercase text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                Simular para minha empresa
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Viability Disclaimer */}
                <div className="text-center mt-16 animate-fade-in-up">
                    <p className="inline-block bg-white/5 border border-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-gray-300 text-sm">
                        <span className="text-jms-accent font-bold">Nota de Integridade:</span> Se não houver viabilidade real, a gente fala. Sem empurrar projeto.
                    </p>
                </div>

            </div>
        </section>
    );
}
