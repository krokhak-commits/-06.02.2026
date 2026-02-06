
import React from 'react';
import { Deal } from '../types';

interface Props {
  deal: Deal;
  onClick: () => void;
}

const DealCard: React.FC<Props> = ({ deal, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="flex flex-col bg-space-card border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_30px_rgba(242,13,242,0.2)] cursor-pointer group"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          src={deal.image} 
          alt={deal.title} 
        />
        <div className="absolute top-3 right-3 bg-primary text-white font-black px-3 py-1 rounded-lg text-lg">
          -{deal.discount}%
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-xs">
          <span className="material-symbols-outlined text-yellow-400 text-sm fill-current">star</span>
          <span>{deal.rating.toFixed(1)}</span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="text-xs text-primary font-bold uppercase tracking-widest mb-2">
          {deal.brand}
        </div>
        <h4 className="font-bold text-lg leading-tight mb-4 line-clamp-2">
          {deal.title}
        </h4>
        <div className="mt-auto flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-white/40 text-xs line-through">{deal.oldPrice.toLocaleString()} ₸</span>
            <span className="text-xl font-black text-white neon-glow">{deal.newPrice.toLocaleString()} ₸</span>
          </div>
          <div className="size-10 bg-white/10 group-hover:bg-primary rounded-xl flex items-center justify-center transition-all">
            <span className="material-symbols-outlined text-white transition-colors group-hover:scale-110">
              arrow_forward
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
