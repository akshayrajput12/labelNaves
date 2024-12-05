import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Heart, label: 'Happy Customers', value: '10,000+' },
    { icon: Star, label: 'Years of Excellence', value: '5+' },
    { icon: Users, label: 'Expert Artisans', value: '50+' }
  ];

  return (
    <div className="pt-20 bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">Our Story</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Founded in 2020, LabelNaves has been at the forefront of bringing traditional Indian craftsmanship to the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1583391733975-0669ab5e0c9e?auto=format&fit=crop&q=80"
              alt="Our Workshop"
              className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-primary">Crafting Dreams</h2>
            <p className="text-gray-600 text-lg">
              Every piece at LabelNaves tells a story of tradition, craftsmanship, and elegance. Our artisans bring centuries-old techniques to life, creating garments that are not just clothes, but works of art.
            </p>
            <p className="text-gray-600 text-lg">
              We believe in preserving the rich heritage of Indian craftsmanship while embracing modern design sensibilities.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-500 hover:scale-105"
            >
              <Icon className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-primary mb-2">{value}</h3>
              <p className="text-gray-600">{label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            To be a leading name in traditional Indian wear, celebrated for our commitment to quality, sustainability, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1583391733975-0669ab5e0c9e?auto=format&fit=crop&q=80"
              alt="Traditional Wear"
              className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-primary">Our Commitment</h2>
            <p className="text-gray-600 text-lg">
              We are committed to ethical sourcing, sustainable practices, and empowering local artisans.
            </p>
            <p className="text-gray-600 text-lg">
              Our garments are crafted with love, ensuring that each piece is not just a product, but a story of heritage and culture.
            </p>
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Join Us on This Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience the beauty of tradition and the elegance of modern design with LabelNaves. Together, let's celebrate craftsmanship and culture.
          </p>
        </div>
      </motion.div>
    </div>
  );
}