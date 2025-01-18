import React from 'react'
import logo from "../assets/nike.png"
const Navbar = () => {
  return (
    <div className='flex justify-between items-center  font-bold px-8'>
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
        <i className='bx bx-menu cursor-pointer hover:bg-gray-200 hover:rounded-full p-1'></i>
      </div>
    </div>
  )
}

export default Navbar