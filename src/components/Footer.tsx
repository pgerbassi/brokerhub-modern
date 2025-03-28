
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer className="bg-broker-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="transform transition-all duration-500 hover:-translate-y-1">
            <div className="mb-4">
              <img 
                src="/logo.png" 
                alt="BrokerHub Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Há mais de 15 anos oferecendo as melhores soluções em seguros 
              para pessoas e empresas em todo o Brasil.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-broker-primary transition-colors transform hover:scale-125">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-broker-primary transition-colors transform hover:scale-125">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-broker-primary transition-colors transform hover:scale-125">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="transform transition-all duration-500 hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#sobre" className="hover:text-broker-primary transition-colors flex items-center"><span className="transform transition-all duration-300 hover:translate-x-2">Sobre Nós</span></a></li>
              <li><a href="#servicos" className="hover:text-broker-primary transition-colors flex items-center"><span className="transform transition-all duration-300 hover:translate-x-2">Serviços</span></a></li>
              <li><a href="#seguros" className="hover:text-broker-primary transition-colors flex items-center"><span className="transform transition-all duration-300 hover:translate-x-2">Tipos de Seguros</span></a></li>
              <li><a href="#contato" className="hover:text-broker-primary transition-colors flex items-center"><span className="transform transition-all duration-300 hover:translate-x-2">Contato</span></a></li>
              <li><a href="#" className="hover:text-broker-primary transition-colors flex items-center"><span className="transform transition-all duration-300 hover:translate-x-2">Política de Privacidade</span></a></li>
            </ul>
          </div>

          {/* Types of Insurance */}
          <div className="transform transition-all duration-500 hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-4">Seguros</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-broker-primary transition-colors flex items-center"><span className="transform transition-all duration-300 hover:translate-x-2">Seguro Auto</span></a></li>
              <li><a href="#" className="hover:text-broker-primary transition-colors flex items-center"><span className="transform transition-all duration-300 hover:translate-x-2">Seguro Residencial</span></a></li>
              <li><a href="#" className="hover:text-broker-primary transition-colors flex items-center"><span className="transform transition-all duration-300 hover:translate-x-2">Seguro de Vida</span></a></li>
              <li><a href="#" className="hover:text-broker-primary transition-colors flex items-center"><span className="transform transition-all duration-300 hover:translate-x-2">Seguro Empresarial</span></a></li>
              <li><a href="#" className="hover:text-broker-primary transition-colors flex items-center"><span className="transform transition-all duration-300 hover:translate-x-2">Plano de Saúde</span></a></li>
              <li><a href="#" className="hover:text-broker-primary transition-colors flex items-center"><span className="transform transition-all duration-300 hover:translate-x-2">Seguro Viagem</span></a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="transform transition-all duration-500 hover:-translate-y-1">
            <h3 className="font-semibold text-xl mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start group">
                <MapPin size={18} className="mr-2 mt-1 text-broker-primary group-hover:scale-125 transition-transform" />
                <span>Av. Paulista, 1000, Conj. 101<br />São Paulo - SP, 01310-000</span>
              </div>
              <div className="flex items-center group">
                <Phone size={18} className="mr-2 text-broker-primary group-hover:scale-125 transition-transform" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center group">
                <Mail size={18} className="mr-2 text-broker-primary group-hover:scale-125 transition-transform" />
                <span>contato@brokerhub.com.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BrokerHub. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
