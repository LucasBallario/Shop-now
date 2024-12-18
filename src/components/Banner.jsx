import React from 'react';

export default function Banner() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="relative bg-[#f2e3c6]/30 rounded-2xl shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#92a68a]/10 to-transparent" />
        
        <div className="relative py-16 px-8 flex flex-col items-center justify-center space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#92a68a] font-bold tracking-tight">
              Grab up to 50% OFF
            </h1>
            <p className="text-xl md:text-2xl text-[#92a68a]/80 font-light">
              in selected products
            </p>
          </div>

          <button className="mt-8 px-8 py-3 bg-[#92a68a] text-white rounded-lg font-medium 
            transform transition-all duration-200 hover:scale-105 hover:shadow-lg 
            active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#92a68a]/50">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
