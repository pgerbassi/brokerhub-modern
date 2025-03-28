
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Oliveira",
      role: "Cliente Seguro Auto",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=150&q=60",
      content: "Excelente atendimento! Consegui um ótimo desconto no meu seguro auto e o processo foi muito rápido. Recomendo a todos."
    },
    {
      name: "Ana Souza",
      role: "Cliente Seguro Residencial",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60",
      content: "Profissionais muito competentes que entenderam exatamente o que eu precisava para minha casa. O suporte pós-venda é incrível."
    },
    {
      name: "Roberto Santos",
      role: "Cliente Seguro Empresarial",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=150&q=60",
      content: "Consegui uma cobertura completa para minha empresa com um preço muito competitivo. O atendimento personalizado fez toda diferença."
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-broker-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">O Que Nossos Clientes Dizem</h2>
          <p className="section-subtitle text-broker-light max-w-3xl mx-auto">
            A satisfação de nossos clientes é nossa maior prioridade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-broker-secondary/40 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4 gap-1 text-broker-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#33BBFF" />
                ))}
              </div>
              <p className="mb-6 italic">{testimonial.content}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-broker-accent text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
