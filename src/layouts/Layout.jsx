import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({ children }) => {
 

  return (
    <div className='bg-background-light dark:bg-background-dark'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
