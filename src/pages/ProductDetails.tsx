import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Truck, Shield, RefreshCw } from 'lucide-react';
import { products } from './Collections';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="pt-20 text-center">
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <button
          onClick={() => navigate('/collections')}
          className="mt-4 text-primary hover:underline"
        >
          Back to Collections
        </button>
      </div>
    );
  }

  const paginate = (newDirection: number) => {
    setSelectedImageIndex(prevIndex => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return product.images.length - 1;
      if (nextIndex >= product.images.length) return 0;
      return nextIndex;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><button onClick={() => navigate('/')} className="hover:text-primary">Home</button></li>
            <li>/</li>
            <li><button onClick={() => navigate('/collections')} className="hover:text-primary">Collections</button></li>
            <li>/</li>
            <li className="text-primary">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images Section */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={product.images[selectedImageIndex]}
                alt={`${product.name} view ${selectedImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={() => paginate(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 px-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative aspect-square rounded-md overflow-hidden ${
                    index === selectedImageIndex ? 'ring-2 ring-primary' : 'ring-1 ring-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover hover:opacity-75 transition-opacity"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 lg:space-y-8">
            {/* Basic Info */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{product.name}</h1>
              <div className="flex items-center gap-4 mt-2">
                <p className="text-2xl sm:text-3xl font-bold text-primary">₹{product.price.toLocaleString()}</p>
                {product.originalPrice && (
                  <p className="text-lg text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</p>
                )}
              </div>
              <div className="flex items-center mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm text-gray-600">(50+ reviews)</span>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-sm sm:prose">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Select Size</h3>
                <button
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="text-sm text-primary hover:underline"
                >
                  Size Guide
                </button>
              </div>
              <div className="mt-3 grid grid-cols-3 sm:grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 text-sm font-medium rounded-md border transition-colors ${
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

            {/* Product Specifications */}
            <div className="bg-white rounded-lg p-4 space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Product Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-sm text-gray-500 capitalize">{key}:</span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg">
                <Truck className="w-5 h-5 text-primary" />
                <span className="text-sm">Free Delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">Quality Assured</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg">
                <RefreshCw className="w-5 h-5 text-primary" />
                <span className="text-sm">Easy Returns</span>
              </div>
            </div>

            {/* Video (if available) */}
            {product.videoUrl && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Product Video</h3>
                <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-black">
                  <iframe
                    src={product.videoUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="flex-1 bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors text-lg font-medium"
              >
                Buy Now
              </button>
              <button
                className="flex-1 border-2 border-primary text-primary py-3 px-6 rounded-md hover:bg-primary/10 transition-colors text-lg font-medium"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
