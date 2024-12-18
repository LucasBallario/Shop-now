import React from 'react';
import { ShoppingCart, UserRound, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className='flex flex-wrap justify-center gap-6 p-6 items-center'>
      <div className='flex gap-4'>
        <ShoppingCart size={30} />
        <h1 className='text-3xl font-bold'>Shop Now</h1>
      </div>

      <nav className='flex gap-4 cursor-pointer'>
        <p className='hover:text-slate-300'>Categories</p>
        <p className='hover:text-slate-300'>Deals</p>
        <p className='hover:text-slate-300'>What's New</p>
        <p className='hover:text-slate-300'>Delivery</p>
      </nav>

      <div className='border flex rounded-lg hidden sm:flex'>
        <input
          className='p-2'
          type='text'
          placeholder='Search...'
        />
        <Search size={20} className='m-2' />
      </div>

      <div className='flex gap-4 cursor-pointer'>
        <UserRound />
        <p className='hover:text-slate-300'>Account</p>
        <ShoppingCart />
        <p className='hover:text-slate-300'>Cart</p>
      </div>
    </header>
  );
}