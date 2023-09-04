import React from 'react';
import { motion } from "framer-motion";
import SkillComponent from './Skill'; // Renamed the component to SkillComponent

type Skill = {
  url: string;
  progress: number;
};

const skills: Skill[] = [
  {//cpp
    url: "https://img.icons8.com/?size=512&id=55193&format=png",
    progress: 75,
  },{// python
    url: "https://img.icons8.com/?size=512&id=121464&format=png",
    progress: 80,
  },{// vscode
    url: "https://img.icons8.com/?size=512&id=035lX6KoNhZf&format=png",
    progress: 80,
  },{// GitHub
    url: "https://img.icons8.com/?size=512&id=46565&format=png",
    progress: 80,
  },{// JavaScript
    url: "https://img.icons8.com/?size=512&id=1ZSHk8m9bk4p&format=png",
    progress: 50,
  },{// Html
    url: "https://img.icons8.com/?size=512&id=46605&format=png",
    progress: 70,
  },{//CSS
    url: "https://img.icons8.com/?size=512&id=107497&format=png",
    progress: 70,
  },{//tailwindcss
    url: "https://img.icons8.com/?size=512&id=CIAZz2CYc6Kc&format=png",
    progress: 80,
  },{//Next.js
    url: "https://img.icons8.com/?size=512&id=MWiBjkuHeMVq&format=png",
    progress: 50,
  },{//Linux
    url: "https://img.icons8.com/?size=512&id=104289&format=png",
    progress: 80,
  },{//MATLAB
    url: "https://img.icons8.com/?size=512&id=r5Y16PcDkoWI&format=png",
    progress: 80,
  },{//AWS
    url: "https://img.icons8.com/?size=512&id=wU62u24brJ44&format=png",
    progress: 60,
  },{//REACT
    url: "https://img.icons8.com/?size=512&id=lVitPDXqQKP8&format=png",
    progress: 50,
  },
  // Add more skill objects as needed
];

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex flex-col items-center md:text-left text-center xl:flex-row
      max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>
        Skills
      </h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-400 text-small'>Hover over a skill for current proficiency</h3>
      <div className='grid grid-cols-4 gap-3'>
        {skills?.slice(0, 8).map((skill, index) => (
          <SkillComponent
            key={index} // Use a unique key
            url={skill.url}
            progress={skill.progress}
          />
        ))}
        {skills?.slice(8,skills.length).map((skill, index) => (
          <SkillComponent
            key={index} // Use a unique key
            url={skill.url}
            progress={skill.progress}
            directionLeft
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills;
