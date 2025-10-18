// // types.ts
// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   category: string;
//   image: string;
//   rating: number;
//   reviews: number;
//   description: string;
// }

// export interface CartItem extends Product {
//   quantity: number;
// }

// export interface FormData {
//   email: string;
//   firstName: string;
//   lastName: string;
//   address: string;
//   city: string;
//   zip: string;
//   cardNumber: string;
//   expiry: string;
//   cvv: string;
// }

// // ============================================
// // app/layout.tsx
// // ============================================
// import type { Metadata } from 'next';
// import './globals.css';

// export const metadata: Metadata = {
//   title: 'ShopHub - Your eCommerce Store',
//   description: 'Discover amazing products at unbeatable prices',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }

// // ============================================
// // app/page.tsx (Home Page)
// // ============================================
// import Link from 'next/link';
// import { products } from '@/lib/data';
// import ProductCard from '@/components/ProductCard';

// export default function HomePage() {
//   const featured = products.slice(0, 3);

//   return (
//     <div>
//       <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to ShopHub</h1>
//             <p className="text-xl mb-8">Discover amazing products at unbeatable prices</p>
//             <Link
//               href="/products"
//               className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
//             >
//               Shop Now
//             </Link>
//           </div>
//         </div>
//       </section>

//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {featured.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

//       <section className="bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <div>
//               <div className="text-4xl mb-4">🚚</div>
//               <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
//               <p className="text-gray-600">On orders over $50</p>
//             </div>
//             <div>
//               <div className="text-4xl mb-4">🔒</div>
//               <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
//               <p className="text-gray-600">100% secure transactions</p>
//             </div>
//             <div>
//               <div className="text-4xl mb-4">↩️</div>
//               <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
//               <p className="text-gray-600">30-day return policy</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// // ============================================
// // app/products/page.tsx (Products Listing)
// // ============================================
// 'use client';

// import { useState } from 'react';
// import { products } from '@/lib/data';
// import ProductCard from '@/components/ProductCard';

// export default function ProductsPage() {
//   const [selectedCategory, setSelectedCategory] = useState<string>('All');
//   const categories = ['All', ...new Set(products.map((p) => p.category))];

//   const filteredProducts =
//     selectedCategory === 'All'
//       ? products
//       : products.filter((p) => p.category === selectedCategory);

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <h1 className="text-3xl font-bold mb-8">All Products</h1>

//       <div className="flex gap-2 mb-8 flex-wrap">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             className={`px-4 py-2 rounded-lg ${
//               selectedCategory === cat
//                 ? 'bg-indigo-600 text-white'
//                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// // ============================================
// // app/products/[id]/page.tsx (Product Details)
// // ============================================
// 'use client';

// import { useState } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import { Star, Plus, Minus } from 'lucide-react';
// import { products } from '@/lib/data';
// import { useCart } from '@/context/CartContext';

// export default function ProductDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const { addToCart } = useCart();
//   const [quantity, setQuantity] = useState<number>(1);

//   const product = products.find((p) => p.id === Number(params.id));

//   if (!product) {
//     return <div className="max-w-7xl mx-auto px-4 py-8">Product not found</div>;
//   }

//   const handleAddToCart = () => {
//     addToCart(product, quantity);
//     setQuantity(1);
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <button
//         onClick={() => router.push('/products')}
//         className="text-indigo-600 mb-4 hover:underline"
//       >
//         ← Back to Products
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center text-9xl">
//           {product.image}
//         </div>

//         <div>
//           <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//           <div className="flex items-center mb-4">
//             <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//             <span className="ml-2 text-lg">
//               {product.rating} ({product.reviews} reviews)
//             </span>
//           </div>
//           <p className="text-4xl font-bold text-indigo-600 mb-6">
//             ${product.price}
//           </p>
//           <p className="text-gray-600 mb-8 leading-relaxed">
//             {product.description}
//           </p>

//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-2">Quantity</label>
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 className="p-2 border rounded-lg hover:bg-gray-100"
//               >
//                 <Minus className="w-4 h-4" />
//               </button>
//               <span className="text-xl font-semibold w-12 text-center">
//                 {quantity}
//               </span>
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="p-2 border rounded-lg hover:bg-gray-100"
//               >
//                 <Plus className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           <button
//             onClick={handleAddToCart}
//             className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ============================================
// // app/cart/page.tsx (Shopping Cart)
// // ============================================
// 'use client';

// import Link from 'next/link';
// import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
// import { useCart } from '@/context/CartContext';

// export default function CartPage() {
//   const { cart, updateQuantity, removeFromCart } = useCart();

//   const subtotal = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   const shipping = subtotal > 50 ? 0 : 9.99;
//   const total = subtotal + shipping;

//   if (cart.length === 0) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 py-16 text-center">
//         <ShoppingCart className="w-24 h-24 mx-auto text-gray-300 mb-4" />
//         <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
//         <Link
//           href="/products"
//           className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
//         >
//           Continue Shopping
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-lg shadow-md p-4 mb-4 flex gap-4"
//             >
//               <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
//                 {item.image}
//               </div>
//               <div className="flex-1">
//                 <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
//                 <p className="text-indigo-600 font-bold mb-2">${item.price}</p>
//                 <div className="flex items-center gap-3">
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                     className="p-1 border rounded hover:bg-gray-100"
//                   >
//                     <Minus className="w-4 h-4" />
//                   </button>
//                   <span className="font-semibold w-8 text-center">
//                     {item.quantity}
//                   </span>
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                     className="p-1 border rounded hover:bg-gray-100"
//                   >
//                     <Plus className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//               <div className="flex flex-col justify-between items-end">
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <Trash2 className="w-5 h-5" />
//                 </button>
//                 <p className="font-bold text-lg">
//                   ${(item.price * item.quantity).toFixed(2)}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="lg:col-span-1">
//           <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
//             <h2 className="text-xl font-bold mb-4">Order Summary</h2>
//             <div className="space-y-3 mb-4">
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span className="font-semibold">${subtotal.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Shipping</span>
//                 <span className="font-semibold">
//                   {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
//                 </span>
//               </div>
//               <div className="border-t pt-3 flex justify-between text-lg font-bold">
//                 <span>Total</span>
//                 <span className="text-indigo-600">${total.toFixed(2)}</span>
//               </div>
//             </div>
//             <Link
//               href="/checkout"
//               className="block w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition text-center"
//             >
//               Proceed to Checkout
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ============================================
// // app/checkout/page.tsx (Checkout)
// // ============================================
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '@/context/CartContext';
// import type { FormData } from '@/types';

// export default function CheckoutPage() {
//   const router = useRouter();
//   const { cart, total, clearCart } = useCart();
//   const [formData, setFormData] = useState<FormData>({
//     email: '',
//     firstName: '',
//     lastName: '',
//     address: '',
//     city: '',
//     zip: '',
//     cardNumber: '',
//     expiry: '',
//     cvv: '',
//   });
//   const [orderPlaced, setOrderPlaced] = useState<boolean>(false);

//   const handleSubmit = () => {
//     setOrderPlaced(true);
//     setTimeout(() => {
//       clearCart();
//       router.push('/');
//     }, 3000);
//   };

//   if (orderPlaced) {
//     return (
//       <div className="max-w-2xl mx-auto px-4 py-16 text-center">
//         <div className="text-6xl mb-4">✅</div>
//         <h2 className="text-3xl font-bold mb-4">Order Placed Successfully!</h2>
//         <p className="text-gray-600 mb-4">
//           Thank you for your purchase. You will receive a confirmation email
//           shortly.
//         </p>
//         <p className="text-sm text-gray-500">Redirecting to home page...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <h1 className="text-3xl font-bold mb-8">Checkout</h1>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           <div className="space-y-6">
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-bold mb-4">Contact Information</h2>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
//               />
//             </div>

//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
//               <div className="grid grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   value={formData.firstName}
//                   onChange={(e) =>
//                     setFormData({ ...formData, firstName: e.target.value })
//                   }
//                   className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   value={formData.lastName}
//                   onChange={(e) =>
//                     setFormData({ ...formData, lastName: e.target.value })
//                   }
//                   className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Address"
//                   value={formData.address}
//                   onChange={(e) =>
//                     setFormData({ ...formData, address: e.target.value })
//                   }
//                   className="col-span-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
//                 />
//                 <input
//                   type="text"
//                   placeholder="City"
//                   value={formData.city}
//                   onChange={(e) =>
//                     setFormData({ ...formData, city: e.target.value })
//                   }
//                   className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
//                 />
//                 <input
//                   type="text"
//                   placeholder="ZIP Code"
//                   value={formData.zip}
//                   onChange={(e) =>
//                     setFormData({ ...formData, zip: e.target.value })
//                   }
//                   className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
//                 />
//               </div>
//             </div>

//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-bold mb-4">Payment Information</h2>
//               <div className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Card Number"
//                   value={formData.cardNumber}
//                   onChange={(e) =>
//                     setFormData({ ...formData, cardNumber: e.target.value })
//                   }
//                   className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
//                 />
//                 <div className="grid grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="MM/YY"
//                     value={formData.expiry}
//                     onChange={(e) =>
//                       setFormData({ ...formData, expiry: e.target.value })
//                     }
//                     className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
//                   />
//                   <input
//                     type="text"
//                     placeholder="CVV"
//                     value={formData.cvv}
//                     onChange={(e) =>
//                       setFormData({ ...formData, cvv: e.target.value })
//                     }
//                     className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
//                   />
//                 </div>
//               </div>
//             </div>

//             <button
//               onClick={handleSubmit}
//               className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
//             >
//               Place Order
//             </button>
//           </div>
//         </div>

//         <div className="lg:col-span-1">
//           <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
//             <h2 className="text-xl font-bold mb-4">Order Summary</h2>
//             <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
//               {cart.map((item) => (
//                 <div key={item.id} className="flex justify-between text-sm">
//                   <span>
//                     {item.name} x{item.quantity}
//                   </span>
//                   <span className="font-semibold">
//                     ${(item.price * item.quantity).toFixed(2)}
//                   </span>
//                 </div>
//               ))}
//             </div>
//             <div className="border-t pt-4">
//               <div className="flex justify-between text-lg font-bold">
//                 <span>Total</span>
//                 <span className="text-indigo-600">${total.toFixed(2)}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ============================================
// // components/Header.tsx
// // ============================================
// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { ShoppingCart, Menu, X } from 'lucide-react';
// import { useCart } from '@/context/CartContext';

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
//   const { itemCount } = useCart();
//   const pathname = usePathname();

//   const isActive = (path: string): boolean => pathname === path;

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center">
//             <Link href="/" className="text-2xl font-bold text-indigo-600">
//               ShopHub
//             </Link>
//           </div>

//           <nav className="hidden md:flex space-x-8">
//             <Link
//               href="/"
//               className={`${
//                 isActive('/') ? 'text-indigo-600' : 'text-gray-700'
//               } hover:text-indigo-600`}
//             >
//               Home
//             </Link>
//             <Link
//               href="/products"
//               className={`${
//                 isActive('/products') ? 'text-indigo-600' : 'text-gray-700'
//               } hover:text-indigo-600`}
//             >
//               Products
//             </Link>
//           </nav>

//           <div className="flex items-center space-x-4">
//             <Link
//               href="/cart"
//               className="relative p-2 text-gray-700 hover:text-indigo-600"
//             >
//               <ShoppingCart className="w-6 h-6" />
//               {itemCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {itemCount}
//                 </span>
//               )}
//             </Link>
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="md:hidden p-2"
//             >
//               {mobileMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {mobileMenuOpen && (
//         <div className="md:hidden border-t">
//           <div className="px-4 py-3 space-y-3">
//             <Link
//               href="/"
//               onClick={() => setMobileMenuOpen(false)}
//               className="block w-full text-left text-gray-700"
//             >
//               Home
//             </Link>
//             <Link
//               href="/products"
//               onClick={() => setMobileMenuOpen(false)}
//               className="block w-full text-left text-gray-700"
//             >
//               Products
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// // ============================================
// // components/ProductCard.tsx
// // ============================================
// 'use client';

// import Link from 'next/link';
// import { Star } from 'lucide-react';
// import { useCart } from '@/context/CartContext';
// import type { Product } from '@/types';

// interface ProductCardProps {
//   product: Product;
// }

// export default function ProductCard({ product }: ProductCardProps) {
//   const { addToCart } = useCart();

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
//       <div className="h-48 bg-gray-100 flex items-center justify-center text-6xl">
//         {product.image}
//       </div>
//       <div className="p-4">
//         <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
//         <div className="flex items-center mb-2">
//           <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//           <span className="ml-1 text-sm text-gray-600">
//             {product.rating} ({product.reviews})
//           </span>
//         </div>
//         <p className="text-2xl font-bold text-indigo-600 mb-4">
//           ${product.price}
//         </p>
//         <div className="flex gap-2">
//           <Link
//             href={`/products/${product.id}`}
//             className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition text-center"
//           >
//             View Details
//           </Link>
//           <button
//             onClick={() => addToCart(product)}
//             className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ============================================
// // context/CartContext.tsx
// // ============================================
// 'use client';

// import {
//   createContext,
//   useContext,
//   useState,
//   ReactNode,
//   useCallback,
// } from 'react';
// import type { Product, CartItem } from '@/types';

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (product: Product, quantity?: number) => void;
//   updateQuantity: (id: number, quantity: number) => void;
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;
//   total: number;
//   itemCount: number;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const addToCart = useCallback((product: Product, quantity: number = 1) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         return prev.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       }
//       return [...prev, { ...product, quantity }];
//     });
//   }, []);

//   const updateQuantity = useCallback((id: number, quantity: number) => {
//     if (quantity <= 0) {
//       setCart((prev) => prev.filter((item) => item.id !== id));
//       return;
//     }
//     setCart((prev) =>
//       prev.map((item) => (item.id === id ? { ...item, quantity } : item))
//     );
//   }, []);

//   const removeFromCart = useCallback((id: number) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   }, []);

//   const clearCart = useCallback(() => {
//     setCart([]);
//   }, []);

//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         updateQuantity,
//         removeFromCart,
//         clearCart,
//         total,
//         itemCount,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// }

// // ============================================
// // lib/data.ts
// // ============================================
// import type { Product } from '@/types';

// export const products: Product[] = [
//   {
//     id: 1,
//     name: 'Wireless Headphones',
//     price: 79.99,
//     category: 'Electronics',
//     image: '🎧',
//     rating: 4.5,
//     reviews: 128,
//     description:
//       'Premium wireless headphones with noise cancellation and 30-hour battery life.',
//   },
//   {
//     id: 2,
//     name: 'Smart Watch',
//     price: 199.99,
//     category: 'Electronics',
//     image: '⌚',
//     rating: 4.7,
//     reviews: 89,
//     description:
//       'Feature-packed smartwatch with fitness tracking and heart rate monitoring.',
//   },
//   {
//     id: 3,
//     name: 'Running Shoes',
//     price: 89.99,
//     category: 'Fashion',
//     image: '👟',
//     rating: 4.3,
//     reviews: 234,
//     description:
//       'Comfortable running shoes with advanced cushioning technology.',
//   },
//   {
//     id: 4,
//     name: 'Backpack',
//     price: 49.99,
//     category: 'Fashion',
//     image: '🎒',
//     rating: 4.6,
//     reviews: 156,
//     description:
//       'Durable backpack with multiple compartments and laptop sleeve.',
//   },
//   {
//     id: 5,
//     name: 'Coffee Maker',
//     price: 129.99,
//     category: 'Home',
//     image: '☕',
//     rating: 4.4,
//     reviews: 201,
//     description:
//       'Programmable coffee maker with thermal carafe and auto-brew feature.',
//   },
//   {
//     id: 6,
//     name: 'Yoga Mat',
//     price: 29.99,
//     category: 'Sports',
//     image: '🧘',
//     rating: 4.8,
//     reviews: 312,
//     description:
//       'Non-slip yoga mat with extra cushioning for comfortable practice.',
//   },
// ];

// // ============================================
// // app/globals.css
// // ============================================
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// // ============================================
// // tailwind.config.ts
// // ============================================
// import type { Config } from 'tailwindcss';

// const config: Config = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
// export default config;

// // ============================================
// // tsconfig.json
// // ============================================
// {
//   "compilerOptions": {
//     "target": "ES2017",
//     "lib": ["dom", "dom.iterable", "esnext"],
//     "allowJs": true,
//     "skipLibCheck": true,
//     "strict": true,
//     "noEmit": true,
//     "esModuleInterop": true,
//     "module": "esnext",
//     "moduleResolution": "bundler",
//     "resolveJsonModule": true,
//     "isolatedModules": true,
//     "jsx": "preserve",
//     "incremental": true,
//     "plugins": [
//       {
//         "name": "next"
//       }
//     ],
//     "paths": {
//       "@/*": ["./*"]
//     }
//   },
//   "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
//   "exclude": ["node_modules"]
// }

// // ============================================
// // package.json
// // ============================================
// {
//   "name": "nextjs-ecommerce",
//   "version": "0.1.0",
//   "private": true,
//   "scripts": {
//     "dev": "next dev",
//     "build": "next build",
//     "start": "next start",
//     "lint": "next lint"
//   },
//   "dependencies": {
//     "react": "^18",
//     "react-dom": "^18",
//     "next": "14.2.0",
//     "lucide-react": "^0.263.1"
//   },
//   "devDependencies": {
//     "typescript": "^5",
//     "@types/node": "^20",
//     "@types/react": "^18",
//     "@types/react-dom": "^18",
//     "tailwindcss": "^3.4.1",
//     "postcss": "^8",
//     "autoprefixer": "^10.0.1",
//     "eslint": "^8",
//     "eslint-config-next": "14.2.0"
//   }
// }

// // ============================================
// // README.md
// // ============================================
// # Next.js eCommerce Store with TypeScript

// A fully functional eCommerce website built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

// ## Features

// - ✅ TypeScript for type safety
// - ✅ Next.js 14 App Router
// - ✅ Tailwind CSS for styling
// - ✅ React Context API for cart management
// - ✅ Modular component architecture
// - ✅ Responsive design
// - ✅ Product filtering by category
// - ✅ Shopping cart with quantity management
// - ✅ Checkout flow

// ## Project Structure

// ```
// ├── app/
// │   ├── layout.tsx              # Root layout with metadata
// │   ├── page.tsx                # Home page
// │   ├── products/
// │   │   ├── page.tsx            # Products listing page
// │   │   └── [id]/
// │   │       └── page.tsx        # Product detail page
// │   ├── cart/
// │   │   └── page.tsx            # Shopping cart page
// │   └── checkout/
// │       └── page.tsx            # Checkout page
// ├── components/
// │   ├── Header.tsx              # Navigation header
// │   └── ProductCard.tsx         # Product card component
// ├── context/
// │   └── CartContext.tsx         # Cart state management
// ├── lib/
// │   └── data.ts                 # Dummy product data
// ├── types.ts                    # TypeScript type definitions
// ├── tailwind.config.ts          # Tailwind configuration
// └── tsconfig.json               # TypeScript configuration

// ## Getting Started

// 1. Install dependencies:
// ```bash
// npm install
// ```

// 2. Run the development server:
// ```bash
// npm run dev
// ```

// 3. Open [http://localhost:3000](http://localhost:3000) in your browser.

// ## Key Technologies

// - **Next.js 14**: React framework with App Router
// - **TypeScript**: Static type checking
// - **Tailwind CSS**: Utility-first CSS framework
// - **Lucide React**: Icon library
// - **React Context**: State management for cart

// ## Pages

// - **/** - Home page with featured products
// - **/products** - All products with category filtering
// - **/products/[id]** - Individual product details
// - **/cart** - Shopping cart
// - **/checkout** - Checkout form

// ## Type Safety

// All components, hooks, and data are fully typed with TypeScript interfaces:
// - `Product`: Product data structure
// - `CartItem`: Cart item with quantity
// - `FormData`: Checkout form data

// ## Cart Management

// The cart is managed using React Context API with the following features:
// - Add products to cart
// - Update quantities
// - Remove items
// - Calculate totals
// - Persist across page navigation (in-memory during session)

// ## Customization

// - Edit `lib/data.ts` to modify product data
// - Update `types.ts` to add new type definitions
// - Modify components in `components/` folder
// - Adjust styling with Tailwind classes

// ## Notes

// - This is a demo application with dummy data
// - No real payment processing
// - Cart data is stored in memory (resets on page refresh)
// - For production, consider adding:
//   - Database integration
//   - Authentication
//   - Real payment gateway
//   - Server-side cart persistence
//   - SEO optimization