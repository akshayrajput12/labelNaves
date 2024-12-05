import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { state, dispatch } = useCart();

  const handleRemoveItem = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity }
    });
  };

  const calculateTotal = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b">
                <div>
                  <h2 className="text-xl font-semibold">Shopping Cart</h2>
                  <p className="text-gray-500 text-sm mt-1">
                    {state.items.length} {state.items.length === 1 ? 'item' : 'items'}
                  </p>
                </div>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {state.items.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center p-6">
                  <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                  <p className="text-gray-500 text-center">Your cart is empty</p>
                  <button
                    onClick={onClose}
                    className="mt-4 text-primary hover:text-primary/80"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-6">
                      {state.items.map(item => (
                        <div key={item.id} className="flex space-x-4">
                          <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={item.images[0]}
                              alt={item.name}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="flex flex-1 flex-col">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{item.name}</h3>
                              <p className="ml-4">₹{(item.price * item.quantity).toLocaleString()}</p>
                            </div>

                            <div className="mt-1 text-sm text-gray-500">
                              <p>Size: {item.selectedSize}</p>
                              <p>Color: {item.selectedColor}</p>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => handleUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                  className="p-1 rounded-full border border-gray-200 hover:border-primary"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="text-gray-600 w-8 text-center">{item.quantity}</span>
                                <button
                                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                  className="p-1 rounded-full border border-gray-200 hover:border-primary"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>

                              <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="text-red-500 hover:text-red-600"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 p-6 space-y-4">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>₹{calculateTotal().toLocaleString()}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="space-y-2">
                      <Link
                        to="/checkout"
                        onClick={onClose}
                        className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
                      >
                        Checkout
                      </Link>
                      <button
                        onClick={onClose}
                        className="w-full bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
                      >
                        Continue Shopping
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}