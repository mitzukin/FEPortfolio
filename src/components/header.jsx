import React, { useState } from 'react';
import Navbar from './navbar';
import Theme from './theme';
import Logo from '/Logo.png';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='sticky top-0 z-10 flex items-center justify-between w-full px-3 py-5 transition-colors duration-500 ease-in-out md:flex lg:px-20 font-secondary bg-background-light dark:bg-background-dark'>
      <div className='flex items-center gap-2'>
        <img src={Logo} alt="" className='h-[30px]'/>
       
      </div>
      <div className="text-light-p dark:text-dark-p">
      <Navbar />
      </div>
      
      <div className='flex items-center gap-2 text-light-p dark:text-dark-p'>
        {/* Mobile Navbar with Hamburger Button */}
        <div className='flex items-center justify-center md:hidden'>
          <button
            onClick={toggleMobileMenu}
            className='text-light-p dark:text-dark-p focus:outline-none'
          >
            <HiOutlineMenuAlt3 size={20} />
          </button>
          {isMobileMenuOpen && (
            <ul className='absolute left-0 flex flex-col w-full h-screen gap-5 px-3 pt-5 bg-background-light top-16 dark:bg-background-dark'>
              <li className='py-5 border-b '>
                <Link to="/" onClick={toggleMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='py-5 border-b '>
                <Link to="/about" onClick={toggleMobileMenu}>
                  About
                </Link>
              </li>
              <li className='py-5 border-b '>
                <Link to="/work" onClick={toggleMobileMenu}>
                  Work
                </Link>
              </li>
              <li>
              <Link to='/'>Hire me!</Link>
              </li>
            </ul>
          )}
        </div>
        <div className='flex items-center justify-center gap-2 '>
        <Theme />
        <Link to='/' className='absolute hidden text-xs right-4 lg:flex'>Hire me!</Link>
        
        </div>
      </div>
    
              
             
    </header>
  );
};

export default Header;
