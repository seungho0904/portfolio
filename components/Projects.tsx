import React from 'react';
import { motion } from 'framer-motion';

// Define the Project type
type Project = {
  title: string;
  summary: string;
  url: string;
};
const projectData = [
  {
    title: 'Clone Project 1',
    summary: 'This is the first project summary.',
    url: 'https://img.icons8.com/?size=512&id=lVitPDXqQKP8&format=png',
  },
  {
    title: 'Clone Project 2',
    summary: 'This is the second project summary.',
    url: 'https://img.icons8.com/?size=512&id=lVitPDXqQKP8&format=png',
  },
];

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  console.log('Projects prop:', projects);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full 
    justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>
        Projects
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden 
        snap-x snap-mandatory z-20'>
        {projects.map((project, i) => (
          <div
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
            key={i}
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={project.url}
              alt={project.title}
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-3xl font-semibold text-center'>
                <span className='underline decoration-yellow-200'>
                  Case Study {i + 1} of {projects.length}:
                </span>{' '}
                {project.title}
              </h4>
              <p className='text-lg text-center md:text-left'>{project.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-slate-700 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  );
}

export default Projects;
