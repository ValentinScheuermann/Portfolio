import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import logomio from '../../assets/logomio.png'
import logomio2 from '../../assets/logomio2.png'



const Navbar = () => {
  return (
<div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Inicio</a></li>
      <li><a>Contacto</a></li>
      <li><a>Curriculum Vitae</a></li>

      </ul>
    </div>
    <img href='/' className='logodev' src={logomio}/>
    <a href='/' className="btn btn-ghost text-xl">Portfolio</a>
  </div>
  <div className="navbar-start hidden lg:flex">
  <ul className="menu menu-horizontal px-0">
    <li><Link to="/">Inicio</Link></li>
    <li><Link to="/ContactMe">Contacto</Link></li> 
    <li><Link to="https://drive.google.com/file/d/1NTbY_1BLLZz8GAv7jiNs3qo1VqXawtd2/view?usp=sharing" target="_blank" >Curriculum</Link></li>

  </ul>
</div>

</div>
  )
}

export default Navbar