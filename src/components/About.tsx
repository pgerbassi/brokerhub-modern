
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Equipe de corretores" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="section-title">Sobre a BrokerHub</h2>
            <p className="text-gray-700 mb-6">
              Fundada há mais de 15 anos, a BrokerHub é uma corretora de seguros especializada em oferecer soluções personalizadas para proteção do patrimônio e bem-estar de nossos clientes.
            </p>
            <p className="text-gray-700 mb-6">
              Nossa missão é garantir tranquilidade e segurança para pessoas e empresas através de um atendimento humanizado e coberturas adequadas às suas necessidades específicas.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-broker-primary mr-2 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Assessoria completa na escolha do seguro ideal para você</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-broker-primary mr-2 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Atendimento personalizado e humanizado</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-broker-primary mr-2 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Suporte completo na abertura e acompanhamento de sinistros</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-broker-primary mr-2 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Parceria com as principais seguradoras do mercado</p>
              </div>
            </div>
            
            <div className="bg-broker-light p-5 rounded-lg border-l-4 border-broker-primary">
              <blockquote className="italic text-gray-700">
                "Na BrokerHub, não vendemos apenas seguros. Oferecemos tranquilidade e a certeza de que, nos momentos difíceis, nossos clientes estarão amparados."
              </blockquote>
              <p className="font-medium text-broker-primary mt-3">— Roberto Silva, Diretor Executivo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
