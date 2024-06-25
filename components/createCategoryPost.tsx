"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function CreateCategoryPost() {
    const [productName , setProductName] = useState('')

    const router = useRouter();
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if(!productName) return;
      const response = await fetch('/api/create-category', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name:productName }),
      });
  
      if (response.ok) {
        router.push(`/notes/${productName}`);
      } else {
        alert('Failed creating product');
      }
    }; 
  

   
  return (
    <form onSubmit={handleSubmit}className="w-full sm:w-[580px]">
          <input value={productName} 
          className="w-[80%] h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10" 
          onChange={(e)=>setProductName(e.target.value)} 
          placeholder="Create a category for your posts..." 
          spellCheck={false}/> 
          <button className='h-16 rounded-lg border-gray px-5'>Submit</button>
          </form>
  )
}

