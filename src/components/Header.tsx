
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-broker-primary font-bold text-2xl">Broker</span>
            <span className="text-broker-secondary font-bold text-2xl">Hub</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-broker-dark hover:text-broker-primary font-medium transition-colors">Início</a>
            <a href="#sobre" className="text-broker-dark hover:text-broker-primary font-medium transition-colors">Sobre</a>
            <a href="#servicos" className="text-broker-dark hover:text-broker-primary font-medium transition-colors">Serviços</a>
            <a href="#seguros" className="text-broker-dark hover:text-broker-primary font-medium transition-colors">Seguros</a>
            <a href="#depoimentos" className="text-broker-dark hover:text-broker-primary font-medium transition-colors">Depoimentos</a>
            <a href="#contato" className="text-broker-dark hover:text-broker-primary font-medium transition-colors">Contato</a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-broker-primary">
              <Phone size={16} className="mr-1" />
              <span className="text-sm">(11) 9999-9999</span>
            </div>
            <Button className="btn-primary">Solicitar Cotação</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-broker-primary" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#inicio" className="text-broker-dark hover:text-broker-primary font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Início</a>
            <a href="#sobre" className="text-broker-dark hover:text-broker-primary font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
            <a href="#servicos" className="text-broker-dark hover:text-broker-primary font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
            <a href="#seguros" className="text-broker-dark hover:text-broker-primary font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Seguros</a>
            <a href="#depoimentos" className="text-broker-dark hover:text-broker-primary font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Depoimentos</a>
            <a href="#contato" className="text-broker-dark hover:text-broker-primary font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Contato</a>
            <Button className="btn-primary w-full">Solicitar Cotação</Button>
            <div className="flex items-center text-broker-primary">
              <Phone size={16} className="mr-1" />
              <span className="text-sm">(11) 9999-9999</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
