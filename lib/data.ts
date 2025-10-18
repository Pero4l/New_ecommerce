import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    category: 'Electronics',
    image: '🎧',
    rating: 4.5,
    reviews: 128,
    description:
      'Premium wireless headphones with noise cancellation and 30-hour battery life.',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    category: 'Electronics',
    image: '⌚',
    rating: 4.7,
    reviews: 89,
    description:
      'Feature-packed smartwatch with fitness tracking and heart rate monitoring.',
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 89.99,
    category: 'Fashion',
    image: '👟',
    rating: 4.3,
    reviews: 234,
    description:
      'Comfortable running shoes with advanced cushioning technology.',
  },
  {
    id: 4,
    name: 'Backpack',
    price: 49.99,
    category: 'Fashion',
    image: '🎒',
    rating: 4.6,
    reviews: 156,
    description:
      'Durable backpack with multiple compartments and laptop sleeve.',
  },
  {
    id: 5,
    name: 'Coffee Maker',
    price: 129.99,
    category: 'Home',
    image: '☕',
    rating: 4.4,
    reviews: 201,
    description:
      'Programmable coffee maker with thermal carafe and auto-brew feature.',
  },
  {
    id: 6,
    name: 'Yoga Mat',
    price: 29.99,
    category: 'Sports',
    image: '🧘',
    rating: 4.8,
    reviews: 312,
    description:
      'Non-slip yoga mat with extra cushioning for comfortable practice.',
  },
];
