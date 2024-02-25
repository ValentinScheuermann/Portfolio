import React from 'react'
import { 
    Navbar,
    Proyectos,
    Tecnologias,
    Footer,
    Perfil,
    Divider,
    Propuesta
 } from '../../components/index'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Perfil/>
    <Divider/>
    <Proyectos/>
    <Divider/>
    <Propuesta/>
    <Divider/>
    <Footer/>
    </div>
  )
}

export default Home