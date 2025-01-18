import React from 'react'
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic1.jpg"
import pic3 from "../assets/pic1.jpg"
import pic4 from "../assets/pic1.jpg"
const Newarival = () => {
  return (
    <div className='text-center mt-12 '>
      <h1 className='font-bold text-7xl max-md:text-5xl'>RETRO RUNNER</h1>
      <p className=" font-bold text-lg mt-4 break-words">Rooted in running, remastered for style. This collectionof iconic retro runners is back with more colors, finishes, and edge to elevate your fit.</p>

    <button className="bg-black text-white font-bold px-4 py-1 rounded-full mt-4 hover:bg-gray-700 ">Shop</button>

    <div className='flex max-sm:flex-col mt-16 justify-center'>
      <div className='relative'>
      <img src={pic1} alt="" />
      <div className='absolute left-10 bottom-10'>
        <p className='font-bold text-lg text-white'>Bring The Presure</p>
        <h2 className='font-bold text-2xl text-white'>LeBorn XXII 'TheLimeLight'</h2>
        <button className="bg-white hover:bg-gray-200  text-black font-bold px-4 py-1 rounded-full mt-4">Shop</button> 
      
      </div>
      </div>

      <div className='relative'>
      <img src={pic2} alt="" />
      <div className='absolute left-10 bottom-10'>
        <p className='font-bold text-lg text-white'>Bring The Presure</p>
        <h2 className='font-bold text-2xl text-white'>LeBorn XXII 'TheLimeLight'</h2>
        <button className="bg-white hover:bg-gray-200 text-black font-bold px-4 py-1 rounded-full mt-4">Shop</button> 
      
      </div>
      </div>
    </div>

    <div className='flex max-sm:flex-col justify-center'>
      <div className='relative'>
      <img src={pic3} alt="" />
      <div className='absolute left-10 bottom-10'>
        <p className='font-bold text-lg text-white'>Bring The Presure</p>
        <h2 className='font-bold text-2xl text-white'>LeBorn XXII 'TheLimeLight'</h2>
        <button className="bg-white hover:bg-gray-200 text-black font-bold px-4 py-1 rounded-full mt-4">Shop</button> 
      
      </div>
      </div>

      <div className='relative'>
      <img src={pic4} alt="" />
      <div className='absolute left-10 bottom-10'>
        <p className='font-bold text-lg text-white'>Bring The Presure</p>
        <h2 className='font-bold text-2xl text-white'>LeBorn XXII 'TheLimeLight'</h2>
        <button className="bg-white hover:bg-gray-200 text-black font-bold px-4 py-1 rounded-full mt-4">Shop</button> 
      
      </div>
      </div>
    </div>

    <div className='text-center mt-16'>
    <h1 className='font-bold text-7xl max-md:text-5xl'>RUN THROUGH WINTER</h1>
      <p className=" font-bold text-lg mt-4 break-words">Essentials engineerd to keep runner dry, warm and focused on their New Year's goals.</p>

    <button className="bg-black text-white font-bold px-4 py-1 rounded-full mt-4 hover:bg-gray-700 ">Shop</button>

    </div>
    </div>

  
  )
}

export default Newarival