export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  category: string;
  videoUrl?: string;
  specifications: {
    fabric: string;
    occasion?: string;
    work: string;
    length?: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}