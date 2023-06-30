import React from 'react'
import Contact from './Contact'


const Content = () => { 
  return (
    <div className="ml-2 text-gray-200">
    <div className="border border-t-0 border-b-0 border-r-0 border-yellow-500 lg:ml-40 border-x-1">
      <div className="flex flex-col px-5 lg:pl-5 lg:pr-5 lg:justify-start lg:items-start">
        <h1 className="lg:items-start lg:justify-start text-[40px] font-bold lg:text-5xl">
          Hi, I&apos;m Steven Kamanga ✋🏾
        </h1>
        <p className="pt-2 text-[20px] font-medium lg:text-xl">
          I&apos;m a Computer Science Student and aspiring Software Engineer 
          <br/>with an expertise in digital craftsmanship of the highest order,
          <br/>Dive into the captivating universe of pixels, codes and pure mastery.
        </p>
        <Contact className="text-gray-200" />
      </div>
    </div>
    </div>
    
    
  )
}

export default Content