import React from 'react'
import ClientHome from './ClientHome'
import Hero from './Hero'
import Projects from './Projects'
import Somework from './Somework'
import Stats from "@/components/Stats";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";

const Body = () => {
  return (
    <div className="text-gray-200">
      <ClientHome />
      <Hero />
      <Stats />
      <Projects />
      <Somework />
      <Form />
    </div>
  )
}

export default Body