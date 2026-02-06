
export interface Deal {
  id: string;
  brand: string;
  title: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
  rating: number;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
