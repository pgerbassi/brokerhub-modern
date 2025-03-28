
import React from 'react';
import { Button } from './ui/button';
import { Shield, Users, Award, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-28 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-broker-light via-white to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-broker-dark mb-4">
              Proteção e tranquilidade para o que realmente importa
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Na BrokerHub, oferecemos as melhores soluções em seguros personalizados para você e sua família. Conte com nossa experiência para proteger seu patrimônio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-base md:text-lg">Solicitar Cotação</Button>
              <Button variant="outline" className="border-broker-primary text-broker-primary hover:bg-broker-light text-base md:text-lg">
                Saiba Mais
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Família protegida" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3 rounded-lg shadow-lg flex items-center">
                <Shield className="text-broker-primary mr-2" size={24} />
                <span className="font-medium">100% Seguro</span>
              </div>
              
              <div className="absolute -top-5 -right-5 bg-white p-3 rounded-lg shadow-lg flex items-center">
                <Users className="text-broker-secondary mr-2" size={24} />
                <span className="font-medium">+10k Clientes</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 text-center card-hover">
            <div className="flex justify-center mb-3">
              <Shield className="text-broker-primary" size={32} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-broker-dark">+15 Anos</h3>
            <p className="text-gray-600">de experiência</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 text-center card-hover">
            <div className="flex justify-center mb-3">
              <Users className="text-broker-primary" size={32} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-broker-dark">+10.000</h3>
            <p className="text-gray-600">clientes satisfeitos</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 text-center card-hover">
            <div className="flex justify-center mb-3">
              <Award className="text-broker-primary" size={32} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-broker-dark">+30</h3>
            <p className="text-gray-600">seguradoras parceiras</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 text-center card-hover">
            <div className="flex justify-center mb-3">
              <TrendingUp className="text-broker-primary" size={32} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-broker-dark">98%</h3>
            <p className="text-gray-600">taxa de renovação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
