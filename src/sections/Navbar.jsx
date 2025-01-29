import React, { useState } from 'react'
import logo from "../assets/nike.png"
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='relative'>

      <div className=' flex justify-between items-center  font-bold px-8 cursor-default bg-white'>
      <div className='cursor-pointer '><img src={logo} alt="" className='w-16'/></div>
      <ul className='max-md:hidden flex gap-8'>
        <a href="" className='cursor-pointer hover:underline'><li>New</li></a>
        <a href="" className='cursor:pointer hover:underline'><li>Men</li></a>
        <a href="" className='cursor:pointer hover:underline'><li>Women</li></a>
        <a href="" className='cursor:pointer hover:underline'><li>Kid</li></a>
        <a href="" className='cursor:pointer hover:underline'><li>Jordan</li></a>
        <a href="" className='cursor:pointer hover:underline'><li>Sale</li></a>
      </ul>

      <div className='flex gap-2 text-2xl  '>
        <i className='bx bx-search cursor-pointer hover:bg-gray-200 hover:rounded-full  p-1 '></i>
        <i className='bx bx-user cursor-pointer hover:bg-gray-200 hover:rounded-full p-1'></i>
        <i className='bx bx-shopping-bag cursor-pointer hover:bg-gray-200 hover:rounded-full p-1'></i>
        <i className='bx bx-menu cursor-pointer hover:bg-gray-200 hover:rounded-full p-1 hidden max-md:flex' onClick={()=>setShowMenu(!showMenu)} ></i>
      </div>
      </div>
      
        
      <div className=''>
      <i className={`bx bx-x  md:hidden cursor-pointer  hover:rounded-full text-4xl  bg-white hover:bg-gray-200  absolute right-7 top-3.5 "  ${showMenu ? "opacity-100": "opacity-0"}`} onClick={()=>setShowMenu(!showMenu)} title='main'></i>

<div className= {`  bg-white md:hidden absolute list-none  px-8   w-[350px] h-[1050px] right-0  top-14  ${showMenu ? "opacity-100": "opacity-0" } ` } title='main'>

<ul className='flex flex-col gap-5 text-2xl font-semibold mt-10 '>

<div className='flex justify-between cursor-pointer  hover:text-gray-500 '>
  <div>
    <a href="">New</a>
    </div>
  <div>
    <i className='bx bx-chevron-right items-center text-md'></i>
  </div>
</div>

<div className='flex justify-between cursor-pointer  hover:text-gray-500 '>
  <div>
    <a href="">Men</a>
    </div>
  <div>
    <i className='bx bx-chevron-right items-center text-md'></i>
  </div>
</div>

<div className='flex justify-between cursor-pointer  hover:text-gray-500 '>
  <div>
    <a href="">Women</a>
    </div>
  <div>
    <i className='bx bx-chevron-right items-center text-md'></i>
  </div>
</div>

<div className='flex justify-between cursor-pointer  hover:text-gray-500 '>
  <div>
    <a href="">Kids</a>
    </div>
  <div>
    <i className='bx bx-chevron-right items-center text-md'></i>
  </div>
</div>

<div className='flex justify-between cursor-pointer  hover:text-gray-500 '>
  <div>
    <a href="">Jordan</a>
    </div>
  <div>
    <i className='bx bx-chevron-right items-center text-md'></i>
  </div>
</div>

<div className='flex justify-between cursor-pointer  hover:text-gray-500 '>
  <div>
    <a href="">Sale</a>
    </div>
  <div>
    <i className='bx bx-chevron-right items-center text-md'></i>
  </div>
</div>
</ul>

<p className='mt-20 text-xl text-gray-600  font-medium cursor-text'>Become a Nike Member for the best products, inSpiration and stories in Sport.<span className='text-black cursor-pointer'>Learn more</span></p>

<div className='mt-6'>
<button className="bg-black text-white font-bold px-4 py-2 rounded-full mt-4 hover:bg-gray-700 mr-4">Join Us</button>
<button className="bg-white hover:bg-gray-200 text-black font-bold px-4 py-2 rounded-full mt-4  border">Sign in</button> 
</div>

<div className='flex  item-center mt-8 text-md text-black  font-medium cursor-pointer '>
<i className='bx bx-question-mark items-center text-lg'></i><p className='pl-4'>Help</p>

</div >
<div className='flex  item-center mt-4 text-md text-black  font-medium cursor-pointer '>
<i className='bx bx-shopping-bag items-center text-lg'></i><p className='pl-4'>Bag</p>

</div >
<div className='flex  item-center mt-4 text-md text-black  font-medium cursor-pointer'>
<i className='bx bx-store-alt items-center text-lg'></i><p className='pl-4'>Orders</p>

</div >
<div className='flex  item-center mt-4 text-md text-black  font-medium cursor-pointer'>
<i className='bx bx-store cursor-pointer  items-center text-lg'></i><p className='pl-4'>Find a Store</p>

</div >

</div>
      </div>
      
      

        
         
    </div>
  )
}

export default Navbar