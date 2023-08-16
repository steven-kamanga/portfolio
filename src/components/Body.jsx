import React from 'react'
import ClientHome from './ClientHome'
import Hero from './Hero'
import Projects from './Projects'
import Languages from './Languages'
import Somework from './Somework'
import Footer from './Footer'
import Stats from "@/components/Stats";

const Body = () => {
  return (
    <>
    <ClientHome />
    <Hero />
    <Stats />
    <Projects />
    <Languages />
    <Somework />
    </>
  )
}

export default Body