"use client";
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
                Here is a <span className='underline decoration-yellow-500'>quick</span> summary.
            </h4>
            <p className='text-base w-[500px]'>I'm a recent Computer Engineering graduate from the University of California, Irvine, actively seeking software engineering roles. My education gave me a strong foundation in computer science, especially data structures and algorithms. I'm passionate about coding, love to learn, and am eager to apply my skills to real projects. I'm open to career opportunities in software engineering and would be thrilled to discuss how I can contribute to your organization. Please reach out at your earliest convenience below.</p>
        </div>
        </div>
  )
}

export default About