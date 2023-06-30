import React from 'react'
import Content from './Content'

const Hero = () => {
  return (
    <header className="flex flex-col items-center h-screen lg:flex-row justify-evenly">
      <div className="text-gray-200 font-mono text-[300px] font-extrabold md:text-[650px] lg:pl-10">
        <span className="text-black bg-yellow-600 ">S</span>K</div>
      <Content />
    </header>
  )
}

export default Hero