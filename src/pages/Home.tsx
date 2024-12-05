import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import NewArrivals from '../components/home/NewArrivals';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <NewArrivals />
      <Testimonials />
    </main>
  );
}