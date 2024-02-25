import React from 'react'
import { 
    Navbar,
    Proyectos,
    Tecnologias,
    Footer,
    Perfil,
    Divider
 } from '../../components/index'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Perfil/>
    <Divider/>
    <Proyectos/>

    <Footer/>
    </div>
  )
}

export default Home