
import React from 'react';
import { CATEGORIES } from '../constants';

interface Props {
  activeCategory: string;
  onSelectCategory: (name: string) => void;
}

const Categories: React.FC<Props> = ({ activeCategory, onSelectCategory }) => {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold tracking-tight neon-glow uppercase tracking-widest">Секторы Галактики</h3>
        <button 
          onClick={() => onSelectCategory('Все')}
          className="text-primary text-sm font-semibold hover:underline"
        >
          Все секторы
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {CATEGORIES.map((cat) => (
          <div 
            key={cat.id} 
            onClick={() => onSelectCategory(cat.name)}
            className={`flex flex-col items-center gap-4 group cursor-pointer transition-all ${
              activeCategory === cat.name ? 'scale-110' : ''
            }`}
          >
            <div className={`rgb-stroke ${activeCategory === cat.name ? 'shadow-[0_0_20px_rgba(242,13,242,0.4)]' : ''}`}>
              <div className={`rounded-full p-6 flex items-center justify-center transition-colors ${
                activeCategory === cat.name ? 'bg-primary/30' : 'bg-background-dark group-hover:bg-primary/10'
              }`}>
                <span className={`material-symbols-outlined text-4xl transition-transform ${
                  activeCategory === cat.name ? 'text-white scale-110' : 'text-white/80 group-hover:text-white'
                }`}>
                  {cat.icon}
                </span>
              </div>
            </div>
            <span className={`font-bold text-sm transition-colors ${
              activeCategory === cat.name ? 'text-primary' : 'text-white/80 group-hover:text-primary'
            }`}>
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
