import React from 'react';
import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

export default function ProblemAwareness() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-jms-primary mb-4">
                            Energia solar não é compra por impulso.
                            <br />
                            <span className="text-jms-accent">É decisão técnica e financeira.</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Muita gente instala energia solar baseada apenas em preço.
                            Depois descobre que o barato sai caro.
                        </p>
                    </div>

                    {/* Comparison Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                        {/* Bad Scenario */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-red-100 relative overflow-hidden group hover:shadow-xl transition-shadow">
                            <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                                    <XCircle className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">O Risco Comum</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                                    <span className="text-gray-600">Sistema mal dimensionado (gera menos do que precisa)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                                    <span className="text-gray-600">Economia real não bate com a promessa de venda</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                                    <span className="text-gray-600">Sem suporte técnico pós-instalação</span>
                                </li>
                            </ul>
                        </div>

                        {/* JMS Solution */}
                        <div className="bg-jms-primary p-8 rounded-2xl shadow-xl border border-white/10 relative overflow-hidden group hover:shadow-2xl transition-shadow transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-jms-accent/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <div className="absolute top-0 left-0 w-full h-1 bg-jms-accent"></div>

                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                <div className="w-12 h-12 bg-jms-accent rounded-full flex items-center justify-center text-white shadow-lg shadow-jms-accent/30">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Consultoria JMS</h3>
                            </div>

                            <ul className="space-y-4 relative z-10">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-jms-accent mt-0.5 shrink-0" />
                                    <span className="text-gray-300">Análise técnica profunda do seu consumo</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-jms-accent mt-0.5 shrink-0" />
                                    <span className="text-gray-300">Simulação realista de economia mensal e anual</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-jms-accent mt-0.5 shrink-0" />
                                    <span className="text-gray-300">Acompanhamento vitalício e garantia real</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Warning Footer */}
                    <div className="mt-12 text-center bg-orange-50 border border-orange-100 rounded-lg p-4 flex items-center justify-center gap-3 max-w-2xl mx-auto">
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                        <p className="text-sm text-orange-800 font-medium">
                            Por isso a JMS atua como consultora de energia, não como vendedora de placas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
