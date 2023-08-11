import {useState} from 'react';
import { BsMenuButtonWideFill, BsMenuButtonWide } from "react-icons/bs";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <menu className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
    <h1 className='magic w-full text-3xl font-bold'> 
    <span className='magic-text'>
    carlossinhache 
    </span>    
    </h1>
    <ul className='hidden md:flex'>
      <li className='p-4'>Home</li>
      <li className='p-4'>About</li>
      <li className='p-4'>Contact</li>
    </ul>

    <div onClick={handleMenu} className='block md:hidden'>
      {showMenu ? <BsMenuButtonWide size={25}/> : <BsMenuButtonWideFill size={25}/> }
    </div>

    <ul className={showMenu ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00ff2b] m-4'>carlossinhache</h1>
          <li className='p-4 border-b border-gray-800'>Home</li>
          <li className='p-4 border-b border-gray-800'>Resources</li>
          <li className='p-4 border-b border-gray-800'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </menu>
  )
}

export default Navbar