import React from 'react';
import { Sun, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-white/5 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <img
                            src="/logo/367cf42e-0b6e-42c9-9d7f-cb7dd5fd242b.jpg"
                            alt="JMS Energia Solar"
                            className="h-10 md:h-12 w-auto rounded-lg"
                        />
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
