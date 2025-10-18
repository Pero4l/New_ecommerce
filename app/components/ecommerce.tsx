// // types.ts


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


// // ============================================
// // app/products/page.tsx (Products Listing)
// // ============================================

// // ============================================
// // app/products/[id]/page.tsx (Product Details)
// // ============================================


// // ============================================
// // app/cart/page.tsx (Shopping Cart)
// // ============================================


// // ============================================
// // app/checkout/page.tsx (Checkout)
// // ============================================

// // ============================================
// // components/Header.tsx
// // ============================================


// // ============================================
// // components/ProductCard.tsx
// // ============================================





// // ============================================
// // context/CartContext.tsx
// // ============================================


// // ============================================
// // lib/data.ts
// // ============================================




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