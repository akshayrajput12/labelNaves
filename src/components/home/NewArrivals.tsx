import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { ShoppingBag } from 'lucide-react';


const newArrivals = [
  {
    id: '1',
    name: 'Glamorous Gown',
    price: 2499,
    image: '../../public/images/products/Glamorous/1.jpg'
  },
  {
    id: '2',
    name: 'blue printed peplum dress',
    price: 1899,
    image: '../../public/images/products/baby blue printed peplum dress/1.jpg'
  }
];

export default function NewArrivals() {
  const [props, set] = useSpring(() => ({
    scale: 1,
    config: { mass: 1, tension: 200, friction: 20 }
  }));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-rozha text-primary mb-4">New Arrivals</h2>
          <p className="text-gray-600">Discover our latest collections</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {newArrivals.map((item) => (
            <animated.div
              key={item.id}
              style={props}
              onMouseEnter={() => set({ scale: 1.02 })}
              onMouseLeave={() => set({ scale: 1 })}
              className="relative group"
            >
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-primary px-6 py-3 rounded-full flex items-center space-x-2"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      <span>order now</span>
                    </motion.button>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-secondary font-semibold mt-2">₹{item.price.toLocaleString()}</p>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
}