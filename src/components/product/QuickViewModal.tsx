import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';
import CheckoutForm from '../checkout/CheckoutForm';

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export default function QuickViewModal({ isOpen, onClose, product }: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { dispatch } = useCart();

  if (!isOpen) return null;

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...product,
        quantity: 1,
        selectedSize
      }
    });
    onClose();
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-white p-6 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {/* Main Image with Slider */}
            <div className="relative">
              <motion.img
                key={selectedImageIndex}
                src={product.images[selectedImageIndex]}
                alt={`${product.name} view ${selectedImageIndex + 1}`}
                className="w-full h-96 object-cover rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative rounded-lg overflow-hidden ${
                    index === selectedImageIndex ? 'ring-2 ring-primary' : 'ring-1 ring-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-24 object-cover hover:opacity-75 transition-opacity"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
              <p className="text-2xl font-bold text-primary mt-2">₹{product.price.toLocaleString()}</p>
            </div>

            {product.videoUrl && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Product Video</h3>
                <div className="relative pt-[56.25%] rounded-lg overflow-hidden">
                  <iframe
                    src={product.videoUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            <div>
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Select Size</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md border transition-colors ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-300 hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setShowCheckoutForm(true)}
                className="flex-1 bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors"
              >
                Buy Now
              </button>
              <button
                onClick={handleAddToCart}
                className="flex-1 border border-primary text-primary py-3 px-6 rounded-md hover:bg-primary/10 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {showCheckoutForm && (
        <CheckoutForm
          isOpen={showCheckoutForm}
          onClose={() => setShowCheckoutForm(false)}
          product={{
            name: product.name,
            description: product.description,
            sizes: product.sizes,
            selectedSize
          }}
        />
      )}
    </motion.div>
  );
}