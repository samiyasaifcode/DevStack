import React from 'react';
import logo from './assets/logo-text.png'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 w-full border-b border-gray-100'>
      <nav className='flex justify-between mx-auto items-center px-12 py-4'>
        <img src={logo} alt="DevstackLogo" className=''/>
        <ul className='flex gap-6'>
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className=' flex gap-4'>
          <button>Sign In</button>
        <button className='bg-pink-600 px-6 py-4 rounded-4xl text-white'>Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;