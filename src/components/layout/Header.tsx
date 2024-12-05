import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-['Rozha_One'] text-[#8C2C2C]">
            LabelNaves
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#8C2C2C] transition">Home</Link>
            <Link to="/collections" className="text-gray-700 hover:text-[#8C2C2C] transition">Collections</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#8C2C2C] transition">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#8C2C2C] transition">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingBag className="w-6 h-6 text-gray-700 hover:text-[#8C2C2C] transition" />
              <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}