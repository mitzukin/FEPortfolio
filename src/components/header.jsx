import React from 'react';
import Navbar from './navbar';
import Theme from './theme';
import Logo from '/Logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex justify-between items-center px-2 lg:px-20 py-5 font-secondary bg-background-light dark:bg-background-dark'>
      <img src={Logo} alt="" />
      <Navbar /> 
      <div className='flex items-center gap-2 text-light-p dark:text-dark-p'>
     <Theme/> 
     <Link to='/'>Hire me!</Link>
     </div>
     
    </header>
  );
};

export default Header;
