import React from 'react';
import { Sun, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-white/5 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-jms-accent rounded-lg flex items-center justify-center">
                            <Sun className="text-white w-6 h-6" />
                        </div>
                        <div>
                            <span className="font-bold text-xl text-white block leading-none">JMS</span>
                            <span className="text-[10px] uppercase tracking-widest text-gray-400">Energia Solar</span>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} JMS Energia Solar. Todos os direitos reservados.
                        </p>
                        <p className="text-gray-600 text-xs mt-1">
                            CNPJ: 00.000.000/0000-00
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}
