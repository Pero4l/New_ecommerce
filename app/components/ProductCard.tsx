'use client';

import Link from 'next/link';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="h-48 bg-gray-100 flex items-center justify-center text-6xl">
        {product.image}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <div className="flex items-center mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="ml-1 text-sm text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="text-2xl font-bold text-pink-600 mb-4">
          ${product.price}
        </p>
        <div className="flex gap-2">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition text-center"
          >
            View Details
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-pink-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
