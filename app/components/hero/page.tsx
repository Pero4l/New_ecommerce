// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, ShoppingBag, Sparkles } from 'lucide-react';

// const slides = [
//   {
//     id: 1,
//     title: "Summer Collection 2025",
//     subtitle: "Feel the Warmth",
//     description: "Discover our curated selection of premium summer essentials",
//     cta: "Shop Now",
//     bg: "from-amber-400 via-orange-500 to-pink-500",
//     accent: "from-yellow-200 to-orange-300"
//   },
//   {
//     id: 2,
//     title: "Luxury Reimagined",
//     subtitle: "Timeless Elegance",
//     description: "Exclusive designs that define sophistication",
//     cta: "Explore Collection",
//     bg: "from-purple-600 via-pink-600 to-red-600",
//     accent: "from-purple-300 to-pink-300"
//   },
//   {
//     id: 3,
//     title: "Tech Meets Style",
//     subtitle: "Future Forward",
//     description: "Innovation wrapped in contemporary aesthetics",
//     cta: "Discover More",
//     bg: "from-cyan-500 via-blue-600 to-indigo-700",
//     accent: "from-cyan-300 to-blue-400"
//   }
// ];

// export default function EcommerceHero() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const handleNext = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setDirection(1);
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setTimeout(() => setIsAnimating(false), 600);
//   };

//   const handlePrev = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setDirection(-1);
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setTimeout(() => setIsAnimating(false), 600);
//   };

//   const goToSlide = (index) => {
//     if (isAnimating || index === currentSlide) return;
//     setIsAnimating(true);
//     setDirection(index > currentSlide ? 1 : -1);
//     setCurrentSlide(index);
//     setTimeout(() => setIsAnimating(false), 600);
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIsAnimating(true);
//       setDirection(1);
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//       setTimeout(() => setIsAnimating(false), 600);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const slide = slides[currentSlide];

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black">
//       {/* Animated Background Gradient */}
//       <div 
//         className={`absolute inset-0 bg-gradient-to-br ${slide.bg} transition-all duration-1000 ease-in-out`}
//         style={{
//           transform: `scale(${isAnimating ? 1.1 : 1})`,
//         }}
//       />
      
//       {/* Animated Overlay Pattern */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%),
//                            radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15) 0%, transparent 50%)`
//         }} />
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(6)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full bg-white opacity-10 blur-xl"
//             style={{
//               width: `${Math.random() * 200 + 100}px`,
//               height: `${Math.random() * 200 + 100}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
//               animationDelay: `${Math.random() * 5}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Content Container */}
//       <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-12 flex items-center">
//         <div className="w-full grid md:grid-cols-2 gap-12 items-center">
//           {/* Text Content */}
//           <div 
//             className="space-y-8 text-white"
//             style={{
//               animation: isAnimating ? `slideContent 0.6s ease-out` : 'none',
//               opacity: isAnimating ? 0 : 1,
//             }}
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
//               <Sparkles className="w-4 h-4" />
//               <span className="text-sm font-medium">{slide.subtitle}</span>
//             </div>

//             <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
//               {slide.title.split(' ').map((word, i) => (
//                 <span
//                   key={i}
//                   className="inline-block"
//                   style={{
//                     animation: isAnimating ? 'none' : `fadeInUp 0.6s ease-out ${i * 0.1}s both`
//                   }}
//                 >
//                   {word}{' '}
//                 </span>
//               ))}
//             </h1>

//             <p className="text-xl sm:text-2xl text-white/90 max-w-md">
//               {slide.description}
//             </p>

//             <div className="flex flex-wrap gap-4 pt-4">
//               <button className="group px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2 shadow-2xl hover:shadow-white/50 hover:scale-105">
//                 <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
//                 {slide.cta}
//               </button>
//               <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* Visual Element */}
//           <div className="relative h-96 md:h-[500px] hidden md:block">
//             <div 
//               className={`absolute inset-0 bg-gradient-to-br ${slide.accent} rounded-[3rem] transform rotate-6 blur-2xl opacity-50`}
//               style={{
//                 animation: isAnimating ? 'none' : 'pulse 3s ease-in-out infinite'
//               }}
//             />
//             <div 
//               className="relative h-full bg-white/10 backdrop-blur-xl rounded-[3rem] border border-white/20 shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500"
//               style={{
//                 animation: isAnimating ? `slideImage${direction > 0 ? 'Left' : 'Right'} 0.6s ease-out` : 'none'
//               }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <ShoppingBag className="w-32 h-32 text-white/30" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={handlePrev}
//         className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 z-10"
//         disabled={isAnimating}
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 z-10"
//         disabled={isAnimating}
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`transition-all duration-300 rounded-full ${
//               index === currentSlide 
//                 ? 'w-12 h-3 bg-white' 
//                 : 'w-3 h-3 bg-white/40 hover:bg-white/60'
//             }`}
//             disabled={isAnimating}
//           />
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           25% { transform: translateY(-20px) translateX(10px); }
//           50% { transform: translateY(-10px) translateX(-10px); }
//           75% { transform: translateY(-30px) translateX(5px); }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideContent {
//           from {
//             opacity: 0;
//             transform: translateX(-40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideImageLeft {
//           from {
//             opacity: 0;
//             transform: translateX(60px) scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0) scale(1);
//           }
//         }

//         @keyframes slideImageRight {
//           from {
//             opacity: 0;
//             transform: translateX(-60px) scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0) scale(1);
//           }
//         }

//         @keyframes pulse {
//           0%, 100% { transform: rotate(6deg) scale(1); }
//           50% { transform: rotate(6deg) scale(1.05); }
//         }
//       `}</style>
//     </div>
//   );
// }

'use client'


import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://t4.ftcdn.net/jpg/03/07/39/99/240_F_307399900_3HatCfdEyov8dKue6KqLt196Iml7djMW.jpg",
    title: "New Arrivals",
    subtitle: "Discover the latest trends in fashion",
    cta: "Shop Now",
  },
  {
    id: 2,
    image:
      "https://t3.ftcdn.net/jpg/03/87/94/86/240_F_387948605_WXRMvwVWbB1V21quHWFwTTQEUDqz5n3S.jpg",
    title: "Unleash Your Beauty",
    subtitle: "Quality You Deserve. Style You Love. Prices You'll Enjoy",
    cta: "Explore Collection",
  },
  {
    id: 3,
    image:
      "https://t3.ftcdn.net/jpg/02/19/38/62/240_F_219386229_etfKSz0287dUNYvxA2g05Kcydah0eme8.jpg",
    title: "Book a Section",
    subtitle: "You Can Book a Section With Us",
    cta: "Call Us Now",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-xl">
              {slide.subtitle}
            </p>
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
              {slide.cta}
            </button>
          </div>
        </div>
      ))}

      {/* Slider controls */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
