import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { dispatch } = useCart();

  const handleOrderNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...product,
        quantity: 1,
        selectedSize: product.sizes[0]
      }
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group cursor-pointer"
      onClick={() => onQuickView(product)}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-primary p-3 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
          >
            <Eye className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleOrderNow}
            className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Order Now
          </motion.button>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition">
          {product.name}
        </h3>
        <p className="text-secondary font-semibold">₹{product.price.toLocaleString()}</p>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Available sizes:</span>
          <div className="flex space-x-1">
            {product.sizes.map(size => (
              <span key={size} className="text-xs bg-gray-100 px-2 py-1 rounded">
                {size}
              </span>
            ))}
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <span className="font-medium">Category:</span> {product.category}
        </div>
      </div>
    </motion.div>
  );
}