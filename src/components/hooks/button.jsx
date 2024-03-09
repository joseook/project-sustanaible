import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Button = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      className={`fixed bottom-4 right-10 bg-secondary bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </motion.button>
  );
};

export default Button;
