"use client";
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

function Header() {
  return (
    <header className='p-5 sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
         initial={{
            x:-500,
            opacity:0,
            scale:0.5
         }}
         animate={{
            x:0,
            opacity:1,
            scale:1
         }}
         transition={{
            duration:1.5
         }}
        className='flex flex-row items-center'>
            <SocialIcon 
            url="https://www.linkedin.com/in/seungho-kim-688520197/" 
            fgColor = "gray"
            bgColor = "transparent"
            />
            {/* Social Icons */}
        </motion.div>
        <motion.div 
        initial={{
            x:500,
            opacity:0,
            scale:0.5
         }}
         animate={{
            x:0,
            opacity:1,
            scale:1
         }}
         transition={{
            duration:1.5
         }}
        className='flex flex-row items-center text-gray-300 '>
            <SocialIcon 
            className ="cursor-pointer"
            network ="email"
            fgColor = "gray"
            bgColor = "transparent"
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Contact Me</p>
        </motion.div>
    </header>
  )
}

export default Header