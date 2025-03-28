
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-broker-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
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
              <a href="#" className="hover:text-broker-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-broker-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-broker-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#sobre" className="hover:text-broker-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-broker-primary transition-colors">Serviços</a></li>
              <li><a href="#seguros" className="hover:text-broker-primary transition-colors">Tipos de Seguros</a></li>
              <li><a href="#contato" className="hover:text-broker-primary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-broker-primary transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Types of Insurance */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Seguros</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-broker-primary transition-colors">Seguro Auto</a></li>
              <li><a href="#" className="hover:text-broker-primary transition-colors">Seguro Residencial</a></li>
              <li><a href="#" className="hover:text-broker-primary transition-colors">Seguro de Vida</a></li>
              <li><a href="#" className="hover:text-broker-primary transition-colors">Seguro Empresarial</a></li>
              <li><a href="#" className="hover:text-broker-primary transition-colors">Plano de Saúde</a></li>
              <li><a href="#" className="hover:text-broker-primary transition-colors">Seguro Viagem</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-broker-primary" />
                <span>Av. Paulista, 1000, Conj. 101<br />São Paulo - SP, 01310-000</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-broker-primary" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-broker-primary" />
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
