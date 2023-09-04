import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

function Hero() {
  return ( 
        <div className='h-screen flex flex-col items-center space-y-8 justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image 
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src="https://media.licdn.com/dms/image/C5603AQGFo7X9mMpQIQ/profile-displayphoto-shrink_800_800/0/1610503878656?e=1698883200&v=beta&t=5gvgy461aWjOunPhU1GlNx2RRhJVgq6HVotgdxm8w4I" 
            alt="" 
            width={800} 
            height={800} />
            <div>


            </div>
            <h2 className='text-sm uppercase text-gray-400 pb-2 tracking-[10px]'>Software Engineer</h2>
            <h1 className='text-3xl lg:text-4xl font-semibold scroll-px-10'><span>
            <Typewriter 
            words={['Hi, My Name is Seungho.', 'New grad from UCI']}
            loop={true}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
            /></span></h1>
            <div>
                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#skills">
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButton">Projects</button>
                </Link>
            </div>
    </div> 
  )
}

export default Hero