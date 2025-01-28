import React from 'react';
import { useState } from 'react';
const Footer = () => {
  const [isTextOpen, setIsTextOpen] = useState(false);
  return (
    <footer className='cursor-default'>
      <div className='flex justify-center gap-28  max-md:gap-20 max-sm:gap-16 mt-12 mx-6 max-sm:hidden'>
      <div className='text-start ' >
        <h1 className=' text-2xl  '>Features</h1>
        
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Air Force 1</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Jordan 1</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Metcon</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Air Max 270</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Air Max 97</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Air Max 90</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Blazer</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Pegasus</p>
      </div>
      
      <div className='text-start ' >
        <h1 className=' text-2xl '>Shoes</h1>
        
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>All Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Jordan Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Running Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Basketball</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Tenis Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Training Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Custom Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Sale Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Soccer Cleats</p>

      </div>

      <div className='text-start ' >
        <h1 className=' text-2xl '>Clothing</h1>
        
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>All Clothings</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Tops & T-Shirts</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Shorts</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Hoodies & Pullovers</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Joggers & Sweatpants</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Spots Bras</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Pants & Tights</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Socks</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Yoga</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>NikeLab</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Plus Size</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Big & Tall</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Sale Clothing</p>

      </div>

      <div className='text-start ' >
        <h1 className=' text-2xl '>Kids</h1>
        
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Infant & Toddler</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Kids Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Kids BasKetball Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Kids Running Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Kids Jordan Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Kids Clothings</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Kids Backpacks</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Kids Socks</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Kids Sale</p>

      </div>
      </div>

      
      <div className='ml-6 mt-12 sm:hidden'>

      <div className='mb-6'>
        <h1 className=' text-2xl  cursor-pointer ' onClick={()=>setIsTextOpen(!isTextOpen)}>Features</h1>
          <div className={`ml-6 hidden max-sm:block ${isTextOpen ? "opacity-100 bg-red-200":"opacity-0"} `}>

          <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Air Force 1</p>
            <p className='font-medium text-base  text-gray-500 mt-2 mb-2  hover:text-black cursor-pointer '>Jordan 1</p>
            <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Metcon</p>
            <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Air Max 270</p>
            <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Air Max 97</p>
            <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Air Max 90</p>
            <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Blazer</p>
            <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Pegasus</p>
          </div>
      
      </div>


      <div className='mb-6'>
        <h1 className=' text-2xl  cursor-pointer'>Shoes</h1>

          <div className='ml-6  hidden max-sm:block'>
          <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>All Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Jordan Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Running Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Basketball</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Tenis Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Training Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Custom Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Sale Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Soccer Cleats</p>
          </div>
      
      </div>

      <div className='mb-6'>
       <h1 className=' text-2xl  cursor-pointer'>Clothing</h1>
        <div className='ml-6   hidden max-sm:block'>

        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>All Clothings</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Tops & T-Shirts</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Shorts</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Hoodies & Pullovers</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Joggers & Sweatpants</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Spots Bras</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Pants & Tights</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Socks</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Yoga</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>NikeLab</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Plus Size</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Big & Tall</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Sale Clothing</p>
        </div>
      </div>


      <div className='mb-6'>
        <h1 className=' text-2xl  cursor-pointer'>Kids</h1>
          <div className='ml-6  hidden max-sm:block'>
          <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Infant & Toddler</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Kids Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Kids BasKetball Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Kids Running Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Kids Jordan Shoes</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Kids Clothings</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Kids Backpacks</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Kids Socks</p>
        <p className='font-medium text-base  text-gray-500 mt-2 mb-2 hover:text-black cursor-pointer '>Kids Sale</p>
          </div>
      </div>

      </div>
      
      

    </footer>
  )
}

export default Footer