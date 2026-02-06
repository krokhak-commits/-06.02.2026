
import React from 'react';
import { Deal } from '../types';

interface Props {
  deal: Deal;
  onBack: () => void;
}

const DealDetail: React.FC<Props> = ({ deal, onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8 group"
      >
        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
        <span className="font-bold uppercase tracking-widest text-xs">Вернуться в систему</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Left: Image and Gallery */}
        <div className="space-y-6">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group">
            <img 
              src={deal.image} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              alt={deal.title} 
            />
            <div className="absolute top-6 right-6 bg-primary text-white font-black px-4 py-2 rounded-xl text-2xl shadow-xl">
              -{deal.discount}%
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-white/5 opacity-50 hover:opacity-100 cursor-pointer transition-opacity">
                <img src={`${deal.image}&sig=${i}`} className="w-full h-full object-cover" alt="Gallery" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-[10px] font-bold uppercase tracking-widest mb-4 w-fit">
            {deal.category}
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">{deal.title}</h2>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined fill-current text-sm">
                  {i < Math.floor(deal.rating) ? 'star' : 'star_half'}
                </span>
              ))}
              <span className="text-white font-bold ml-2">{deal.rating}</span>
            </div>
            <div className="h-4 w-[1px] bg-white/10"></div>
            <div className="text-white/40 text-sm">42 отзыва из этого сектора</div>
          </div>

          <div className="glass-panel p-8 rounded-3xl border-primary/20 mb-8">
            <div className="flex items-end justify-between mb-8">
              <div className="flex flex-col">
                <span className="text-white/40 text-sm line-through uppercase mb-1">{deal.oldPrice.toLocaleString()} ₸</span>
                <span className="text-4xl font-black text-white neon-glow">{deal.newPrice.toLocaleString()} ₸</span>
              </div>
              <div className="text-right">
                <div className="text-primary font-bold text-xs uppercase tracking-tighter mb-1">Экономия</div>
                <div className="text-xl font-bold">{(deal.oldPrice - deal.newPrice).toLocaleString()} ₸</div>
              </div>
            </div>
            
            <button 
              onClick={() => alert('Протокол покупки активирован! Проверьте терминал.')}
              className="w-full bg-primary hover:bg-primary/80 text-white font-black py-5 rounded-2xl shadow-[0_0_30px_rgba(242,13,242,0.4)] transition-all flex items-center justify-center gap-3 uppercase tracking-widest"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              Получить купон
            </button>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg border-b border-white/10 pb-2">Описание миссии</h4>
            <p className="text-white/60 leading-relaxed">
              Погрузитесь в уникальный опыт от <span className="text-white font-bold">{deal.brand}</span>. 
              Это предложение создано специально для тех, кто ищет максимальную выгоду в нашей галактике.
              Используйте купон до конца текущего солнечного цикла.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-xs font-bold text-white/80">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Моментальная активация
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Гарантия качества
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Возврат за 24 часа
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Поддержка 24/7
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealDetail;
