import React from 'react'
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic1.jpg"
import pic3 from "../assets/pic1.jpg"
import pic4 from "../assets/pic1.jpg"
import shoe4 from "../assets/shoe4.jpg"
const Newarival = () => {
  return (
    <div className='text-center mt-12 cursor-default'>
      <div className='cursor-pointer'>
      <img src={shoe4}alt="" className='w-full h-[700px] top-3 object-none' />
      <h1 className='font-bold mt-16 text-7xl max-md:text-5xl'>RETRO RUNNER</h1>
      <p className="font-medium  text-lg mt-4 break-words">Rooted in running, remastered for style. This collectionof iconic retro runners is back with more colors, finishes, and edge to elevate your fit.</p>
      </div>

    <button className="bg-black text-white font-bold px-4 py-1 rounded-full mt-4 hover:bg-gray-700 ">Shop</button>

    <div className='flex max-sm:flex-col mt-16 justify-center'>
      <div className='relative cursor-pointer'>
      <img src={pic1} alt="" />
      <div className='absolute left-10 bottom-10'>
        <p className='font-bold text-lg text-white'>Bring The Presure</p>
        <h2 className='font-bold text-2xl text-white'>LeBorn XXII 'TheLimeLight'</h2>
        <button className="bg-white hover:bg-gray-200  text-black font-bold px-4 py-1 rounded-full mt-4">Shop</button> 
      
      </div>
      </div>

      <div className='relative cursor-pointer'>
      <img src={pic2} alt="" />
      <div className='absolute left-10 bottom-10'>
        <p className='font-bold text-lg text-white'>Bring The Presure</p>
        <h2 className='font-bold text-2xl text-white'>LeBorn XXII 'TheLimeLight'</h2>
        <button className="bg-white hover:bg-gray-200 text-black font-bold px-4 py-1 rounded-full mt-4">Shop</button> 
      
      </div>
      </div>
    </div>

    <div className='flex max-sm:flex-col justify-center'>
      <div className='relative cursor-pointer'>
      <img src={pic3} alt="" />
      <div className='absolute left-10 bottom-10'>
        <p className='font-bold text-lg text-white'>Bring The Presure</p>
        <h2 className='font-bold text-2xl text-white'>LeBorn XXII 'TheLimeLight'</h2>
        <button className="bg-white hover:bg-gray-200 text-black font-bold px-4 py-1 rounded-full mt-4">Shop</button> 
      
      </div>
      </div>

      <div className='relative cursor-pointer'>
      <img src={pic4} alt="" />
      <div className='absolute left-10 bottom-10'>
        <p className='font-bold text-lg text-white'>Bring The Presure</p>
        <h2 className='font-bold text-2xl text-white'>LeBorn XXII 'TheLimeLight'</h2>
        <button className="bg-white hover:bg-gray-200 text-black font-bold px-4 py-1 rounded-full mt-4">Shop</button> 
      
      </div>
      </div>
    </div>

    <div className='text-center mt-16 cursor-pointer'>
    <h1 className='font-bold text-7xl max-md:text-5xl'>RUN THROUGH WINTER</h1>
      <p className=" font-medium text-lg mt-4 break-words">Essentials engineerd to keep runner dry, warm and focused on their New Year's goals.</p>
    </div>

    <button className="bg-black text-white font-bold px-4 py-1 rounded-full mt-4 hover:bg-gray-700 ">Shop</button>
    </div>

  
  )
}

export default Newarival