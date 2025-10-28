'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Star, Plus, Minus } from 'lucide-react';
import { products } from '@/lib/data';
import { useCart } from '@/context/CartContext';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);

  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return <div className="max-w-7xl mx-auto px-4 py-8">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => router.push('/products')}
        className="text-pink-800 mb-4 hover:underline"
      >
        ← Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center text-9xl">
          {product.image}
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="ml-2 text-lg">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
          <p className="text-4xl font-bold text-pink-600 mb-6">
            ${product.price}
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border rounded-lg hover:bg-gray-100"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-xl font-semibold w-12 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border rounded-lg hover:bg-gray-100"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}