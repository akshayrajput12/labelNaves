import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import ProductCard from '../components/product/ProductCard';
import QuickViewModal from '../components/product/QuickViewModal';

export const products: Product[] = [
  {
    id: '1',
    name: 'Unveiling elegance in timeless black ✨🖤',
    price: 1499,
    description: 'Unveiling elegance in timeless black ✨🖤 Elevate your elegance with this stunning black georgette lehenga suit. 🖤✨',
    images: [
      '../../public/images/products/Unveiling elegance in timeless black/1.jpg',
      '../../public/images/products/Unveiling elegance in timeless black/2.jpg',
      '../../public/images/products/Unveiling elegance in timeless black/3.jpg',
      '../../public/images/products/Unveiling elegance in timeless black/4.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Lehenga',
    specifications: {
      fabric: 'Pure Silk',
      work: 'Zari Embroidery',
      includes: 'Lehenga, Choli, and Dupatta',
      style: 'Traditional',
      occasion: 'Wedding, Festive'
    }
  },
  {
    id: '2',
    name: 'Designer Anarkali',
    price: 1899,
    description: 'Elegant Anarkali suit with detailed work and flowing silhouette. Ideal for festive occasions.',
    images: [
      '../../public/images/products/baby blue printed peplum dress/1.jpg',
      '../../public/images/products/baby blue printed peplum dress/2.jpg',
      '../../public/images/products/baby blue printed peplum dress/3.jpg',
      '../../public/images/products/baby blue printed peplum dress/4.jpg'
      
    ],
    sizes: ['S', 'M', 'L'],
    category: 'Anarkali',
    specifications: {
      fabric: 'Georgette',
      work: 'Thread Work',
      includes: 'Kurta, Bottom, and Dupatta',
      style: 'Contemporary',
      occasion: 'Festive, Party'
    }
  },
  {
    id: '3',
    name: 'dazzling suit',
    price: 3299,
    description: 'A very elegant light peach colour dazzling suit in Georgette with a designer palazzo with scallops finishing and a glittering dupatta with tissue frill finish.',
    images: [
      '../../public/images/products/A very elegant light peach colour dazzling suit in Georgette with a designer palazzo with scallops finishing and a glittering dupatta with tissue frill finish/1.jpg',
      '../../public/images/products/A very elegant light peach colour dazzling suit in Georgette with a designer palazzo with scallops finishing and a glittering dupatta with tissue frill finish/2.jpg',
      '../../public/images/products/A very elegant light peach colour dazzling suit in Georgette with a designer palazzo with scallops finishing and a glittering dupatta with tissue frill finish/3.jpg',
      '../../public/images/products/A very elegant light peach colour dazzling suit in Georgette with a designer palazzo with scallops finishing and a glittering dupatta with tissue frill finish/4.jpg'
    ],
    sizes: ['Free Size'],
    category: 'suit',
    specifications: {
      fabric: 'Banarasi Silk',
      work: 'Zari Work',
      includes: 'Saree with Blouse Piece',
      style: 'Traditional',
      occasion: 'Wedding, Festive'
    }
  },
  {
    id: '4',
    name: 'Modern fusion gown with contemporary design',
    price: 2799,
    description: 'Modern fusion gown with contemporary design. Perfect for reception and cocktail parties.',
    images: [
      '../../public/images/products/Glamorous/1.jpg',
      '../../public/images/products/Glamorous/2.jpg',
      '../../public/images/products/Glamorous/3.jpg',
      '../../public/images/products/Glamorous/4.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    category: 'Gown',
    specifications: {
      fabric: 'Crepe',
      work: 'Stone Work',
      includes: 'Gown with Cancan',
      style: 'Modern',
      occasion: 'Reception, Party'
    }
  }
];

const categories = ['All', 'Lehenga', 'Saree', 'Anarkali', 'Gown', 'Sharara'];

export default function Collections() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8 pt-16">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <Filter className="w-5 h-5" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span>Sort</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={() => handleQuickView(product)}
          />
        ))}
      </div>

      {isQuickViewOpen && selectedProduct && (
        <QuickViewModal
          isOpen={isQuickViewOpen}
          onClose={() => setIsQuickViewOpen(false)}
          product={selectedProduct}
        />
      )}
    </div>
  );
}