import React from 'react'
import { 
    Navbar,
    Proyectos,
    Tecnologias,
    Footer,
    Perfil
 } from '../../components/index'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Perfil/>
    <Proyectos/>
    <Tecnologias/>
    <Footer/>
    </div>
  )
}

export default Home