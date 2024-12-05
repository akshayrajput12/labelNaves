import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-rozha text-2xl mb-6">LabelNaves</h3>
            <p className="text-gray-300">
              Crafting timeless elegance through traditional Indian wear since 2020.
            </p>
            <div className="flex space-x-4 mt-6">
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-300 hover:text-secondary"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-300 hover:text-secondary"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="text-gray-300 hover:text-secondary"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Customer Care</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition">
                  Returns & Exchange
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">info@labelnaves.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} LabelNaves. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}