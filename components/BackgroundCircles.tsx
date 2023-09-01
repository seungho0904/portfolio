"use client";
import React from 'react'
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <div className='relative flex flex-col justtify-center items-center'>
        <div className='absolute border border-gray-500 h-[200px] w-[200px] mt-22 rounded-full animate-ping delay-75'/>
        <div className='absolute border border-gray-500 h-[200px] w-[200px] mt-22 rounded-full animate-ping delay-100'/>
        <div className='absolute border border-gray-500 h-[200px] w-[200px] mt-22 rounded-full animate-ping'/>
        
        <div />
        <div />
        <div />
        <div />
    </div>
  )
}

export default BackgroundCircles