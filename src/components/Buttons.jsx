import React, { useState } from 'react'
import { Smartphone,LaptopMinimal,Monitor,Headphones,Speaker,Tablet } from 'lucide-react'
import productsData from '../data'
export default function Buttons() {
    const [products, setProducts] = useState(productsData)

  const filterType = (product) => {
      setProducts(
        productsData.filter((item) => {
          return item.product === product;
        })
      )
  }


  return (
    <div>
            <div className='flex justify-center mt-5 gap-9'>
                <button onClick={() => setProducts(productsData)} className='text-4xl border rounded-xl p-4'>All</button>
                <button onClick={() => filterType('smartphone')} className='border rounded-xl p-4'><Smartphone size={40} /></button>
                <button onClick={() => filterType('notebook')} className='border rounded-xl p-4'><LaptopMinimal size={40} /></button>
                <button onClick={() => filterType('tv')} className='border rounded-xl p-4'><Monitor size={40} /></button>
                <button onClick={() => filterType('headphones')} className='border rounded-xl p-4'><Headphones size={40} /></button>
                <button onClick={() => filterType('speaker')} className='border rounded-xl p-4'><Speaker size={40} /></button>
                <button onClick={() => filterType('tablet')} className='border rounded-xl p-4'><Tablet size={40} /></button>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {products.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 p-4 flex flex-col'>
                        <div className='flex-1'>
                            <img src={item.image} alt={item.name} className='w-full object-cover rounded-md mb-4' />
                            <div className='space-y-2'>
                                <h3 className='font-semibold text-lg tracking-tight text-gray-900'>
                                    {item.name}
                                </h3>
                                <p className='text-sm text-gray-600 leading-relaxed'>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                        <div className='mt-4 pt-3 border-t border-gray-100'>
                            <span className='text-lg font-bold text-red-500'>
                                ${item.price}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    
  )
}
