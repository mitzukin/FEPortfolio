import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({ children }) => {
 

  return (
    <div >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
