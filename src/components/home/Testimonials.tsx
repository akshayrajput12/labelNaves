import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: '1',
    name: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    comment: 'The quality and craftsmanship of their lehengas are exceptional. Highly recommended!',
    rating: 5
  },
  {
    id: '2',
    name: 'Anjali Patel',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    comment: 'Beautiful collection and amazing customer service. Will definitely shop again!',
    rating: 5
  },
  {
    id: '3',
    name: 'Meera Reddy',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
    comment: 'Found my dream wedding lehenga here. The attention to detail is impeccable.',
    rating: 5
  }
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-rozha text-primary mb-4">Customer Stories</h2>
          <p className="text-gray-600">What our customers say about us</p>
        </motion.div>

        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">{testimonial.comment}</p>
                <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}