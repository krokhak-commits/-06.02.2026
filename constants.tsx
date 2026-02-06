
import { Category, Deal } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Еда', icon: 'restaurant' },
  { id: '2', name: 'Красота', icon: 'face' },
  { id: '3', name: 'Развлечения', icon: 'rocket_launch' },
  { id: '4', name: 'Спорт', icon: 'fitness_center' },
  { id: '5', name: 'Туризм', icon: 'flight' },
  { id: '6', name: 'Техника', icon: 'devices' },
];

export const DEALS: Deal[] = [
  {
    id: '1',
    brand: 'Galaxy Pizza',
    title: 'Сет из 3-х космических пицц на любой вкус',
    oldPrice: 12500,
    newPrice: 4375,
    discount: 65,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400',
    category: 'Еда'
  },
  {
    id: '2',
    brand: 'Gravity Fitness',
    title: 'Абонемент на месяц в зал с видом на город',
    oldPrice: 25000,
    newPrice: 15000,
    discount: 40,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
    category: 'Спорт'
  },
  {
    id: '3',
    brand: 'Astro Spa',
    title: 'Расслабляющий комплекс "Млечный путь"',
    oldPrice: 18000,
    newPrice: 3600,
    discount: 80,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecee?auto=format&fit=crop&q=80&w=400',
    category: 'Красота'
  },
  {
    id: '4',
    brand: 'Club Nebula',
    title: 'Билет на вечеринку Interstellar Night',
    oldPrice: 5000,
    newPrice: 2500,
    discount: 50,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400',
    category: 'Развлечения'
  }
];
