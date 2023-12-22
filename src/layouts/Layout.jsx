import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { scroll } from 'framer-motion/dom';

const Layout = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setIsHeaderVisible(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
   
      {isHeaderVisible && <Header />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
