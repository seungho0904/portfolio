import React from 'react';
import { motion } from 'framer-motion'; 

// Define the Project type
type Project = {
  title: string;
  summary: string;
  url: string;
};
type ProjectsProps = {
  projects: Project[];
};
const projectData: Project[]  = [
  {
    title: 'Vertical Landing Civilization Aircraft',
    summary: 'In this project, advanced embedded flight systems were implemented, incorporating features like transformation and wireless control using Arduino technology. Extensive firmware testing was conducted on a brushless DC motor to optimize its performance. The project also contributed to the development of aircraft landing methods, enhancing speed and space utilization. This aircraft demonstrated the ability to operate each motor, transform its swivel nozzle formation, and execute vertical landings.',
    url: '',
  },
  {
    title: 'AI Project',
    summary: 'This project involved analyzing various datasets, including flight, cereal, diabetes, and fertility rate data, to provide users with valuable information. It utilized SQL, data visualization, and machine learning to develop features like finding cost-effective flights and comparing fertility rates. The project also demonstrated predictive analysis by using the SGDRegressor algorithm and visualized fertility rate trends over time through linear regression.',
    url: '',
  },
  {
    title: 'Audio Processing using Matlab',
    summary: 'Designed and implemented an audio processing system using Matlab, enhancing audio quality through signal enhancement and compression techniques. The system also extracted key audio features, including frequency, amplitude, and duration, using the Fourier transform and various signal processing methods.',
    url: '',
  },
];
 

function Projects({ projects }: ProjectsProps) {
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
        {projectData.map((project, i) => (
          <div
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
            key={i}
          >
            {/* <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={project.url}
              alt={project.title}
            /> */}
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-3xl font-semibold text-center'>
                <span className='underline decoration-yellow-200'>
                  Case Study {i + 1} of {projectData.length}:
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
