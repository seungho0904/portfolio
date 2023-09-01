"use client";
import Image from 'next/image';
import Head from "next/head";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Link from '@/node_modules/next/link';
import { HomeIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className='bg-slate-800 h-screen text-white z-0 overflow-scroll snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden
    scrollbar scrollbar-track-gray-600 scrollbar-thumb-yellow-500 scrollbar-thin'>
      

      {/* Header */}
      <Header/>
      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />

      </section>
      {/* About */}
      <section id ='about' className='snap-center'>
        <About />
      </section>
      {/* Experience */}
      {/* Skills */}
      <section id ='skills' className='snap-start'>
        <Skills />
      </section>
      {/* Projects */}
      <section id ='projects' className='snap-center'>
        <Projects />
      </section>
      {/* Contact Me */}
      <section id ='contact' className='snap-start'>
        <Contact />
      </section>
      {/* home button */}
      <Link href='#hero'>
       <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <HomeIcon className='h-10 w-10 hover:animate-bounce text-gray-500 hover:text-white'/>
        </div>
        </footer>
      </Link>
    </div>
  )
}
