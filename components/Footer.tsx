
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-xl border-t border-white/10 py-16 px-4 lg:px-20 mt-auto">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="size-6 bg-primary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xs">auto_awesome</span>
            </div>
            <h2 className="text-white text-lg font-extrabold tracking-tighter uppercase">Звездные акции</h2>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Твой персональный навигатор в мире лучших предложений и купонов. Исследуй больше, трать меньше.
          </p>
        </div>
        
        <div>
          <h5 className="text-white font-bold mb-6 uppercase text-xs tracking-widest text-primary">Командный центр</h5>
          <ul className="space-y-4 text-sm text-white/50">
            {['О нас', 'Партнерам', 'Программа лояльности', 'Медиа-кит'].map((item) => (
              <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="text-white font-bold mb-6 uppercase text-xs tracking-widest text-primary">Поддержка</h5>
          <ul className="space-y-4 text-sm text-white/50">
            {['База знаний', 'Связаться с нами', 'Правила возврата', 'Конфиденциальность'].map((item) => (
              <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="text-white font-bold mb-6 uppercase text-xs tracking-widest text-primary">Социальные сети</h5>
          <div className="flex gap-4">
            {['share', 'camera', 'send'].map((icon) => (
              <a key={icon} className="size-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-all border border-white/10" href="#">
                <span className="material-symbols-outlined text-xl">{icon}</span>
              </a>
            ))}
          </div>
          <div className="mt-8">
            <div className="text-xs text-white/40 mb-3">Скачать терминал</div>
            <div className="flex gap-2">
              <div className="h-10 w-32 bg-white/10 rounded-lg border border-white/10 flex items-center justify-center text-[10px] font-bold cursor-pointer hover:bg-white/20 transition-colors uppercase tracking-tighter">App Store</div>
              <div className="h-10 w-32 bg-white/10 rounded-lg border border-white/10 flex items-center justify-center text-[10px] font-bold cursor-pointer hover:bg-white/20 transition-colors uppercase tracking-tighter">Google Play</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest">
        <p>© 2024 Star Actions Entertainment. Все права защищены в этой галактике.</p>
        <div className="flex gap-6">
          <a className="hover:text-white transition-colors" href="#">Условия использования</a>
          <a className="hover:text-white transition-colors" href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
