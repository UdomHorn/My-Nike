import React, { useState } from 'react'
import logo from "../assets/nike.png"
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='flex justify-between items-center  font-bold px-8 cursor-default bg-white'>
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
      
        
      <ul className= {`absolute top-0 h-full w-full left-56 text-start pl-8 md:hidden   text-2xl font-semibold bg-white list-none flex flex-col gap-5 ${showMenu ? "opacity-100": "opacity-0"}`}>

      <i className="bx bx-x cursor-pointer  hover:rounded-full text-4xl text-center p-5 "onClick={()=>setShowMenu(!showMenu)} title='main'></i>

      <a href="" className='cursor-pointer hover:text-gray-500 '  title='main'><li>New</li></a>
        <a href="" className='cursor:pointer hover:text-gray-500'  title='main'><li>Men</li></a>
        <a href="" className='cursor:pointer hover:text-gray-500'  title='main'><li>Women</li></a>
        <a href="" className='cursor:pointer hover:text-gray-500'  title='main'><li>Kid</li></a>
        <a href="" className='cursor:pointer hover:text-gray-500'  title='main'><li>Jordan</li></a>
        <a href="" className='cursor:pointer hover:text-gray-500'  title='main'><li>Sale</li></a>
      </ul>
      

        
         
    </div>
  )
}

export default Navbar