import React, { useState } from 'react';

interface CheckoutFormProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    description: string;
    sizes: string[];
    selectedSize: string;
  };
}

export default function CheckoutForm({ isOpen, onClose, product }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const [selectedSize, setSelectedSize] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Order Details*\n- Product: ${product.name}\n- Size: ${selectedSize}\n- Description: ${product.description}\n\n*Customer Details*\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Address: ${formData.address}, ${formData.city}, ${formData.postalCode}, ${formData.country}`;
    const whatsappUrl = `https://wa.me/919891153615?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 shadow-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900">Product Details</h3>
          <p className="text-sm text-gray-700">{product.name}</p>
          <p className="text-sm text-gray-700">Description: {product.description}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col mb-4">
            <label className="text-sm font-medium text-gray-700">Size</label>
            <select
              name="selectedSize"
              value={selectedSize}
              onChange={handleSizeChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              required
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm p-3"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm p-3"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm p-3"
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm p-3"
                placeholder="Enter your city"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm p-3"
                placeholder="Enter your postal code"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm p-3"
              placeholder="Enter your country"
              required
            />
          </div>
          <div className="pt-4 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
