
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-broker-primary to-broker-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para proteger o que mais importa?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Conte com nossa experiência de mais de 15 anos no mercado para encontrar o seguro ideal para você, sua família ou seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-broker-primary hover:bg-broker-accent hover:text-broker-dark group">
              Solicitar Cotação
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Fale com um Consultor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
