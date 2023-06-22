import React from 'react'
import Content from './Content'

const Hero = () => {
  return (
    <header className="flex flex-row items-center h-screen justify-evenly">
      <div className="font-mono text-[200px] font-extrabold md:text-[650px] pl-20"><span className="text-black bg-yellow-600 ">S</span>K</div>
      <Content />
    </header>
  )
}

export default Hero