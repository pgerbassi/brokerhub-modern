
import React from 'react';
import { Car, Home, Heart, Briefcase, Shield, Plane } from 'lucide-react';

const InsuranceTypes = () => {
  const insuranceTypes = [
    {
      icon: <Car size={36} />,
      title: "Seguro Auto",
      description: "Proteja seu veículo contra roubo, colisão, incêndio e muito mais. Oferecemos as melhores condições do mercado."
    },
    {
      icon: <Home size={36} />,
      title: "Seguro Residencial",
      description: "Segurança completa para sua casa com coberturas contra incêndio, roubo, danos elétricos e responsabilidade civil."
    },
    {
      icon: <Heart size={36} />,
      title: "Seguro Saúde",
      description: "Planos de saúde abrangentes para você e sua família, com rede credenciada nacional e coberturas completas."
    },
    {
      icon: <Briefcase size={36} />,
      title: "Seguro Empresarial",
      description: "Soluções personalizadas para empresas de todos os tamanhos, protegendo seu patrimônio e operações."
    },
    {
      icon: <Shield size={36} />,
      title: "Seguro de Vida",
      description: "Garanta a segurança financeira de quem você ama com coberturas que se adaptam a cada fase da sua vida."
    },
    {
      icon: <Plane size={36} />,
      title: "Seguro Viagem",
      description: "Viaje com tranquilidade com cobertura médica internacional, assistência 24h e proteção contra imprevistos."
    },
  ];

  return (
    <section id="seguros" className="py-20 bg-gradient-to-br from-white to-broker-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Tipos de Seguro</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Oferecemos uma ampla gama de produtos de seguro para atender às suas necessidades específicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceTypes.map((insurance, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-broker-primary"
            >
              <div className="text-broker-primary mb-4">{insurance.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-broker-dark">{insurance.title}</h3>
              <p className="text-gray-600">{insurance.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceTypes;
