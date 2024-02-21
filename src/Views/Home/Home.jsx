import React from 'react'
import { 
    Navbar,
    Miembros,
    Tecnologias,
    Footer,
    Perfil
 } from '../../components/index'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Perfil/>
    <Miembros/>
    <Tecnologias/>
    <Footer/>
    </div>
  )
}

export default Home