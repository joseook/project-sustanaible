import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="container">
      <div className="items-center justify-between flex">
        <div className="max-w-[70px]">
          <img src="../logo02.svg" alt="Logo" className='rounded-full p-2' />
        </div>
        <nav className="xl:hidden lg:hidden">
          <button onClick={toggleMenu} className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
            {!isOpen ? (
              <svg className="h-6 w-6" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            ) : (
              <svg className="h-6 w-6" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            )}
          </button>
        </nav>
        <motion.nav className={`lg:flex flex-col lg:flex-row items-center justify-end lg:bg-gray-900 ${isOpen ? "absolute right-5 top-20 bg-[#000] max-w-max font-bold text-white text-xl" : " hidden"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="lg:flex lg:items-center lg:gap-4 lg:font-bold lg:text-xl lg:ml-auto lg:pt-0 h-full md:shadow-2xl p-4 rounded-sm">
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="#hero" className="hover:bg-primary p-2 rounded-lg hover:text-[#fff]">Home</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="#about" className="hover:bg-primary p-2 rounded-lg hover:text-[#fff]">Sobre</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="#advantage" className="hover:bg-primary p-2 rounded-lg hover:text-[#fff]">Vantagens</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to="/contact" className="hover:bg-primary p-2 rounded-lg hover:text-[#fff]">Contact</Link>
            </motion.li>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;
