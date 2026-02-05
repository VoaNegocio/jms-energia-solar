import React from 'react';
import { FileText, Map, Calculator, HardHat, TrendingUp } from 'lucide-react';

const methodologySteps = [
    {
        icon: FileText,
        title: "Análise Real de Consumo",
        description: "Não olhamos apenas o valor da conta, mas o padrão de consumo dia/noite e sazonalidade."
    },
    {
        icon: Map,
        title: "Estudo Técnico do Local",
        description: "Avaliação de irradiação solar, sombreamento e melhor posicionamento para eficiência máxima."
    },
    {
        icon: Calculator,
        title: "Simulação Clara",
        description: "Cálculos precisos de ROI (Retorno sobre Investimento) e economia mensal projetada."
    },
    {
        icon: HardHat,
        title: "Projeto Sob Medida",
        description: "Dimensionamento correto. Nem falta energia, nem você paga por equipamentos desnecessários."
    },
    {
        icon: TrendingUp,
        title: "Acompanhamento",
        description: "Monitoramento pós-instalação para garantir que a geração está dentro do previsto."
    }
];

export default function Methodology() {
    return (
        <section id="diferenciais" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-start">

                    {/* Left Content */}
                    <div className="w-full md:w-5/12 md:sticky md:top-24">
                        <span className="text-jms-accent font-bold tracking-wider uppercase text-sm mb-2 block">
                            Metodologia JMS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-jms-primary mb-6 leading-tight">
                            Com a JMS, você não compra placas. <br />
                            <span className="text-jms-accent">Você entende o projeto.</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Nosso processo é simples, mas profundo. Eliminamos o "achismo" e trazemos engenharia de verdade para sua economia.
                        </p>

                        <div className="bg-slate-50 border-l-4 border-jms-accent p-6 rounded-r-xl">
                            <h4 className="font-bold text-jms-primary mb-2">Para quem é a JMS?</h4>
                            <ul className="space-y-2">
                                <li className="text-sm text-gray-700 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-jms-accent rounded-full"></span>
                                    Gosta de previsibilidade financeira
                                </li>
                                <li className="text-sm text-gray-700 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-jms-accent rounded-full"></span>
                                    Busca segurança técnica
                                </li>
                                <li className="text-sm text-gray-700 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-jms-accent rounded-full"></span>
                                    Quer falar com especialistas
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Content - Clean Cards */}
                    <div className="w-full md:w-7/12 space-y-4 md:space-y-6">
                        {methodologySteps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4 md:gap-6 items-start group"
                            >
                                <div className="shrink-0">
                                    <div className="w-12 h-12 bg-jms-primary/5 rounded-lg flex items-center justify-center text-jms-primary group-hover:bg-jms-primary group-hover:text-white transition-colors duration-300">
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-jms-primary mb-2 group-hover:text-jms-accent transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
