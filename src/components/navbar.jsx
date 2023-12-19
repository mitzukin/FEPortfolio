// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=''>
      <ul className='flex gap-20 text-light-p dark:text-dark-p text-sm'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
