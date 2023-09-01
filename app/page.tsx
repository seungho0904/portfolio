import Image from 'next/image';
import Head from "next/head";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';

export default function Home() {
  return (
    <div className='bg-slate-800 h-screen text-white z-0 overflow-scroll snap-y snap-mandatory'>
      

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
      {/* Projects */}
      {/* Contact Me */}
    </div>
  )
}
