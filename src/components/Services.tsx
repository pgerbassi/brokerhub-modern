
import React from 'react';
import { Heart, Home, Car, Briefcase, Shield, Users, CalendarClock, Plane } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Heart size={36} />,
      title: "Seguro Saúde",
      description: "Proteção completa para você e sua família com as melhores coberturas médicas e hospitalares."
    },
    {
      id: 2,
      icon: <Home size={36} />,
      title: "Seguro Residencial",
      description: "Tranquilidade para seu lar com proteção contra incêndios, roubos, danos elétricos e muito mais."
    },
    {
      id: 3,
      icon: <Car size={36} />,
      title: "Seguro Auto",
      description: "Coberturas personalizadas para seu veículo com as melhores condições do mercado."
    },
    {
      id: 4,
      icon: <Briefcase size={36} />,
      title: "Seguro Empresarial",
      description: "Soluções completas para proteger seu negócio, funcionários e patrimônio empresarial."
    },
    {
      id: 5,
      icon: <Shield size={36} />,
      title: "Seguro de Vida",
      description: "Garanta o futuro de quem você ama com coberturas que oferecem proteção financeira."
    },
    {
      id: 6,
      icon: <Users size={36} />,
      title: "Previdência Privada",
      description: "Planejamento financeiro para garantir seu futuro e qualidade de vida na aposentadoria."
    },
    {
      id: 7,
      icon: <CalendarClock size={36} />,
      title: "Seguro Viagem",
      description: "Viaje com tranquilidade com coberturas médicas, assistência 24h e proteção para bagagens."
    },
    {
      id: 8,
      icon: <Plane size={36} />,
      title: "Seguro Aeronáutico",
      description: "Proteção especializada para aeronaves, sejam particulares ou para uso comercial."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Oferecemos soluções completas em seguros para proteger o que é mais importante para você
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-broker-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-broker-dark mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
