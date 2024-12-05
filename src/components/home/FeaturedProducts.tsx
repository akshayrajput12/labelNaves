import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const products = [
  {
    id: '1',
    name: 'Royal Silk Lehenga',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'blue printed peplum dress',
    price: 899,
    image: '../../public/images/products/baby blue printed peplum dress/1.jpg'
  },
  {
    id: '3',
    name: 'glamorous gown',
    price: 999,
    image: '../../public/images/products/Glamorous/1.jpg'
  }
];

export default function FeaturedProducts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-[#FFF1E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-['Rozha_One'] text-center text-[#8C2C2C] mb-12"
        >
          Featured Collection
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-[#D4AF37] font-semibold">₹{product.price.toLocaleString()}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}