'use client'
import React from 'react'
import Content from './Content'
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <header className="flex flex-col items-center h-screen lg:flex-row justify-evenly">
      <div className="text-gray-200 font-mono md:text-[460px] text-[300px] font-extrabold lg:text-[650px] lg:pl-10">
      <motion.span
          className="text-black bg-yellow-600"
          whileHover={{
            scale: [1, 1.2, 1],
            rotateY: [0, 180, 0],
            transition: { duration: 0.5 }
          }}
        >
          S
        </motion.span>K</div>
      <Content />
    </header>
  )
}

export default Hero