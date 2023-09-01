"use client";
import React from 'react'
import { motion } from "framer-motion";
import Skill from './Skill';

type Skill = {
  url: string;
  progress: number;
};

const skills: Skill[] = [
  {
    url: "https://img.icons8.com/?size=512&id=121464&format=png",
    progress: 50,
  },
  // Add more skill objects as needed
];

function Skills() { // Remove the Skill parameter
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
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-400 text-small'>Hover over a skill for currency proficiency</h3>
        <div className='grid grid-cols-4 gap-5'>
          {skills.map((skill) => (
            <Skill 
              url={skill.url}
              progress={skill.progress}
              key={skill.url} // Don't forget to add a unique key
            />
          ))}
        </div>
    </motion.div>
  )
}

export default Skills;
