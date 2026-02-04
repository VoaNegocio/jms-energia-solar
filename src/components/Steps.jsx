import React from 'react';
import { ClipboardCheck, Search, Calculator, FileCheck, PartyPopper } from 'lucide-react';

const steps = [
    {
        icon: ClipboardCheck,
        title: "Solicitação",
        description: "Você preenche o formulário com dados básicos."
    },
    {
        icon: Search,
        title: "Análise",
        description: "Analisamos sua conta e perfil de consumo."
    },
    {
        icon: Calculator,
        title: "Viabilidade",
        description: "Avaliamos viabilidade técnica e financeira."
    },
    {
        icon: FileCheck,
        title: "Cenário",
        description: "Apresentamos um cenário claro de economia."
    },
    {
        icon: PartyPopper,
        title: "Decisão",
        description: "Só então você decide. Sem pressão."
    }
];

export default function Steps() {
    return (
        <section id="como-funciona" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-20">
                    <span className="text-jms-accent font-bold tracking-wider uppercase text-sm mb-4 block animate-fade-in-up">
                        Passo a Passo
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-jms-primary animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Como funciona a análise JMS
                    </h2>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-100 z-0 text-center">
                        <div className="w-4/5 h-full bg-jms-accent/10 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="group flex flex-col items-center text-center animate-fade-in-up"
                                style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
                            >
                                {/* Icon Circle */}
                                <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-50 flex items-center justify-center mb-6 shadow-xl group-hover:border-jms-accent transition-colors duration-300 relative">
                                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-jms-primary text-white text-sm font-bold rounded-full flex items-center justify-center">
                                        {index + 1}
                                    </span>
                                    <step.icon className="w-10 h-10 text-jms-primary group-hover:text-jms-accent transition-colors duration-300" />
                                </div>

                                <h3 className="text-xl font-bold text-jms-primary mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 max-w-[200px]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <p className="text-2xl text-jms-primary font-medium">
                        Sem pressão. <span className="text-jms-accent font-bold">Sem compromisso.</span>
                    </p>
                </div>

            </div>
        </section>
    );
}
