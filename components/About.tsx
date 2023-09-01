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
            <p className='text-base w-[500px]'>I am a recent graduate with a degree in Computer Engineering from the University of California, Irvine, actively pursuing opportunities in the field of software engineering.

During my academic journey, I acquired a robust knowledge base in computer science and engineering, with a focus on data structures and algorithms. My coursework has equipped me with the essential skills required for software development.

I am deeply passionate about coding and thrive on continuous learning and improvement in this dynamic field. I am excited to apply my knowledge and skills to real-world projects and contribute to innovative solutions.

I am currently open to exploring career opportunities in software engineering. Please feel free to reach out to me at your earliest convenience. I look forward to discussing how my qualifications align with your organization's needs. Thank you for considering my application.</p>
        </div>
        </div>
  )
}

export default About