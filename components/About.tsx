import React from 'react'
import { motion } from "framer-motion";

function About() {
  return (
    <div className='h-screen relative flex flex-col items-center md:text-left text-center 
    md:flex-row justify-evenly mx-auto'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>
            About
        </h3>

        {/* motion img */}
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a <span className='underline decoration-yellow-500'>little</span> background
            </h4>
            <p className='text-base'>blah blah</p>
        </div>
        </div>
  )
}

export default About