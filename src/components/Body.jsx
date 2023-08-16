import React from 'react'
import ClientHome from './ClientHome'
import Hero from './Hero'
import Projects from './Projects'
import Somework from './Somework'
import Stats from "@/components/Stats";
import Languages from './Languages'

const Body = () => {
  return (
    <>
    <ClientHome />
    <Hero />
    <Stats />
    <Projects />
    <Somework />
    <Languages />
    </>
  )
}

export default Body