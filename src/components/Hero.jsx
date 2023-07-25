'use client'
import React, {useState, useEffect} from 'react'
import Content from './Content'
import { motion } from 'framer-motion';
import Image from 'next/image';
import useScrollPosition from './ScrollHook';
import Navbar from "@/components/Navbar";


const Hero = () => {
  const [scrollingDown, setscrollingDown] = useState(false);
  const [imageOpacity, setimageOpacity] = useState(1);

  useScrollPosition(({ prevPos, currPos }) => {
    const isScrollingDown = currPos.y < prevPos.y;
    setscrollingDown(isScrollingDown);
  
    if (isScrollingDown && imageOpacity > 0) {
      setimageOpacity((prevOpacity) => Math.max(prevOpacity - 0.10, 0));
    } else if (!isScrollingDown && imageOpacity < 1) {
      setimageOpacity((prevOpacity) => Math.min(prevOpacity + 0.10, 1));
    }
  })
  
  return (
    <header className="flex flex-col items-center min-h-screen lg:flex-row justify-evenly">

      <div className="text-gray-200 font-mono md:text-[460px] text-[300px] font-extrabold lg:text-[650px] lg:pl-10">
      <motion.span
          className="text-black bg-sky-500"
          whileHover={{
            scale: [1, 1.2, 1],
            rotateY: [0, 180, 0],
            transition: { duration: 0.5 }
          }}
        >
          S
        </motion.span>K</div>
      <Content />
      <motion.div
        className="absolute bottom-0 hidden pb-2 md:flex"
        style={{ opacity: imageOpacity, transition: 'opacity 0.3s ease' }}
      >
        <Image
          src="/arrow.svg"
          width={35}
          height={35}
          alt='Arrow down'
        />
      </motion.div>

    </header>
  )
}

export default Hero