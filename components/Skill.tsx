// Skill.tsx
import React from 'react';
import { motion } from "framer-motion";

type SkillProps = {
  directionLeft?: boolean;
  url: string;
  progress: number;
};

function Skill({ directionLeft, url, progress }: SkillProps) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={url}
            className="rounded-full border border-gray-400 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-3000 ease-in-out"
            alt="Skill Image"
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition 
        duration-300 ease-in-out group-hover:bg-white h-24 w-24 
        md:w-28 md:h-28 xl:w-32 xl:h-32 z-0 rounded-full'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold opacity-100 text-black'>{progress}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill;
