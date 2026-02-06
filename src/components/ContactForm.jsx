import React, { useState } from 'react';
import { Send, Phone, User, DollarSign, Building } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nome: '',
        whatsapp: '',
        gasto: '',
        tipo: 'fisica'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log('Enviando formulário:', formData);

        // Mapeamento de valores para texto legível
        const gastoMap = {
            'ate-200': 'Até R$ 200',
            '200-300': 'De R$ 200 a R$ 300',
            '300-500': 'De R$ 300 a R$ 500',
            'acima-500': 'Acima de R$ 500'
        };

        const tipoMap = {
            'fisica': 'Pessoa Física',
            'empresa': 'Empresa'
        };

        const payload = {
            Nome: formData.nome,
            Whatsapp: formData.whatsapp,
            Consumo_Mensal: gastoMap[formData.gasto] || formData.gasto,
            Tipo_Cliente: tipoMap[formData.tipo] || formData.tipo,
            Data_Envio: new Date().toLocaleString('pt-BR')
        };

        try {
            const response = await fetch('https://hook.us1.make.com/at6p771s3llmxmxvt4svmnjrl428bcu3', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                console.log('Formulário enviado com sucesso para o webhook', payload);
                alert('Obrigado! Em breve um especialista entrará em contato.');
                setFormData({
                    nome: '',
                    whatsapp: '',
                    gasto: '',
                    tipo: 'fisica'
                });
            } else {
                console.error('Erro ao enviar formulário:', response.statusText);
                alert('Ocorreu um erro ao enviar seus dados. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro de rede:', error);
            alert('Erro de conexão. Verifique sua internet e tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                            Preencha os dados ao lado para receber uma simulação realista, baseada no seu consumo atual.
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
                                    <p className="text-sm">Seus dados são usados apenas para a simulação.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-2xl p-8 md:p-10 relative">
                        <h3 className="text-2xl font-bold text-jms-primary mb-6">Comece sua economia</h3>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Nome */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-600 ml-1">Nome Completo</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleChange}
                                        placeholder="Seu nome"
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-jms-accent focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-800"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-600 ml-1">WhatsApp</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                    <input
                                        type="tel"
                                        name="whatsapp"
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        placeholder="(00) 00000-0000"
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-jms-accent focus:border-transparent outline-none transition-all placeholder-gray-400 text-gray-800"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            {/* Gasto Mensal */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-600 ml-1">Gasto médio mensal de energia</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                    <select
                                        name="gasto"
                                        value={formData.gasto}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-jms-accent focus:border-transparent outline-none transition-all text-gray-800 appearance-none"
                                        required
                                        disabled={isSubmitting}
                                    >
                                        <option value="" disabled>Selecione um valor</option>
                                        <option value="ate-200">Até R$ 200</option>
                                        <option value="200-300">De R$ 200 a R$ 300</option>
                                        <option value="300-500">De R$ 300 a R$ 500</option>
                                        <option value="acima-500">Acima de R$ 500</option>
                                    </select>
                                </div>
                            </div>

                            {/* Tipo de Pessoa */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-600 ml-1">Você é:</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <label className={`cursor-pointer border rounded-xl p-3 flex items-center justify-center gap-2 transition-all ${formData.tipo === 'fisica' ? 'bg-jms-primary text-white border-jms-primary' : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                        <input
                                            type="radio"
                                            name="tipo"
                                            value="fisica"
                                            checked={formData.tipo === 'fisica'}
                                            onChange={handleChange}
                                            className="hidden"
                                            disabled={isSubmitting}
                                        />
                                        <User className="w-4 h-4" />
                                        <span>Pessoa Física</span>
                                    </label>
                                    <label className={`cursor-pointer border rounded-xl p-3 flex items-center justify-center gap-2 transition-all ${formData.tipo === 'empresa' ? 'bg-jms-primary text-white border-jms-primary' : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                        <input
                                            type="radio"
                                            name="tipo"
                                            value="empresa"
                                            checked={formData.tipo === 'empresa'}
                                            onChange={handleChange}
                                            className="hidden"
                                            disabled={isSubmitting}
                                        />
                                        <Building className="w-4 h-4" />
                                        <span>Empresa</span>
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-jms-accent hover:bg-jms-accent-hover text-white font-bold py-4 rounded-xl shadow-lg shadow-jms-accent/30 hover:shadow-jms-accent/50 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'ENVIANDO...' : 'QUERO ECONOMIZAR'}
                                {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

// Importing ShieldCheck inside the component to avoid adding it to the top import if not used elsewhere, or just add it to top imports
import { ShieldCheck } from 'lucide-react';
