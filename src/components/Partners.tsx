
import React from 'react';

const Partners = () => {
  const partners = [
    "https://placehold.co/200x80/f0f0f0/cccccc?text=Seguradora+1",
    "https://placehold.co/200x80/f0f0f0/cccccc?text=Seguradora+2",
    "https://placehold.co/200x80/f0f0f0/cccccc?text=Seguradora+3",
    "https://placehold.co/200x80/f0f0f0/cccccc?text=Seguradora+4",
    "https://placehold.co/200x80/f0f0f0/cccccc?text=Seguradora+5",
    "https://placehold.co/200x80/f0f0f0/cccccc?text=Seguradora+6",
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold text-broker-dark mb-8">
          Principais Seguradoras Parceiras
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={partner} 
                alt={`Seguradora Parceira ${index + 1}`} 
                className="h-10 md:h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
