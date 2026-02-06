
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import DealCard from './components/DealCard';
import Footer from './components/Footer';
import Background from './components/Background';
import DealDetail from './components/DealDetail';
import { DEALS } from './constants';
import { Deal } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);

  const filteredDeals = useMemo(() => {
    return DEALS.filter(deal => {
      const matchesCategory = activeCategory === 'Все' || deal.category === activeCategory;
      const matchesSearch = deal.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           deal.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleNavigateHome = () => {
    setSelectedDeal(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDeal = (deal: Deal) => {
    setSelectedDeal(deal);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedDeal(null);
  };

  if (selectedDeal) {
    return (
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden font-sans">
        <Background />
        <Navbar onHomeClick={handleNavigateHome} onSearch={handleSearch} />
        <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 lg:px-20 py-8">
          <DealDetail deal={selectedDeal} onBack={handleNavigateHome} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden font-sans">
      <Background />
      <Navbar onHomeClick={handleNavigateHome} onSearch={handleSearch} />
      
      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 lg:px-20 py-8">
        <Hero />
        
        <div id="categories-section">
          <Categories activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
        </div>
        
        <section id="deals-section" className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h3 className="text-2xl font-bold tracking-tight flex items-center gap-3 neon-glow">
              <span className="material-symbols-outlined text-primary">bolt</span>
              {activeCategory === 'Все' ? 'Горящие скидки' : activeCategory}
            </h3>
            <div className="flex items-center gap-4 text-sm font-medium text-white/60">
              <span className="hidden sm:inline">Сортировка:</span>
              <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
                {['Все', 'Популярные', 'Рядом'].map((btn) => (
                  <button 
                    key={btn}
                    className="px-4 py-1.5 rounded-md text-xs transition-all hover:bg-white/10"
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {filteredDeals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredDeals.map((deal) => (
                <DealCard key={deal.id} deal={deal} onClick={() => handleSelectDeal(deal)} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center glass-panel rounded-3xl border-dashed border-white/10">
              <span className="material-symbols-outlined text-6xl text-white/20 mb-4">search_off</span>
              <p className="text-white/40">В этом секторе ничего не найдено...</p>
            </div>
          )}
        </section>

        <section className="mb-16 glass-panel rounded-3xl p-8 md:p-16 text-center border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          <div className="max-w-xl mx-auto relative z-10">
            <h3 className="text-3xl md:text-4xl font-black mb-4">Присоединяйся к флоту</h3>
            <p className="text-white/60 mb-8 text-lg">
              Получайте уведомления о самых выгодных акциях первыми.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => {
              e.preventDefault();
              alert('Добро пожаловать в экипаж! Проверьте вашу почту.');
            }}>
              <input 
                required
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-primary transition-all backdrop-blur-md" 
                placeholder="Ваш email" 
                type="email" 
              />
              <button className="bg-primary hover:bg-primary/80 text-white font-bold py-4 px-10 rounded-xl shadow-[0_0_20px_rgba(242,13,242,0.4)] transition-all whitespace-nowrap">
                Подписаться
              </button>
            </form>
          </div>
          <div className="absolute -bottom-20 -right-20 size-64 bg-primary/10 rounded-full blur-3xl"></div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
