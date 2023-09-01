"use client";
import React from 'react'
import { motion } from "framer-motion";
import Skill from './Skill';

function Skills() {
  return (
    <motion.div 
    initial ={{ opacity:0 }}
    whileInView={{opacity:1}}
    transition = {{ duration: 1.5}}
    
    className='h-screen relative flex flex-col items-center md:text-left text-center xl:flex-row
     max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>
            Skills
        </h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-400 text-small'>Hover over a skill for currency profieciency</h3>
        <div className='grid grid-cols-4 gap-5'>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>
        
        </motion.div>
  )
}

export default Skills