'use client'

import Image from 'next/image';
import cafe from "@/images/cafe.png";
import { Dancing_Script } from 'next/font/google';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
import { CgMenuHotdog } from 'react-icons/cg';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dancingscript = Dancing_Script({
  weights: ['700'],
  subsets: ['latin'],
});

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <section className="fixed z-50 w-full h-auto py-3">
      <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1100px] mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <Image src={cafe} alt="cafe" priority className="animate-bounce" />
          <h1 className={`text-3xl md:text-4xl ${dancingscript.className}`}>
            <span className="text-[#FF902A]">Cafe</span> Street
          </h1>
        </div>
        <div className="hidden md:flex justify-between items-center w-[400px]">
          <h2 className="text-lg">About Us</h2>
          <h2 className="text-lg">Our Product</h2>
          <h2 className="text-lg">Delivery</h2>
        </div>
        <div className="flex items-center space-x-4">
          <form>
            <div className="hidden sm:flex items-center">
              <AiOutlineSearch className="absolute z-3 text-gray-500 ml-1" size={25} />
              <input
                className="w-full h-9 pl-8 bg-gray-200 rounded-xl text-gray-500"
                type="text"
                placeholder="Menu"
              />
            </div>
          </form>
          <AiOutlineShoppingCart size={25} />
        </div>
        <div className="sm:hidden">
          <AnimatePresence mode='wait'>
            {nav ? (
              <motion.div
                key="menu"
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, x: '100%', transition: { duration: 1.5 } }}
                className="fixed top-0 right-0 h-screen w-1/2 bg-[#2F2105] text-white z-50"
              >
                <div className="flex mt-4 space-x-28 px-5">
                  <AiOutlineShoppingCart size={25} />
                  <AiOutlineClose onClick={handleClick} size={25} />
                </div>
                <div className="flex flex-col w-full h-full space-y-6 mt-10 text-3xl pl-5">
                  <motion.h2
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
                    exit={{x: '100%', transition: { duration: 0.5 } }}
                  >About Us</motion.h2>
                  <motion.h2
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 1.1 } }}
                    exit={{x: '100%', transition: { duration: 0.8 } }}
                  >Our Product</motion.h2>
                  <motion.h2
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 1.3 } }}
                    exit={{ x: '100%', transition: { duration: 1 } }}
                  >Delivery</motion.h2>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.3 } }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                onClick={handleClick}
              >
                <CgMenuHotdog size={25} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Navbar;