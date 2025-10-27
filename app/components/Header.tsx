'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { itemCount } = useCart();
  const pathname = usePathname();

  const isActive = (path: string): boolean => pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className='text-pink-500 text-2xl font-bold'>T-Bella</h1>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`${
                isActive('/') ? 'text-indigo-600' : 'text-gray-700'
              } hover:text-indigo-600`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`${
                isActive('/products') ? 'text-indigo-600' : 'text-gray-700'
              } hover:text-indigo-600`}
            >
              Products
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-indigo-600"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left text-gray-700"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left text-gray-700"
            >
              Products
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}







// 'use client'
// import React from 'react'
// import { useState } from 'react';
// import { CiMenuBurger } from "react-icons/ci";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { IoBagOutline } from "react-icons/io5";
// import { IoIosSearch } from "react-icons/io";
// import { MdClose } from "react-icons/md";
// import Link from 'next/link';

// const Navbar = () => {

//   const [isClick, setIsClick] = useState(false)



//   return (
//     <div className='sticky top-0 z-10 w-full bg-white'>
//       <nav className='flex justify-between items-center lg:p-7 p-5 lg:px-32'>

        
//         {/*  */}

//             <div>
//                 <h1 className='text-pink-500 text-2xl font-bold'>T-Bella</h1>
//             </div>
//             {/*  */}

//             <div>
//               <ul className='hidden lg:flex gap-10'>
//                 <Link href="/">
//                   <li className='cursor-pointer hover:text-pink-600'>Home</li>
//                 </Link>
//                 <li className='cursor-pointer hover:text-pink-600'>About</li>
//                 <Link href="/products">
//                   <li className='cursor-pointer hover:text-pink-600'>Shop</li>
//                 </Link>
//                 <li className='cursor-pointer hover:text-pink-600'>Latest products</li>
//               </ul>
//             </div>
//             {/*  */}

//             <div className='flex items-center gap-2'>

//             <div className='hidden lg:flex'>
//               <input type="text" placeholder='Enter keyword to search' className='bg-gray-300 p-2 px-7 rounded-3xl outline-none'/>
//               <IoIosSearch className='relative right-6 top-3'/>
//             </div>

//               <div className='flex gap-3 text-pink-700 text-3xl'>
//                 <div className="relative flex items-center">
//                 <IoIosHeartEmpty className="text-3xl cursor-pointer hover:text-red-500 transition-colors" />
//                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1 py-0.5 shadow-lg">
//                   1
//                 </span>
//                 </div>

//                       <div className="relative flex items-center">
//                 <IoBagOutline className="text-3xl cursor-pointer hover:text-red-500 transition-colors" />
//                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1 py-0.5 shadow-lg">
//                   1
//                 </span>
//                 </div>


              
//             </div>
          

          
//             </div>
//       </nav>
//       <hr className='text-gray-400'/>
//       {/*  */}

//       <div className='flex lg:hidden px-5 gap-3 items-center'>
//         <div onClick={() => setIsClick(!isClick)} className='lg:hidden flex text-2xl'>
//           {isClick ? <MdClose /> : <CiMenuBurger />}
//         </div>
//         <div className='flex items-center'>
//           <div className='bg-gray-400 h-14 w-[2px]'></div>
//           <input type="text" placeholder='Search' className='py-2 px-1 w-[280px] md:w-[680px] outline-none' />
//         </div>
//         <IoIosSearch className='text-2xl' />
//       </div>

//       {/*  */}

//       <div className={isClick ? 'bg-pink-100 py-7 text-center' : 'hidden'}>
//         <ul className={isClick ? 'lg:hidden flex flex-col gap-5 ' : 'hidden'}>
//           <Link href="/" onClick={() => setIsClick(false)}>
//         <li className='cursor-pointer hover:text-black text-pink-600'>Home</li>
//           </Link>
//           <li className='cursor-pointer hover:text-pink-600' onClick={() => setIsClick(false)}>About</li>
//           <Link href="/products" onClick={() => setIsClick(false)}>
//         <li className='cursor-pointer hover:text-pink-600'>Shop</li>
//           </Link>
//           <li className='cursor-pointer hover:text-pink-600' onClick={() => setIsClick(false)}>Latest products</li>
//         </ul>

//         <div className={isClick ? 'pt-10' : 'hidden'}>
//           <p className='text-2xl font-semibold'>Follow us on our social media @T_Bella </p>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Navbar