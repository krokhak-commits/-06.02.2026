
import React from 'react';

interface Props {
  onHomeClick: () => void;
  onSearch: (query: string) => void;
}

const Navbar: React.FC<Props> = ({ onHomeClick, onSearch }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 glass-panel px-4 lg:px-20 py-3">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={onHomeClick}>
            <div className="size-8 bg-primary rounded-full flex items-center justify-center shadow-[0_0_15px_#f20df2]">
              <span className="material-symbols-outlined text-white text-xl">auto_awesome</span>
            </div>
            <h1 className="text-white text-xl font-extrabold tracking-tighter neon-glow uppercase hidden sm:block">
              Звездные акции
            </h1>
          </div>
          <nav className="hidden xl:flex items-center gap-6">
            {['Galaxy Food', 'Star Beauty', 'Orbit Travel', 'Nebula Fun'].map((link) => (
              <button 
                key={link} 
                onClick={onHomeClick}
                className="text-white/70 hover:text-primary text-sm font-medium transition-colors"
              >
                {link}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="flex flex-1 justify-end items-center gap-4 lg:gap-6">
          <div className="relative hidden md:flex w-full max-w-sm">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/70">search</span>
            <input 
              onChange={(e) => onSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary transition-all placeholder:text-white/30" 
              placeholder="Поиск по галактике..." 
              type="text"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-white/70 hover:text-primary transition-colors" onClick={() => alert('Корзина пуста')}>
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
            <button className="p-2 text-white/70 hover:text-primary transition-colors" onClick={() => alert('Требуется авторизация')}>
              <span className="material-symbols-outlined">person</span>
            </button>
            <div className="h-8 w-[1px] bg-white/10 hidden sm:block"></div>
            <div className="hidden sm:flex items-center gap-2 cursor-pointer text-sm font-medium hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span>Алматы</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
