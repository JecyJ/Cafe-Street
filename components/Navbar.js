'use client'

import Image from "next/image";
import cafe from '@/images/logo.svg';
import { Dancing_Script } from "next/font/google";
import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineClose} from "react-icons/ai";
import {CgMenuHotdog} from "react-icons/cg";
import { useState } from "react";
import { motion } from "framer";

const dancingscript = Dancing_Script({
    weights: ["700"],
    subsets: ['latin'],
  })


const Navbar = () => {
  const [nav, setNav] = useState()

  const handleClick = () => {
    return setNav(!nav)
  }

  return (
    <section className="fixed z-50 w-full h-auto my-5 ">
        <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1100px] mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-1">
                <Image src={cafe} alt="cafe" priority className="" />
                <h1 className={`text-3xl ${dancingscript.className}`}><span className="text-[#FF902A]">Cafe</span> Street</h1>
            </div>
            <div className="hidden sm:flex justify-between items-center w-[300px]">
                <h2>About Us</h2>
                <h2>Our Product</h2>
                <h2>Delivery</h2>
            </div>            
            <div className="flex items-center space-x-4">
                <form>
                    <div className="hidden sm:flex items-center">
                        <AiOutlineSearch className="absolute z-3 text-gray-500 ml-1" size={25} />
                        <input
                        className="w-full h-9 pl-8 bg-dark/60 rounded-xl text-gray-500"
                        type="text"
                        // value="Search"
                        // onChange={(e) => setSearch(e.target.value)}
                        placeholder= "Menu"
                        />
                    </div>
                </form>
                <AiOutlineShoppingCart size={25} />
            </div>
            <div className="sm:hidden">
              {nav ? (
                <div className="fixed top-0 right-0 h-screen w-1/2 bg-[#2F2105] text-white z-50">
                <div className="flex mt-5 space-x-32 px-5">
                  <AiOutlineShoppingCart size={25} />
                  <AiOutlineClose onClick={handleClick} size={25} />
                </div>
                  <div className="flex flex-col w-full h-full space-y-6 mt-10 text-3xl pl-3">
                    <h2>About Us</h2>
                    <h2>Our Product</h2>
                    <h2>Delivery</h2>
                  </div>
                </div>
              ) : (
                <div onClick={handleClick}>
                <CgMenuHotdog size={25} />
              </div>
              )}
            </div>
            
        </div>
    </section>
  )
}

export default Navbar;

// <div onClick={handleClick}>
//               <CgMenuHotdog size={25} />
//             </div>
//             {nav && (
//               <div className="bg-gray-300">
//                 <AiOutlineClose size={25} />
//                 <div className="flex flex-col justify-between items-center w-[300px]">
//                   <h2>About Us</h2>
//                   <h2>Our Product</h2>
//                   <h2>Delivery</h2>
//                 </div>
//               </div>
//             )}