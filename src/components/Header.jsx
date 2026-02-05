import React, { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-jms-primary/95 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src="/logo/367cf42e-0b6e-42c9-9d7f-cb7dd5fd242b.jpg"
                        alt="JMS Energia Solar"
                        className="h-14 md:h-16 w-auto rounded-lg"
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#como-funciona" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
                        Como Funciona
                    </a>
                    <a href="#diferenciais" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
                        Diferenciais
                    </a>
                    <a href="#segmentos" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
                        Para Você
                    </a>
                    <a href="#contato" className="bg-jms-accent hover:bg-jms-accent-hover text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-jms-accent/20 hover:shadow-jms-accent/40 transform hover:-translate-y-0.5">
                        Simular Economia
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-jms-primary border-t border-white/10 p-4 flex flex-col gap-4 shadow-xl">
                    <a href="#como-funciona" className="text-gray-200 py-2" onClick={() => setIsMobileMenuOpen(false)}>Como Funciona</a>
                    <a href="#diferenciais" className="text-gray-200 py-2" onClick={() => setIsMobileMenuOpen(false)}>Diferenciais</a>
                    <a href="#segmentos" className="text-gray-200 py-2" onClick={() => setIsMobileMenuOpen(false)}>Para Você</a>
                    <a href="#contato" className="bg-jms-accent text-white py-3 rounded-lg text-center font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                        Simular Economia
                    </a>
                </div>
            )}
        </header>
    );
}
