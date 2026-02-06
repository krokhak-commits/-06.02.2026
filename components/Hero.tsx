
import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative rounded-3xl overflow-hidden mb-12 min-h-[400px] flex items-center justify-center group border border-white/5">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(10,5,10,0.9), rgba(10,5,10,0.2)), url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1920')` 
        }}
      />
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <div className="inline-block px-4 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold uppercase tracking-widest mb-6">
          Supernova Deals
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
          Открой вселенную <span className="text-primary italic neon-glow">скидок</span>
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">
          Исследуйте лучшие предложения вашего города с космической выгодой до 90%.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollTo('deals-section')}
            className="bg-primary hover:bg-primary/80 text-white font-bold py-4 px-10 rounded-xl shadow-[0_0_20px_rgba(242,13,242,0.5)] transition-all"
          >
            Начать приключение
          </button>
          <button 
            onClick={() => scrollTo('categories-section')}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-4 px-10 rounded-xl border border-white/20 transition-all"
          >
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
